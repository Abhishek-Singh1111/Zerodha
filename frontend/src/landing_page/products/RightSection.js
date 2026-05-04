import React from "react";

function RightSection({ heading, discription, imageURL }) {
  return (
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <h2 className="mb-3">{heading}</h2>
          <p className="mb-2">{discription}</p>
          <a className="text-decoration-none" href="/">
            Learn more <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageURL}
            alt={heading}
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "560px", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
