import styles from '../styles/Home.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
const scrollToTop = () => {
  scroll.scrollToTop();
};

function Footer() {
  return (
    <section className='min-h-[30vh] sm:min-h-[36vh] bg-[#000777]'>
      <div className='flex flex-row pt-[10px] sm:pt-[25px]'>
        <div className='flex-1 m-[12px] mt-0 sm:mt-0 mr-0 mb-0 sm:m-[40px] sm:mr-0 sm:mb-0'>
          <div className='text-[40px] text-white mb-[25px]'>
            <Image
              className='relative cursor-pointer'
              src={'/logo_white.png'}
              alt='Logo footer'
              onClick={scrollToTop}
              width={400}
              height={100}
            />
          </div>
        </div>

        <div className='flex flex-col justify-center lg:items-center lg:gap-8 lg:flex-row m-[12px] ml-0 mb-0  mt-3 sm:mt-0 sm:m-[60px] sm:ml-0 sm:mb-0 text-white capitalize text-[10px] sm:text-[14px] md:text-[16px]'>
          <ul className='flex flex-col lg:flex-row text-lg gap-2 lg:gap-8 mb-2 lg:mb-0'>
            <li>
              <Link
                className='cursor-pointer hover:underline  hover:underline-offset-4 sm:hover:underline-offset-8'
                activeClass='active'
                to='About'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                acerca de nosotros
              </Link>
            </li>
            <li>
              <Link
                className='cursor-pointer hover:underline  hover:underline-offset-4 sm:hover:underline-offset-8'
                activeClass='active'
                to='Service'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Funciones
              </Link>
            </li>
          </ul>

          <ul className='flex flex-col lg:flex-row text-lg gap-8'>
            <li>
              <Link
                className='cursor-pointer hover:underline  hover:underline-offset-4 sm:hover:underline-offset-8'
                activeClass='active'
                to='Download'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Descarga
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <h1 className='text-white text-[10px] sm:text-[14px] m-[12px] mr-0 mt-[15px] mb-0 sm:m-[40px] sm:mr-0 sm:mt-[30px] sm:mb-0 capitalize'>
        copyright AviutaTM &copy; 2023
      </h1>
    </section>
  );
}

export default Footer;
