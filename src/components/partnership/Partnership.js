import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./partnership.css";

export class Partnership extends Component {
  state = {
    initial: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initial : false
      });
    }, 1000);
  }
  render() {
    const { initial } = this.state;

    return (
      <div id="partnership">
        <Header />
        <div
          style={{
            height: 200,
            width: "100%",
          }}
        ></div>
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
        <div className="container mt-2">
          <div className="row">
            <div className="col-md-3 col-sm-6 item">
              <div className={`card item-card card-block ${initial?"animate__animated animate__flipInX":""}`}>
                <img
                  src="images/partners/black-and-white.jpg"
                  alt="Photo of sunset"
                />
                {/* <h5 className="item-card-title mt-3 mb-3">
                  Black and White
                </h5>
                <p className="card-text">
                  This is a company that builds websites, web apps and
                  e-commerce solutions.
                </p> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className={`card item-card card-block ${initial?"animate__animated animate__flipInX":""}`}>
                <img
                  src="images/partners/forsec.jpg"
                  alt="Photo of sunset"
                />
                
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className={`card item-card card-block ${initial?"animate__animated animate__flipInX":""}`}>
                <img
                  src="images/partners/rochak.jpg"
                  alt="Photo of sunset"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className={`card item-card card-block ${initial?"animate__animated animate__flipInX":""}`}>
                <img
                  src="images/partners/simba.jpg"
                  alt="Photo of sunset"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-6 item">
              <div className={`card item-card card-block ${initial?"animate__animated animate__flipInX":""}`}>
                <img
                  src="images/partners/starlink.jpg"
                  alt="Photo of sunset"
                />
              </div>
            </div>
            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Partnership;
