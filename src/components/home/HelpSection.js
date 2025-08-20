import Image from 'next/image';
import AnchorButton from '../global/AnchorButton';

const HelpSection = () => {
  return (
    <section className="py-16 bg-[url('https://www.nanhikali.org/wp-content/uploads/2018/03/help-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat bg-[position-y:8px] min-h-[564px] flex justify-center items-center">
      <div className='max-w-screen-xl mx-auto px-8 flex flex-col gap-16 md:flex-row'>
        <div className='md:flex-1'>
          <h2 class='text-center text-3xl md:text-4xl uppercase mb-6 md:text-left'>
            How Can You <span class='font-semibold'>Help?</span>
          </h2>
          <article className='leading-5'>
            <p>
              <span className='font-semibold'>Project Nanhi Kali</span> is a
              participatory project wherein you can sponsor the education of an
              underprivileged girl child for a minimum period of one year. For
              just Rs. 6,000, you can provide her with the key to a brighter
              future. Your support goes beyond mere financial assistance. It is
              an investment in her potential, her dreams, and her empowerment.
              With your sponsorship, she gains access to essential 21st century
              skills, a physical education module and a chance for her to break
              free from the humdrum of doing household work.
            </p>
            <p className='mt-4 mb-12'>
              And it&apos;s not just about giving; it&apos;s about receiving
              too. As a sponsor, you&apos;ll receive an annual progress report,
              witnessing firsthand the impact of your generosity.
            </p>
          </article>
          <AnchorButton content='DONATE NOW' />
        </div>
        <Image
          src='/help.jpg'
          alt='help'
          width={551}
          height={368}
          className='w-full md:flex-1 md:self-start'
        />
      </div>
    </section>
  );
};

export default HelpSection;

// export default function HelpSection() {
//   return (
//     <section className="bg-cover bg-fixed bg-center bg-no-repeat"
//       style={{
//         backgroundImage:
//           "url('https://www.nanhikali.org/wp-content/uploads/2018/03/help-bg.jpg')",
//         backgroundPositionY: '8px',
//       }}
//     >
//       <div className="max-w-[1280px] mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
//         {/* Text Block */}
//         <div className="md:w-1/2 animate-fadeInLeft">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug font-serif">
//             How Can You <span className="text-primary">Help?</span>
//           </h2>
//           <p className="text-gray-800 mb-4 text-lg">
//             <strong>Project Nanhi Kali</strong> is a participatory project wherein you can sponsor the education of an underprivileged girl child for a minimum period of one year. For just ₹6,000, you can provide her with the key to a brighter future.
//           </p>
//           <p className="text-gray-800 mb-4 text-lg">
//             Your support goes beyond financial assistance—it&apos;s an investment in her potential, her dreams, and her empowerment. She gains access to 21st century skills, physical education, and a chance to break free from household work.
//           </p>
//           <p className="text-gray-800 mb-6 text-lg">
//             Sponsors receive an annual progress report, witnessing firsthand the impact of their generosity.
//           </p>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-orange-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition text-lg"
//           >
//             Donate Now
//           </a>
//         </div>

//         {/* Image Block */}
//         <div className="md:w-1/2 animate-fadeInRight">
//           <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl">
//             <img
//               src="https://www.nanhikali.org/wp-content/uploads/2024/05/how-can-help-nanhikali.jpg"
//               alt="Two school children supported by Nanhi Kali"
//               className="w-full h-auto object-cover"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
