import React from 'react'
import Caroseal from './Slider'
import Slider from './Slider'

const Hero3 = ({ className="" }) => {
  return (
    <div className={`h-full overflow-hidden snap-div w-full flex items-center justify-center bg-gray-900 mt-32 ${className}`}>
          <Slider />
      </div>
  )
}

export default Hero3