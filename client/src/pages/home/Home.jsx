import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Promoted from '../../components/promoted/Promoted'
import StateList from '../../components/stateList/StateList'

const Home = () => {
  return (
    <div>    
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Promoted />
        <h1 className="domesticTitle">Browse by State</h1>
        <StateList />
      </div>
      <Footer />
    </div>
  )
}

export default Home;