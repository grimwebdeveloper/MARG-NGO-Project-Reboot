import Image from 'next/image';
import Button from '../global/Button';

const GalleryCard = () => {
  const galleryCardData = [
    {
      img: '/photo-gallery.jpg',
      buttonContent: 'VIEW PHOTO GALLERY',
    },
    {
      img: '/video-gallery.jpg',
      buttonContent: 'VIEW VIDEO GALLERY',
    },
  ];
  return (
    <section className='bg-[#efeeea] pt-[60px] pb-2.5'>
      <div className='max-w-screen-xl mx-auto px-8'>
        <h2 className='font-bold text-center text-3xl md:text-4xl uppercase mb-8'>
          Take a look
        </h2>
        <div className='grid gap-6 md:grid-cols-2'>
          {galleryCardData.map((item, idx) => (
            <div key={idx} className='p-2 bg-white pb-6'>
              <Image src={item.img} alt='gallery' width={684} height={285} />
              <Button content={item.buttonContent} externalClass='mx-auto ' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCard;
