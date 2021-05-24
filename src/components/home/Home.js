import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAnchor, faBars } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <img
            className="main_logo"
            src="/images/main_logo_circle.png"
            width="42"
            height="42"
          />
          <span id="company_name"> Kamal Corporations </span>
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
        </nav>
        <div className="main_section">
          <img
            className="main_section_images"
            src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=815&q=80"
          />
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
            <div className="companies_single">
              <div className="trading_images">
                  <img className="image" width="600px" src="images/products/1.jpg"/>
              </div>
              <div className="trading_texts">
                  <div className="company_logo">
                    <img className="image" width="300px" src="images/company_logo/alam_trading_corp.png"/>
                    <p className="text">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean placerat volutpat
                    turpis, a ultricies lectus eleifend non.
                    Sed ut semper ligula, nec semper tellus.
                    Quisque tempor velit nec turpis posuere 
                    malesuada nec viverra ipsum
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <section id="partners" className="section">
          <div className="container-fluid">
            <div className="row">
              <div className="section-title">
                <h1>
                  <span>Our</span> Partners
                </h1>
              </div>
            </div>
            <div className="line">
              {/* <FontAwesomeIcon icon={ faAnchor } className="ln"/> */}
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
        </section>
        {/* Partner Section End */}
        <section id="footer">
            <div className="contact">
                <h2>
                    Contact
                </h2>
                <p>
                    Fresh Villa
                </p>
                <p>
                    House # 15, Road # 34, Gulshan-1
                </p>
                <p>
                    Dhaka-1212, Bangladesh
                </p>
                <p>
                    Phone : +880-9666777055
                </p>
                <p>
                    Fax : +880 2222289361, 2222284896
                </p>
                <p>
                    Email: info@kamalcorporations.org
                </p>
                
            </div>
            <div className="links">
                <h2>
                    Links
                </h2>
                <p>
                   Giving Back
                </p>
                <p>
                    News & Events
                </p>
                <p>
                    Career
                </p>
                <p>
                    Contact
                </p>
                <p>
                    Site Map
                </p>
            </div>
        </section>
      </div>
    );
  }
}
export default Home;
