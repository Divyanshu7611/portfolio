// 'use client'
// import React, { useState } from 'react'
// import { Sora } from '@next/font/google'
// import { Encode_Sans_Expanded } from '@next/font/google'

// const sora = Sora({
//   weight: '700',
//   subsets: ['latin'],
// })

// const encoded = Encode_Sans_Expanded({
//   weight: '700',
//   subsets: ['latin'],
// })

// export default function Navbar() {
//   const [isMobile, setMobile] = useState<boolean>(true)
//   return (
//     <div>
//       <div>
//         {isMobile && (
//           <div>
//             <h1>Hello Guyz this is for small Screen</h1>
//           </div>
//         )}
//         {!isMobile && (
//           <div>
//             <div className="flex w-[1200px] justify-between items-center">
//               <div className={sora.className}>
//                 <h1 className="font-bold text-xl">PortFolio</h1>
//               </div>
//               <div className={encoded.className}>
//                 <ul className="flex gap-5">
//                   <li>
//                     <a href="">Home</a>
//                   </li>
//                   <li>
//                     <a href="">About Me</a>
//                   </li>
//                   <li>
//                     <a href="">Projects</a>
//                   </li>
//                   <li>
//                     <a href="">Services</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className={encoded.className}>
//                 <button className="bg-[#6780D9] px-4 py-2 text-white font-semibold text-center rounded-xl">
//                   Contact Me
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

'use client'
import React, { useState, useEffect } from 'react'
import { Sora } from '@next/font/google'
import { Encode_Sans_Expanded } from '@next/font/google'
import { FaBars, FaTimes } from 'react-icons/fa'

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
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  // Use effect to handle screen resizing and toggle between mobile/desktop views
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Initialize on component mount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="w-full bg-transparent shadow-md fixed top-0 left-0 z-10">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className={`${sora.className} text-xl font-bold`}>
          <h1>PortFolio</h1>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            <ul className={`${encoded.className} flex gap-8`}>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
              </li>
            </ul>
            <div className={`${encoded.className}`}>
              <button className="bg-[#6780D9] px-4 py-2 text-white font-semibold rounded-xl">
                Contact Me
              </button>
            </div>
          </div>
        )}

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-3xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="flex flex-col items-center space-y-4 mt-4 pb-4 bg-black shadow-md">
          <ul className={`${encoded.className} flex flex-col gap-4`}>
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Services
              </a>
            </li>
          </ul>
          <button className="bg-[#6780D9] px-4 py-2 text-white font-semibold rounded-xl">
            Contact Me
          </button>
        </div>
      )}
    </nav>
  )
}
