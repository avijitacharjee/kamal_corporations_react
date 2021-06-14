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
                <h2 className="ft-title">Registered Office</h2>
                <ul>
                  <li>Sabera Bhavan, D C Road,</li>
                  <li>West Bakoliya, Chawkbazar,</li>
                  <li>Chattogram, Bangladesh.</li>
                  <li>Email: contact@kamalcorporations.com</li>
                </ul>
              </div>
              <div className="ft-main-item">
                <div className="ft-title">Overseas Liaison Office</div>
                <ul>
                  <li>136, Tent Line,</li>
                  <li>Mohan Nagar, Nagpur- 440001,</li>
                  <li>Maharashtra, India.</li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Administration Office</h2>
                <ul>
                  <li>125,Sugandha Housing Society,</li>
                  <li>Road -1, Block - D</li>
                  <li>Chittagong, Bangladesh</li>
                  <li>Email: contact@kamalcorporations.com</li>
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
                  Site developed by : <a href="https://avijitacharjee.github.io" target="_blank" style={{
                    color: "#FFFFFF",
                    textDecoration : "underline"
                  }}>Avijit Acharjee</a>
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
//cpanel blocked ip 116.58.202.147 (gp)
//robi ip 58.145.186.227

// ssh key pass p.lANoaMt8MX