import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeatureSection from '@/components/sections/FeatureSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </>
  );
}
