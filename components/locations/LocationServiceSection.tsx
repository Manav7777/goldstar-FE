import { locationService } from "@/GlobalConstant";
import Image from "next/image";

const LocationServiceSections: any = ({ title, subtitle }: any) => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5" data-aos="fade-down">
        <h2 className="display-5 fw-bold">{title}</h2>
        <p className="lead text-muted">{subtitle}</p>
      </div>

      <div className="row g-4 justify-content-center">
        {locationService.services.map((service: any, index: number) => (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div className="card shadow-sm h-100 border-0 rounded-4 overflow-hidden location-service-card">
              {/* Image wrapper with aspect ratio */}
              <div
                className="position-relative"
                style={{ aspectRatio: "3 / 2", overflow: "hidden" }}
              >
                <Image
                  src={service.image}
                  alt={service.alt || service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-fit-cover location-service-img rounded-top"
                  loading="lazy"
                />

                {/* Dark overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />

                {/* Icon at bottom-left */}
                <div className="position-absolute bottom-0 start-0 m-3">
                  <div className="bg-warning p-2 rounded-3 d-inline-flex align-items-center justify-content-center">
                    {service.icon && (
                      <service.icon size={32} className="text-white" />
                    )}
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="card-body">
                <h5 className="text-primary fw-bold">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationServiceSections;
