import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'

export default function Hero() {
  return (
    <div className="flex justify-between lg:w-[1200px] mx-auto lg:flex-row flex-col-reverse lg:min-h-screen items-center mt-20 lg:mt-0">
      <div className="lg:w-2/4">
        <RightHero />
      </div>
      <div className="lg:w-2/4">
        <LeftHero />
      </div>
    </div>
  )
}
