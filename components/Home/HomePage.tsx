import "./HomePage.css";

function HomePage() {
  return (
    <div className="cover-background">
      <div className="container d-flex flex-column">
        <div className="row align-items-center min-calc-height-nav">
          <div className="col-md-11 col-lg-9 col-xl-8 col-xxl-7">
            <div className="mt-5">
              <h1 className="ls-minus-2px display-3 lh-2 text-white">
                Give us the opportunity and you'll back on it <br /> as one
                smart move!
              </h1>
              <a
                href="javascript:void(0);"
                className="button-primary button text-dark"
              >
                <span>Request Now</span>
              </a>
            </div>
          </div>
          {/* <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5 col-sm-12">
            <div className="banner-form-wrapper">
              <h3 className="">Quick Quote Calculator</h3>
              <form>
                <div className="">
                  <div className="">
                    <input
                      type="text"
                      name="full name"
                      className="form-control"
                      placeholder="Your name here"
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email here"
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Your subject here"
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Your phone number here"
                    />
                  </div>
                  <div className="">
                    <textarea
                      name="message"
                      className="form-control"
                      rows={5}
                      placeholder="Tell us a few words"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="button-primary button mt-4 px-4"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
