import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";
import Footer from "../footer/Footer"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <section id="main_section" className="section">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            {/* <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol> */}
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="3000" >
                <img src="images/products/laptop1.jpg" class="d-block w-100" alt="acbd" />
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="images/products/pen.jpg" class="d-block w-100" alt="abcd"/>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="images/products/rice0.jpg" class="d-block w-100" alt="abcd"/>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="images/products/vehicle.jpg" class="d-block w-100" alt="a"/>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="images/products/stationary.jpg" class="d-block w-100" alt="abcd"/>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="images/products/cookies.jpg" class="d-block w-100" alt="a"/>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="images/products/4.jpg" class="d-block w-100" alt="a"/>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="images/products/rice2.png" class="d-block w-100" alt="a"/>
              </div>
              <div class="carousel-item" data-bs-interval="3000">
                <img src="images/products/Dal3.jpg" class="d-block w-100" alt="a"/>
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
        </section>
        <section id="companies" className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="section-title">
                <h1>
                  <span>Our</span> Enterprises
                </h1>
              </div>
            </div>
            <div className="line">
              {/* <FontAwesomeIcon icon={ faAnchor } className="ln"/> */}
            </div>
            <div className="c_body">
                <div className="single">
                    <img src="images/company_logo/trading.jpg" alt="" className=""/>
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
              <div className="forever-single">
                  <img src="images/company_logo/ircb.jpg" alt="" className=""/>
              </div>
              {/* <div className="single">
                  <img src="images/company_logo/joy_bangla_corp.jpg" alt="" className=""/>
              </div>
              <div className="empty_single">
              </div>
              <div className="single">
                  <img src="images/company_logo/joy_bangla_corp.jpg" alt="" className=""/>
              </div> */}
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
        <Footer/>
      </div>
    );
  }
}
export default Home;
var styles = {
  
  floatingNavUl: {
    marginLeft: "30px",
    marginTop : "20px",
    color: "#fff",
    listStyleType : "circle"
  },
  floatingNavUlLi : {
    color : "#fff"
  }
}
