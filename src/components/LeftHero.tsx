// import React from 'react'
// import Image from 'next/image'

// export default function LeftHero() {
//   return (
//     <div>
//       <div className="relative h-72 w-72 lg:h-96 lg:w-96">
//         <div
//           className="absolute inset-0 rounded-full opacity-30"
//           style={{
//             background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
//             mixBlendMode: 'soft-light',
//           }}
//         ></div>
//         <div
//           className="absolute inset-0 rounded-full opacity-40 m-5"
//           style={{
//             background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
//             mixBlendMode: 'soft-light',
//           }}
//         ></div>
//         <div className="absolute inset-0 rounded-full opacity-60 m-10 bg-white z-40">
//           <Image
//             className="absolute inset-0 rounded-full m-5 z-50 -translate-y-16 -translate-x-5"
//             alt=""
//             quality={100}
//             src="/pic.png"
//             width={350}
//             height={350}
//           />
//         </div>
//         <div
//           className="absolute inset-0 rounded-full opacity-30 right-32 bottom-20"
//           style={{
//             background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
//             mixBlendMode: 'color',
//           }}
//         ></div>
//         <div
//           className="absolute inset-0 rounded-full opacity-40 left-32 top-20"
//           style={{
//             background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
//             mixBlendMode: 'color',
//           }}
//         ></div>
//         {/* pic */}
//       </div>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'

export default function LeftHero() {
  return (
    <div>
      <div className="relative h-72 w-72 lg:h-96 lg:w-96 mx-auto">
        {/* External gradient with animation */}
        <div
          className="absolute inset-0 rounded-full opacity-30 animate-expand-contract"
          style={{
            background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
            mixBlendMode: 'soft-light',
          }}
        ></div>

        {/* Middle layer with slower animation */}
        <div
          className="absolute inset-0 rounded-full opacity-40 m-5 animate-expand-contract-slow"
          style={{
            background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
            mixBlendMode: 'soft-light',
          }}
        ></div>

        {/* Image layer */}
        <div className="absolute inset-0 rounded-full opacity-60 m-10 bg-white z-40">
          <Image
            className="absolute inset-0 rounded-full m-5 z-50 -translate-y-16 -translate-x-5"
            alt="Hero"
            quality={100}
            src="/pic.png"
            width={350}
            height={350}
          />
        </div>

        {/* External gradients with animation */}
        <div
          className="absolute inset-0 rounded-full opacity-30 right-32 bottom-20 animate-expand-contract"
          style={{
            background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
            mixBlendMode: 'color',
          }}
        ></div>
        <div
          className="absolute inset-0 rounded-full opacity-40 left-32 top-20 animate-expand-contract"
          style={{
            background: 'radial-gradient(circle, #161499 9%, #FFFFFF 80%)',
            mixBlendMode: 'color',
          }}
        ></div>
      </div>
    </div>
  )
}
