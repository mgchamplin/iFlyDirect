import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import List from '../list/List'

const Home = () => {
  return (
    <div>    
      <Navbar />
      <Header />
      <List />
      <Footer />
    </div>
  )
}

export default Home;