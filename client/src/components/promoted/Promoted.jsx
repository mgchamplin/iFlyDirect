import React from 'react'
import "./promoted.css"

const Promoted = () => {
  return (
    <div className='promoted'>
      <div className='promotedItem'>
        <img src='https://images.unsplash.com/photo-1558983731-16245204a27d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80' alt="Maui, Hawaii, USA by Pascal Debrunner - Michael's Pick" className='promotedImg grow'/>
        <div className="promotedTitles">
          {/* <h1>Maui, Hawaii, USA</h1> */}
          {/* count by useState */}
          <h2>Maui, Hawaii</h2>
        </div>
      </div>
      <div className='promotedItem'>
        <img src='https://images.unsplash.com/photo-1545333547-01945a994684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="Kualoa Ranch, Kaneohe, Hawaii, United States by Seth Cottle - Anne's Pick" className='promotedImg grow'/>
        <div className="promotedTitles">
          {/* <h1>Kualoa Ranch, Kaneohe, Hawaii, United States</h1> */}
          <h2>Kualoa Ranch, Hawaii</h2>
        </div>
      </div>
      <div className='promotedItem'>
        <img src='https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="Kauai County, Hawaii, USA by Braden Jarvis - Paul's Pick" className='promotedImg grow'/>
        <div className="promotedTitles">
          {/* <h1>Kauai County, United States</h1> */}
          <h2>Kauai County, Hawaii</h2>
        </div>
      </div>

      
    </div>
  )
}

export default Promoted
