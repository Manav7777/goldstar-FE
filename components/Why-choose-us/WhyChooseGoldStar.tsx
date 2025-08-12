import Link from "next/link";
import GsButton from "../ui/GsButton";

const WhyChooseGoldStar = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Content Section */}
        <div className="col-lg-6">
          <h2 className="h2 fw-bold text-dark mb-4">
            Why Choose GoldStarMovers?
          </h2>
          <p className="lead text-muted mb-4">
            With over 10 years of experience and thousands of successful moves,
            we're the trusted choice for residential and commercial relocations.
          </p>

          <ul className="list-unstyled mb-4">
            {[
              "Licensed and insured professionals",
              "Transparent, upfront pricing",
              "Modern, well-maintained fleet",
              "24/7 customer support",
              "Satisfaction guarantee",
              "Free, no-obligation estimates",
            ].map((item, index) => (
              <li key={index} className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-warning me-2 flex-shrink-0"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
                <span className="text-secondary">{item}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <GsButton type="defaultPrimary" text="Get Free Quote" />
            <Link
              href="tel:2895417282"
              className="btn btn-outline-warning fw-bold px-4 py-2 d-flex align-items-center text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (289) 541-7282
            </Link>
          </div>
        </div>

        {/* Image + Stats */}
        <div className="col-lg-6 position-relative">
          <div className="position-relative rounded shadow overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop"
              className="img-fluid rounded w-100"
              alt="Professional moving team"
            />
          </div>

          {/* Stats Card */}
          <div className="position-absolute bottom-0 start-0 end-0 p-3">
            <div className="bg-white bg-opacity-95 rounded shadow-sm p-3">
              <div className="row text-center">
                <div className="col">
                  <div className="h5 fw-bold text-warning">10K+</div>
                  <div className="small text-muted">Moves Completed</div>
                </div>
                <div className="col">
                  <div className="h5 fw-bold text-warning">99%</div>
                  <div className="small text-muted">Customer Satisfaction</div>
                </div>
                <div className="col">
                  <div className="h5 fw-bold text-warning">10+</div>
                  <div className="small text-muted">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseGoldStar;
