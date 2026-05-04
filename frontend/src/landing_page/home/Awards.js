import React from 'react'
function Awards() {
    return (
        <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6 text-center">
              <img
                src="/media/largestBroker.svg"
                alt="Largest broker award"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="mb-3">Largest broker in India</h2>
              <p className="mb-4">
                Over 2 million users trust us for their investments.
              </p>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <ul className="mb-0">
                    <li>Best in India</li>
                    <li>Most trusted</li>
                    <li>Fastest growing</li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6">
                  <ul className="mb-0">
                    <li>Stocks &amp; Options</li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Govt.</li>
                  </ul>
                </div>
              </div>
              <img
                src="/media/pressLogos.png"
                alt="Press logos"
                className="img-fluid mt-4"
                style={{ maxWidth: "640px", width: "100%" }}
              />
            </div>
          </div>
        </section>
           
    )
}

export default Awards;
