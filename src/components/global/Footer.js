import Image from 'next/image';
import Link from 'next/link';
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaBars,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='bg-zinc-800 text-white'>
      <div className='max-w-screen-xl mx-auto px-8 py-9'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 text-lg lg:justify-items-end'>
          <div className='flex flex-col gap-2'>
            <Image src='/logo.png' alt='logo' width={65} height={65} />
            <p>
              Marg is dedicated to empowering communities through education,
              health, and sustainable development
            </p>
            <a href='tel:9905100804'>9905100804</a>
            <a href='mailto:sample@gmail.com'>sample@gmail.com</a>
            <div className='flex gap-4'>
              <a href='#'>
                <FaXTwitter className='text-lg w-[32px] h-[32px] p-1' />
              </a>
              <a href='#'>
                <FaFacebookF className='text-lg w-[32px] h-[32px] p-1' />
              </a>
              <a href='#'>
                <FaInstagram className='text-lg w-[32px] h-[32px] p-1' />
              </a>
              <a href='#'>
                <FaYoutube className='text-lg w-[32px] h-[32px] p-1' />
              </a>
              <a href='#'>
                <FaLinkedinIn className='text-lg w-[32px] h-[32px] p-1' />
              </a>
            </div>
          </div>

          <div>
            <h2 className='uppercase font-bold mb-4 sm:mb-8 lg:mb-10'>
              What We Do
            </h2>
            <ul>
              <li>
                <a href='#'>Education</a>
              </li>
              <li>
                <a href='#'>Health</a>
              </li>
              <li>
                <a href='#'>Women Empowerment</a>
              </li>
              <li>
                <a href='#'>Environment</a>
              </li>
              <li>
                <a href='#'>Education</a>
              </li>
              <li>
                <a href='#'>Health</a>
              </li>
              <li>
                <a href='#'>Women Empowerment</a>
              </li>
              <li>
                <a href='#'>Environment</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='uppercase font-bold mb-4 sm:mb-8 lg:mb-10'>
              Resources
            </h2>
            <ul>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Event</a>
              </li>
              <li>
                <a href='#'>Gallery</a>
              </li>
              <li>
                <a href='#'>Reports</a>
              </li>
              <li>
                <a href='#'>FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className='uppercase font-bold mb-4 sm:mb-8 lg:mb-10'>
              Socials
            </h2>
            <ul>
              <li>
                <a href='#'>Facebook</a>
              </li>
              <li>
                <a href='#'>Instagram</a>
              </li>
              <li>
                <a href='#'>Youtube</a>
              </li>
              <li>
                <a href='#'>LinkedIn</a>
              </li>
              <li>
                <a href='#'>Twitter</a>
              </li>
            </ul>
          </div>
        </div>
        <article className='flex flex-col gap-4 border-t border-b border-zinc-600 py-10'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-center'>
            MARG: NGO FOR GIRL CHILD EDUCATION IN INDIA
          </h2>
          <p className='md:pl-6 text-justify'>
            Project Nanhi Kali is an NGO working for education of
            underprivileged girls in India. Ever since its inception in 1996,
            Project Nanhi Kali has worked with the strong belief that educating
            the girl child in India would not only contribute to building our
            economy but would also bring about a reduction in social evils like
            dowry and child marriage. Jointly managed by the K. C. Mahindra
            Education Trust and Naandi Foundation at Project Nanhi Kali, we
            consider ourselves an organisation that works towards the betterment
            of the girl child to save her by giving her a fighting chance. Our
            girl child support ensures that our Nanhi Kalis receive academic,
            material, and social support.
          </p>
          <h3 className='mt-6 font-semibold'>SPONSOR GIRL CHILD EDUCATION</h3>
          <p className='md:pl-6 text-justify'>
            Successful girl child education has been continually accepted as an
            effective way to break the cycle of myths, social evils, poverty,
            and social norms. Since Project Nanhi Kali is a participatory
            initiative, you too can contribute and support the girl child. With
            an annual progress report, you can track how well your Nanhi Kali/s
            are progressing. You can educate a girl child by clicking here.&nbsp;
          </p>
          <h3 className='mt-6 font-semibold'>THE GIRL CHILD IN INDIA</h3>
          <p className='md:pl-6 text-justify'>
            It&apos;s no surprise that India ranks as one of the countries with the
            highest male to female ratio. Unfortunately, it is the biased
            mindset towards the male child in India that leads to issues like
            girl child abandonment at birth and the practice of child marriage.
            Of course, these mindsets are what make most families impervious to
            the need to educate girls.
          </p>
          <h3 className='mt-6 font-semibold'>
            WHY CHOOSE US AS THE NGO FOR GIRL CHILD EDUCATION?
          </h3>
          <p className='md:pl-6 text-justify'>
            At Project Nanhi Kali, our approach to education goes beyond
            textbooks and emphasises holistic development by integrating
            curricular and extracurricular activities which helps girls
            transition well from school to higher education and work
            opportunities.
          </p>
          <p className='md:pl-6 text-justify'>
            During school hours, our curriculum focuses on developing both
            digital literacy and essential life skills, all while fostering
            gender awareness and challenging stereotypes. This is done through a
            new programmatic model which includes essential 21st century skills
            such as financial literacy, digital proficiency, and life skills.
          </p>
          <p className='md:pl-6 text-justify'>
            After school, girls participate in a specially designed physical
            (sports) education module. This not only promotes physical
            well-being but also instills valuable traits like teamwork and
            leadership. Multi-level sporting events are also held at school and
            district levels which include 50-meter dash, shuttle run, standing
            long jump and endurance run.
          </p>
          <p className='md:pl-6 text-justify'>
            Every Nanhi Kali will receive an annual Nanhi Kali kit consisting of
            shoes, 2 pairs of socks, 2 t-shirts, and feminine hygiene material,
            enhancing her well-being.
          </p>
        </article>
        <p className='text-center pt-6'>
          All Rights Reserved &copy;&nbsp;
          <Link href='/' className='font-semibold hover:text-zinc-300 text-lg'>
            marngo.com
          </Link>&nbsp;
          2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
