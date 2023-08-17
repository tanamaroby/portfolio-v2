import { ReactNode } from "react"

export type NavItem = {
  key: string
  href: string
  image?: {
    src: string
  }
}

export const NAV_ITEMS: NavItem[] = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "about-me",
    href: "/",
  },
  {
    key: "logo",
    href: "/",
    image: {
      src: "https://avatars.githubusercontent.com/u/54106843?v=4",
    },
  },
  {
    key: "work",
    href: "/",
  },
  {
    key: "contact",
    href: "/",
  },
]
