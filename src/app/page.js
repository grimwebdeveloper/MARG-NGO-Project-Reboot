import DonateAndGift from '@/components/home/DonateAndGift';
import Project from '@/components/home/Project';
import SliderHero from '@/components/home/SliderHero';
import Slide from '@/components/slide/Slide';
import Sponsors from '@/components/sponsor/Sponsors';

function page() {
  return (
    <main>
      <SliderHero />
      <DonateAndGift />
      <Project />
      {/* <SliderImpact /> */}
      <Slide/>
      <Sponsor />
      <Sponsors/>
    </main>
  );
}

export default page;
