import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Promoted from '../../components/promoted/Promoted'

const Home = () => {
  return (
    <div>    
      <Navbar />
      <Header />
      <div className='home-container'>
        <Promoted />
      </div>
      <Footer />
    </div>
  )
}

export default Home;