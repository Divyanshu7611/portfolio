import React from 'react'
import LeftHero from './LeftHero'
import RightHero from './RightHero'
import { Boxes } from './ui/BackgroundBoxes'

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



// import React from "react";

// export function GridBackgroundDemo() {
//   return (
//     <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
//         Backgrounds
//       </p> */}
//       <div className="flex justify-between lg:w-[1200px] mx-auto lg:flex-row flex-col-reverse lg:min-h-screen items-center mt-20 lg:mt-0">
// //       <div className="lg:w-2/4">
// //         <RightHero />
// //       </div>
// //       <div className="lg:w-2/4">
// //         <LeftHero />
// //       </div>
// //     </div>

//     </div>
//   );
// }
