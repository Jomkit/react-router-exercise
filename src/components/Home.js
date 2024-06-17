import React from 'react'
import "../stylesheets/Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home-vendingmachine'>
      <div className='Home'>
          <h1>Select your drink/snack</h1>
          <Link to="/coolish">Coolish</Link>
          <Link to="/famichiki">FamilyMart Chicken</Link>
          <Link to="/coffee-jelly">Coffee Jelly</Link>
      </div>

    </div>
  )
}

export default Home