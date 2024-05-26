'use client'
import { Button } from '@nextui-org/react'
import { TypingAnimation } from '..'
import { OrbitingCirclesDemo } from './OrbitingCirclesDemo'

const text = 'Hi, I am Jefferson Santos'
const text2 = 'I am a Developer and Designer'

export const Banner = () => {
  return (
    <>
      <main className="h-screen flex flex-col  sm:flex-row gap-2 sm:gap-5 items-center justify-center">
        <section className="w-full max-w-[32rem]">
          <OrbitingCirclesDemo />
        </section>
        <section className="w-full flex flex-col gap-1 sm:gap-3">
          <h3 className="text-[44px] text-center sm:text-start lg:text-7xl font-bold dark:text-white leading-10">
            {text}
          </h3>
          <TypingAnimation
            className="text-center sm:text-start text-2xl lg:text-4xl  dark:text-white"
            text={text2}
          />
          <div className="flex flex-col items-center sm:items-start">
            <Button
              radius="full"
              className="button"
            >
              Ver mis proyectos
            </Button>
          </div>
        </section>
      </main>
    </>
  )
}
