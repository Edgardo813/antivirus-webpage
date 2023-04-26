import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <section className='bg-slate-100 pb-5'>
      <div className='container mx-auto flex flex-col'>
        <div className='flex flex-col items-center'>
          <h1
            className='text-2xl lg:text-5xl text-gray-800 font-bold mt-[40px] sm:mt-[60px] mb-12'
            id={'Service'}
          >
            FUNCIONES
          </h1>
        </div>
        <div
          className='  bg-[#24aee5]
                                  flex flex-col lg:flex-row justify-center self-center min-[350px]:self-start sm:self-start items-center shadow-lg
                                  w-[275px] min-[350px]:w-[315px] sm:w-[400px] lg:w-[55rem] xl:w-[1000px] rounded-lg
                                  p-2 lg:p-3 gap-4 lg:gap-8 ml-0 md:ml-8 lg:ml-16 mb-8 lg:mb-12'
        >
          <div className='flex flex-col gap-0 lg:gap-2 '>
            <h2 className='text-lg lg:text-5xl text-gray-800 font-bold p-4 pt-0 text-center lg:text-left'>
              Detector de Malware
            </h2>
            <p className='max-w-[250px] mb-1 lg:max-w-[650px] text-[14px] md:text-xl lg:text-2xl lg:text-left p-4 pt-0'>
              La Primera Funcion de AVIUTA, se encarga de localizar los archivos
              deseados con el objetivo de analizar y comparar su contenido para
              confirmar mediante su base de datos si es un archivo malicioso o
              no,en el caso de que lo sea esto sera registrado y el archivo sera
              eliminado del ordenador, Despues Informara al usuario de los
              resultados.
            </p>
          </div>
          <div className='w-[250px] lg:w-[330px] -order-1 lg:order-1 px-4 pt-4 lg:p-0'>
            <Image
              className='rounded-lg'
              src='/analysis.jpg'
              alt='Letreros exteriores'
              width={330}
              height={150}
            />
          </div>
        </div>

        <div
          className=' bg-[#24aee5]
                                  flex flex-col lg:flex-row justify-center self-center min-[350px]:self-end sm:self-end items-center shadow-lg
                                  w-[275px] min-[350px]:w-[315px] sm:w-[400px] lg:w-[55rem] xl:w-[1000px]
                                  rounded-lg p-2 lg:p-3 gap-4 lg:gap-8 mr-0 md:mr-8 lg:mr-16 mb-8 lg:mb-12'
        >
          <div className='flex flex-col gap-0 lg:gap-2 order-last '>
            <h2 className='text-lg lg:text-5xl text-gray-800 font-bold text-center lg:text-right p-4 pt-0'>
              Analizador de URLS
            </h2>
            <p className='max-w-[250px] mb-1 lg:max-w-[650px] text-[14px] md:text-xl lg:text-2xl text-justify p-4 pt-0'>
              Esta es una función con mucha importancia, sin embargo su
              funcionamiento es simple. El usuario interesado, ingresa una URL,
              permitiendo a la funcion compararla con los registros de la Base
              de Datos desarrollada por colaboradores de AviutaTM y URLHAUS.
            </p>
          </div>

          <div className='w-[250px] lg:w-[330px] -order-1 lg:order-1 px-4 pt-4 lg:p-0'>
            <Image
              className='rounded-lg'
              src='/phishing.jpg'
              alt='Letreros de oficina'
              width={330}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
