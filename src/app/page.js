import SliderHero from '@/components/home/SliderHero';
import Slide from '@/components/slide/Slide';
import Sponsors from '@/components/sponsor/Sponsors';

function page() {
  return (
    <main>
      <SliderHero />
      <Slide/>
      <Sponsors/>
    </main>
  );
}

export default page;
