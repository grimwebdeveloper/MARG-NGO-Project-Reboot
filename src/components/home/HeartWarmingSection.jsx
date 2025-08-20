import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa6';
import { TiDocumentText } from 'react-icons/ti';

const HeartWarmingSection = () => {
  const heartWarmingSectionData = [
    {
      img: '/stories.jpg',
      h3: 'Uniting for Change: How Four Women Are Transforming Lives Through Football',
      p: 'In the heart of Gujarat, four remarkable women from diverse backgrounds came together, united by a shared vision—to redefine their lives and the futures of the young girls',
      heartNumber: 50,
    },
    {
      img: '/stories.jpg',
      h3: 'Uniting for Change: How Four Women Are Transforming Lives Through Football',
      p: 'In the heart of Gujarat, four remarkable women from diverse backgrounds came together, united by a shared vision—to redefine their lives and the futures of the young girls',
      heartNumber: 50,
    },
    {
      img: '/stories.jpg',
      h3: 'Uniting for Change: How Four Women Are Transforming Lives Through Football',
      p: 'In the heart of Gujarat, four remarkable women from diverse backgrounds came together, united by a shared vision—to redefine their lives and the futures of the young girls',
      heartNumber: 50,
    },
  ];
  return (
    <section className='bg-[#ebeae5] pt-[60px] pb-10'>
      <div className='max-w-screen-xl mx-auto px-8'>
        <h2 className='font-bold text-center text-3xl md:text-4xl uppercase mb-8'>
          Heart-warming stories
        </h2>
        <div className='grid gap-6 md:grid-cols-3'>
          {heartWarmingSectionData.map((item, idx) => (
            <div key={idx} className='p-2 bg-white pb-6'>
              <div className='overflow-hidden'>
                <Image
                  src={item.img}
                  alt='gallery'
                  width={684}
                  height={285}
                  className='hover:scale-110 transition-transform duration-500'
                />
              </div>
              <div className='p-5 pb-0'>
                <h3 className='text-center font-semibold pb-2.5 md:text-left'>{item.h3}</h3>
                <p className='mb-4 text-zinc-700'>{item.p}</p>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-1'>
                    <FaRegHeart className='text-red-600' />
                    <span className='text-zinc-700 text-sm'>
                      {item.heartNumber}
                    </span>
                  </div>
                  <div className='flex items-center gap-1 border-l border-zinc-400 pl-4 py-1.5'>
                    <TiDocumentText className='text-zinc-600' />
                    <span className='text-zinc-700 text-sm'>Read more</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeartWarmingSection;

// import GenericCard from "./GenericCard";

// export default function HeartWarmingSection() {
//   return (
//    <section className="px-4 text-center bg-[#eeede9] pt-16 pb-6">
//       <div className="max-w-screen-xl mx-auto">
//         <h1 className="font-bold text-3xl lg:text-4xl mb-8 uppercase">Heart-warming stories</h1>
//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//          <GenericCard/>
//          <GenericCard/>
//          <GenericCard/>
//         </div>
//       </div>
//    </section>
//   );
// }
