// 'use client'
// import React, { useState, useEffect } from 'react'
// import { Sora } from '@next/font/google'
// import { Encode_Sans_Expanded } from '@next/font/google'
// import { FaBars, FaTimes } from 'react-icons/fa'

// const sora = Sora({
//   weight: '700',
//   subsets: ['latin'],
// })

// const encoded = Encode_Sans_Expanded({
//   weight: '700',
//   subsets: ['latin'],
// })

// export default function Navbar() {
//   const [isMobile, setMobile] = useState<boolean>(false)
//   const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

//   // Use effect to handle screen resizing and toggle between mobile/desktop views
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setMobile(true)
//       } else {
//         setMobile(false)
//       }
//     }
//     window.addEventListener('resize', handleResize)
//     handleResize() // Initialize on component mount
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return (
//     <nav className="w-full bg-transparent shadow-md fixed top-0 left-0 z-10">
//       <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className={`${sora.className} text-xl font-bold`}>
//           <h1>PortFolio</h1>
//         </div>

//         {/* Desktop Menu */}
//         {!isMobile && (
//           <div className="flex items-center space-x-8">
//             <ul className={`${encoded.className} flex gap-8`}>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   About Me
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-600">
//                   Services
//                 </a>
//               </li>
//             </ul>
//             <div className={`${encoded.className}`}>
//               <button className="bg-[#6780D9] px-4 py-2 text-white font-semibold rounded-xl">
//                 Contact Me
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Mobile Hamburger Icon */}
//         {isMobile && (
//           <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-3xl">
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         )}
//       </div>

//       {/* Mobile Menu */}
//       {isMobile && isMenuOpen && (
//         <div className="flex flex-col items-center space-y-4 mt-4 pb-4 bg-black shadow-md">
//           <ul className={`${encoded.className} flex flex-col gap-4`}>
//             <li>
//               <a href="#" className="hover:text-blue-600">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-600">
//                 About Me
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-600">
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-600">
//                 Services
//               </a>
//             </li>
//           </ul>
//           <button className="bg-[#6780D9] px-4 py-2 text-white font-semibold rounded-xl">
//             Contact Me
//           </button>
//         </div>
//       )}
//     </nav>
//   )
// }

'use client'
import React, { useState, useEffect } from 'react'
import { Sora } from '@next/font/google'
import { Encode_Sans_Expanded } from '@next/font/google'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

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

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="w-full bg-transparent shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className={`${sora.className} text-xl font-bold text-white`}>
          {!isMenuOpen && <h1>PortFolio</h1>}
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            <ul className={`${encoded.className} flex gap-8`}>
              <li>
                <a href="#" className="hover:text-blue-600 text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 text-white">
                  Services
                </a>
              </li>
            </ul>
            <button className="bg-[#6780D9] px-4 py-2 text-white font-semibold rounded-xl">
              Contact Me
            </button>
          </div>
        )}

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-3xl text-white z-20"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* Mobile Sidebar Menu */}
      {isMobile && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black bg-opacity-100 text-white shadow-lg flex flex-col items-center pt-20 space-y-6 z-1 bg-blend-saturation"
        >
          <ul
            className={`${encoded.className} flex flex-col items-start gap-6 pl-6`}
          >
            <li>
              <a href="#" className="text-lg hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-blue-600">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-lg hover:text-blue-600">
                Services
              </a>
            </li>
          </ul>
          <button className="bg-[#6780D9] px-6 py-2 text-white font-semibold rounded-xl mt-4">
            Contact Me
          </button>
        </motion.div>
      )}
    </nav>
  )
}
