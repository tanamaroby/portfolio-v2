import { Avatar, Image, Row, Space, Typography } from "antd"
import { isNil, map, startCase, toLower } from "lodash"
import { FC } from "react"
import { createStyles, useTheme } from "antd-style"
import { NAV_ITEMS, NavItem } from "@/constants/NAVIGATION"
import Link from "next/link"

const NavBar: FC = () => {
  const token = useTheme()
  return (
    <Space align="center" size={64}>
      {/*  Items */}
      {map(NAV_ITEMS, (item: NavItem) => {
        const { key, href, image } = item
        const { src } = image ?? {}
        return (
          <Link href={href}>
            {isNil(src) ? (
              <Typography.Text
                strong
                style={{
                  color: token.colorWhite,
                }}
              >
                {startCase(toLower(key))}
              </Typography.Text>
            ) : (
              <Avatar src={src} alt="logo-image" size={50} />
            )}
          </Link>
        )
      })}
    </Space>
  )
}

export default NavBar
