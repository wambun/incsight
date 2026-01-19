import {
  Hero,
  Features,
  ServicesGrid,
  IndustriesSection,
  Testimonials,
  CTASection,
} from '@/components/landing';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesGrid />
      <IndustriesSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
