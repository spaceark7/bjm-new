import React from 'react'
import Banner from '../banner'
import Contact from '../contact'
import ServiceBrand from '../ServiceBrand'
import ProductSection from '../ProductSection'
import ProjectBrand from '../ProjectBrand'
import { MdOutlinePlace } from 'react-icons/md'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <>
      <Banner />
      <ServiceBrand />
      <ProductSection />
      <ProjectBrand />

      <div className='py-8 w-full h-full lg:min-h-screen lg:py-11 2xl:min-h-fit '>
        <div className='px-4 pb-8 md:px-8 xl:px-40'>
          <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
            <span className='text-brand-primary'>Tentang</span> Kami
          </h3>
        </div>

        <div className='w-full px-4 pt-6 md:px-8 lg:hidden'>
          <img
            className='w-full object-cover object-right'
            src='/images/about.webp'
            alt='indonesia map'
          />
        </div>

        <div className='w-full px-4 pt-8 pb-6 md:px-8 lg:hidden'>
          <h1 className='text-brand-primary font-brand-primary font-semibold text-2xl md:text-4xl'>
            Berkah Jaya Mandiri
          </h1>
          <p className='leading-5 tracking-wide pt-3 md:font-semibold'>
            Kami adalah UKM yang bergerak dibidang manufaktur pembuatan bronjong
            yang berasal dari kota cianjur. Beroperasi lebih dari 5 tahun. Visi
            kmi adalah untuk memajukan daerah dan memberikan kontribusi untuk
            pembangunan indonesia.
          </p>
          <a
            className='mt-6'
            target={'_blank'}
            rel='noreferrer'
            href='https://www.google.com/maps?q=berkah+jaya+mandiri+bronjong&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjgovHV9Pn0AhVtSmwGHdquAwAQ_AUoAnoECAIQBA'
          >
            <div className='w-full rounded-md px-4 py-4 mt-6 flex space-x-2 bg-brand-primary text-white justify-center items-center'>
              <MdOutlinePlace className='text-2xl' />
              <h1 className='text-white font-brand-primary font-semibold '>
                Lihat Lokasi Kami di Google Maps
              </h1>
              {/* <div className='w-full h-[40]'>
            <GoogleMapReact
              bootstrapURLKeys={{
    
              }}
              defaultCenter={{
                lat: -6.786761009782866,
                lng: 107.06439678205568,
              }}
              zoom={10}
            ></GoogleMapReact>
          </div> */}
            </div>
          </a>
        </div>

        <div className='hidden lg:grid px-8 xl:px-40 grid-flow-col space-x-5 2xl:max-h-[50vh] 2xl:grid-cols-3 2xl:space-x-10'>
          <div className='w-full px-4 md:px-8 md:px-0 shadow-lg lg:col-span-2 xl:max-h-[50vh] 2xl:relative'>
            <img
              className='w-full object-cover rounded-lg 2xl:h-full'
              src='/images/about.webp'
              alt='indonesia map'
            />
          </div>
          <div className='py-4 xl:flex xl:flex-col 2xl:justify-center '>
            <h1 className='text-brand-primary font-brand-primary font-semibold text-2xl md:text-4xl 2xl:text-6xl'>
              Berkah Jaya Mandiri
            </h1>
            <p className='leading-5 tracking-wide pt-3 md:font-semibold leading-6'>
              Kami adalah UKM yang bergerak dibidang manufaktur pembuatan
              bronjong yang berasal dari kota cianjur. Beroperasi lebih dari 5
              tahun. Visi kami adalah untuk memajukan daerah dan memberikan
              kontribusi untuk pembangunan indonesia.
            </p>
            <a
              className='mt-6'
              target={'_blank'}
              rel='noreferrer'
              href='https://www.google.com/maps?q=berkah+jaya+mandiri+bronjong&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjgovHV9Pn0AhVtSmwGHdquAwAQ_AUoAnoECAIQBA'
            >
              <div className='w-2/3 rounded-md px-4 py-4 mt-6 flex space-x-2 bg-brand-primary text-white justify-center items-center lg:w-full 2xl:w-2/3'>
                <MdOutlinePlace className='text-2xl' />
                <h1 className='text-white font-brand-primary font-semibold '>
                  Lihat Lokasi Kami di Google Maps
                </h1>
                {/* <div className='w-full h-[40]'>
            <GoogleMapReact
              bootstrapURLKeys={{
    
              }}
              defaultCenter={{
                lat: -6.786761009782866,
                lng: 107.06439678205568,
              }}
              zoom={10}
            ></GoogleMapReact>
          </div> */}
              </div>
            </a>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage
