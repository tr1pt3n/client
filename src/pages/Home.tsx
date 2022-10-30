import About from '../components/About'
import Articles from '../components/Articles'
import Community from '../components/Community'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

const Home = () => {

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-[1140px]">
        <Hero />
        <About />
        <Main />
        <Community />
        <Articles />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home