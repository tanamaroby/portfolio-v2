"use client"
import Dashboard from "@/components/Dashboard"
import HomePage from "@/pages/HomePage"
import { theme } from "@/utils/config"
import { ConfigProvider } from "antd"

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <Dashboard>
        <HomePage />
      </Dashboard>
    </ConfigProvider>
  )
}
