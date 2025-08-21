'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './slide.css';
import Image from 'next/image';

export default function Slide() {
  const slideData = [
    {
      id: 1,
      img: '/state-icon.png',
      number: '20',
      text: 'DISTRICTS',
      down: false,
    },
    {
      id: 2,
      img: '/touched-circle-01.png',
      number: '179,175',
      text: 'GIRLS SUPPORTED',
      down: true,
    },
    {
      id: 3,
      img: '/touched-circle-03.png',
      number: '1600',
      text: 'SKILLS ASSOCIATES (WOMEN TUTORS FROM THE COMMUNITY)',
      down: false,
    },
    {
      id: 4,
      img: '/Primary-school.png',
      number: '1878',
      text: 'SCHOOLS',
      down: true,
    },
    { id: 5, img: '/state-icon.png', number: '7', text: 'STATES', down: false },
  ];

  return (
    <section className="bg-[#ffc511] py-12 pb-40">
      <div className='max-w-screen-xl mx-auto px-8'>
      <h2 className='font-bold text-center text-3xl md:text-4xl uppercase'>
        870,000+ girls supported since inception
      </h2>
      <p className='text-center text-[26px] md:text-3xl lg:text-4xl mt-16 mb-8'>
        Impact in the Year 2024-25
      </p>
      <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 200500, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            820: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
             1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          {slideData.map((item, idx) => (
            <SwiperSlide key={idx} className='min-h-52'>
              <div className={`flex flex-col items-center gap-6 text-lg ${item.down && 'mt-28'}`}>
                <Image
                  src={item.img}
                  alt='microsoft'
                  width={150}
                  height={150}
                />
                <div className='text-center font-semibold'>
                  <div>{item.number}</div>
                  <div>{item.text}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
