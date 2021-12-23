import React from 'react'

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
