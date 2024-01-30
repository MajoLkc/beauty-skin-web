import { Route, Routes } from "react-router-dom"
import * as route from "../../routes"
import { Opening } from "../../pages/Opening"
import { ConfigProvider } from "antd"
import config from "../../config.json"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { Layout, LayoutContent } from "../PageLayout"
import { Contact } from "../../pages/Contact"
import { PriceList } from "../../pages/PriceList"
import { AboutUs } from "../../pages/AboutUs"
import { Services } from "../../pages/Services"

type ThemeData = {
  colorPrimary: string
  colorLink: string
  colorLinkActive: string
  colorLinkHover: string
}

const defaultData: ThemeData = {
  colorPrimary: config.primaryColor,
  colorLink: "black",
  colorLinkActive: config.secondaryColor,
  colorLinkHover: config.secondaryColor,
}

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: defaultData,
    }}
  >
    <Layout>
      <Header />
      <LayoutContent>
        <Routes>
          <Route path="/*" element={<Opening />} />
          {/* <Route path={route.OPENING} element={<Opening />} /> */}
          <Route path={route.ABOUT_US} element={<AboutUs />} />
          <Route path={route.SERVICES} element={<Services />} />
          <Route path={route.PRICE_LIST} element={<PriceList />} />
          <Route path={route.CONTACT} element={<Contact />} />
        </Routes>
      </LayoutContent>
      <Footer />
    </Layout>
  </ConfigProvider>
)

export default App
