import React, { Component } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./company_profile.css";
export class CompanyProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="company_profile">
          <div class="row">
            <div class="column">
              <div class="card">
                <img src="images/profile/avatar.jpg" alt="Jane" style={{ width: "100%" }} />
                <div class="container">
                  <h2>Touhid Muhammad Faisal Kamal Chowdhury</h2>
                  <p class="title">Sponsor &amp; Enterpreneur</p>
                  {/* <p>
                    <button class="button">Contact</button>
                  </p> */}
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="images/profile/avatar.jpg" alt="Jane" style={{ width: "100%" }} />
                <div class="container">
                  <h2>Raihana Siddiqua</h2>
                  <p class="title">Co-sponsor</p>
                  <p>Looks out Tax,VAT,Banking and other corporate financial matters.</p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="images/profile/avatar.jpg" alt="Jane" style={{ width: "100%" }} />
                <div class="container">
                  <h2>Khaleque Md. Aashiq Kamal</h2>
                  <p class="title">Co-Sponsor</p>
                  <p>Looks out ICT and Liaison</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src="images/profile/manohar.jpg" alt="Jane" style={{ width: "100%" }} />
                <div class="container">
                  <h2>Dr.Manohar Pareshnath Roy</h2>
                  <p class="title">International Business Associate</p>
                  <p>Nagpur,Maharashtra, India</p>
                  
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src="images/profile/utpal.png" alt="Jane" style={{ width: "100%" }} />
                <div class="container">
                  <h2>Utpal Roy</h2>
                  <p class="title">Adviser & Consultant
                                    International Business & Trade development
                                </p>
                  <p>Lake Gardens, Kolkata 700045</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src="images/profile/mehrub-khan.jpg" alt="Jane" style={{ width: "100%" }} />
                <div class="container">
                  <h2>Mehrub Khan</h2>
                  <p class="title">Consultant</p>
                  <p>Press,Media & Communication</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src="images/profile/avatar.jpg" alt="Jane" style={{ width: "100%" }} />
                <div class="container">
                  <h2>Abul Hashem & Associate</h2>
                  <p class="title">Legal Adviser,</p>
                  <p>Suit-404/A (4th floor), Purana Paltan, Dhaka
                    Room-324, Ainjibi Bhaban, Court Hill, Chattogram</p>
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
