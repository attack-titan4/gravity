import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Herobanner from '../Middlehome/Herobanner'
import HorizontalScroll from './HorizontalScroll'
import Middlehome from '../Middlehome/Middlehome'

const Home = () => {
  return (
    <>
 
      <Header/>
      <Herobanner/>
      <HorizontalScroll/>
      <Middlehome/>
      <Footer/>
    </>
  )
}

export default Home