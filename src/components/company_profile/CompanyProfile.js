import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./company_profile.css";
export class CompanyProfile extends Component {
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
      <div>
        <Header />
        <div id="company_profile">
          <div class="row">
            <div class="column">
              <div className={`card text-only ${initial? "animate__animated animate__fadeInTopLeft":""}`}>
                {/* <img src="images/profile/avatar.jpg" alt="Jane" style={{ width: "100%" }} /> */}
                <div class="container">
                  <h2>Faisal Kamal Chowdhury</h2>
                  <p class="title">Sponsor &amp; Enterpreneur</p>
                  {/* <p>
                    <button class="button">Contact</button>
                  </p> */}
                </div>
              </div>
            </div>

            <div class="column">
              <div className={`card text-only ${initial? "animate__animated animate__fadeInDown":""}`}>
                <div class="container">
                  <h2>Raihana Siddiqua</h2>
                  <p class="title">Co-sponsor</p>
                  <p>
                    Looks out Tax,VAT,Banking and other corporate financial
                    matters.
                  </p>
                </div>
              </div>
            </div>

            <div class="column">
              <div className={`card text-only ${initial? "animate__animated animate__fadeInTopRight":""}`}>
                <div class="container">
                  <h2>Aashiq Kamal Chowdhury</h2>
                  <p class="title">Co-Sponsor</p>
                  <p>Looks out ICT and Liaison</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div className={`card ${initial? "animate__animated animate__fadeInTopLeft":""}`}>
                <img
                  src="images/profile/manohar.jpg"
                  alt="Dr. Manohar Pareshnath Roy"
                  style={{ width: "100%" }}
                />
                <div class="container">
                  <h2>Dr.Manohar Pareshnath Roy</h2>
                  <p class="title">International Business Associate</p>
                  <p>Nagpur,Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div className={`card ${initial? "animate__animated animate__fadeInUp":""}`}>
                <img
                  src="images/profile/utpal.png"
                  alt="Jane"
                  style={{ width: "100%" }}
                />
                <div class="container">
                  <h2>Utpal Roy</h2>
                  <p class="title">
                    Adviser & Consultant International Business & Trade
                    development
                  </p>
                  <p>Lake Gardens, Kolkata 700045</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div className={`card ${initial? "animate__animated animate__fadeInTopRight":""}`}>
                <img
                  src="images/profile/sen.jpeg"
                  alt="Jane"
                  style={{ width: "100%" }}
                />
                <div class="container">
                  <h2>Priyanka Sen</h2>
                  <p class="title">Overseas Consultant,</p>
                  <p>Darjeeling, West Bengal, India.</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div className={`card text-only ${initial? "animate__animated animate__fadeIn":""}`}>
                <div class="container">
                  <h2>Abul Hashem & Associate</h2>
                  <p class="title">Legal Adviser,</p>
                  <p>
                    Suit-404/A (4th floor), Purana Paltan, Dhaka
                    <br/>
                    Room-324,Ainjibi Bhaban, Court Hill, Chattogram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CompanyProfile;
