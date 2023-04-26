import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
  return (
    <div className='container'>
      <nav className='z-40 sticky top-0 w-full'>
        <div className='flex items-center min-h-[6rem] p-[0.5rem] text-xl text-white'>
          <div className='flex-1 place-content-center md:place-content-start flex  ml-8'>
            <Image
              className='relative max-w-[120px] lg:max-w-[150px]'
              src={'/logo.png'}
              alt='Logo footer'
              width={300}
              height={50}
            />
          </div>

          <div>
            <ul className='lg:flex gap-24 hidden justify-around'>
              <li>
                <Link
                  activeClass='active'
                  className='cursor-pointer'
                  to='About'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Acerca de Nosotros{' '}
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='Service'
                  className='cursor-pointer'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Funciones{' '}
                </Link>
              </li>
              <li>
                <Link
                  activeClass='active'
                  to='Download'
                  className='cursor-pointer'
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
      </nav>
    </div>
  );
};

export default Navbar;
