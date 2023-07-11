import React from 'react'
import {Hero, Features, Qna, Download, Faq, Queries, Navbar, Footer} from '../components'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Qna/>
    <Download/>
    <Faq/>
    <Queries/>
    <Footer/>
    </>
  )
}

export default Home