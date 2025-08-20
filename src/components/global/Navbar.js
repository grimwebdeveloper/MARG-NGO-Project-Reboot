import Image from 'next/image';
import Button from './Button';
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaBars,
} from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className='bg-[#ffc511]'>
      <div className='max-w-screen-xl mx-auto px-8 min-h-[137px] bg-[#ffc511] flex flex-col py-4 gap-0 lg:gap-0 lg:flex-row lg:justify-between'>
        <div className='relative lg:self-center'>
          <Image
            src='/logo.png'
            alt='logo'
            width={65}
            height={65}
            className='mx-auto md:ml-0 lg:w-26'
          />
          <div className='absolute top-1/2 right-0 -translate-y-1/2 lg:hidden'>
            <FaBars className='text-2xl' />
          </div>
        </div>
        <div className='lg:flex lg:flex-col-reverse lg:gap-6'>
          {/* first row */}
          <ul className='hidden lg:flex x-8 font-semibold flex-col lg:flex-row lg:justify-end lg:flex-wrap'>
            <li>
              <a href='#' className='lg:pl-6'>
                ABOUT US
              </a>
            </li>
            <li>
              <a href='#' className='lg:pl-6'>
                WHAT WE DO
              </a>
            </li>
            <li>
              <a href='#' className='lg:pl-6'>
                WHY SUPPORT US
              </a>
            </li>
            <li>
              <a href='#' className='lg:pl-6'>
                FOOTPRINT
              </a>
            </li>
            <li>
              <a href='#' className='lg:pl-6'>
                BE A PART OF CHANGE
              </a>
            </li>
            <li>
              <a href='#' className='lg:pl-6'>
                MEDIA
              </a>
            </li>
            <li>
              <a href='#' className='lg:pl-6'>
                CONTACT US
              </a>
            </li>
          </ul>
          {/* second row */}
          <div className='text-center md:flex items-center gap-6 mt-4 lg:mt-0'>
            <Button
              content='Donate Now'
              externalClass='uppercase text-[22px] ml-auto'
            />
            {/* social links */}
            <div className='flex gap-6 w-fit mx-auto mt-6 md:mt-0 md:mx-0'>
              <a href='#'>
                <FaXTwitter className='text-lg border border-zinc-800 w-[32px] h-[32px] rounded-full p-1' />
              </a>
              <a href='#'>
                <FaFacebookF className='text-lg border border-zinc-800 w-[32px] h-[32px] rounded-full p-1' />
              </a>
              <a href='#'>
                <FaInstagram className='text-lg border border-zinc-800 w-[32px] h-[32px] rounded-full p-1' />
              </a>
              <a href='#'>
                <FaYoutube className='text-lg border border-zinc-800 w-[32px] h-[32px] rounded-full p-1' />
              </a>
              <a href='#'>
                <FaLinkedinIn className='text-lg border border-zinc-800 w-[32px] h-[32px] rounded-full p-1' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
