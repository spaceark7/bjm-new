import React from 'react'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className='py-8 w-full h-full 2xl:py-32'>
      <div className='px-4 pb-8 md:px-8 xl:px-40'>
        <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
          <span className='text-brand-primary'>Hubungi</span> Kami
        </h3>
        <div className='py-2 '>
          <p>Kami siap untuk membantu anda</p>
        </div>
      </div>

      <div className='flex space-y-8 px-4 flex-col md:px-8 xl:px-40 lg:flex-row lg:space-y-0 lg:justify-between lg:min-h-[40vh] lg:py-12 2xl:min-h-fit  '>
        <a target='_blank' rel='noreferrer' href='https://wa.me/+6282124603889'>
          <div className='flex flex-row space-x-2 items-center justify-items-start text-xl lg:hover:bg-brand-primary lg:hover:py-2 lg:hover:px-4 lg:hover:text-white lg:hover:rounded-full lg:transition-all lg:ease-in-out lg:duration-200 lg:hover:-translate-y-2 lg:hover:translate-x-2 2xl:text-2xl'>
            <BsWhatsapp />

            <p className='font-brand-primary tracking-wider'>0821-2460-3889</p>
          </div>
        </a>
        <a target={'_blank'} rel='noreferrer' href='tel:+6282124603889'>
          <div className='flex space-x-2 items-center text-xl lg:hover:bg-brand-primary lg:hover:py-2 lg:hover:px-4 lg:hover:text-white lg:hover:rounded-full lg:transition-all lg:ease-in-out lg:duration-200 lg:hover:-translate-y-2 lg:hover:translate-x-2 2xl:text-2xl '>
            <BsTelephone />

            <p className='font-brand-primary tracking-wider'>0821-2460-3889</p>
          </div>
        </a>
        <a
          target={'_blank'}
          rel='noreferrer'
          href='mailto:aris.yuni.13@gmail.com'
        >
          <div className='flex space-x-2 items-center text-xl lg:hover:bg-brand-primary lg:hover:py-2 lg:hover:px-4 lg:hover:text-white lg:hover:rounded-full lg:transition-all lg:ease-in-out lg:duration-200 lg:hover:-translate-y-2 lg:hover:translate-x-2 2xl:text-2xl'>
            <IoMailOutline />

            <p className='font-brand-primary tracking-wider'>
              aris.yuni.13@gmail.com
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Contact
