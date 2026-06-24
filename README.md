# Keylio

Generate secure, deterministic passwords from a single secret.

Keylio is an open-source password generation tool that creates strong, unique passwords for every website without storing any credentials, vaults, or user accounts.

Instead of saving passwords in a database, Keylio generates them on demand using a combination of:

* Master Secret
* Website Name
* Version Number
* Password Length
* Cryptographic Algorithm

The same inputs always generate the same password.

---

## Features

* Deterministic password generation
* Multiple cryptographic algorithms

  * SHA-256
  * SHA-512
  * PBKDF2
  * Argon2id
* Custom password length
* Configurable character sets
* Website normalization
* Fully client-side
* No accounts
* No tracking
* No password storage
* Open source

---

## Why Keylio?

Traditional password managers store passwords in encrypted vaults.

Keylio takes a different approach.

Passwords are generated whenever needed and are never stored.

Benefits include:

* No password database
* No cloud synchronization
* No vault backups
* No password exports
* No stored credentials

All password generation occurs locally in your browser.

---

## Security Model

Keylio does not:

* Store passwords
* Store master secrets
* Create user accounts
* Maintain databases
* Track user activity

Everything runs locally on your device.

---

## Supported Algorithms

| Algorithm | Description                       |
| --------- | --------------------------------- |
| SHA-256   | Fast deterministic generation     |
| SHA-512   | Larger digest size                |
| PBKDF2    | Key derivation function           |
| Argon2id  | Modern password hashing algorithm |

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/Shashvat2005/Keylio.git
cd Keylio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_NAME=Keylio
NEXT_PUBLIC_GITHUB_URL=https://github.com/Shashvat2005/Keylio
NEXT_PUBLIC_APP_DESCRIPTION=Generate secure passwords from a single secret.
NEXT_PUBLIC_AUTHOR=Your Name
NEXT_PUBLIC_APP_VERSION=1.0.0
```

---

## Technology Stack

* Next.js
* TypeScript
* Tailwind CSS
* Web Crypto API
* hash-wasm

---

## Roadmap

* Progressive Web App (PWA)
* Mobile Application
* Browser Extension
* Additional cryptographic algorithms
* Password strength analysis

---

## License

MIT License

---

## Disclaimer

Keylio is provided as-is.

Users are responsible for choosing strong master secrets and verifying generated passwords before using them for critical accounts.
