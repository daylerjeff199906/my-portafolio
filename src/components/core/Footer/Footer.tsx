import { Divider } from '@nextui-org/react'

export const Footer = () => {
  return (
    <footer className="dark:bg-slate-900 dark:text-white">
      <Divider />
      <section className="container max-w-5xl py-4">
        <h3 className="text-center">
          © Made with{' '}
          <span className="text-red-500 inline-flex animate-love">❤</span> by
          Jeff | {new Date().getFullYear()}
        </h3>
      </section>
    </footer>
  )
}
