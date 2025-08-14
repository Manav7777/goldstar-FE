import Link from 'next/link';
import React from 'react';

const TrustUs = () => {
  return (
    <div className="bg-light">
        <div className="container px-4 py-5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="h2 display-5 fw-bold text-dark mb-3">Why Customers <span className='text-primary'>Trust Us</span></h2>
          <p className="h5 text-muted">Experience the difference of working with true moving professionals</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {[
            "Licensed and fully insured moving company",
            "Professional, trained, and background-checked movers",
            "Free, no-obligation in-home estimates",
            "Transparent pricing with no hidden fees",
            "Modern equipment and well-maintained trucks",
            "Comprehensive packing and unpacking services",
            "Secure storage facilities available",
            "Same-day and emergency moving services"
          ].map((item, index) => (
            <div key={index} className="col">
              <div className="d-flex align-items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="bi bi-check-circle-fill text-primary"
                  aria-hidden="true"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-muted">{item}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="bg-white rounded-xl p-4 border border-primary">
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
              className="bi bi-award h-6 w-6 text-primary mx-auto mb-4"
              aria-hidden="true"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
            <h3 className="h4 font-weight-bold text-dark mb-2">Licensed &amp; Insured</h3>
            <p className="text-muted mb-4">Fully licensed moving company with comprehensive insurance coverage for your peace of mind.</p>
            <Link
              href="/contact"
              style={{
                maxWidth:'200px',
                margin:'auto'
              }}
              className="btn btn-outline-warning fw-bold justify-content-center px-4 py-2 d-flex align-items-center text-dark"
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
              Connect Us
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrustUs;
