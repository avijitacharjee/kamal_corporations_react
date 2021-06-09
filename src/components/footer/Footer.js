import React, { Component } from "react";
import "./footer.css"

export class Footer extends Component {
  render() {
    return (
      <div>
        <section id="footer">
          <div className="container"></div>
          <footer>
            <section className="ft-main">
              <div className="ft-main-item">
                <h2 className="ft-title">Registered office</h2>
                <ul>
                  <li>Sabera Bhavan,D C Road,</li>
                  <li>West Bakoliya, Chawkbazar,</li>
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
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </section>

            <section className="ft-legal">
              <ul className="ft-legal-list">
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>&copy; 2021 Copyright Kamal Corporations.</li>
              </ul>
            </section>
          </footer>
        </section>
      </div>
    );
  }
}

export default Footer;
