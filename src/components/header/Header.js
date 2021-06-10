import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { Link } from "react-router-dom";
let lastScrollY = 0;
class Header extends React.Component {
  state = {
    logoStyle: {
      textAlign: "center",
      height: "50px",
      width: "50px",
      margin: "10px",
      borderRadius: "100%",
      boxShadow: "0 0 .5em rgba(0, 0, 0, .5)",
      transition: "width .5s, height .5s",
    },
    companyNameStyle: {
      fontFamily: "'Titillium Web', sans-serif",
      textAlign: "center",
      lineHeight: "52px",
      fontSize: "28px",
      width: "288px",
      fontWeight: 600,
      color: "rgb(26, 23, 23)",
      marginLeft: "10px",
      display: "block",
        transition: "fontsize .5s,lineHeight .5s",
      textTransform : "text"
    },
    floatingNavVisible: true,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;
    this.setState({
      logoStyle: {
        textAlign: "center",
        height: lastScrollY == 0 ? 50 + "px" : 30 + "px",
        width: lastScrollY == 0 ? 50 + "px" : 30 + "px",
        margin: lastScrollY == 0 ? 10 + "px" : 2 + "px",
        borderRadius: "100%",
        boxShadow: "0 0 .5em rgba(0, 0, 0, .5)",
        transition: "width .5s, height .5s",
      },
      companyNameStyle: {
        fontSize: lastScrollY == 0 ? 24 + "px" : 18 + "px",
        lineHeight: lastScrollY == 0 ? 52 + "px" : 32 + "px",
        fontFamily: "'Titillium Web', sans-serif",
        textAlign: "center",
        width: "260px",
        fontWeight: 700,
        color: "rgb(26, 23, 23)",
        marginLeft: "10px",
        display: "block",
        transition: "fontsize .5s,lineHeight .5s",
        textTransform : "uppercase"
      },
    });
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
                style={this.state.logoStyle}
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
                <li onClick={this.menuOnClick}>
                  <div class="dropdown">
                    <button class="dropbtn">
                      {/* <i class="fa fa-bars"></i> */}
                      <FontAwesomeIcon
                        icon={faBars}
                        className="fa-2x icon_shade rotate menu"
                        color="#0E76A8"
                      />
                    </button>
                    <div class="dropdown-content">
                      <Link to="/">Home</Link>
                      <Link to="/history">History</Link>
                      <Link to="/products">Products</Link>
                      <a href="/news-gallery">News & Gallery</a>
                      <a href="/partnership">Partnership</a>
                      <a href="/contact">Contact</a>
                    </div>
                  </div>
                  {/* <FontAwesomeIcon
                            icon={faBars}
                            className="fa-2x icon_shade rotate menu"
                            // style= {{
                            //   animation: "rotation 2s infinite linear"
                            // }}
                            color="#0E76A8"
                            // onMouseEnter = {this.menuIn}
                            // onMouseLeave = {this.menuOut}
                            /> */}
                </li>
              </ul>
            </div>
            <div>
              <span style={this.state.companyNameStyle}>
                {" "}
                Kamal Corporations{" "}
              </span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
