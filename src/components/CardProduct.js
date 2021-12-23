import React from 'react'

const CardProduct = ({ product }) => {
  return (
    <div className='flex w-full flex-col '>
      <div className='border-2  rounded-sm bg-white shadow-md px-4'>
        <div className='w-full flex justify-center items-center'>
          <img
            className='w-full h-full'
            src={product.Image}
            alt={product.name}
          />
        </div>

        <div className='w-full pt-6 pb-2  border-t-2'>
          <h1 className='font-brand-primary font-bold text-xl'>
            {product.name}
          </h1>
          <div className='py-1'>
            <p className='font-brand-text'>
              Volume : {product.specification.volume}
            </p>
            <p className='font-brand-text'>
              Dimensi : {product.specification.dimension.length} x{' '}
              {product.specification.dimension.width} x{' '}
              {product.specification.dimension.height}
            </p>
          </div>
        </div>
        <div className='bg-brand-primary bg-opacity-10 rounded-lg mt-2 lg:cursor-pointer w-full mx-auto px-4 py-2 mb-5 text-brand-primary  text-center'>
          <h2 className='font-semibold font-brand-text'>
            Lihat Spesifikasi lengkap
          </h2>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
