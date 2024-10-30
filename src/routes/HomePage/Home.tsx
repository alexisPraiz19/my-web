// Componentes de complementación
import Nav from "./components/Nav/Nav.tsx"
import Hero from "./components/Hero/Hero.tsx"
import Main from "./components/Main/Main.tsx"
import About from "./components/About/About.tsx"
import Footer from "./components/Footer/Footer.tsx"

export default function Home(){
  return (
    <>
      <Nav/>
      <Hero/>
      <Main/>
      <About/>
      <Footer/>
    </>
  )
}