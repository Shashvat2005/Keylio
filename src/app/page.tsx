import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PasswordGenerator from '@/components/PasswordGenerator';

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <PasswordGenerator/>
      <Footer/>
    </>
  );
}