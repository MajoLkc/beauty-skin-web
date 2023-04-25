import { Layout as AntLayout } from "antd"

const { Header, Content, Footer } = AntLayout

export const Layout: React.FC = () => <AntLayout />

export const LayoutHeader: React.FC = () => <Header />

export const LayoutContent: React.FC = () => <Content />

export const LayoutFooter: React.FC = () => <Footer />
