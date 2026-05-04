import React from 'react'
function Hero() {
    return ( <>
        <section className="container lp-hero my-3 my-md-4 p-4 p-md-5">
          <div className="row justify-content-center text-center align-items-center">
            <div className="col-12 col-lg-10">
              <img
                src="/media/homeHero.png"
                alt="Zerodha hero"
                className="img-fluid mb-4"
                style={{ maxWidth: "900px", width: "100%" }}
              />
              <h1 className="mt-4">Invest in everything</h1>
              <p className="mb-0">
                Online platform for investing in stocks, crypto, and more. Join
                millions of users and start investing today.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                <button className="btn btn-primary btn-lg px-4 py-2">
                  Sign up now
                </button>
              </div>
            </div>
          </div>
        </section>
    </>  );
}

export default Hero;
