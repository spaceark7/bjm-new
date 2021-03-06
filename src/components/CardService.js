import React from 'react'

const CardService = ({ icon, title, desc }) => {
  return (
    <div className='w-full flex flex-col h-52 items-center justify-center py-6 border-2 rounded-xl border-brand-primary border-opacity-50 md:max-w-md md:h-64 lg:max-w-sm '>
      <span className='text-7xl text-brand-primary'>{icon}</span>

      <h3 className='font-brand-primary text-2xl font-semibold text-brand-primary'>
        {title}
      </h3>
      <p className='px-4 mt-2 md:font-semibold'>{desc}</p>
    </div>
  )
}

export default CardService
