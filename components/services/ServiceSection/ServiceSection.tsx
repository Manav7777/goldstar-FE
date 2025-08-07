import React from "react";

const ServiceSection = ({
  title,
  subtitle,
  description,
  features = [],
  badgeText,
  imageSrc,
  imageAlt,
  price,
  buttonText,
  reverse = false,
}: any) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Conditionally render text or image first */}
          {reverse ? (
            <>
              {/* Image First */}
              <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="img-fluid rounded shadow"
                  loading="lazy"
                />
              </div>
              {/* Content Second */}
              <div className="col-lg-7 col-md-12">
                <ServiceContent
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  features={features}
                  badgeText={badgeText}
                  price={price}
                  buttonText={buttonText}
                />
              </div>
            </>
          ) : (
            <>
              {/* Content First */}
              <div className="col-lg-7 col-md-12">
                <ServiceContent
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  features={features}
                  badgeText={badgeText}
                  price={price}
                  buttonText={buttonText}
                />
              </div>
              {/* Image Second */}
              <div className="col-md-5 mt-4 mt-md-0">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="img-fluid rounded shadow"
                  loading="lazy"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

// Sub-component to avoid code duplication
const ServiceContent = ({
  title,
  subtitle,
  description,
  features,
  badgeText,
  price,
  buttonText,
}: any) => (
  <>
    <div className="d-flex align-items-center mb-3">
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="me-3 text-warning"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
      {badgeText && (
        <span className="badge bg-primary fs-6 fw-bold">{badgeText}</span>
      )}
    </div>

    <h2 className="h2 fw-bold text-dark mb-2">{title}</h2>
    <p className="text-warning fw-semibold mb-3 fs-5">{subtitle}</p>
    <p className="text-muted mb-4 fs-6">{description}</p>

    {features?.length > 0 && (
      <>
        <h3 className="h5 fw-bold text-dark mb-3">What's Included:</h3>
        <div className="row">
          {features.map((feature: any, index: any) => (
            <div className="col-sm-6 mb-3 d-flex align-items-start" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2 text-warning mt-1"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <span className="text-muted">{feature}</span>
            </div>
          ))}
        </div>
      </>
    )}

    <div className="d-flex justify-content-between align-items-center border-top pt-4 mt-4">
      {price && (
        <div>
          <p className="h4 fw-bold text-dark mb-1">{price}</p>
          <p className="text-muted small mb-0">Contact us for details</p>
        </div>
      )}
      {buttonText && (
        <button className="btn btn-warning text-dark fw-bold">
          {buttonText}
        </button>
      )}
    </div>
  </>
);

export default ServiceSection;
