'use client';

import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const SliderHero = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay, EffectFade]}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1500}
      loop={true}
    >
      <SwiperSlide>
        <a href='#'>
          <Image src='/Slider1.png' alt='' width={1920} height={600} />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href='#'>
          <Image src='/Slider2.png' alt='' width={1920} height={600} />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderHero;
