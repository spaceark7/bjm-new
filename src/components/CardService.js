import React from 'react'

const CardService = ({ icon, title, desc }) => {
  return (
    <div className='max-w-fit flex flex-col items-center justify-center py-6 border-2 rounded-xl border-brand-primary border-opacity-50 '>
      <span className='text-7xl text-brand-primary'>{icon}</span>

      <h3 className='font-brand-primary text-2xl font-semibold text-brand-primary'>
        {title}
      </h3>
      <p className='px-4 mt-2'>{desc}</p>
    </div>
  )
}

export default CardService
