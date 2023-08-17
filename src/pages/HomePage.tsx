import { Layout, Typography } from "antd"
import { FC } from "react"
import { createStyles, useTheme } from "antd-style"

const useStyles = createStyles(({ token, prefixCls }) => {
  return {
    layout: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [`& .${prefixCls}-typography`]: {
        color: token.colorWhite,
      },
    },
  }
})

const HomePage: FC = () => {
  const { styles } = useStyles()
  const token = useTheme()
  return (
    <Layout className={styles.layout}>
      <Typography.Title level={3}>Home</Typography.Title>
    </Layout>
  )
}

export default HomePage
