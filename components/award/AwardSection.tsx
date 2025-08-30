"use client";

import Image from "next/image";
import { FC } from "react";
import { Trophy, MapPin } from "lucide-react";

const AwardSection: FC = () => {
  return (
    <section className="py-5">
      <h2 className="h2 text-uppercase text-center mb-5">
        Our <span className="text-primary">Award-Winning</span> Commitment
      </h2>
      <div className="row align-items-center g-5">
        {/* Left Column - Text Content */}
        <div className="col-lg-7 col-md-12">
          <div
            className="badge bg-primary text-white fw-semibold px-3 py-2 mb-3"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Canadian Choice Award • 2025
          </div>

          <h2
            className="h4 fw-bold text-uppercase lh-sm mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Gold Star Movers Wins Best Moving Company in Mississauga — 2025
          </h2>

          <div className="text-muted fs-6">
            <p data-aos="fade-up" data-aos-delay="200">
              We are proud to announce that{" "}
              <span className="fw-semibold text-warning">Gold Star Movers</span>{" "}
              has been awarded the Canadian Choice{" "}
              <span className="text-primary">
                Award for Best Moving Company in Mississauga – 2025!
              </span>
            </p>
            <p data-aos="fade-up" data-aos-delay="300">
              This marks the third year in a row that we’ve earned this
              incredible recognition, and it’s all thanks to our amazing
              customers who continue to trust us with their moves.
            </p>
            <p data-aos="fade-up" data-aos-delay="400">
              Consistency, reliability, and dedication are at the heart of what
              we do and being recognized three years straight proves that our
              commitment to excellence never wavers.
            </p>
            <p data-aos="fade-up" data-aos-delay="500">
              Thank you, Mississauga, for making us your top choice year after
              year. Here’s to many more moves together!
            </p>
          </div>

          {/* Badges */}
          <div className="mt-4 d-flex flex-wrap gap-2">
            <span
              className="badge rounded-pill bg-primary text-white d-flex align-items-center gap-1 px-3 py-2"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <Trophy size={16} /> 3 years in a row
            </span>
            <span
              className="badge rounded-pill bg-primary text-white d-flex align-items-center gap-1 px-3 py-2"
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <MapPin size={16} /> Mississauga, Ontario
            </span>
          </div>
        </div>

        {/* Right Column - Award Image */}
        <div
          className="col-lg-5 col-md-12 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="position-relative d-inline-block">
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded" />
            <Image
              src="/images/goldstar-award.webp"
              alt="Gold Star Movers Award"
              width={400}
              height={400}
              className="img-fluid rounded-4"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
