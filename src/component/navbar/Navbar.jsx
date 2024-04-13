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
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/overview">Overview</a></li>
            <li><a className="dropdown-item" href="/newsevent">News And Event </a></li>
            <li><a className="dropdown-item" href="#">Enquire Now</a></li>
          </ul>
        </li>
      <li><a href="/check">Check Certified Org.</a></li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accreditaion
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/knowabout">Known About Accreditaion </a></li>
            <li><a className="dropdown-item" href="/advantages">Advantage of Accreditaion </a></li>
            <li><a className="dropdown-item" href="/product">Product And Personal Certification</a></li>
            <li><a className="dropdown-item" href="/fee">Fee Criteria</a></li>
            <li><a className="dropdown-item" href="howto">How to Accredit your Org.</a></li>
            <li><a className="dropdown-item" href="/rating">Ratings</a></li>
            <li><a className="dropdown-item" href="/CheckAccreditedBody">Check Accredict Body</a></li>




          </ul>
        </li>
      <li><a href="/inspection">EUALS Inspection</a></li>
      <li><a href="/career">Career</a></li>
      <li><a href="/contact">Contact</a></li>


      
    </ul>
    <button className="navbar-toggle" onClick={toggleNavbar}>
      <span className="navbar-toggle-icon"></span>
    </button>
  </nav>
  )
}

export default Navbar
