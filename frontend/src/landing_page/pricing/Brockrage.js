import React from "react";

function Brockrage() {
  return (
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="text-center mb-0">Brokerage details</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Charges</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Equity delivery</strong>
                  </td>
                  <td>Zero brokerage</td>
                  <td>Free on NSE, BSE, CDSL &amp; NSDL transactions</td>
                </tr>
                <tr>
                  <td>
                    <strong>Intraday trading</strong>
                  </td>
                  <td>Rs. 20 or 0.03%</td>
                  <td>Whichever is lower on all equity, currency &amp; commodity</td>
                </tr>
                <tr>
                  <td>
                    <strong>Futures</strong>
                  </td>
                  <td>Rs. 20 or 0.03%</td>
                  <td>Per executed order</td>
                </tr>
                <tr>
                  <td>
                    <strong>Options</strong>
                  </td>
                  <td>Rs. 20 per order</td>
                  <td>Flat Rs. 20 on all options trades</td>
                </tr>
                <tr>
                  <td>
                    <strong>Mutual funds</strong>
                  </td>
                  <td>Zero commission</td>
                  <td>Direct MF investments - no charges</td>
                </tr>
                <tr>
                  <td>
                    <strong>Currency</strong>
                  </td>
                  <td>Rs. 20 or 0.03%</td>
                  <td>Whichever is lower</td>
                </tr>
                <tr>
                  <td>
                    <strong>Commodity</strong>
                  </td>
                  <td>Rs. 20 or 0.03%</td>
                  <td>Whichever is lower</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row mt-4 g-3">
        <div className="col-12 col-lg-6">
          <div className="lp-topic-card p-4 h-100 bg-white">
            <h5 className="mb-3">Additional charges</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <strong>Demat charges:</strong> Rs. 0 per annum (lifetime free)
              </li>
              <li className="mb-2">
                <strong>Trading account:</strong> Rs. 0 per annum
              </li>
              <li className="mb-0">
                <strong>Fund withdrawal transfer:</strong> Rs. 0
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="lp-topic-card p-4 h-100 bg-white">
            <h5 className="mb-3">Our benefits</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">No hidden charges</li>
              <li className="mb-2">Transparent pricing</li>
              <li className="mb-0">Same brokerage for all instruments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brockrage;
