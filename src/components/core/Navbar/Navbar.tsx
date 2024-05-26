import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
} from '@nextui-org/react'
// import { IconMoonFilled, IconBrightnessHalf } from '@tabler/icons-react'

const navbarOptions = [
  { label: 'Home', value: '#' },
  { label: 'About Me', value: 'about-me' },
  { label: 'Services', value: 'services' },
  { label: 'Projects', value: 'projects' },
]

export const NavBar = () => {
  return (
    <>
      <Navbar
        maxWidth="2xl"
        className="fixed shadow-md"
        shouldHideOnScroll
      >
        <NavbarBrand>
          <h1 className="text-xl font-bold dark:text-white">
            Jeff
            <span className="text-primary-500"> Santos</span>
          </h1>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        >
          {navbarOptions.map((option) => (
            <NavbarItem key={option.value}>
              <Button
                // onClick={() => handleScrollToProjects(option.value)}
                variant="light"
                // className={`font-semibold ${
                //   option.value === selectedValue
                //     ? 'text-primary-500'
                //     : 'text-gray-500'
                // }`}
              >
                {option.label}
              </Button>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="#"
              variant="bordered"
              className="text-white bg-primary-500 hover:bg-primary-600 border-primary-600"
            >
              Contact Me
            </Button>
          </NavbarItem>
          {/* <Switch
            thumbIcon={darkMode ? <IconMoonFilled /> : <IconBrightnessHalf />}
            onChange={handleDarkMode}
          /> */}
        </NavbarContent>
      </Navbar>
    </>
  )
}
