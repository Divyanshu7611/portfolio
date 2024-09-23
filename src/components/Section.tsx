'use client'
import React from 'react'
import { Encode_Sans_Expanded } from '@next/font/google'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { TracingBeam } from '../components/ui/tracing-beam'
import { CardSpotlight } from './ui/card-spotlight'
import { CardSpotlightDemo } from './CardSpotlightDemo'
import { CardDemo } from './CardDemo'
import { SignupFormDemo } from './SignupFormDemo'

const encoded = Encode_Sans_Expanded({
  weight: '700',
  subsets: ['latin'],
})

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-20">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className={twMerge(encoded.className, 'text-xl mb-4')}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}

        {/* projecs section */}
        <h1 className={twMerge(encoded.className, 'text-xl mb-4')}>PROJECTS</h1>
        <div className="flex gap-10 lg:flex-row flex-col mt-10">
          <CardSpotlightDemo />
          <CardSpotlightDemo />
        </div>
        <div className="flex gap-10 lg:flex-row flex-col mt-10">
          <CardSpotlightDemo />
          <CardSpotlightDemo />
        </div>

        <h1 className={twMerge(encoded.className, 'text-xl mb-4 mt-10')}>
          SKILLS
        </h1>
        <CardDemo />
        <SignupFormDemo />
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: 'ABOUT ME',
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
      </>
    ),
  },
]
