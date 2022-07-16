import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
SwiperCore.use([Pagination, Navigation, Autoplay])

const ProjectBrand = () => {
  return (
    <div className='py-8 w-full h-full lg:min-h-screen'>
      <div className='px-4 pb-8  md:px-8 xl:px-40'>
        <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
          <span className='text-brand-primary'>Proyek</span> Kami
        </h3>
      </div>

      <div className='w-full px-4 py-8  md:px-8 xl:px-40 lg:hidden'>
        <img
          className='w-full md:h-full object-cover object-right lg:max-h-60 lg:object-center lg:object-scale-down'
          src='/images/indo.png'
          alt='indonesia map'
        />
      </div>

      <div className='flex flex-wrap px-4 py-8  md:px-8 xl:px-40 lg:hidden'>
        <div className='w-1/2 px-2 py-2'>
          <h1 className='text-brand-primary font-brand-primary font-semibold text-5xl md:font-bold'>
            12+
          </h1>
          <p className='md:font-semibold'>
            Daerah di indonesia telah kami kirim.
          </p>
        </div>
        <div className='w-1/2 px-2 py-2'>
          <h1 className='text-brand-primary font-brand-primary font-semibold text-5xl md:font-bold'>
            50+
          </h1>
          <p className='md:font-semibold'>Proyek telah memesan produk kami.</p>
        </div>
      </div>

      <Swiper
        className='xl:px-40'
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 md:h-96 lg:h-[60vh] lg:max-w-5xl lg:mx-auto  object-cover 2xl:max-w-full 2xl:min-h-[70vh]'
            src='/images/proyek/1.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11 '>
          <img
            className='w-full h-60 md:h-96 lg:max-w-5xl lg:mx-auto lg:h-[60vh] object-cover 2xl:max-w-full 2xl:min-h-[70vh]'
            src='/images/proyek/2.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 md:h-96 lg:max-w-5xl lg:mx-auto lg:h-[60vh] object-cover 2xl:max-w-full 2xl:min-h-[70vh]'
            src='/images/proyek/3.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 md:h-96 lg:max-w-5xl lg:mx-auto lg:h-[60vh] object-cover 2xl:max-w-full 2xl:min-h-[70vh]'
            src='/images/proyek/4.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 md:h-96 lg:max-w-5xl lg:mx-auto lg:h-[60vh] object-cover 2xl:max-w-full 2xl:min-h-[70vh]'
            src='/images/proyek/5.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 md:h-96 lg:max-w-5xl lg:mx-auto lg:h-[60vh] object-cover 2xl:max-w-full 2xl:min-h-[70vh]'
            src='/images/proyek/6.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
      </Swiper>
      <div className='px-6 text-xl md:text:2xl font-brand-text pt-4 pb-4 md:max-w-lg md:px-8 xl:px-40 xl:max-w-4xl'>
        <h1 className='md:font-semibold '>
          Kami memberikan yang terbaik untuk pelanggan dengan harga yang
          terjangkau.
        </h1>
      </div>

      <div className='hidden lg:flex lg:flex-row min-h-max py-12 xl:px-40'>
        <div className='w-2/3 px-4 py-8  md:px-8 flex justify-center items-center '>
          <img
            className='w-full md:h-full object-cover object-right lg:max-h-60 lg:object-center '
            src='/images/indo.png'
            alt='indonesia map'
          />
        </div>

        <div className='flex flex-wrap px-4 py-8  md:px-8  w-1/3 lg:flex-col lg:space-y-6 lg:items-center lg:justify-center'>
          <div className='w-full px-2 py-2'>
            <h1 className='text-brand-primary font-brand-primary font-semibold text-5xl md:font-bold'>
              12+
            </h1>
            <p className='md:font-semibold'>
              Daerah di indonesia telah kami kirim.
            </p>
          </div>
          <div className='w-full px-2 py-2'>
            <h1 className='text-brand-primary font-brand-primary font-semibold text-5xl md:font-bold'>
              50+
            </h1>
            <p className='md:font-semibold'>
              Proyek telah memesan produk kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectBrand
