import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <section className='relative bg-slate-100'>
        <div className='absolute inset-0 bg-[#118dbe] mb-16'></div>
        <div className='relative'>
          <div className=' pt-[50px] text-white '>
            <h1
              className='uppercase text-xl sm:text-3xl lg:text-4xl text-white font-bold mb-10 text-center'
              id={'About'}
            >
              acerca de nosotros
            </h1>
            <p className='mb-10 sm:mb-16 mx-10 min-[420px]:mx-16 lg:mx-24 text-justify text-[14px] md:text-xl lg:text-2xl'>
              Aviuta AntiMalware Software es un software Potente enfocado
              principalmente en la deteccion de archivos maliciosos, asi como la
              eliminacion de estos para mantener los equipos sanos y limpios.
              Todo esto gracias a una base de datos que es actualizada
              constantemente con el objetivo de estar siempre un paso adelante
              de los cyber ladrones esto siendo posible debido a colaboradores
              de Aviuta™ y MalwareBazaar , ademas contamos con un detector
              utilizado analizar URLS para detectar con seguridad cualquier tipo
              de infeccion o malicia en cualquier dirección usando una base de
              datos de esta manera manteniendo tu tecnología a salvo del
              peligro.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div
              className={`w-[260px] h-[280px] min-[470px]:w-[340px] min-[470px]:h-[290px] sm:w-[400px] sm:h-[400px] relative`}
            >
              <div
                className={`w-[12em] h-[13em] min-[470px]:w-[14rem] min-[470px]:h-[13rem] sm:w-[18em] sm:h-[18em] top-0 right-0 absolute`}
              >
                <Image
                  src='/antivirus.jpg'
                  alt='Acerca de nosotros'
                  className='object-cover'
                  fill
                  sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                />
              </div>

              <div
                className={`w-[12em] h-[11em] min-[470px]:w-[14rem] min-[470px]:h-[11rem] sm:w-[18em] sm:h-[15em] bottom-0 absolute`}
              >
                <Image
                  src='/pc.jpg'
                  alt='Acerca de nosotros'
                  fill
                  sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
