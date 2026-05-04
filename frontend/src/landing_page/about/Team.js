import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="text-center mb-4">
        <h2 className="mb-0">Founder</h2>
      </div>

      <div className="row g-4 align-items-center justify-content-center">
        <div className="col-12 col-md-5 text-center">
          <img
            src="/media/Gemini_Generated_Image_eryioqeryioqeryi.png"
            alt="Abhishek Singh"
            className="img-fluid rounded-circle"
            style={{
              width: "clamp(160px, 50vw, 260px)",
              aspectRatio: "1 / 1",
              objectFit: "cover",
            }}
          />
          <p className="mt-3 mb-1 fw-semibold">Abhishek Singh</p>
          <p className="mb-0 text-secondary">Founder, CEO</p>
        </div>

        <div className="col-12 col-md-7 col-lg-6">
          <p>
            Abhishek bootstrapped and founded Zerodha in 2026 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="mb-0">
            Connect on: <Link to="/">Homepage</Link> /{" "}
            <a
              href="https://tradingqna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
