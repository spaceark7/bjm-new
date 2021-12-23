import React from 'react'

const TitleBrand = ({ text, textSpot }) => {
  return (
    <h3 className='text-4xl w-1/2 pr-14 border-r-2 font-brand-primary font-semibold'>
      {text} <span className='text-brand-primary'>{textSpot}</span>
    </h3>
  )
}

export default TitleBrand
