import React from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-full  bg-brand-primary py-4 px-2 md:px-8 xl:px-40 '>
      <div className=' w-1/3 py-5 px-2 w-full md:h-full flex items-center justify-start lg:max-h-56'>
        <img className='w-full lg:w-1/3' src='/images/BJM_NAV.png' alt='' />
      </div>
      <div className='w-full px-2 py-4 text-white'>
        <h1 className='text-lg'>Temukan Kami di Jejaring Sosial</h1>
        <div className='flex px-4 py-4 opacity-80 space-x-4'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.facebook.com/BJMCianjur/'
          >
            <div className='rounded-full py-2 px-2 bg-white'>
              <FaFacebookF className='text-brand-primary text-3xl' />
            </div>
          </a>
          <div className='rounded-full py-2 px-2 bg-white'>
            <a rel='noreferrer' target='_blank' href='https://g.co/kgs/kYUSgS'>
              <FaGoogle className='text-brand-primary text-3xl' />
            </a>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col text-center mt-4 py-4 text-sm text-white '>
        <p className='opacity-70'>This Website created by</p>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.instagram.com/explorecreativedesign/'
        >
          <p className='text-lg font-semibold text-yellow-400'>
            Explore Creative Design
          </p>
        </a>
      </div>
    </div>
  )
}

export default Footer
