import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="my_navbar">
          <div className="">
            <div className="main_logo">
              <img
                src="https://kamalcorporations.com/images/main_logo_circle.png"
                alt="main_logo"
              />
            </div>
            <div>
              <ul>
              <li>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="fa-2x icon_shade"
                  color="#0000ff"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fa-2x icon_shade"
                  color="#00ACEE"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fa-2x icon_shade"
                  color="#0E76A8"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faBars}
                  className="fa-2x icon_shade"
                  color="#0E76A8"
                />
              </li>
            </ul>
            </div>
            <div>
              <span id="company_name"> Kamal Corporations </span>
            </div>
          </div>
        </nav>
        <div id="main_section" className="section">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <img src="images/products/dal.jpg" class="d-block w-100" alt="acbd"/>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="images/products/atta.jpg" class="d-block w-100" alt="abcd"/>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="images/products/cake.jpg" class="d-block w-100" alt="a"/>
            </div>
          </div>
          {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
        </div>
        </div>
        <section id="companies" className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="section-title">
                <h1>
                  <span>Our</span> Products
                </h1>
              </div>
            </div>
            <div className="line">
              {/* <FontAwesomeIcon icon={ faAnchor } className="ln"/> */}
            </div>
            <div className="c_body">
                <div className="single">
                    <img src="images/company_logo/alam_trading_corp.png" alt="" className=""/>
                </div>
                <div className="single">
                  <img src="images/company_logo/agriculture.jpg" alt="" className=""/>
                </div>
                <div className="single">
                    <img src="images/company_logo/logistics.jpg" alt="" className=""/>
              </div>
              <div className="single">
                  <img src="images/company_logo/nargis_property.jpg" alt="" className=""/>
              </div>
              <div className="single">
                <img src="images/company_logo/infotech.png" alt="" className=""/>
              </div>
              <div className="single">
                  <img src="images/company_logo/joy_bangla_corp.jpg" alt="" className=""/>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        {/* <section id="partners" className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="section-title">
                <h1>
                  <span>Our</span> Partners
                </h1>
              </div>
            </div>
            <div className="line">
            </div>
            <div className="body">
                <div className="single">
                    
                </div>
                <div className="single">
                    
                </div>
                <div className="single">
                    
                </div>
            </div>
          </div>
        </section> */}
        {/* Partner Section End */}
        <section id="footer">
        <div className="container"></div>
          <footer>
            <section className="ft-main">
              <div className="ft-main-item">
                <h2 className="ft-title">Registered office</h2>
                <ul>
                  <li>
                    Sabera Bhavan,
                  </li>
                  <li>
                    D C Road,
                  </li>
                  <li>
                    West Bakoliya, 
                  </li>
                  <li>
                    Chawkbazar,
                  </li>
                  <li>
                    Chattogram,Bangladesh.
                  </li>
                  {/* <li><a href="#">Services</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Customers</a></li>
                  <li><a href="#">Careers</a></li> */}
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Liaison Office</h2>
                <ul>
                  <li>House 5/2,</li>
                  <li>Road 4,Khulshi R/A,</li>
                  <li>Zakir Hussain Road,</li>
                  <li>Chattogram,Bangladesh.</li>

                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Administration Office</h2>
                <ul>
                  <li>125,Sugandha Housing Society,</li>
                  <li>Road -1,Block - D</li>
                  <li>Chittagong, Bangladesh</li>
                </ul>
              </div>
            </section>

            <section className="ft-social">
              <ul className="ft-social-list">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-github"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </section>

            <section className="ft-legal">
              <ul className="ft-legal-list">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li>&copy; 2021 Copyright Kamal Corporations.</li>
              </ul>
            </section>
          </footer>
        </section>
      </div>
    );
  }
}
export default Home;
