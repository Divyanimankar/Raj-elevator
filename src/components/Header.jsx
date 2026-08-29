import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'
const links=[['/','Home'],['/about','About Us'],['/products','Products'],['/services','Services'],['/projects','Projects'],['/contact','Contact Us']]
export default function Header(){
const [open,setOpen]=useState(false)
return (
<header className="siteHeader">
  <div className="headerWrap">
    <Link className="brand" to="/" onClick={()=>setOpen(false)}>
      <span className="brandRaj">
        RAJ
        <small>
          ELEVATORS
        </small>
      </span>
      <span className="brandNidec">
        Nidec
        <small>
          Elevators
        </small>
      </span>
    </Link>
    <button className="menuBtn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
      {open?'×':'☰'}
    </button>
    <nav className={open?'nav open':'nav'}>
      {links.map(([to,label])=>
      <NavLink key={to} to={to} onClick={()=>setOpen(false)}>
        {label}
      </NavLink>
      )}
    </nav>
    <Link className="quoteBtn" to="/contact">
      Get Free Quote
    </Link>
  </div>
</header>
)}
