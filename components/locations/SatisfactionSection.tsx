import { Clock, DollarSign, Shield } from "lucide-react";
import React from "react";
import GsButton from "../ui/GsButton";

const SatisfactionSection = () => {
  return (
    <div className="container py-5" data-aos="fade-up">
      <div className="satisfaction-box border rounded-4 p-5 p-lg-5 text-center">
        {/* Top Badge + Heading */}
        <div className="mb-5" data-aos="zoom-in" data-aos-delay="100">
          <div className="d-flex justify-content-center">
            <div className="icon-badge mb-4 shadow">
              <span className="h3 fw-bold text-white mb-0">100%</span>
            </div>
          </div>
          <h2 className="fw-bold display-5 text-dark mb-4">
            Satisfaction Guaranteed
          </h2>
          <p className="lead text-muted mx-auto mb-4">
            We stand behind our moving services with a complete satisfaction
            guarantee. Your peace of mind is our commitment.
          </p>
        </div>

        {/* 3-Column Guarantee Grid */}
        <div className="row mb-5">
          <div
            className="col-md-4 mb-4 text-center"
            data-aos="fade-up"
            data-aos-delay={0 * 150}
          >
            <div className="icon-box mb-3 mx-auto">
              {/* Shield Icon */}
              <Shield size={32} className="text-white" />
            </div>
            <h5 className="fw-bold mb-2">Damage Protection</h5>
            <p className="text-muted">
              If we damage your belongings, we repair or replace them at no cost
            </p>
          </div>

          <div
            className="col-md-4 mb-4 text-center"
            data-aos="fade-up"
            data-aos-delay={1 * 150}
          >
            <div className="icon-box mb-3 mx-auto">
              {/* Clock Icon */}
              <Clock size={32} className="text-white" />
            </div>
            <h5 className="fw-bold mb-2">On-Time Guarantee</h5>
            <p className="text-muted">
              We arrive on time and complete your move within the agreed
              schedule
            </p>
          </div>

          <div
            className="col-md-4 mb-4 text-center"
            data-aos="fade-up"
            data-aos-delay={2 * 150}
          >
            <div className="icon-box mb-3 mx-auto">
              {/* Dollar Icon */}
              <DollarSign size={32} className="text-white" />
            </div>
            <h5 className="fw-bold mb-2">No Hidden Fees</h5>
            <p className="text-muted">
              Transparent pricing with no surprise charges or hidden costs
            </p>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div
          className="bg-white rounded-4 p-4 shadow"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h4 className="fw-bold mb-3 text-dark">
            Not satisfied? We'll make it right.
          </h4>
          <p className="text-muted fs-5">
            That's our promise to you, backed by years of exceptional moving
            service in Etobicoke.
          </p>
          <div data-aos="zoom-in" data-aos-delay="600">
            <GsButton type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionSection;
