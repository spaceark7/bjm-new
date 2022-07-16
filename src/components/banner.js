import React from 'react'

const Banner = () => {
  const handleWhatsApp = (e) => {
    e.preventDefault()
    const message = `Halo, Saya ingin menanyakan mengenai produk yang bapak jual.`
    const encoded = encodeURI(message)
    const url = `https://wa.me/+6282124603889?text=${encoded}`
    window.open(url, '_blank')
  }
  return (
    <div className='banner px-4 pt-6 flex flex-col justify-center md:justify-start max-h-screen md:h-full md:px-8 sm:h-screen sm:pb-11  lg:flex-row lg:min-h-screen 2xl:min-h-fit 2xl:pb-52 xl:px-40'>
      <div className='w-1/2 py-4 md:w-1/3 lg:hidden'>
        <img
          className='w-full h-full lg:h-auto'
          src='/images/main_logo.png'
          alt='logo bjm'
        />
      </div>
      <div className='pb-4 pt-4 lg:hidden '>
        <h1 className='font-brand-primary font-bold text-4xl text-brand-primary md:text-5xl md:max-w-md'>
          Produsen Bronjong Terbaik.
        </h1>
        <p className='text-base font-brand-text py-4 leading-5 pr-8 tracking-tight md:tracking-wider md:font-semibold md:text-lg md:max-w-md'>
          Kami berkomitmen untuk mengutamakan{' '}
          <strong className='text-brand-primary'>
            kualitas dan daya tahan
          </strong>{' '}
          produk untuk hasil yang terbaik.
        </p>
      </div>
      <div className='hidden lg:block lg:py-9 w-1/2 lg:h-full'>
        <div className='w-1/2 py-4 md:w-1/3'>
          <img
            className='w-full h-full lg:h-auto'
            src='/images/main_logo.png'
            alt='logo bjm'
          />
        </div>
        <div className=' pb-6 pt-4 '>
          <h1 className='font-brand-primary font-bold text-4xl text-brand-primary md:text-5xl md:max-w-md 2xl:max-w-lg 2xl:text-6xl'>
            Produsen Bronjong Terbaik.
          </h1>
          <p className='text-base font-brand-text py-4 leading-5 pr-8 tracking-tight md:tracking-wider md:font-semibold md:text-lg md:max-w-md'>
            Kami berkomitmen untuk mengutamakan{' '}
            <strong className='text-brand-primary'>
              kualitas dan daya tahan
            </strong>{' '}
            produk untuk hasil yang terbaik.
          </p>
          <button
            onClick={handleWhatsApp}
            className='mt-6 border-2 py-3 px-4 bg-none rounded-full text-brand-primary border-brand-primary tracking-wide transition-all duration-200 ease-out focus:ring-1 focus:ring-brand-primary font-bold hover:bg-brand-primary hover:text-white'
          >
            WhatsApp Sekarang
          </button>
        </div>
      </div>
      <div className='w-full h-full lg:h-full lg:w-1/2 lg:py-11 lg:relative '>
        <img
          className='w-full max-h-min md:max-w-md md:mx-auto lg:overflow-hidden lg:mt-20 lg:min-h-max xl:absolute xl:-right-16 xl:top-24  xl:max-w-4xl xl:mt-9 '
          src='/images/bronjong_main.png'
          alt='bronjong_vector'
        />
      </div>
    </div>
  )
}

export default Banner
