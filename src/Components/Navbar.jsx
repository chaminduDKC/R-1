import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to='/'><i class="fa fa-home" aria-hidden="true"></i></Link>
        <Link to="/about"><i class="fa fa-th-large" aria-hidden="true"></i></Link>
      </ul>
    </div>
  )
}

export default Navbar
