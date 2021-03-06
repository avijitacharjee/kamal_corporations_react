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
import Footer from "../footer/Footer";
import { Carousel } from "react-bootstrap";
import ScrollTrigger from "react-scroll-trigger";

class Home extends React.Component {
  state = {
    visible: false,
  };
  onEnterViewport = () => {
    this.setState({
      visible: true,
    });
    setTimeout(() => {
      this.setState({
      visible: false
    });
    }, 1000);
    
  };

  onExitViewport = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { visible } = this.state;
    // const firebaseApp = firebase.apps[0];
    return (
      <div>
        <Header />
        <section id="main_section" className="section">
          <Carousel className="animate__animated animate__bounceInDown">
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src="images/slider/1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src="images/slider/2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src="images/slider/3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </section>

        {/* <section id="main_section" className="section">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="4000" >
                <img src="images/slider/1.jpg" class="d-block w-100" alt="image1" />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="images/slider/2.jpg" class="d-block w-100" alt="image2"/>
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <img src="images/slider/3.jpg" class="d-block w-100" alt="image3"/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section> */}
        <section id="companies" className="section">
          <ScrollTrigger
            onEnter={this.onEnterViewport}
            onExit={this.onExitViewport}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="section-title">
                  <h1>
                    <span>Our</span> Enterprises
                  </h1>
                </div>
              </div>
              <div className="line"></div>
              <div className="c_body">
                <div
                  className={`single ${visible?"animate__animated animate__backInLeft":""}`}>
                  <img
                    src="images/company_logo/trading.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className={
                    visible
                      ? "single animate__animated animate__backInDown"
                      : "single"
                  }>
                  <img
                    src="images/company_logo/agriculture.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className={
                    visible
                      ? "single animate__animated animate__backInRight"
                      : "single"
                  }>
                  <img
                    src="images/company_logo/logistics.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className={
                    visible
                      ? "single animate__animated animate__backInLeft"
                      : "single"
                  }>
                  <img
                    src="images/company_logo/nargis_property.jpg"
                    alt=""
                    className=""
                  />
                </div>
                <div className={
                    visible
                      ? "single animate__animated animate__backInUp"
                      : "single"
                  }>
                  <img
                    src="images/company_logo/infotech.png"
                    alt=""
                    className=""
                  />
                </div>
                <div className={
                    visible
                      ? "single animate__animated animate__backInRight"
                      : "single"
                  }>
                  <img src="images/company_logo/ircb.jpg" alt="" className="" />
                </div>
                {/* <div className="forever-single">
                      <img src="images/company_logo/ircb.jpg" alt="" className=""/>
                  </div> */}
              </div>
            </div>
          </ScrollTrigger>
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
        <Footer />
        {/* <div className="animate__animated animate__bounce">
          <h1>React & Firebase</h1>
          <h2>By @farazamiruddin</h2>
          <code>
            <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
          </code>
        </div> */}
      </div>
    );
  }
}
export default Home;
var styles = {
  floatingNavUl: {
    marginLeft: "30px",
    marginTop: "20px",
    color: "#fff",
    listStyleType: "circle",
  },
  floatingNavUlLi: {
    color: "#fff",
  },
};
