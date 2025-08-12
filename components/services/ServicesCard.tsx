import Link from "next/link";
import "./ServicesCard.css";
const ServicesCard = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 justify-content-center">
        <div className="col-md-12">
          <h2 className="text-center">INCLUDED SERVICES</h2>
        </div>
        <div className="col-12 col-md-6 col-xl-4 mt-4">
          <div className="card-style04 border-radius-5 cursor-pointer">
            <img
              decoding="async"
              src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-11.jpg"
              alt="GoldStar-residential-service"
              className="border-radius-5"
              title="goldStar-residential-service"
            />
            <div className="opacity-light bg-extra-dark-gray border-radius-5" />
            <div className="card-overlay border-radius-5" />
            <div className="card-content">
              <div className="card-custom-1">
                <span className="text-white opacity6 d-block mb-2 position-relative z-index-1">
                  01
                </span>
                <h5 className="font-weight-800 display-19 position-relative z-index-1 mb-0">
                  <Link
                    href="/services/residential-moving-service"
                    className="text-white text-primary-hover"
                  >
                    RESIDENTIAL MOVING
                  </Link>
                </h5>
              </div>
              <div className="card-data align-items-end d-flex">
                <div className="card-custom-2">
                  <p className="card-text">
                    Let us assist you in completing your residential move. We
                    have have the team and expertise to assist you in relocating
                  </p>
                  <Link
                    href="/services/residential-moving-service"
                    className="button-primary button text-dark"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4 mt-4">
          <div className="card-style04 border-radius-5 cursor-pointer">
            <img
              decoding="async"
              src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-12.jpg"
              alt="commercial-moving-service"
              className="border-radius-5"
              title="commercial-moving-service"
            />
            <div className="opacity-light bg-extra-dark-gray border-radius-5" />
            <div className="card-overlay border-radius-5" />
            <div className="card-content">
              <div className="card-custom-1">
                <span className="text-white opacity6 d-block mb-2 position-relative z-index-1">
                  02
                </span>
                <h5 className="font-weight-800 display-19 position-relative z-index-1 mb-0">
                  <Link
                    href="/services/residential-service"
                    className="text-white text-primary-hover"
                  >
                    COMMERCIAL MOVING
                  </Link>
                </h5>
              </div>
              <div className="card-data align-items-end d-flex">
                <div className="card-custom-2">
                  <p className="card-text">
                    We can assist you with commercial moves of all complexities
                    and sizes. Contact us today for a free consultation on your
                    next move.
                  </p>
                  <Link
                    href="/services/commercial-moving-service"
                    className="button-primary button text-dark"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4 mt-4">
          <div className="card-style04 border-radius-5 cursor-pointer">
            <img
              decoding="async"
              src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-13.jpg"
              alt="cross-country-moving-service"
              className="border-radius-5"
              title="cross-country-moving-service"
            />
            <div className="opacity-light bg-extra-dark-gray border-radius-5" />
            <div className="card-overlay border-radius-5" />
            <div className="card-content">
              <div className="card-custom-1">
                <span className="text-white opacity6 d-block mb-2 position-relative z-index-1">
                  03
                </span>
                <h5 className="font-weight-800 display-19 position-relative z-index-1 mb-0">
                  <Link
                    href="services/cross-country-moving-service"
                    className="text-white text-primary-hover"
                  >
                    CROSS-COUNTRY MOVING
                  </Link>
                </h5>
              </div>
              <div className="card-data align-items-end d-flex">
                <div className="card-custom-2">
                  <p className="card-text">
                    Need help moving across Canada? No problem! Our team of
                    experts are ready to haul all your belongings anywhere
                    across Canada.
                  </p>
                  <Link
                    href="services/cross-country-moving-service"
                    className="button-primary button text-dark"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-md-6 col-xl-3 mt-4">
          <div className="card-style04 border-radius-5 cursor-pointer">
            <img
              decoding="async"
              src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-13.jpg"
              alt="cross-country-moving-service"
              className="border-radius-5"
              title="cross-country-moving-service"
            />
            <div className="opacity-light bg-extra-dark-gray border-radius-5" />
            <div className="card-overlay border-radius-5" />
            <div className="card-content">
              <div className="card-custom-1">
                <span className="text-white opacity6 d-block mb-2 position-relative z-index-1">
                  03
                </span>
                <h5 className="font-weight-800 display-19 position-relative z-index-1 mb-0">
                  <Link
                    href="services/cross-country-moving-service"
                    className="text-white text-primary-hover"
                  >
                    CROSS-COUNTRY MOVING
                  </Link>
                </h5>
              </div>
              <div className="card-data align-items-end d-flex">
                <div className="card-custom-2">
                  <p className="card-text">
                    Need help moving across Canada? No problem! Our team of
                    experts are ready to haul all your belongings anywhere
                    across Canada.
                  </p>
                  <Link
                    href="services/cross-country-moving-service"
                    className="button-primary button text-dark"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesCard;
