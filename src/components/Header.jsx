import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css';
import rajLogo from "../assets/images/rajBlack1.png";
import nidecLogo from "../assets/images/nidec1.png";

import quotationPdf from "../assets/images/rajNidec.pdf";

const links=[['/','Home'],['/about','About Us'],['/products','Products'],['/services','Services'],['/projects','Projects'],['/contact','Contact Us']]

export default function Header(){
const [open,setOpen]=useState(false)
return (
<header className="siteHeader">
  <div className="headerWrap">
    <Link className="brand" to="/" onClick={()=>setOpen(false)}>
      <img src={rajLogo} alt="Raj Elevators" className="brandRaj" />
      <img src={nidecLogo} alt="Nidec Elevator" className="brandNidec" />
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

    <a className="quoteBtn" href={quotationPdf}
  download="Raj-Elevators-Quotation.pdf">
      Get Free Quote
    </a>
  </div>
</header>
)}