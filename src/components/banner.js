import React from 'react'

const Banner = () => {
  return (
    <div className='banner px-4 pt-6 flex flex-col justify-center h-[80vh]'>
      <div className='w-1/2 py-4'>
        <img
          className='w-full h-full'
          src='/images/main_logo.png'
          alt='logo bjm'
        />
      </div>
      <div className=' pb-6 pt-4'>
        <h1 className='font-brand-primary font-bold text-4xl text-brand-primary '>
          Produsen Bronjong Terbaik.
        </h1>
        <p className='text-base font-brand-text py-4 leading-5 pr-8 tracking-tight'>
          Kami berkomitmen untuk mengutamakan{' '}
          <strong className='text-brand-primary'>
            kualitas dan daya tahan
          </strong>{' '}
          produk untuk hasil yang terbaik.
        </p>
      </div>
      <div>
        <img
          className='w-full'
          src='/images/bronjong_main.png'
          alt='bronjong_vector'
        />
      </div>
    </div>
  )
}

export default Banner
