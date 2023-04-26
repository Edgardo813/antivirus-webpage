import Image from 'next/image';
import React from 'react';

const Download = () => {
  return (
    <section className='section overflow-hidden bg-white min-h-[500px]'>
      <div className='container mx-auto'>
        <h1
          className='uppercase text-xl sm:text-3xl lg:text-4xl text-gray-800 font-bold mb-10 text-center'
          id={'Download'}
        >
          Descarga
        </h1>
        <div className='flex flex-row lg:gap-x-[75px] justify-center'>
          <div className='flex flex-col justify-center'>
            <p className=' flex max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-12 text-justify text-lg md:text-xl lg:text-2xl items-center  justify-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              atque, vitae animi enim laboriosam porro quo consectetur ea iste?
              Eos repellendus reiciendis voluptatum eaque. Sint iste consequatur
              corporis quos distinctio! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Possimus temporibus voluptatum ad ipsa
              asperiores. Molestiae,
            </p>
            <div className=' flex self-center border-[1px] pl-1 pr-1 pb-[0.20rem]  md:pt-[0.60rem] md:pb-[0.60rem] md:pl-[0.30rem] md:pr-[0.30rem] md:border-[1px] border-[#a8a8a8]  rounded-full max-w-[170px]  cursor-pointer'>
              <a
                className={`bg-[#0eb1b1] text-[11px] p-4 pt-1 pb-1 md:text-[16px] text-white md:p-6 md:pt-6 md:pb-6  rounded-full font-normal uppercase `}
              >
                Descargar
              </a>
            </div>
          </div>
          <div className='w-[250px] lg:w-[530px] -order-1 lg:order-1 px-4 pt-4 lg:p-0'>
            <Image
              className='rounded-lg'
              src='/download.jpg'
              alt='Descarga'
              width={530}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
