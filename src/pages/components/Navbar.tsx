import React from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className='container'>
      <nav className='z-40 sticky top-0 w-full'>
        <div className='flex items-center min-h-[6rem] p-[0.5rem] text-xl text-black'>
          <div className='flex-1 place-content-center md:place-content-start flex  ml-8'>
            Logo
          </div>

          <div>
            <ul className='lg:flex gap-24 hidden justify-around'>
              <li>
                <Link href='/'>Acerca de Nosotros </Link>
              </li>
              <li>
                <Link href='/'>Servicios </Link>
              </li>
              <li>
                <Link href='/'>Galeria</Link>
              </li>
              <li>
                <Link href='/'>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
