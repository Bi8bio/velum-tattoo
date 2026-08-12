import Hero from '@/components/Hero';
import TheCraft from '@/components/TheCraft';
import FeaturedTattoos from '@/components/FeaturedTattoos';
import PaymentCTA from '@/components/PaymentCTA';
import StudioContact from '@/components/StudioContact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TheCraft />
      <FeaturedTattoos />
      <PaymentCTA />
      <StudioContact />
    </>
  );
}
