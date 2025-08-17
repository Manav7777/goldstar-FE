import React from "react";
import * as LucideIcons from "lucide-react";
import GsButton from "../ui/GsButton";

const LocationTopSection = ({
  cityName,
  headline = "Top-Rated Movers in",
  subtext = "Reliable packing and moving solutions for residents and businesses. From apartment moves to office relocations, we handle every detail with professional care.",
  buttonText = "Get a Free Quote",
  services = [],
}: any) => {
  const servicesData: any = (services ?? []).map((service:any) => ({
    ...service,
    icon: LucideIcons[service.icon as keyof typeof LucideIcons],
  }));
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          {headline} <span className="text-warning">{cityName}</span>
        </h1>
        <p
          className="lead text-muted mx-auto mb-4"
          style={{ maxWidth: "800px" }}
        >
          {subtext}
        </p>
        <GsButton type="primaryClass" text={buttonText}/>
      </div>

      <div className="row mt-5">
        {servicesData &&
          servicesData.map((service: any, index: any) => (
            <div key={index} className="col-md-4 text-center mb-4">
              <div
                className="d-flex align-items-center justify-content-center bg-warning bg-opacity-25 rounded-4 mx-auto mb-3"
                style={{ width: "64px", height: "64px" }}
              >
                {service.icon && (
                  <service.icon size={32} className="text-warning" />
                )}
              </div>
              <h5 className="fw-bold mb-2">{service.title}</h5>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LocationTopSection;
