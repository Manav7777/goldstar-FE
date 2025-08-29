"use client";
import Slider from "react-slick";
import Image from "next/image";
import "./HomePage.css";
import GsButton from "../ui/GsButton";

const slides = [
  {
    id: 1,
    image: "/images/banner.webp",
    title: "Experienced and Professional Movers",
    subtitle: "Professional movers who handle your belongings with respect.",
  },
  {
    id: 2,
    image: "/images/why-choose-goldstar.webp",
    title: "Your Trust, Our Promise",
    subtitle: "Delivering excellence with every move, every time",
  },
  {
    id: 3,
    image: "/images/effortless-allocation.webp",
    title: "Effortless Relocations",
    subtitle: "Making your journey to a new beginning extraordinary",
  },
  {
    id: 4,
    image: "/images/junk-removal-banner.webp",
    title: "Junk Gone, Peace On",
    subtitle: "Reliable junk removal with eco-friendly disposal.",
  },
  {
    id: 5,
    image: "/images/demolition-service.webp",
    title: "Professional Demolition Services",
    subtitle: "From small interior jobs to large-scale projects – we demolish with precision.",
  },
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
              <div className="hero-background position-relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="hero-image"
                />
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
