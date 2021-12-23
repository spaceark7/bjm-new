import React from 'react'
import { BsTruck } from 'react-icons/bs'
import { MdOutlineVerified } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import CardService from './CardService'
import TitleBrand from './TitleBrand'

const ServiceBrand = () => {
  return (
    <div className='px-4 py-5  h-full w-full  '>
      <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
        Kenapa <span className='text-brand-primary'>Memilih</span> Kami?
      </h3>
      <div className='w-full pt-4 flex flex-col items-center mt-6 gap-y-6 py-8'>
        <CardService
          icon={<BsTruck />}
          title='Siap Antar'
          desc='Kami memiliki armada pengangkut untuk mengantar barang hingga ke tempat tujuan.'
        />
        <CardService
          icon={<MdOutlineVerified />}
          title='Kawat SNI'
          desc='Kami menggunakan kawat SNI untuk menjamin kualitas dan daya tahan produk.'
        />
        <CardService
          icon={<FaRegHandshake />}
          title='Harga Nego'
          desc='Kami memberikan harga kompetitif dan membuka negosiasi harga.'
        />
      </div>
    </div>
  )
}

export default ServiceBrand
