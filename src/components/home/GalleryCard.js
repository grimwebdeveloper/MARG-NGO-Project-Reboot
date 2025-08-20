import Image from 'next/image';
import Link from 'next/link';

export default function TakeALook() {
  const galleryItems = [
    {
      id: 1,
      title: 'View Photo Gallery',
      link: '#',
      img: '/tmm.jpg',
    },
    {
      id: 2,
      title: 'View Video Gallery',
      link: '#',
      img: '/tmm2.jpg',
    },
  ];

  return (
    <section
      className='section_wrapper py-12 bg-red-400'
      style={{ backgroundColor: '#e1e1e1' }}
    >
      <div className='wrap max-w-6xl mx-auto px-4'>
        <div className='mcb-wrap-inner'>
          <div className='column text-center mb-10'>
            <div className='column_attr'>
              <h2 className='md:text-[36px] text-[28px] font-bold uppercase'>
                <span>Take a Look</span>
              </h2>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {galleryItems.map((item) => (
              <div key={item.id} className='photo_box bg-white overflow-hidden'>
                <div className='image_frame m-2'>
                  <div className='image_wrapper relative group'>
                    <Link href={item.link}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={650}
                        height={30}
                        className='w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 hover:-translate-y-2'
                      />
                    </Link>
                  </div>
                </div>
                <div className='desc text-center py-6'>
                  <Link
                    href={item.link}
                    className='inline-block bg-orange-600 text-white font-bold text-[14px] px-6 py-3 hover:bg-orange-700 transition uppercase'
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
