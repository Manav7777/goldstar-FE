"use client";
import Slider from "react-slick";
import "./HomePage.css";
import GsButton from "../ui/GsButton";

const slides = [
  {
    id: 1,
    image:
      `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}banner.png`,
    title: "Movin. Made. Magical.",
    subtitle: "Experience the future of moving with our intelligent logistics",
  },
  {
    id: 2,
    image:
      `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}why-choose-goldstar.jpeg`,
    title: "Your Trust. Our Promise.",
    subtitle: "Delivering excellence with every move, every time",
  },
  {
    id: 3,
    image:
      `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}effortless-allocation.png`,
    title: "Effortless Relocations.",
    subtitle: "Making your journey to a new beginning extraordinary",
  },
  {
    id: 4,
    image:
      `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}junk-removal-banner.jpeg`,
    title: "Junk Gone. Peace On.",
    subtitle: "Fast, eco-friendly junk removal for homes, offices, and job sites",
  },
  {
    id: 5,
    image:
      `${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}demolition-service.jpeg`,
    title: "Safe. Smart. Demolition.",
    subtitle: "Professional demolition services — precision, safety, and site-ready clearance",
  }
];

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="hero-slider position-relative w-100 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="hero-slide d-flex align-items-center justify-content-center text-center text-white">
              <div
                className="hero-background"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="hero-overlay"></div>
                <div className="container position-relative hero-content">
                  <h1 className="display-4 fw-bold hero-title">{slide.title}</h1>
                  <p className="lead mb-4">{slide.subtitle}</p>
                   <GsButton type="primary" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
