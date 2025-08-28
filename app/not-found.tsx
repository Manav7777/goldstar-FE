import Link from "next/link";
import "./notfound.css";
import { House, Mail, MapPin, Phone } from "lucide-react";
import GsButton from "@/components/ui/GsButton";

export default function NotFound() {
  return (
    <div className="">
      <div
        className="position-relative z-1 d-flex flex-column align-items-center justify-content-center text-center px-3 py-5"
        style={{ minHeight: "100vh" }}
      >
        {/* Logo */}
        <div className="mb-5">
          <Link href="/">
            <span className="d-inline-flex align-items-center gap-3 text-decoration-none">
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}logo.webp`}
                width={200}
                alt="goldStar-logo"
                loading="lazy"
              />
            </span>
          </Link>
        </div>

        {/* 404 Heading with Sparkles */}
        <div className="mb-5 position-relative">
          <div className="text-404-gradient">404</div>
        </div>

        {/* Message */}
        <div className="mb-5">
          <h2 className="display-5 fw-bold">Oops! Page Not Found</h2>
          <p className="lead text-muted">
            Looks like this page took a detour during the move!
            <br />
            <span className="fw-semibold text-warning">Don’t worry</span> –
            we’ll help you find your way.
          </p>
        </div>

        {/* Action Cards */}
        <div className="row g-4 mb-5 w-100" style={{ maxWidth: "600px" }}>
          <div className="col">
            <div className="card service-card-hover h-100">
              <div className="card-body d-flex flex-column">
                <div className="service-icon-circle">
                  <House />
                </div>
                <h5 className="">Go Home</h5>
                <p className="text-dark flex-grow-1">
                  Return to our homepage and explore our moving services
                </p>
                <Link href="/">
                  <span className="btn btn-warning w-100">
                    Back to Homepage
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Box */}
        <div
          className="bg-white rounded-3 p-4 shadow w-100 mb-5"
          style={{ maxWidth: "600px" }}
        >
          <h3 className="h5 fw-bold mb-3">Need Immediate Help?</h3>
          <p className="mb-4">
            Our team is ready to assist you with your moving needs
          </p>
          <div className="row g-3 mb-4">
            <div className="col text-center">
              <div className="service-icon-circle">
                <Phone />
              </div>
              <p className="mb-1 fw-semibold">Call Us</p>
              <Link href="tel:+14165550123" className="text-warning fw-medium">
                +1 (289) 541-7282
              </Link>
            </div>
            <div className="col text-center">
              <div className="service-icon-circle">
                <Mail />
              </div>
              <p className="mb-1 fw-semibold">Email Us</p>
              <Link
                href="mailto:goldstar4movers@gmail.com"
                className="text-warning fw-medium"
              >
                goldstar4movers@gmail.com
              </Link>
            </div>
            <div className="col text-center">
              <div className="service-icon-circle">
                <MapPin />
              </div>
              <p className="mb-1 fw-semibold">Visit Us</p>
              <p className="text-muted small">Toronto, ON</p>
            </div>
          </div>
          <GsButton type={'primaryClass'} text="Get Free Quote Now"/>
        </div>
      </div>
    </div>
  );
}
