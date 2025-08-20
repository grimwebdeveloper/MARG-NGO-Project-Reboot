'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './sponsor.css';

export default function Sponsors() {
  const sponsors = [
    { img: '/woop.png', title: 'Trent Ltd' },
    { img: '/trent-logo.png', title: 'SVF Investment' },
    { img: '/PNB-Damini.png', title: 'Hamilton Housewares' },
    { img: '/Milton_Logo.png', title: 'Hamilton Housewares' },
    { img: '/JLL.png', title: 'Hamilton Housewares' },
    { img: '/knight-frank-logo.png', title: 'Hamilton Housewares' },
    { img: '/1.png', title: 'Hamilton Housewares' },
    { img: '/18.png', title: 'Hamilton Housewares' },
    { img: '/3m.png', title: 'Hamilton Housewares' },
    { img: '/5.png', title: 'Hamilton Housewares' },
  ];

  return (
    <section className='bg-[#efeee8] py-12'>
      <h2 className='text-center text-4xl font-serif font-bold pt-4 mb-13'>
        SPONSORS <span className='font-serif'>& PARTNERS</span>
      </h2>

      <div className='max-w-[1280px] mx-auto px-4 '>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {sponsors.map((s, i) => (
            <SwiperSlide key={i}>
              <div className='text-center w-42 h-42 flex items-center justify-center bg-white rounded-full mx-auto'>
                <img
                  src={s.img}
                  alt={s.title}
                  className='mx-auto w-full h-full object-contain'
                />
              </div>
              <p className='mt-5 text-lg  text-center font-serif text-wrap'>
                {s.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
