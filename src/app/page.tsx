import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import FeaturesBento from '@/components/FeaturesBento';
import Endpoints from '@/components/Endpoints';
import Integration from '@/components/Integration';
import Pricing from '@/components/Pricing';
import Audience from '@/components/Audience';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <TopBanner />
      <Header />
      <Hero />
      <SocialProof />
      <FeaturesBento />
      <Endpoints />
      <Integration />
      <Pricing />
      <Audience />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
