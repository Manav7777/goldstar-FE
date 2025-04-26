import "./HomePage.css"

function HomePage() {
  return (
    <div
      className="cover-background"
    >
      <div className="container d-flex flex-column">
        <div className="row align-items-center min-calc-height-nav">
          <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7">
            <div className="mt-5">
              <h1 className="ls-minus-2px display-3 lh-2 text-white">
                Give us the opportunity and you'll back on it <br /> as one smart move!
              </h1>
              <a
                href="javascript:void(0);"
                className="button-primary button text-dark"
              >
                <span>Request Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
