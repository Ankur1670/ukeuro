import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
const Fee = () => {
  return (
    <div>
       <Navbar/>
       <section id="about" style={{paddingTop:134, marginLeft:20}}>
      <div class="container">
        <div class="section-content">
          <div class="row">
            
            <div class="col-md-12">
              <h2 class="font-size-38 mt-0">Fee <span style={{color:"#364182"}}> Criteria</span></h2>
              
               <p class="lead " align="justify">
               
             <strong>  The fee structure is based on the following criteria:</strong><br/><br/>


<strong>Registration fee:</strong>
This is the initial amount paid by the applicant organization to continue the desired accreditation program. This must be paid in advance.<br/><br/>


<strong>Program fee:</strong>
The program fee is the amount paid for the desired accreditation and does not include assessment, travel, accommodation, boarding and translation fees, etc.<br/><br/>


<strong>Assessment fe:e</strong>
The amount paid for the participation of the auditor and technical expert or other necessary resources.<br/><br/>


<strong>Certification fee:</strong>
This amount is paid by a certificate issued by the organizations.<br/><br/>


<strong>For detailed information:</strong><br/>


Download tariff structure<br/>


Write to <strong>info.eurouk@gmail.com</strong><br/><br/>



<strong>Payment method:</strong>
Payment can be made by bank transfer / PayPal. 

              </p>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </div>
  )
}

export default Fee
