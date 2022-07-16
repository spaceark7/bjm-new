import React from 'react'
import { Link } from 'react-router-dom'

const HarmonikaCard = ({ product }) => {
  return (
    <div className='flex w-full flex-col md:max-w-sm lg:max-w-sm'>
      <div className='border-2  rounded-sm bg-white shadow-md px-4 lg:h-full'>
        <div className='w-full flex justify-center items-center'>
          <img
            className='w-full h-56 lg:max-h-44 object-cover'
            src={product.Image}
            alt={product.name}
          />
        </div>

        <div className='w-full pt-6 pb-2  border-t-2'>
          <h1 className='font-brand-primary font-bold text-xl'>
            {product.name}
          </h1>
          <div className='py-1 '>
            <p className='font-brand-primary'>
              Tebal Kawat : {product.specification.thickness}
            </p>
            <p className='font-brand-primary'>
              Variasi Ukuran : {product.specification.size.length} Item
            </p>
          </div>
        </div>
        <Link to={`/produk/harmonika/${product.id}`}>
          <div className='bg-brand-primary bg-opacity-10 rounded-lg mt-2 lg:cursor-pointer w-full mx-auto px-4 py-2 mb-5 text-brand-primary  text-center'>
            <h2 className='font-semibold font-brand-primary'>
              Lihat Spesifikasi lengkap
            </h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HarmonikaCard
