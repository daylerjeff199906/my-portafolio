import { Footer, NavBar } from '@/components'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
