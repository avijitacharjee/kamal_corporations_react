import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

let lastScrollY = 0;
let ticking = false;
class Home extends React.Component {
  state = {
    logoStyle: {
      textAlign: "center",
      height: "50px",
      width: "50px",
      margin: "10px",
      borderRadius: "100%",
      boxShadow: "0 0 .5em rgba(0, 0, 0, .5)",
      transition: "width .5s, height .5s"
    },
    companyNameStyle: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: "center",
      lineHeight: "52px",
      fontSize: "28",
      width: "260px",
      fontWeight: 600,
      color: "rgb(26, 23, 23)",
      marginLeft: "10px",
      display: "block",
      transition : "fontsize .5s,lineHeight .5s",
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
    
  nav = React.createRef();
  
  handleScroll = () => {
    lastScrollY = window.scrollY;
    this.setState({
      logoStyle: {
        textAlign: "center",
        height: lastScrollY == 0 ? 50+"px" : 30+"px",
        width: lastScrollY == 0 ? 50+"px" : 30+"px",
        margin: lastScrollY == 0 ? 10+"px" : 2+"px",
        borderRadius: "100%",
        boxShadow: "0 0 .5em rgba(0, 0, 0, .5)",
        transition: "width .5s, height .5s"
      },
      companyNameStyle: {
        fontSize: lastScrollY == 0 ? 28+"px" : 18+"px",
        lineHeight: lastScrollY == 0 ? 52 + "px" : 32 + "px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        width : "260px",
        fontWeight: 600,
        color: "rgb(26, 23, 23)",
        marginLeft: "10px",
        display: "block",
        transition : "fontsize .5s,lineHeight .5s"
      }
    })
  };
  render() {
    return (
      <div>
        <nav className="my_navbar">
          <div className="">
            <div className="main_logo">
              <img
                src="images/main_logo_circle.png"
                alt="main_logo"
                style = {this.state.logoStyle}
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
              <span style={this.state.companyNameStyle}> Kamal Corporations </span>
            </div>
          </div>
        </nav>
        <div id="main_section" className="section">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <img src="images/products/laptop1.jpg" class="d-block w-100" alt="acbd"/>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="images/products/crafts1.jpg" class="d-block w-100" alt="abcd"/>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="images/products/cake1.jpg" class="d-block w-100" alt="a"/>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="images/products/rice0.jpg" class="d-block w-100" alt="abcd"/>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="images/products/vehicle1.jpg" class="d-block w-100" alt="a"/>
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
                  <span>Our</span> Enterprises
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
var styles = {

}
