export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="container lp-section my-3 my-md-4 p-4 p-md-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: "560px", width: "100%" }}
          />
        </div>

        <div className="col-12 col-md-6">
          <h2 className="mb-3">{productName}</h2>
          <p className="mb-0">{productDescription}</p>

          {(tryDemo || learnMore) && (
            <div className="d-flex flex-wrap gap-3 mt-3">
              {tryDemo && (
                <a href={tryDemo} className="text-decoration-none">
                  Try demo <i className="fa-solid fa-arrow-right" />
                </a>
              )}
              {learnMore && (
                <a href={learnMore} className="text-decoration-none">
                  Learn more <i className="fa-solid fa-arrow-right" />
                </a>
              )}
            </div>
          )}

          {(googlePlay || appStore) && (
            <div className="d-flex flex-wrap gap-2 mt-3">
              {googlePlay && (
                <a href={googlePlay} className="btn p-0" aria-label="Google Play">
                  <img
                    src="/media/googlePlayBadge.svg"
                    alt="Google Play"
                    className="img-fluid"
                    style={{ height: "44px" }}
                  />
                </a>
              )}
              {appStore && (
                <a href={appStore} className="btn p-0" aria-label="App Store">
                  <img
                    src="/media/appstoreBadge.svg"
                    alt="App Store"
                    className="img-fluid"
                    style={{ height: "44px" }}
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
