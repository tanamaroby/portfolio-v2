import { ThemeConfig } from "antd"

export const MAIN_BACKGROUND = "#0F103F"

// Ant Design configs
export const theme: ThemeConfig = {
  token: {
    colorPrimary: "red",
  },
  components: {
    Layout: {
      colorBgHeader: MAIN_BACKGROUND,
      colorBgBody: MAIN_BACKGROUND,
    },
  },
}
