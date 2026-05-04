import React from "react";

function Pricing() {
  return (
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-6">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p className="mb-3">
            We offer the lowest brokerage in the industry, with zero fees on
            equity investments and direct mutual funds. Our transparent pricing
            ensures that you keep more of your profits.
          </p>
          <a
            href="/pricing"
            className="text-decoration-none d-inline-flex align-items-center gap-2"
          >
            See pricing <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        <div className="col-12 col-lg-6">
          <div className="row g-3 text-center">
            <div className="col-12 col-sm-6">
              <div className="lp-topic-card p-4 h-100 bg-white">
                <div className="display-6 fw-semibold">Rs. 0</div>
                <p className="mb-0">Free equity delivery and direct mutual funds</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="lp-topic-card p-4 h-100 bg-white">
                <div className="display-6 fw-semibold">Rs. 0</div>
                <p className="mb-0">Free equity delivery and direct mutual funds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
