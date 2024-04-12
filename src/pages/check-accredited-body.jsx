import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'

const CheckAccreditedBody = () => {
    return (
        <>
            <Navbar/>
            <div className="main-content " style={{paddingTop:134}} >
                <section id="about">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">

                                <div className="col-md-12">
                                    <h2 className="font-size-38 mt-0">Check <span className="text-theme-colored"> Accredited Body </span></h2>
                                    <p className="lead" align="justify">If you want to consult the name of a recognized organization to verify the recognized criteria (management system standard / product certification / personal certification / evaluation), you can do the following search:

                                    </p>



                                    <form action="result.php" name="org" method="POST">
                                        <table border="1" className={'table'}>
                                            <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                <td><input type="text" name="cno" className="form-control required"/></td>
                                            </tr>
                                            <tr>
                                                <td>Country*</td>
                                                <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                <td><input className="form-control required"/></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <p></p>

                                        <button type="submit" className="btn btn-dark btn-theme-colored btn-flat mr-5" data-loading-text="Please wait...">Submit</button>
                                        <p></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            <Footer/>
        </>
    )
}

export default CheckAccreditedBody
