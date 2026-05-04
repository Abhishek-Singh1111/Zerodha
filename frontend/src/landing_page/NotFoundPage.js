
function NotFoundPage() {
    return ( <>
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10 col-lg-8 py-4 py-md-5">
          <h1 className="mt-2">404 - Page Not Found</h1>
          <p className="mb-0">
            The page you are looking for does not exist. Please check the URL
            or return to the homepage.
          </p>
          <form action="/" method="get" className="mt-4">
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <button className="btn btn-primary btn-lg px-4 py-2">
                Go home
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </> );
}

export default NotFoundPage;
