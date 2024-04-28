import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'
import user from '../../assets/user.png'
import lis from '../../assets/lis.png'
import o1 from '../../assets/o1.png'
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3   from '../../assets/a3.png'
import a4 from '../../assets/a4.png'
import a5 from '../../assets/a5.png'
import a6 from '../../assets/a6.png'
import a7 from '../../assets/a7.png'

import b8 from '../../assets/b1.png'
import b9 from '../../assets/b2.png'
import b10   from '../../assets/b3.png'
import b4 from '../../assets/b4.png'
import b5 from '../../assets/b5.png'
import b6 from '../../assets/b6.png'
import b7 from '../../assets/b7.png'

import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3   from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
import c6 from '../../assets/c6.png'
import c7 from '../../assets/c7.png'

import React from 'react'
import './banner.css'
const Banner = () => {
    const height='650vh'
  return (
    <div className='Image_Section '>
      <Carousel
            interval={1000000}
        >
            <Carousel.Item interval={1000000}>
                <div className='a'></div>
            <Image 
                src={b1}
                width='100%'
                height={height}
                className={'Carousel-img object-fit-cover '}

            />
     <Carousel.Caption >
          <h1>International <span>Certification</span> Accreditation Body <br />
          <button className="btn">Read More</button>
          </h1>
          
        </Carousel.Caption>
           
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <div className='a'></div>
            <Image
                src={b2}
                width='100%'
                height={height}
                
                className={'Carousel-img object-fit-cover '}


            />
     <Carousel.Caption>
          <h1>Euro Uk <span>Independent</span> Impartial Accreditation Body 

        <br />  <button className="btn">Read More</button>
 </h1>
        </Carousel.Caption>
           
        </Carousel.Item>
        <Carousel.Item interval={1000000}>
        <div className='a'></div>
            <Image
                src={b3}
                width='100%'
                height={height}
                className={'Carousel-img object-fit-cover '}
                

            />
             <Carousel.Caption>
          <h1>Euro Uk <span>Global</span>  Accreditation-Body  <br />
          <button className="btn ">Read More</button>

          </h1>
          
        </Carousel.Caption>
           
        </Carousel.Item>
           
          

        </Carousel>
<div className="card_Section my-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
                <div className="card">
<img src={user} alt="" />
                    <div className="card-body">
                        <h4 className='card-title'> Management System</h4>
                        <p className="card-text">Management system certification provided by Swed under such sections. ISO stands for International Organization for Standardization.</p>
                        <a href="/check" className="btn">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 px-0 ">
            <div className="card c2">
<img src={user} alt="" />
                    <div className="card-body">
                        <h4 className='card-title'> Search Accredited Body</h4>
                        <p className="card-text">Want to check the name of an accredited body to verify the accreditation level (Management System Standard / Product & Personal Certification / Rating etc.</p>
                        <a href="/check" className="btn">Check Now</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <div className="card">
<img src={user} alt="" />
                    <div className="card-body">
                        <h4 className='card-title'> Check Certified Company</h4>
                        <p className="card-text">Please check out the status of your company for the level (management system standard/product & personal certification/rating etc.)</p>
                        <a href="/check" className="btn">Check Now</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 px-0">
            <div className="card c2">
<img src={user} alt="" />
                    <div className="card-body">
                        <h4 className='card-title'> Become accredited</h4>
                        <p className="card-text">first of All will have to enquire about the requirement in your segment. Submit the application form including with accreditation fee</p>
                        <a href="/check" className="btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="lis_section">
<div className="container">
    <div className="row">
        <div className="col-lg-7 col-md-7 col-sm-12 ">
            <h2>Swed Uk Licserv LICENSING SERVICES
</h2>
<p>We, Swed Accreditation Licensing Services is self certification & inspection body providing value added services in all types of certification & inspection to big and small organizations.
</p>
<p>We have vast experience in <b> different sectors like Food Industry, Institutions, Business Services, Manufacturing, Construction etc.
</b>
</p>
<p>Our certification is valid for national and internationally tender. We provide hazel free process including best service & prices.

</p>
<button className="btn">Read More</button>

        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
<img src={lis} alt="" className="img-fluid my-4" />
        </div>
    </div>
</div>
</div>

<div className="offer_section">
    <div className="container">
        <h2 className="text-center mt-5">Swed OFFERS ACCREDITATION
</h2>
<img src={o1} alt="" className='rounded mx-auto d-block mt-1' />
<p className="text-center">Swed offers accreditation for the following management system certification schemes:

</p>
<div className="row">
    <div className="col-lg-3 col-md-3 col-sm-12 offer_img">
<img src={a1} alt="" /> <span>Aerospace</span> <br />
<img src={a2} alt="" /> <span> Body Armour</span> <br />
<img src={a3} alt="" /> <span> Education</span> <br />
<img src={a4} alt="" /> <span> Energy</span> <br />
<img src={a5} alt="" /> <span>Environmental</span> <br />
<img src={a6} alt="" /> <span>Food Safety</span> <br />
<img src={a7} alt="" /> <span>Recycling</span>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 offer_img">
    <img src={b8} alt="" /> <span>Forestry</span> <br />
<img src={b9} alt="" /> <span>   HSPM

</span> <br />
<img src={b10} alt="" /> <span>   In Development

</span> <br />
<img src={b4} alt="" /> <span>   Info Security

</span> <br />
<img src={b5} alt="" /> <span>Supply Chain</span> <br />
<img src={b6} alt="" /> <span>Telecommunications</span> <br />
<img src={b7} alt="" /> <span>Responsible Care</span>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-12 offer_img">
    <img src={c1} alt="" /> <span>  IT Service

</span> <br />
<img src={c2} alt="" /> <span> Medical Devices</span> <br />
<img src={c3} alt="" /> <span> OHSMS</span> <br />
<img src={c4} alt="" /> <span> OREMBCMS</span> <br />
<img src={c5} alt="" /> <span>Preparedness</span> <br />
<img src={c6} alt="" /> <span>Quality</span> <br />
<img src={c7} alt="" /> <span>Manufacturing</span>
    </div>
</div>
    </div>
</div>
    </div>
  )
}

export default Banner
