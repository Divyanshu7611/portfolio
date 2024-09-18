'use client'
import React, { useState } from 'react'
import { Sora } from '@next/font/google'
import { Encode_Sans_Expanded } from '@next/font/google'

const sora = Sora({
  weight: '700',
  subsets: ['latin'],
})

const encoded = Encode_Sans_Expanded({
  weight: '700',
  subsets: ['latin'],
})

export default function Navbar() {
  const [isMobile, setMobile] = useState<boolean>(false)
  return (
    <div className="pt-12">
      <div>
        {isMobile && (
          <div>
            <h1>Hello Guyz this is for small Screen</h1>
          </div>
        )}
        {!isMobile && (
          <div>
            <div className="flex w-[1200px] justify-between items-center">
              <div className={sora.className}>
                <h1 className="font-bold text-xl">PortFolio</h1>
              </div>
              <div className={encoded.className}>
                <ul className="flex gap-5">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About Me</a>
                  </li>
                  <li>
                    <a href="">Projects</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                </ul>
              </div>
              <div className={encoded.className}>
                <button className="bg-[#6780D9] px-4 py-2 text-white font-semibold text-center rounded-xl">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
