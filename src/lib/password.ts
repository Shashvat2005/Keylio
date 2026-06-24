import { argon2id } from "hash-wasm";

export type Algorithm =
  | "sha256"
  | "sha512"
  | "pbkdf2"
  | "argon2id";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{}<>?";

function normalizeDomain(input: string): string {
  try {
    const url = new URL(
      input.startsWith("http")
        ? input
        : `https://${input}`
    );

    return url.hostname
      .replace(/^www\./, "")
      .toLowerCase();
  } catch {
    return input.trim().toLowerCase();
  }
}

async function shaHash(
  input: string,
  algorithm: "sha256" | "sha512"
): Promise<Uint8Array> {
  const encoder = new TextEncoder();

  const hashBuffer = await crypto.subtle.digest(
    algorithm === "sha512"
      ? "SHA-512"
      : "SHA-256",
    encoder.encode(input)
  );

  return new Uint8Array(hashBuffer);
}

async function pbkdf2Hash(
  password: string,
  salt: string
): Promise<Uint8Array> {
  const encoder = new TextEncoder();

  const keyMaterial =
    await crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveBits"]
    );

  const derivedBits =
    await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt: encoder.encode(salt),
        iterations: 100000,
        hash: "SHA-256",
      },
      keyMaterial,
      512
    );

  return new Uint8Array(derivedBits);
}

async function argon2Hash(
  password: string,
  salt: string
): Promise<Uint8Array> {
  try {
    const hashHex = await argon2id({
      password,
      salt,
      parallelism: 1,
      iterations: 3,
      memorySize: 65536,
      hashLength: 64,
      outputType: "hex",
    });

    const bytes = new Uint8Array(
      hashHex.length / 2
    );

    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(
        hashHex.substring(
          i * 2,
          i * 2 + 2
        ),
        16
      );
    }

    return bytes;
  } catch (err) {
    console.error(
      "Argon2id failed:",
      err
    );

    // deterministic fallback
    return shaHash(
      `${password}:${salt}`,
      "sha512"
    );
  }
}

function derivePassword(
  hash: Uint8Array,
  length: number,
  pools: string[]
): string {
  const pool = pools.join("");

  let password = "";

  // guarantee at least one char
  // from each selected pool

  for (
    let i = 0;
    i < pools.length;
    i++
  ) {
    const currentPool =
      pools[i];

    password += currentPool[
      hash[i % hash.length] %
        currentPool.length
    ];
  }

  // fill remaining

  for (
    let i = password.length;
    i < length;
    i++
  ) {
    const mixedByte =
      hash[i % hash.length] ^
      hash[
        (i * 7) %
          hash.length
      ];

    password += pool[
      mixedByte % pool.length
    ];
  }

  return password;
}

export interface GenerateOptions {
  includeUppercase?: boolean;
  includeLowercase?: boolean;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
}

export async function generatePassword(
  masterSecret: string,
  website: string,
  version: number,
  length: number = 16,
  algorithm: Algorithm = "sha256",
  options: GenerateOptions = {}
): Promise<string> {
  if (!masterSecret.trim()) {
    throw new Error(
      "Master secret is required"
    );
  }

  if (!website.trim()) {
    throw new Error(
      "Website is required"
    );
  }

  const domain =
    normalizeDomain(website);

  const {
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = true,
  } = options;

  const pools: string[] = [];

  if (includeUppercase)
    pools.push(UPPER);

  if (includeLowercase)
    pools.push(LOWER);

  if (includeNumbers)
    pools.push(NUMBERS);

  if (includeSymbols)
    pools.push(SYMBOLS);

  if (pools.length === 0) {
    pools.push(LOWER);
  }

  const minLength =
    pools.length;

  if (length < minLength) {
    length = minLength;
  }

  // IMPORTANT:
  // Length becomes part of derivation

  const derivationInput =
    `${masterSecret}:${domain}:${version}:${length}`;

  let hash: Uint8Array;

  switch (algorithm) {
    case "sha512":
      hash = await shaHash(
        derivationInput,
        "sha512"
      );
      break;

    case "pbkdf2":
      hash = await pbkdf2Hash(
        masterSecret,
        `${domain}:${version}:${length}`
      );
      break;

    case "argon2id":
      hash = await argon2Hash(
        masterSecret,
        `${domain}:${version}:${length}`
      );
      break;

    case "sha256":
    default:
      hash = await shaHash(
        derivationInput,
        "sha256"
      );
      break;
  }
  console.log(algorithm);

  return derivePassword(
    hash,
    length,
    pools
  );
}