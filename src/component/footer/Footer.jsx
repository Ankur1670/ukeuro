import React from 'react'
import './footer.css'
import f1 from '../../assets/f1.png'
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaFirefoxBrowser } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer_section mt-5'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col md-3 col-sm-12">
<img src={f1} alt="" className='rounded mx-auto d-block ' />
                </div>
                <div className="col-lg-3 col md-3 col-sm-12">
                    <h4>Useful Links</h4>
                    <ul>
                       <li><a href="">Overview</a></li>
                       <li><a href="">EUALS News & Event</a></li>
                       <li><a href="">Enquire Now</a></li>
                       <li><a href="">Fee Criteria</a>  
</li>
                       <li><a href="">Check Accredited Body</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col md-3 col-sm-12">
                <h4>Accreditation Links</h4>
                    <ul>
                       <li><a href="">Know about Accreditation</a></li>
                       <li><a href="">How to Accredit your Org.</a></li>
                       <li><a href="">Advantage of Accreditation</a></li>
                       <li><a href="">EUALS Offers Accreditation
</a>  
</li>
                       <li><a href="">Product & Personal Certification</a></li>
                       <li><a href="">Rating</a></li>

                    </ul>
                </div>
                <div className="col-lg-3 col md-3 col-sm-12 add">
                    <h4>Get In Touch</h4>
                    <ul>
                        <li><CiLocationOn />
 <span>Gebirgsjaegerstrasse 29, Kirchdorf In Tirol, 6382, Austria</span></li>
                        <li><MdEmail />
 <span>info.eurouk@gmail.com</span></li>
                        <li><FaFirefoxBrowser />
<span>euroukals.org.uk</span></li>
                    </ul>
                </div>
            </div>

            
        </div>
       <div className="copyright_section">
        <div className="container">
            <h5 className="text-center">
            &copy; Copyright 2022 by Euro UK Accreditation Licensing Services | All rights reserved.



            </h5>
        </div>

       </div>
    </div>
  )
}

export default Footer
