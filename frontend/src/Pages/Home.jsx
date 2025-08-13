import React from 'react'
import { HeroSection } from '../components/HeroSection'
import About from '../components/about'
import Qualities from '../components/qualities'
import Menu from '../components/Menu'
import Team from '../components/Team'
import WhoAreWe from '../components/WhoAreWe'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Team/>
      <WhoAreWe/>
    </div>
  )
}

export default Home
