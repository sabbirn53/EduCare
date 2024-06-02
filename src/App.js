import { useState } from "react"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Programs from "./components/Programs/Programs"
import Testimonials from "./components/Testimonials/Testimonials"
import Title from "./components/Title/Title"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"


const App = () => {
  const [playerState,setPlayerState] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle={'Our Programs'} title={'What we Offer'}/>
        <Programs />
        <About setPlayerState={setPlayerState}/>
        <Title title={'Campus Photos'} subtitle={'Gallery'}/>
        <Campus/>
        <Title title={'What Students Says'} subtitle={'Testimonials'}/>
        <Testimonials/>
        <Title title={'Get In Touch'} subtitle={'Contact'} />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState}/>
    </>
  )
}

export default App