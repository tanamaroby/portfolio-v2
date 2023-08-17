import { Button, Drawer, Layout, Row, Space } from "antd"
import { FC, PropsWithChildren, ReactNode, useState } from "react"
import MenuFoldOutlined from "@ant-design/icons/MenuFoldOutlined"
import { createStyles } from "antd-style"
import NavBar from "./NavBar"

const useStyles = createStyles(({ token }) => {
  return {
    header: {
      padding: token.paddingSM,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      color: token.colorWhite,
    },
  }
})

const { Header, Content } = Layout

const Dashboard: FC<PropsWithChildren> = (props) => {
  // Props
  const { children } = props
  const { styles } = useStyles()

  return (
    <Layout>
      <Header className={styles.header}>
        <NavBar />
      </Header>
      <Content>{children}</Content>
    </Layout>
  )
}

export default Dashboard
