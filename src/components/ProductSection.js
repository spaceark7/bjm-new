import React from 'react'
import productList from '../data/productList'
import { Tab } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import SwiperCore, { Pagination } from 'swiper'
import CardProduct from './CardProduct'
import HarmonikaCard from './CardProductHarmonika'

SwiperCore.use([Pagination])

const ProductSection = () => {
  return (
    <div className='py-8 h-full'>
      <div className='px-4 pb-8'>
        <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
          <span className='text-brand-primary'>Produk</span> Kami
        </h3>
      </div>

      <div className='pt-4 px-4'>
        <Tab.Group>
          <Tab.List className='w-full space-x-2 flex h-12 flex-row justify-center'>
            <Tab
              as='div'
              className={({ selected }) =>
                selected
                  ? 'bg-brand-primary bg-opacity-20 text-brand-primary py-2 flex items-center justify-center px-4 rounded-full text-xl font-semibold transition-all ease-in-out duration-300 outline-none shadow-none focus:outline-none focus:shadow-none lg:cursor-pointer'
                  : ' bg-gray-200 text-gray-500 py-2 flex items-center justify-center px-4 rounded-full text-base font-normal transition-all ease-in-out duration-300 outline-none shadow-none focus:outline-none focus:shadow-none lg:cursor-pointer'
              }
            >
              <p>Bronjong</p>
            </Tab>
            <Tab
              as='div'
              className={({ selected }) =>
                selected
                  ? 'bg-brand-primary bg-opacity-10 text-brand-primary py-2 flex items-center justify-center px-4 rounded-full text-xl font-semibold transition-all ease-in-out duration-300 outline-none shadow-none focus:outline-none focus:shadow-none lg:cursor-pointer'
                  : 'bg-gray-200  text-gray-duration-300 outline-none py-2 flex items-center justify-center px-4 rounded-full text-base font-normal transition-all ease-in-out duration-300 outline-none shadow-none focus:outline-none focus:shadow-none lg:cursor-pointer'
              }
            >
              <p>Kawat Harmonika</p>
            </Tab>
          </Tab.List>
          <Tab.Panel className='pt-6 '>
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
            >
              {productList.bronjong.map((product, index) => (
                <SwiperSlide className='mb-11' key={product.id}>
                  <CardProduct product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Tab.Panel>
          <Tab.Panel className='pt-6 '>
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
            >
              {productList.harmonika.map((product, index) => (
                <SwiperSlide className='mb-11' key={product.id}>
                  <HarmonikaCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Tab.Panel>
        </Tab.Group>
      </div>
    </div>
  )
}

export default ProductSection
