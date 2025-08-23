import React from "react";
import { CircleCheckBig, Package, Truck } from "lucide-react";

const LocationMovingSteps = ({ title = "", description = "" }: any) => {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold display-5">{title}</h2>
          <p className="lead text-muted mx-auto">{description}</p>
        </div>

        <div className="mx-auto position-relative">
          <div className="row text-center position-relative">
            {/* Step 1 */}
            <div
              className="col-md-4 mb-5 position-relative"
              data-aos="fade-up"
              data-aos-delay={0 * 200}
            >
              <div className="mb-4 d-flex justify-content-center position-relative z-1">
                <div className="icon-circle shadow">
                  <CircleCheckBig size={40} className="text-white" />
                </div>
              </div>
              <h3 className="fw-bold h5 mb-3">1. Moving Assessment</h3>
              <p className="text-muted">
                Free moving consultation and quote with detailed assessment of
                your packing and moving needs
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="col-md-4 mb-5 position-relative"
              data-aos="fade-up"
              data-aos-delay={1 * 200}
            >
              <div className="mb-4 d-flex justify-content-center position-relative z-1">
                <div className="icon-circle shadow">
                  <Package size={40} className="text-white" />
                </div>
              </div>
              <h3 className="fw-bold h5 mb-3">2. Professional Packing</h3>
              <p className="text-muted">
                Expert packing using premium materials and proven techniques to
                protect your belongings
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="col-md-4 mb-5 position-relative"
              data-aos="fade-up"
              data-aos-delay={2 * 200}
            >
              <div className="mb-4 d-flex justify-content-center position-relative z-1">
                <div className="icon-circle shadow">
                  <Truck size={40} className="text-white" />
                </div>
              </div>
              <h3 className="fw-bold h5 mb-3">3. Safe Moving & Delivery</h3>
              <p className="text-muted">
                Professional moving team carefully transports and delivers your
                belongings to your new location
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMovingSteps;
