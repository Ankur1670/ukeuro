import React ,{useState} from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
  return (
    <nav className="navbar">
    <div className="navbar-logo "><img className='img-fluid' src={logo} alt="" /></div>
    <ul className={isOpen ? "navbar-links active" : "navbar-links "}>
      <li><a href="/">Home</a></li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Overview</a></li>
            <li><a class="dropdown-item" href="#">News And Event </a></li>
            <li><a class="dropdown-item" href="#">Enquire Now</a></li>
          </ul>
        </li>
      <li><a href="/services">Check Certified Org.</a></li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accreditaion
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Known About Accreditaion </a></li>
            <li><a class="dropdown-item" href="#">Advantage of Accreditaion </a></li>
            <li><a class="dropdown-item" href="#">Product And Personal Certification</a></li>
            <li><a class="dropdown-item" href="#">Fee Criteria</a></li>
            <li><a class="dropdown-item" href="#">How to Accredit your Org.</a></li>
            <li><a class="dropdown-item" href="#">Ratings</a></li>
            <li><a class="dropdown-item" href="#">Check Accredict Body</a></li>




          </ul>
        </li>
      <li><a href="/contact">EUALS Inspection</a></li>
      <li><a href="/contact">Career</a></li>
      <li><a href="/contact">Contact</a></li>


      
    </ul>
    <button className="navbar-toggle" onClick={toggleNavbar}>
      <span className="navbar-toggle-icon"></span>
    </button>
  </nav>
  )
}

export default Navbar
