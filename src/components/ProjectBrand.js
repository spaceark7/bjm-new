import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
SwiperCore.use([Pagination, Navigation, Autoplay])

const ProjectBrand = () => {
  return (
    <div className='py-8 w-full h-full'>
      <div className='px-4 pb-8'>
        <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
          <span className='text-brand-primary'>Proyek</span> Kami
        </h3>
      </div>

      <div className='w-full px-4 py-8'>
        <img
          className='w-full object-cover object-right'
          src='/images/indo.png'
          alt='indonesia map'
        />
      </div>

      <div className='flex flex-wrap px-4 py-8'>
        <div className='w-1/2 px-2 py-2'>
          <h1 className='text-brand-primary font-brand-primary font-semibold text-5xl'>
            12+
          </h1>
          <p>Daerah di indonesia telah kami kirim.</p>
        </div>
        <div className='w-1/2 px-2 py-2'>
          <h1 className='text-brand-primary font-brand-primary font-semibold text-5xl'>
            50+
          </h1>
          <p>Proyek telah memesan produk kami.</p>
        </div>
      </div>
      <Swiper
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
            className='w-full h-60 object-cover'
            src='/images/proyek/1.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 object-cover'
            src='/images/proyek/2.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 object-cover'
            src='/images/proyek/3.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 object-cover'
            src='/images/proyek/4.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 object-cover'
            src='/images/proyek/5.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
        <SwiperSlide className='mb-11'>
          <img
            className='w-full h-60 object-cover'
            src='/images/proyek/6.webp'
            alt='proyek BJM'
          />
        </SwiperSlide>
      </Swiper>
      <div className='px-6 text-xl font-brand-text pt-4 pb-4'>
        <h1>
          Kami memberikan yang terbaik untuk pelanggan dengan harga yang
          terjangkau.
        </h1>
      </div>
    </div>
  )
}

export default ProjectBrand
