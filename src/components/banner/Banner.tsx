'use client'
import { OrbitingCirclesDemo } from './OrbitingCirclesDemo'

const text = 'Hi, I am Jefferson Santos'
const text2 = 'I am a Developer and Designer'

export const Banner = () => {
  return (
    <>
      <main className="h-screen flex flex-col sm:flex-row gap-2 items-center justify-center">
        <section className="w-full max-w-[32rem]">
          <OrbitingCirclesDemo />
        </section>
        <section className="w-full">
          <h3 className="text-[44px] text-center sm:text-start lg:text-7xl font-bold dark:text-white leading-10">
            {text}
          </h3>
          <h3 className="text-center sm:text-start text-2xl lg:text-4xl  dark:text-white">{text2}</h3>
        </section>
      </main>
    </>
  )
}
