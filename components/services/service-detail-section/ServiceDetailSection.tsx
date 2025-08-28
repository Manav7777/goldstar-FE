import GsButton from "@/components/ui/GsButton";
import React, { Fragment } from "react";

const ServiceDetailSection = (serviceHeroSection: any) => {
  const {
    title,
    highlightedTitle,
    subtitle,
    description,
    imageUrl,
    buttonText,
    showTag,
    tagText,
  } = serviceHeroSection.serviceHeroSection;
  return (
    <Fragment>
      {/* Background SVG Decoration */}
      {Object.keys(serviceHeroSection) && (
        <>
          <div
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffbc00" fill-opacity="0.05"%3E%3Cpath d="M30 0h30v30H30V0zm15 15v15h15V15H45z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
              opacity: 0.3,
            }}
          />

          <div className="container position-relative" key={"top-section"}>
            <div className="row align-items-center g-5">
              {/* Left Column: Text Content */}
              <div className="col-lg-6 col-md-12 md:order-last">
                {/* {showTag && (
                  <div
                    className="mb-4 d-inline-flex align-items-center px-3 py-2 border rounded-pill"
                    style={{
                      backgroundColor: "rgba(255, 188, 0, 0.2)",
                      borderColor: "rgba(255, 188, 0, 0.3)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <svg
                      className="me-2 text-warning"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      <rect width={20} height={14} x={2} y={6} rx={2} />
                    </svg>
                    <span className="text-warning fw-semibold small">
                      {tagText}
                    </span>
                  </div>
                )} */}

                <h1 className="display-4 fw-bold text-dark mt-4">
                  {title}
                  {highlightedTitle && (
                    <>
                      <br />
                      <span className="text-warning">{highlightedTitle}</span>
                    </>
                  )}
                  {subtitle && (
                    <div className="h4 fw-normal mt-2 text-dark">
                      {subtitle}
                    </div>
                  )}
                </h1>

                <p className="text-dark">{description}</p>

                <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                  <GsButton type="primary-white" text={buttonText}/>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="col-lg-6 col-md-12 position-relative md:order-first">
                <div className="position-relative z-1">
                  <img
                    src={imageUrl}
                    alt="Service Illustration"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ transition: "transform 0.3s ease-in-out" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default ServiceDetailSection;
