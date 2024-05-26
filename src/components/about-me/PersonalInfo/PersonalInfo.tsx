'use client'
import { Image, Button } from '@nextui-org/react'
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandGithub,
} from '@tabler/icons-react'
import Link from 'next/link'

const dataPerson = [
  {
    name: 'Name',
    value: 'JOSE JEFFERSON SANTOS PANAIFO',
  },
  {
    name: 'Email',
    value: 'daylersan@gmail.com',
  },
  {
    name: 'Date of birth',
    value: '06/11/1999',
  },
  {
    name: 'Phone',
    value: '+51 966 870 897',
  },
  {
    name: 'Address',
    value: 'Iquitos, Perú',
  },
]

export const PersonalInfo = () => {
  const socialMedia = [
    {
      name: 'linkedin',
      icon: <IconBrandLinkedin size={30} />,
      url_link:
        'https://linkedin.com/in/josé-jefferson-santos-panaifo-3668a7246',
    },
    {
      name: 'github',
      icon: <IconBrandGithub size={30} />,
      url_link: 'https://gist.github.com/daylerjeff199906',
    },
    {
      name: 'twitter',
      icon: <IconBrandTwitter size={30} />,
      url_link: 'https://twitter.com/pananifo	',
    },
    {
      name: 'instagram',
      icon: <IconBrandInstagram size={30} />,
      url_link: 'https://www.instagram.com/daylerjeff/',
    },
  ]

  return (
    <>
      <main id="about-me">
        <section className="container dark:text-white section-home">
          <div className="block sm:grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-6 pb-10">
            <div className="relative w-full h-full  overflow-hidden py-0 sm:py-8">
              <div className="absolute inset-0 z-10">{/* <BgSvg /> */}</div>
              <div className="relative flex flex-col items-center text-center z-20 w-full h-ful">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image
                    alt="photo.jpg"
                    src={
                      'https://avatars.githubusercontent.com/u/104048237?s=400&u=11d8eacb3fbb68e8deb6c88c790e2f44f797fb89&v=4'
                    }
                    className="w-56 h-56 rounded-full"
                  />
                </div>
                <div className="flex gap-2 pt-4 items-center text-center">
                  {socialMedia?.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url_link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-gray-600"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
                <div className="pt-4">
                  <Button
                    color="success"
                    className="text-white font-bold"
                  >
                    Descargar CV
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-4xl font-bold dark:text-white">About me </h3>
              <h3 className="dark:text-white">
                I am a freelance junior front-end developer and designer based
                in Iquitos, Perú. My passion lies in coding and crafting
                visually appealing web components for clients across the globe.
                I thrive on collaborating with new individuals, as it brings
                forth not only exciting projects but also enriching experiences.
                Let s create something amazing together!
              </h3>
              <div className="block sm:grid grid-cols-2">
                {dataPerson.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    <h3 className="text-slate-800 font-bold dark:text-white">
                      {item.name} :
                    </h3>
                    <h3 className="text-slate-800 dark:text-white">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
