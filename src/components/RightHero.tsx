// 'use client'
// import React from 'react'
// import { Sora } from '@next/font/google'
// import { Typewriter } from 'react-simple-typewriter'
// import { Encode_Sans_Expanded } from '@next/font/google'
// import { FaInstagram } from 'react-icons/fa6'
// import { BsLinkedin } from 'react-icons/bs'
// import { BsTwitterX } from 'react-icons/bs'
// import { ImGithub } from 'react-icons/im'

// const sora = Sora({
//   weight: '800',
//   subsets: ['latin'],
// })

// const encoded = Encode_Sans_Expanded({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
// })
// export default function RightHero() {
//   return (
//     <div>
//       <div
//         className="absolute inset-0 rounded-full opacity-30 w-[25%] h-[40%] top-[20%] left-20"
//         style={{
//           background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
//           mixBlendMode: 'color',
//         }}
//       ></div>
//       <div className="flex flex-col translate-y-16">
//         <div className={`${sora.className} text-4xl`}>
//           <h1 className="text-5xl font-black">
//             Hey I'm <br />
//             <span>
//               {' '}
//               <Typewriter
//                 words={[
//                   'Divyanshu Sharma',
//                   'a Full Stack Developer',
//                   'a Freelancer',
//                   'a ui/ux designer',
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={90}
//                 deleteSpeed={50}
//                 delaySpeed={1000}
//               />
//             </span>
//           </h1>
//         </div>
//         <p className={`${encoded.className} max-w-sm font-normal text-xs mt-6`}>
//           Hello Guys, I am Full Stack Web Developer, I Have 20+ Years Of Exp.
//           This pportfoli
//         </p>
//         <div className="flex gap-5 mt-7">
//           <button className="btn">Hire Me</button>

//           <div className="button">
//             <div className="button-wrapper">
//               <div className="text">Resume</div>
//               <span className="icon">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   aria-hidden="true"
//                   role="img"
//                   width="2em"
//                   height="2em"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fill="none"
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
//                   ></path>
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-6 mt-7 text-3xl">
//           <FaInstagram className="hover:scale-110 cursor-pointer hover:text-blue-600" />
//           <BsTwitterX className="hover:scale-110 cursor-pointer hover:text-blue-600" />
//           <ImGithub className="hover:scale-110 cursor-pointer hover:text-blue-600" />
//           <BsLinkedin className="hover:scale-110 cursor-pointer hover:text-blue-600" />
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import React from 'react'
import { Sora } from '@next/font/google'
import { Typewriter } from 'react-simple-typewriter'
import { Encode_Sans_Expanded } from '@next/font/google'
import { FaInstagram } from 'react-icons/fa6'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitterX } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'

const sora = Sora({
  weight: '800',
  subsets: ['latin'],
})

const encoded = Encode_Sans_Expanded({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RightHero() {
  return (
    <div className="relative flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left px-6 lg:px-0">
      <div
        className="absolute inset-0 rounded-full opacity-50 w-[70%] sm:w-[80%] lg:w-[45%] h-[40%] sm:h-[40%] top-[15%] lg:top-[20%] left-10 lg:left-0 sm:left-20"
        style={{
          background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
          mixBlendMode: 'color',
        }}
      ></div>

      <div className="flex flex-col translate-y-16">
        <div className={`${sora.className} text-3xl sm:text-4xl lg:text-5xl`}>
          <h1 className="font-black">
            Hey, I'm <br />
            <span>
              <Typewriter
                words={[
                  'Divyanshu Sharma',
                  'a Full Stack Developer',
                  'a Freelancer',
                  'a UI/UX Designer',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <p
          className={`${encoded.className} max-w-xs sm:max-w-sm lg:max-w-md font-normal text-xs sm:text-sm mt-6`}
        >
          Hello Guys, I am a Full Stack Web Developer. I have 20+ years of
          experience. This is my portfolio.
        </p>

        <div className="flex sm:flex-row gap-5 mt-7 mx-auto lg:mx-0">
          <button className="btn">Hire Me</button>

          <div className="button">
            <div className="button-wrapper">
              <div className="text">Resume</div>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-7 text-2xl sm:text-3xl justify-center lg:justify-start">
          <FaInstagram className="hover:scale-110 cursor-pointer hover:text-blue-600" />
          <BsTwitterX className="hover:scale-110 cursor-pointer hover:text-blue-600" />
          <ImGithub className="hover:scale-110 cursor-pointer hover:text-blue-600" />
          <BsLinkedin className="hover:scale-110 cursor-pointer hover:text-blue-600" />
        </div>
      </div>
    </div>
  )
}
