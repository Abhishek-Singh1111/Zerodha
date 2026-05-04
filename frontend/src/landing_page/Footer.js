import React from "react";

function Footer() {
  return (
    <footer className="mt-5 border-top bg-light">
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <img
              src="/media/logo.svg"
              alt="Zerodha"
              className="mb-3 img-fluid"
              style={{ maxWidth: "150px", width: "100%" }}
            />
            <p className="mb-2">
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div>
              <a
                className="text-decoration-none text-dark"
                href="/facebook"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-square-facebook" />
              </a>
              <a
                className="text-decoration-none text-dark ms-2"
                href="/twitter"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-square-twitter" />
              </a>
              <a
                className="text-decoration-none text-dark ms-2"
                href="/linkedin"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                className="text-decoration-none text-dark ms-2"
                href="/youtube"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-square-youtube" />
              </a>
              <a
                className="text-decoration-none text-dark ms-2"
                href="/github"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-square-github" />
              </a>
              <a
                className="text-decoration-none text-dark ms-2"
                href="/instagram"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-square-instagram" />
              </a>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-2">
            <h5>Account</h5>
            <ul className="list-unstyled mb-0">
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
            </ul>
          </div>

          <div className="col-6 col-md-6 col-lg-2">
            <h5>Commodity</h5>
            <ul className="list-unstyled mb-0">
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
              <li>Referral program</li>
            </ul>
          </div>

          <div className="col-6 col-md-6 col-lg-2">
            <h5>Support</h5>
            <ul className="list-unstyled mb-0">
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          <div className="col-6 col-md-6 col-lg-3">
            <h5>Company</h5>
            <ul className="list-unstyled mb-0">
              <li>About</li>
              <li>Philosophy</li>
              <li>Press &amp; media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-12">
            <details>
              <summary className="small text-primary">
                Legal &amp; disclosures
              </summary>
              <div className="mt-3">
                <p className="small">
                  Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI
                  &ndash; SEBI Registration no.: INZ000031633 CDSL/NSDL:
                  Depository services through Zerodha Broking Ltd. &ndash; SEBI
                  Registration no.: IN-DP-431-2019 Registered Address: Zerodha
                  Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
                  Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
                  560078, Karnataka, India. For any complaints pertaining to
                  securities broking please write to complaints@zerodha.com, for
                  DP related to dp@zerodha.com. Please ensure you carefully read
                  the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p className="small">
                  Procedure to file a complaint on SEBI SCORES: Register on
                  SCORES portal. Mandatory details for filing complaints on
                  SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
                </p>
                <p className="small">
                  Investments in securities market are subject to market risks;
                  read all the related documents carefully before investing.
                </p>
                <p className="small">
                  "Prevent unauthorised transactions in your account. Update
                  your mobile numbers/email IDs with your stock brokers. Receive
                  information of your transactions directly from Exchange on
                  your mobile/email at the end of the day. Issued in the interest
                  of investors."
                </p>
                <p className="small mb-0">
                  *Customers availing insurance advisory services offered by
                  Ditto (Tacterial Consulting Private Limited | IRDAI Registered
                  Corporate Agent (Composite) License No CA0738) will not have
                  access to the exchange investor grievance redressal forum,
                  SEBI SCORES/ODR, or arbitration mechanism for such products.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
