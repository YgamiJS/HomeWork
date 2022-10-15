import { Header , Footer } from './Components/HeaderFooter.jsx'
import Content from './Components/Content.jsx'
import Disqus from "./Components/Disqus.jsx"

export default function App() {
  return (
    <>
      <Header />
      <Content />
      <Disqus />
      <Footer />
    </>
  )
}
