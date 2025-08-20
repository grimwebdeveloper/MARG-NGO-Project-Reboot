import DonateAndGift from '@/components/home/DonateAndGift';
import Project from '@/components/home/Project';
import SliderHero from '@/components/home/SliderHero';
import SliderImpact from '@/components/home/SliderImpact';

function page() {
  return (
    <main>
      <SliderHero />
      <DonateAndGift />
      <Project />
      <SliderImpact />
    </main>
  );
}

export default page;
