import React from "react";
import "./Contact.css";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import TopSection from "@/components/Top-Section/TopSection";

const Contact = () => {
  return (
    <>
      <TopSection title="Contact Us" />
      <div className="bg-light pb-3">
        <div className="container pt-5 mb-5 position-relative z-10 px-4">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold text-dark mb-3">
              Connect With Us
            </h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Multiple ways to reach Canada's most trusted moving professionals
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Card 1: Call Us */}
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="contact-card bg-light-5 border-0">
                <div className="p-4 text-center d-flex flex-column h-100 justify-content-between">
                  <div className="mb-3">
                    <div className="icon-circle bg-primary-light">
                      <Phone className="me-2 text-warning w-100" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-2 text-dark">Call Us</h5>
                    <p className="h6 text-dark mb-1">+1 (289) 541-7282</p>
                    <p className="small text-muted mb-2">
                      Available 7 days a week
                    </p>
                    <p className="text-muted small">
                      Speak with our moving experts instantly
                    </p>
                  </div>
                  <Link
                    href="tel:(289) 541-7282"
                    className="mt-3 text-primary call-to-action"
                  >
                    Click to Call
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Email Us */}
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="contact-card bg-success-light border-0">
                <div className="p-4 text-center d-flex flex-column h-100 justify-content-between">
                  <div className="mb-3">
                    <div className="icon-circle bg-success-light">
                      <Mail className="me-2 text-success w-100" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-2 text-dark">Email Us</h5>
                    <p className="h6 text-dark mb-1">
                      goldstar4movers@gmail.com
                    </p>
                    <p className="small text-muted mb-2">
                      Quick response guaranteed
                    </p>
                    <p className="text-muted small">
                      Get detailed quotes and information
                    </p>
                  </div>
                  <Link
                    href="mailto:goldstar4movers@gmail.com"
                    className="mt-3 text-success call-to-action"
                  >
                    Click to Email
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Business Hours */}
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="contact-card bg-info-light border-0">
                <div className="p-4 text-center d-flex flex-column h-100 justify-content-between">
                  <div className="mb-3">
                    <div className="icon-circle bg-info-light">
                      <Clock className="me-2 text-blue w-100" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-2 text-dark">Business Hours</h5>
                    <p className="h6 text-dark mb-1">Mon to sat 7am to 9pm</p>
                    <p className="h6 small text-dark mb-2">Sunday 8am to 8pm</p>
                    <p className="text-muted small">
                      Extended hours for your convenience
                    </p>
                  </div>
                  <div className="mt-3 call-to-action">&nbsp;</div>
                </div>
              </div>
            </div>

            {/* Card 4: Visit Us */}
            <div
              className="col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="contact-card bg-purple-light border-0">
                <div className="p-4 text-center d-flex flex-column h-100 justify-content-between">
                  <div className="mb-3">
                    <div className="icon-circle bg-purple-light">
                      <MapPin className="me-2 text-purple w-100" />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-2 text-dark">Our Location</h5>
                    <p className="h6 text-dark mb-1">1850 Rathburn Rd E,</p>
                    <p className="small text-muted mb-2">
                       Mississauga, ON L4W 2X9, Canada
                    </p>
                    <p className="text-muted small">
                      <strong>Located in:</strong>
                       Forest Park Circle Apartments
                    </p>
                  </div>
                  <div className="mt-3 call-to-action">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4 mb-4">
          <div
            className="text-center d-inline-flex align-items-center justify-content-center gap-2 mb-4"
            data-aos="zoom-in"
          >
            <div
              className="d-inline-flex align-items-center justify-content-center mb-3 rounded"
              style={{
                width: "64px",
                height: "64px",
                background:
                  "linear-gradient(to bottom right, #facc15, #eab308)",
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-dark"
                viewBox="0 0 24 24"
              >
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
              </svg>
            </div>
            <h3 className="h4 fw-bold text-dark">Why Choose Us?</h3>
          </div>

          <div className="row">
            {[
              "Free, detailed quotes",
              "24/7 customer support",
              "Licensed & fully insured",
              "Transparent pricing",
              "Professional equipment",
              "On-time guarantee",
            ].map((item, index) => (
              <div
                className="col-md-4 col-12"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div key={index} className="d-flex align-items-start mb-3">
                  <div
                    className="flex-shrink-0 rounded-circle mt-1 me-2"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#eab308",
                    }} // yellow-500
                  ></div>
                  <p className="mb-0 text-secondary fw-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-4 p-3 rounded border"
            data-aos="fade-up"
            data-aos-delay="500"
            style={{
              background: "linear-gradient(to bottom right, #fefce8, #fef9c3)", // yellow-50 to yellow-100
              borderColor: "#ffbc00 !important",
            }}
          >
            <div className="d-flex align-items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2"
                viewBox="0 0 24 24"
                style={{ color: "#ca8a04" }} // yellow-700
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
              <h5 className="mb-0 fw-semibold text-dark">Fully Protected</h5>
            </div>
            <p className="text-secondary small mb-0">
              All moves include comprehensive insurance coverage for your
              complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
