import Link from "next/link";
import Image from "next/image";
import "./ServicesCard.css";

const services: any = [
  {
    title: "Residential Moving",
    description:
      "Effortless relocation for homes and apartments with professional care and attention to detail",
    image: "/images/residential-service-card.webp",
    link: "/services/residential-moving-service",
  },
  {
    title: "Commercial Moving",
    description:
      "Seamless office and business relocations with minimal downtime and maximum efficiency",
    image: "/images/residential-moving-service-card.webp",
    link: "/services/commercial-moving-service",
  },
  {
    title: "Long Distance Moving",
    description:
      "Specialized long-distance moving services with secure transport, careful handling, and timely delivery across provinces",
    image: "/images/long-distance-service-card.webp",
    link: "/services/long-distance-moving-service",
  },
  {
    title: "Cross Country",
    description:
      "Nationwide moving services from coast to coast across Canada with secure transport",
    image: "/images/cross-country-service-cards.webp",
    link: "/services/cross-country-moving-service",
  },
  {
    title: "Junk Removal",
    description:
      "Eco-friendly disposal and decluttering services for residential and commercial spaces",
    image: "/images/junk-removal-banner.webp",
    link: "/services/junk-removal-moving-service",
  },
  {
    title: "Demolition",
    description:
      "From small interior jobs to large-scale projects – we demolish with precision.",
    image: "/images/demolition-service.webp",
    link: "/services/demolition-service",
  },
];

const ServicesCard = () => {
  return (
    <div className="container px-4 my-5">
      <div className="text-center mb-5">
        <h2 className="text-center fw-bold mb-4">OUR EXPERT SERVICES</h2>
        <p className="lead text-secondary mx-auto w-75">
          Moving, Demolition & Junk Removal—done professional, safe, and
          stress-free.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {services.map((service: any, idx: number) => (
          <div
            key={idx}
            className={`col-md-6 col-lg-${service.full ? "8" : "4"}`}
            data-aos="zoom-in"
          >
            <div className="service-card position-relative h-100">
              {/* <div
                className="service-bg"
                style={{ backgroundImage: `url(${service.image})` }}
              /> */}
              <div className="service-bg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority={true}
                />
              </div>
              <div className="service-overlay" />
              <div className="service-hover-overlay" />
              <div className="service-content d-flex flex-column justify-content-between h-100 p-4">
                <div>
                  <h3 className="service-titles text-white">{service.title}</h3>
                </div>
                <div className="service-info transition">
                  <p className="service-description">{service.description}</p>
                  <Link
                    href={service.link}
                    className="btn btn-warning rounded-pill px-4 py-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5" data-aos="fade-up">
        <p className="lead text-secondary mb-3">
          Not sure which service you need? Let our experts help you choose the
          perfect solution.
        </p>
        <Link
          href={"/contact"}
          className="btn btn-outline-warning btn-lg d-inline-flex align-items-center gap-2"
        >
          Get Free Quote
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
