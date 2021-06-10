import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./partnership.css";

export class Partnership extends Component {
  render() {
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
        <div class="container mt-2">
          <div class="row">
            <div class="col-md-3 col-sm-6 item">
              <div class="card item-card card-block">
                <img
                  src="images/partners/black-and-white.jpg"
                  alt="Photo of sunset"
                />
                {/* <h5 class="item-card-title mt-3 mb-3">
                  Black and White
                </h5>
                <p class="card-text">
                  This is a company that builds websites, web apps and
                  e-commerce solutions.
                </p> */}
              </div>
            </div>
            <div class="col-md-3 col-sm-6 item">
              <div class="card item-card card-block">
                <img
                  src="images/partners/forsec.jpg"
                  alt="Photo of sunset"
                />
                
              </div>
            </div>
            <div class="col-md-3 col-sm-6 item">
              <div class="card item-card card-block">
                <img
                  src="images/partners/rochak.jpg"
                  alt="Photo of sunset"
                />
              </div>
            </div>
            <div class="col-md-3 col-sm-6 item">
              <div class="card item-card card-block">
                <img
                  src="images/partners/simba.jpg"
                  alt="Photo of sunset"
                />
              </div>
            </div>
            <div class="col-md-3 col-sm-6 item">
              <div class="card item-card card-block">
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
