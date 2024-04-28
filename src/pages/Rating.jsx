import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
const Rating = () => {
  return (
    <div>
      <Navbar/>
      <section id="about" style={{paddingTop:134, marginLeft:20}}>
      <div class="container">
        <div class="section-content">
          <div class="row">
            
            <div class="col-md-12">
              <h2 class="font-size-38 mt-0">Rating <span class="text-theme-colored"> </span></h2>
              
               <p class="lead " align="justify">Stars are often used as symbols for classification purposes. Critics use them to classify items such as films, TV shows, restaurants, and hotels. For example, one to five stars are commonly used to classify hotels.<br/><br/>


Accredits conformity assessment bodies (CABs) that provide ratings according to a set of common quality standards recognized by Swed authorities.<br/><br/>

 Swed welcomes new CABs interested in applying; however, the CAB must be aware that it must demonstrate that it is capable of providing evaluation services.

Our accreditation services are classified for scoring<br/><br/>


<strong>Product reviews</strong><br/>

Memos (for example, hotels, restaurants, businesses, etc.) 

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

export default Rating
