import DonateAndGift from '@/components/home/DonateAndGift';
import TakeALook from '@/components/home/GalleryCard';
import Project from '@/components/home/Project';
import SliderHero from '@/components/home/SliderHero';
import Sponsor from '@/components/home/Sponsor';
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
      {/* <Sponsor /> */}
      <Sponsors/>
      <TakeALook />
    </main>
  );
}

export default page;
