"use client";
import GsButton from "@/components/ui/GsButton";
import React, { Fragment } from "react";
import Image from "next/image";

const ServiceDetailSection = ({ serviceHeroSection }: any) => {
  const {
    title,
    highlightedTitle,
    subtitle,
    description,
    imageUrl,
    buttonText,
    showTag,
    tagText,
  } = serviceHeroSection;

  return (
    <Fragment>
      {serviceHeroSection && (
        <div className="container position-relative" key={"top-section"}>
          <div className="row align-items-center g-5">
            {/* Left Column: Text Content */}
            <div className="col-lg-6 col-md-12 md:order-last">
              <h1 className="display-4 fw-bold text-dark mt-4">
                {title}
                {highlightedTitle && (
                  <>
                    <br />
                    <span className="text-warning">{highlightedTitle}</span>
                  </>
                )}
                {subtitle && (
                  <div className="h4 fw-normal mt-2 text-dark">{subtitle}</div>
                )}
              </h1>

              <p className="text-dark">{description}</p>

              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <GsButton type="primary-white" text={buttonText} />
              </div>
            </div>

            {/* Right Column: Optimized Image */}
            <div className="col-lg-6 col-md-12 position-relative md:order-first">
              <div className="position-relative z-1" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={imageUrl}
                  alt="Service Illustration"
                  fill
                  className="img-fluid object-fit-cover rounded-4 shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ServiceDetailSection;
