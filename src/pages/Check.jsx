import Navbar from '../component/navbar/Navbar'
import Footer from '../component/footer/Footer'
import {useState} from "react";
import axios from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE__APP_URL,
    headers:{
        'Content-Type': 'application/json',

    },
});

const Check = () => {
    const [data, setData] = useState ({})
    const [response, setResponse] = useState ({})
    const [show, setShow] = useState (false)

    const handelSubmit = (e) => {
        e.preventDefault()

        client.get(`/certificate/check/?CertificateNumber=${data['CertificateNumber']}&Country=${data['Country']}`,).then((r)=>{
            if(r.status===200){
                console.log(r.data)
                setResponse(r.data)
                setShow(true)
            }
        })
    }
    const handelChange = (e) => {
        setData( {...data,[e.target.id]:e.target.value})
    }
  return (
    <>
      <Navbar/>
        <div className="main-content " style={{paddingTop:134}} >
      {show?(
              <section id="about">
                  <div className="container">
                      <div className="section-content">
                          <div className="row">

                              <div className="col-md-12">
                                  <h2 className="font-size-38 mt-0">Certified   <span className="text-theme-colored">Organization</span></h2>

                                  <div style={{overflow:"auto"}}>
                                      Please enter a valid Certificate No.

                                      <div className="table-responsive">
                                          <table className="table table-bordered" align="center">
                                              <thead>
                                              <tr>
                                                  <th style={{color:"#196ABB"}}>Company Name</th>
                                                  <td><b>{response.company}</b></td>

                                              </tr>

                                              <tr>
                                                  <th style={{color:"#196ABB"}}>Certificate No.</th>
                                                  <td><b>{response.Certificate_Number}</b></td>

                                              </tr>

                                              <tr>
                                                  <th style={{color:"#196ABB"}}>Address</th>
                                                  <td>{response.address}</td>

                                              </tr>
                                              <tr>
                                                  <th style={{color:"#196ABB"}}>Scope</th>
                                                  <td>{response.Scope}</td>

                                              </tr>

                                              <tr>
                                                  <th style={{color:"#196ABB"}}>Standard</th>
                                                  <td><b>{response.Standard}</b></td>

                                              </tr>

                                              <tr>
                                                  <th style={{color:"#196ABB"}}>Status</th>
                                                  <td><b>{response.Status}</b></td>

                                              </tr>

                                              <tr>
                                                  <th style={{color:"#196ABB"}}>Issue Date</th>
                                                  <td>{response.IssueDate}</td>

                                              </tr>

                                              <tr>
                                                  <th style={{color:"#196ABB"}}>Expiry Date</th>
                                                  <td>{response.ExpiryDate}</td>
                                              </tr>

                                              <tr>
                                                  <th style={{color:"#196ABB"}}>View Certificate</th>
                                                  <td><a href={response.certificate_file}>Click Me</a></td>
                                              </tr>
                                              </thead>

                                          </table>
                                      </div>


                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>


         ):

              <section id="about">
                  <div className="container">
                      <div className="section-content">
                          <div className="row">

                              <div className="col-md-12">
                                  <h2 className="font-size-38 mt-0">Track your   <span className="text-theme-colored">Organization Application Status  </span></h2>
                                  <p className="lead" >Track your Organization Application Status
                                      Tracking the organization application status is quite a short and simple process. Write your certification number and country. <br/>
                                          You can check your certificate status.

                                  </p>



                                  <form action="" name="org" method="POST">
                                      <table border="1" className={'table'}>
                                          <tbody>
                                          <tr>
                                              <td>Certificate Number*</td>
                                              <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                              <td><input onChange={handelChange} type="text" id={'CertificateNumber'} name="cno" className="form-control required"/></td>
                                          </tr>
                                          <tr>
                                              <td>Country*</td>
                                              <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                  <td><select name="cntry" id={'Country'} onChange={handelChange} size="1" className="form-control required email">
                                                          <option value="Afghanistan">Afghanistan</option>
                                                          <option value="Albania">Albania</option>
                                                          <option value="Algeria">Algeria</option>
                                                          <option value="Andorra">Andorra</option>
                                                          <option value="Angola">Angola</option>
                                                          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                          <option value="Argentina">Argentina</option>
                                                          <option value="Armenia">Armenia</option>
                                                          <option value="Australia">Australia</option>
                                                          <option value="Austria">Austria</option>
                                                          <option value="Azerbaijan">Azerbaijan</option>
                                                          <option value="Bahamas">Bahamas</option>
                                                          <option value="Bahrain">Bahrain</option>
                                                          <option value="Bangladesh">Bangladesh</option>
                                                          <option value="Barbados">Barbados</option>
                                                          <option value="Belarus">Belarus</option>
                                                          <option value="Belgium">Belgium</option>
                                                          <option value="Belize">Belize</option>
                                                          <option value="Benin">Benin</option>
                                                          <option value="Bhutan">Bhutan</option>
                                                          <option value="Bolivia">Bolivia</option>
                                                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                          <option value="Botswana">Botswana</option>
                                                          <option value="Brazil">Brazil</option>
                                                          <option value="Brunei">Brunei</option>
                                                          <option value="Bulgaria">Bulgaria</option>
                                                          <option value="Burkina Faso">Burkina Faso</option>
                                                          <option value="Burundi">Burundi</option>
                                                          <option value="Cabo Verde">Cabo Verde</option>
                                                          <option value="Cambodia">Cambodia</option>
                                                          <option value="Cameroon">Cameroon</option>
                                                          <option value="Canada">Canada</option>
                                                          <option value="Central African Republic">Central African Republic</option>
                                                          <option value="Chad">Chad</option>
                                                          <option value="Chile">Chile</option>
                                                          <option value="China">China</option>
                                                          <option value="Colombia">Colombia</option>
                                                          <option value="Comoros">Comoros</option>
                                                          <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                                          <option value="Congo, Republic of the">Congo, Republic of the</option>
                                                          <option value="Costa Rica">Costa Rica</option>
                                                          <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                                                          <option value="Croatia">Croatia</option>
                                                          <option value="Cuba">Cuba</option>
                                                          <option value="Cyprus">Cyprus</option>
                                                          <option value="Czech Republic">Czech Republic</option>
                                                          <option value="Denmark">Denmark</option>
                                                          <option value="Djibouti">Djibouti</option>
                                                          <option value="Dominica">Dominica</option>
                                                          <option value="Dominican Republic">Dominican Republic</option>
                                                          <option value="East Timor (Timor-Leste)">East Timor (Timor-Leste)</option>
                                                          <option value="Ecuador">Ecuador</option>
                                                          <option value="Egypt">Egypt</option>
                                                          <option value="El Salvador">El Salvador</option>
                                                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                          <option value="Eritrea">Eritrea</option>
                                                          <option value="Estonia">Estonia</option>
                                                          <option value="Eswatini">Eswatini</option>
                                                          <option value="Ethiopia">Ethiopia</option>
                                                          <option value="Fiji">Fiji</option>
                                                          <option value="Finland">Finland</option>
                                                          <option value="France">France</option>
                                                          <option value="Gabon">Gabon</option>
                                                          <option value="Gambia">Gambia</option>
                                                          <option value="Georgia">Georgia</option>
                                                          <option value="Germany">Germany</option>
                                                          <option value="Ghana">Ghana</option>
                                                          <option value="Greece">Greece</option>
                                                          <option value="Grenada">Grenada</option>
                                                          <option value="Guatemala">Guatemala</option>
                                                          <option value="Guinea">Guinea</option>
                                                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                          <option value="Guyana">Guyana</option>
                                                          <option value="Haiti">Haiti</option>
                                                          <option value="Honduras">Honduras</option>
                                                          <option value="Hungary">Hungary</option>
                                                          <option value="Iceland">Iceland</option>
                                                          <option value="India">India</option>
                                                          <option value="Indonesia">Indonesia</option>
                                                          <option value="Iran">Iran</option>
                                                          <option value="Iraq">Iraq</option>
                                                          <option value="Ireland">Ireland</option>
                                                          <option value="Israel">Israel</option>
                                                          <option value="Italy">Italy</option>
                                                          <option value="Jamaica">Jamaica</option>
                                                          <option value="Japan">Japan</option>
                                                          <option value="Jordan">Jordan</option>
                                                          <option value="Kazakhstan">Kazakhstan</option>
                                                          <option value="Kenya">Kenya</option>
                                                          <option value="Kiribati">Kiribati</option>
                                                          <option value="Korea, North">Korea, North</option>
                                                          <option value="Korea, South">Korea, South</option>
                                                          <option value="Kosovo">Kosovo</option>
                                                          <option value="Kuwait">Kuwait</option>
                                                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                          <option value="Laos">Laos</option>
                                                          <option value="Latvia">Latvia</option>
                                                          <option value="Lebanon">Lebanon</option>
                                                          <option value="Lesotho">Lesotho</option>
                                                          <option value="Liberia">Liberia</option>
                                                          <option value="Libya">Libya</option>
                                                          <option value="Liechtenstein">Liechtenstein</option>
                                                          <option value="Lithuania">Lithuania</option>
                                                          <option value="Luxembourg">Luxembourg</option>
                                                          <option value="Madagascar">Madagascar</option>
                                                          <option value="Malawi">Malawi</option>
                                                          <option value="Malaysia">Malaysia</option>
                                                          <option value="Maldives">Maldives</option>
                                                          <option value="Mali">Mali</option>
                                                          <option value="Malta">Malta</option>
                                                          <option value="Marshall Islands">Marshall Islands</option>
                                                          <option value="Mauritania">Mauritania</option>
                                                          <option value="Mauritius">Mauritius</option>
                                                          <option value="Mexico">Mexico</option>
                                                          <option value="Micronesia">Micronesia</option>
                                                          <option value="Moldova">Moldova</option>
                                                          <option value="Monaco">Monaco</option>
                                                          <option value="Mongolia">Mongolia</option>
                                                          <option value="Montenegro">Montenegro</option>
                                                          <option value="Morocco">Morocco</option>
                                                          <option value="Mozambique">Mozambique</option>
                                                          <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                                                          <option value="Namibia">Namibia</option>
                                                          <option value="Nauru">Nauru</option>
                                                          <option value="Nepal">Nepal</option>
                                                          <option value="Netherlands">Netherlands</option>
                                                          <option value="New Zealand">New Zealand</option>
                                                          <option value="Nicaragua">Nicaragua</option>
                                                          <option value="Niger">Niger</option>
                                                          <option value="Nigeria">Nigeria</option>
                                                          <option value="North Macedonia (formerly Macedonia)">North Macedonia (formerly Macedonia)</option>
                                                          <option value="Norway">Norway</option>
                                                          <option value="Oman">Oman</option>
                                                          <option value="Pakistan">Pakistan</option>
                                                          <option value="Palau">Palau</option>
                                                          <option value="Palestine">Palestine</option>
                                                          <option value="Panama">Panama</option>
                                                          <option value="Papua New Guinea">Papua New Guinea</option>
                                                          <option value="Paraguay">Paraguay</option>
                                                          <option value="Peru">Peru</option>
                                                          <option value="Philippines">Philippines</option>
                                                          <option value="Poland">Poland</option>
                                                          <option value="Portugal">Portugal</option>
                                                          <option value="Qatar">Qatar</option>
                                                          <option value="Romania">Romania</option>
                                                          <option value="Russia">Russia</option>
                                                          <option value="Rwanda">Rwanda</option>
                                                          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                          <option value="Saint Lucia">Saint Lucia</option>
                                                          <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                          <option value="Samoa">Samoa</option>
                                                          <option value="San Marino">San Marino</option>
                                                          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                          <option value="Saudi Arabia">Saudi Arabia</option>
                                                          <option value="Senegal">Senegal</option>
                                                          <option value="Serbia">Serbia</option>
                                                          <option value="Seychelles">Seychelles</option>
                                                          <option value="Sierra Leone">Sierra Leone</option>
                                                          <option value="Singapore">Singapore</option>
                                                          <option value="Slovakia">Slovakia</option>
                                                          <option value="Slovenia">Slovenia</option>
                                                          <option value="Solomon Islands">Solomon Islands</option>
                                                          <option value="Somalia">Somalia</option>
                                                          <option value="South Africa">South Africa</option>
                                                          <option value="South Sudan">South Sudan</option>
                                                          <option value="Spain">Spain</option>
                                                          <option value="Sri Lanka">Sri Lanka</option>
                                                          <option value="Sudan">Sudan</option>
                                                          <option value="Suriname">Suriname</option>
                                                          <option value="Sweden">Sweden</option>
                                                          <option value="Switzerland">Switzerland</option>
                                                          <option value="Syria">Syria</option>
                                                          <option value="Taiwan">Taiwan</option>
                                                          <option value="Tajikistan">Tajikistan</option>
                                                          <option value="Tanzania">Tanzania</option>
                                                          <option value="Thailand">Thailand</option>
                                                          <option value="Togo">Togo</option>
                                                          <option value="Tonga">Tonga</option>
                                                          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                          <option value="Tunisia">Tunisia</option>
                                                          <option value="Turkey">Turkey</option>
                                                          <option value="Turkmenistan">Turkmenistan</option>
                                                          <option value="Tuvalu">Tuvalu</option>
                                                          <option value="Uganda">Uganda</option>
                                                          <option value="Ukraine">Ukraine</option>
                                                          <option value="United Arab Emirates">United Arab Emirates</option>
                                                          <option value="United Kingdom">United Kingdom</option>
                                                          <option value="United States">United States</option>
                                                          <option value="Uruguay">Uruguay</option>
                                                          <option value="Uzbekistan">Uzbekistan</option>
                                                          <option value="Vanuatu">Vanuatu</option>
                                                          <option value="Vatican City">Vatican City</option>
                                                          <option value="Venezuela">Venezuela</option>
                                                          <option value="Vietnam">Vietnam</option>
                                                          <option value="Yemen">Yemen</option>
                                                          <option value="Zambia">Zambia</option>
                                                          <option value="Zimbabwe">Zimbabwe</option>
                                                      </select>
                                                  </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <p></p>

                                  <button type="submit"  onClick={handelSubmit} className="btn btn-dark btn-theme-colored btn-flat mr-5" data-loading-text="Please wait...">Submit</button>
                                  <p></p>
                                      </form>
                          </div>
                      </div>
                  </div>
                      </div>
        </section>


    }
</div>
      <Footer/>
    </>
  )
}

export default Check
