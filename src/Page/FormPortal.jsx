import React from "react";
import "./FormPortal.css";
import { Helmet } from "react-helmet-async";

function FormPortal() {
  return (
    <>
      <Helmet>
        <title>Form portal - Team Everest</title>
        <meta name="Form portal" content="Learn more about our team and mission." />
      </Helmet>
      <>
        <section className="hero-section">
          <div className="container text-center">
            <h1 className="hero-title">CHARITY MAKES YOU RICH</h1>
            <p className="hero-subtitle">How can you help</p>

            <div className="search-box">
              <input type="text" className="search-input" />
            </div>
          </div>
        </section>

        <section className="cards-section">
          <div className="container">
            <h3 className="section-title">
              Charity Itself Does Not Directly "MAKE YOU RICH" In A Monetary
              Sense
            </h3>
            <div className="cards">
              <div className="jaguu">
                <div className="card-item">
                  <img
                    src="/src/assets/first.jpg"
                    alt="Money"
                    className="card-img"
                  />
                  <h5 className="card-title">By Money</h5>
                  <p className="card-text">As much you can</p>
                </div>

                <div className="card-item">
                  <img
                    src="/src/assets/second.jpg"
                    alt="Things"
                    className="card-img"
                  />
                  <h5 className="card-title">Buy anything</h5>
                  <p className="card-text">What you want to give</p>
                </div>

                <div className="card-item">
                  <img
                    src="/src/assets/third.jpg"
                    alt="Donation"
                    className="card-img"
                  />
                  <h5 className="card-title">Organ Donation</h5>
                  <p className="card-text">In this you have to fill a form</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default FormPortal;
