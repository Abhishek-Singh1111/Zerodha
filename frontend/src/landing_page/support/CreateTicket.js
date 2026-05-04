export default function CreateTicket(){
 return(
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="fs-2 text-center mb-2">Browse Help Topics</h2>
          <p className="text-center text-secondary mb-0">
          Pick a category to find quick answers and detailed guides.
          </p>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="lp-topic-card p-4 h-100 bg-white">
            <p className="fs-5 fw-semibold">
              <i className="fa-solid fa-circle-user me-2" aria-hidden="true" />
              Account Opening
            </p>
            <ul className="list-unstyled lh-lg mb-0">
              <li><a href="/" className="text-decoration-none">Resident individual</a></li>
              <li><a href="/" className="text-decoration-none">Minor</a></li>
              <li><a href="/" className="text-decoration-none">Non Resident Indian (NRI)</a></li>
              <li><a href="/" className="text-decoration-none">Company, Partnership, HUF and LLP</a></li>
              <li><a href="/" className="text-decoration-none">Glossary</a></li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="lp-topic-card p-4 h-100 bg-white">
            <p className="fs-5 fw-semibold">
              <i className="fa-solid fa-id-card me-2" aria-hidden="true" />
              Your Zerodha account
            </p>
            <ul className="list-unstyled lh-lg mb-0">
              <li><a href="/" className="text-decoration-none">Resident individual</a></li>
              <li><a href="/" className="text-decoration-none">Minor</a></li>
              <li><a href="/" className="text-decoration-none">Non Resident Indian (NRI)</a></li>
              <li><a href="/" className="text-decoration-none">Company, Partnership, HUF and LLP</a></li>
              <li><a href="/" className="text-decoration-none">Glossary</a></li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="lp-topic-card p-4 h-100 bg-white">
            <p className="fs-5 fw-semibold">
              <i className="fa-solid fa-chart-line me-2" aria-hidden="true" />
              Kite
            </p>
            <ul className="list-unstyled lh-lg mb-0">
              <li><a href="/" className="text-decoration-none">Resident individual</a></li>
              <li><a href="/" className="text-decoration-none">Minor</a></li>
              <li><a href="/" className="text-decoration-none">Non Resident Indian (NRI)</a></li>
              <li><a href="/" className="text-decoration-none">Company, Partnership, HUF and LLP</a></li>
              <li><a href="/" className="text-decoration-none">Glossary</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
