import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import FeatureSection from '@/components/sections/FeatureSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <FeatureSection />
      </main>
      <Footer />
    </>
  );
}
