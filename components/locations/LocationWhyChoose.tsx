import React from "react";
import * as LucideIcons from "lucide-react";

const WhyChooseUs = ({ whyLocation }: any) => {
  const reasons: any = (whyLocation.reasons ?? []).map((service: any) => ({
    ...service,
    icon: LucideIcons[service.icon as keyof typeof LucideIcons],
  }));

  return (
    <div className="container py-5">
      <div className="text-center mb-5" data-aos="fade-down">
        <h2 className="display-5 fw-bold text-dark">{whyLocation.title}</h2>
        <p className="lead text-muted mx-auto">{whyLocation.description}</p>
      </div>

      <div className="row g-4">
        {reasons.map((item: any, index: number) => (
          <div
            key={index}
            className="col-12"
            data-aos="fade-right"
            data-aos-delay={index * 120}
          >
            <div className="d-flex flex-column flex-md-row align-items-center bg-light rounded-4 p-4 p-lg-5 shadow-sm hover-shadow transition">
              <div className="mb-3 mb-md-0 me-md-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 bg-primary"
                  style={{
                    width: "80px",
                    height: "80px",
                  }}
                >
                  {item.icon && <item.icon size={40} className="text-white" />}
                </div>
              </div>
              <div className="text-center text-md-start">
                <h3 className="h5 fw-bold text-dark mb-2">{item.title}</h3>
                <p className="text-muted mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
