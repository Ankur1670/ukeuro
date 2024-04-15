import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
const Contact = () => {
    return (
        <>
            <Navbar/>
            <div className="main-content" style={{paddingTop:134}}>
                  <section className="divider">
                    <div className="container">
                        <div className="row pt-30">
                            <div className="col-md-6">
                                <h3 className="line-bottom mt-0 mb-30">Fill the Enquiry form !</h3>

                                <form id="contact_form" name="contact_form" className="" action="#" method="post">

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Name <small>*</small></label>
                                                <input name="form_name" className="form-control" type="text" placeholder="Enter Name" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Email <small>*</small></label>
                                                <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Subject <small>*</small></label>
                                                <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                        <button type="submit" className="btn btn-dark btn-theme-colored btn-flat mr-5" data-loading-text="Please wait...">Send your message</button>
                                    </div>
                                </form>



                            </div>
                            <div className="col-md-6">
                                <h3 className="line-bottom mt-0">Get in touch with us</h3>

                                <ul className="styled-icons icon-dark icon-sm icon-circled mb-20 " style={{height:30}}>
                                    <li><a href="#" style={{backgroundColor:"#3B5998"}} ><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" style={{backgroundColor:"#02B0E8"}} data-bg-color="#02B0E8"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#" style={{backgroundColor:"#D71619"}} data-bg-color="#D71619"><i className="fa-brands fa-youtube"></i></a></li>

                                </ul>

                                <div className="icon-box media mb-15">
                                    <a className="media-left pull-left flip mr-20" href="#"> <i className="pe-7s-map-2 text-theme-colored"></i></a>
                                    <div className="media-body">
                                        <h5 className="mt-0">Office Location</h5>
                                        <p>{localStorage.getItem('address')}</p>
                                    </div>
                                </div>

                                <div className="icon-box media mb-15"> <a className="media-left pull-left flip mr-15" href="#"> <i className="pe-7s-mail text-theme-colored"></i></a>
                                    <div className="media-body">
                                        <h5 className="mt-0">Email Address</h5>
                                        <p><a href="#"> {localStorage.getItem('email')}</a></p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.6780377747436!2d12.443400215628747!3d47.5545946791812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47764ff08256e081%3A0x69c2b44ac6b87cd2!2sGebirgsj%C3%A4gerstra%C3%9Fe%2029%2C%206382%20Kirchdorf%20in%20Tirol%2C%20Austria!5e0!3m2!1sen!2sin!4v1572676282991!5m2!1sen!2sin" width="600" height="350" style="border:0;" ></iframe>*/}



                    {/*</div>*/}
            {/*</div>*/}
        </div>
</section>


</div>
            <Footer/>
        </>
    )
}

export default Contact
