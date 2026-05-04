export default function Hero() {
  return (
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5 support-hero">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-3">
            <h1 className="h3 mb-0">Support portal</h1>
            <a href="/my-tickets" className="text-decoration-none btn btn-primary">
              My tickets
            </a>
          </div>

          <div className="input-group input-group-lg mb-0 support-search">
            <span className="input-group-text bg-white border-end-0">
              <i className="fa-solid fa-magnifying-glass text-muted" aria-hidden="true" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              aria-label="Search support topics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
