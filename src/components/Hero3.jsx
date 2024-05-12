import React from 'react'
import Caroseal from './Slider'
import Slider from './Slider'

const Hero3 = ({ className = "" }) => {
  return (
    <div className={`h-full overflow-hidden snap-div mx-auto w-[75%] flex flex-col items-start justify-center bg-gray-900 mt-32 ${className}`}>
      <h1 className=' text-start mt-20 text-gray-300 text-4xl'> Why should Someone join?</h1>
      <Slider />
    </div>
  )
}

export default Hero3