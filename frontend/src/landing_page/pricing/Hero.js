import React from "react";

function Hero() {
  return (
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="row text-center mb-4">
        <div className="col-12">
          <h1 className="mb-2">Charges</h1>
          <p className="mb-0">List of all charges and taxes</p>
        </div>
      </div>

      <div className="row g-3 justify-content-center">
        <div className="col-12 col-md-4">
          <div className="lp-topic-card p-4 h-100 bg-white text-center">
            <img
              src="/media/pricing0.svg"
              alt="Free equity delivery"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <h3 className="h5">Free equity delivery</h3>
            <p className="mb-0">
              All equity delivery investments (NSE, BSE) are absolutely free - Rs.
              0 brokerage.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="lp-topic-card p-4 h-100 bg-white text-center">
            <img
              src="/media/pricing0.svg"
              alt="Intraday and F&O trades"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <h3 className="h5">Intraday and F&amp;O trades</h3>
            <p className="mb-0">
              Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades. Flat
              Rs. 20 on all option trades.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="lp-topic-card p-4 h-100 bg-white text-center">
            <img
              src="/media/pricing0.svg"
              alt="Free direct mutual funds"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <h3 className="h5">Free direct MF</h3>
            <p className="mb-0">
              All direct mutual fund investments are absolutely free - Rs. 0
              commissions &amp; DP charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
