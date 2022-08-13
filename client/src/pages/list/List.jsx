import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
// import "./list.css"

const List = () => {
  return (
    <div className='styled-list-field'>
      <div>
        <Navbar />
        {/* passing in prop-type hides search bar */}
        <Header type="list"/>
      </div>
    </div>
  )
}

export default List