'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './slide.css';

export default function Slide() {
  const items = [
    {
      id: 1,
      img: './state-icon.png',
      number: '20',
      text: 'DISTRICTS',
      offset: '',
    },
    {
      id: 2,
      img: './touched-circle-01.png',
      number: '179,175',
      text: 'GIRLS SUPPORTED',
      offset: '',
    },
    {
      id: 3,
      img: './touched-circle-03.png',
      number: '1600',
      text: 'SKILLS ASSOCIATES (WOMEN TUTORS FROM THE COMMUNITY)',
      offset: '',
    },
    {
      id: 4,
      img: './Primary-school.png',
      number: '1878',
      text: 'SCHOOLS',
      offset: '',
    },
    { id: 5, img: './state-icon.png', number: '7', text: 'STATES', offset: '' },
  ];

  return (
    <section className="bg-[#ffc511] py-12">
      <h2 className='font-bold text-center text-3xl md:text-4xl uppercase'>
        870,000+ girls supported since inception
      </h2>
      <p className='text-center text-[26px] md:text-3xl lg:text-4xl mt-16 mb-8'>
        Impact in the Year 2024-25
      </p>
      <div className='max-w-[1280px] mx-auto px-4 py:[85px] md:py-[90px]'>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={`flex flex-col items-center relative ${item.offset}`}
              >
                <div className='w-[160px] h-[160px] flex items-center justify-center rounded-full bg-white shadow-md text-3xl mx-auto'>
                  <img className='p-3' src={item.img} alt='' />
                </div>
                <div className='relative mt-12 text-center'>
                  <span className='text-2xl font-serif block'>
                    {item.number}
                  </span>
                  <p className='text-1xl font-extrabold mt-1 max-w-[180px] mx-auto'>
                    {item.text}
                  </p>
                  <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 border-l-2 border-dashed border-black'></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
