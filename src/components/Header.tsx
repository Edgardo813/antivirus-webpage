import styles from '../styles/Home.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  return (
    <section className={` ${styles.hero}`}>
      <h1
        className={` tracking-[0.3em] mt-0 lg:mt-10 text-lg min-h-[370px]:text-2xl sm:text-4xl md:text-5xl uppercase text-[#24aee5] ${styles.DropShadow}  text-center mb-2 sm:mb-4`}
      >
        AVIUTA
      </h1>

      <h3
        className={`text-center text-[13px] min-[370px]:text-xl sm:text-2xl md:text-3xl uppercase text-white ${styles.DropShadow}`}
      >
        Escaneo de Archivos y Protección
      </h3>

      <div className='mx-[40px] mt-3 mb-0 md:mx-[190px] md:mt-4  text-center text-white font-light '>
        <p className='text-[14px] md:text-lg lg:text-xl '>
          Ofrecemos el mejor servicio proteccion para que puedas estar tranquilo
          al momento de explorar las redes y la tecnologia, unete desde la
          comodidad de tu hogar a nosotros y pruebanos!
        </p>
      </div>

      <div className='border-[1px] pl-1 pr-1 pb-[0.20rem]  md:pt-[0.60rem] md:pb-[0.60rem] md:pl-[0.30rem] md:pr-[0.30rem] md:border-[1px] border-[#a8a8a8]  rounded-full mt-[25px] sm:mt-[35px] cursor-pointer'>
        <Link
          activeClass='active'
          to='Download'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={` cursor-pointer bg-[#0eb1b1] text-[11px] p-4 pt-1 pb-1 md:text-[16px] text-white md:p-9 md:pt-2 md:pb-2  rounded-full font-normal uppercase `}
        >
          Descargar
        </Link>
      </div>
    </section>
  );
};

export default Header;
