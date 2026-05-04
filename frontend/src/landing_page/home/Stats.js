import React from "react";

function Stats() {
  return (
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">Trust with confidence</h2>

          <h3 className="h5">Customer first always</h3>
          <p>
            That's why we are here to help you with your investments and
            finances.
          </p>

          <h3 className="h5 mt-4">We are here to help you</h3>
          <p>
            Our support team is available 24/7 to assist you with any queries or
            issues you may have. We are committed to providing you with the best
            possible service and support.
          </p>

          <h3 className="h5">The Zerodha ecosystem</h3>
          <p className="mb-0">
            We offer a range of products and services to help you manage your
            investments and finances. From our trading platform to our mutual
            fund platform, we have everything you need to invest with
            confidence.
          </p>
        </div>

        <div className="col-12 col-lg-6 text-center">
          <img
            src="/media/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid"
            style={{ maxWidth: "640px", width: "100%" }}
          />

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3">
            <a
              href="/products"
              className="text-decoration-none d-inline-flex align-items-center gap-2"
            >
              Explore our products <i className="fa-solid fa-arrow-right" />
            </a>
            <a href="https://kite.zerodha.com" className="text-decoration-none">
              Try Kite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
