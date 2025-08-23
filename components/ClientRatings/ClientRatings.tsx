"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { User } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Melodie Rose",
    position: "Marketing Manager",
    text: `I've used this moving company before, and, like the previous move, they were on time, exceptionally efficient, and an absolute pleasure to work with!
      Kudos to the whole team!`,
    starImage: "five-star-image.png",
  },
  {
    name: "T C",
    position: "CEO, FinBridge",
    text: `5 Stars is not enough !!!
      These guys are the best, finished to load a 26ft truck in less than 1h30!!! Fantastic.
      Thank you for your kindness as well.
      I will recommend them to everybody
      Take care`,
    starImage: "five-star-image.png",
  },
  {
    name: "Elizabeth Carbonneau",
    position: "Product Lead",
    text: `Gold Star Movers were amazing. The communication during 
      the booking process was clear and professional and they sent confirmation the day before the move, 
      as well as periodic updates throughout the day.`,
    starImage: "five-star-image.png",
  },
  {
    name: "Sam",
    position: "Product Lead",
    text: `Kristiyan is very responsive and communicates very well. His service is excellent! 
      The crew arrived early, and everything was done ahead of schedule. 
      They REALLY know how to pack a trailer! Our household goods are going across the US, 
      so everything had to be packed into a 53 foot trailer, floor to ceiling. 
      They did it perfectly! Pricing is very reasonable!`,
    starImage: "five-star-image.png",
  },
];
const ClientRatings = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4">WHAT OUR CLIENTS SAY</h2>
      <div className="customer-review-wrapper p-5 bg-light rounded">
        <div className="row" data-aos="fade-right">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5>Testimonials</h5>
            <h3>
              What our <span className="text-primary h3">Customers</span> Says
            </h3>
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}google-five-star-ratting.png`}
              alt="google-five-star-ratting"
              className="img-fluid"
              width={100}
            />
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}statisfaction.png`}
              alt="statisfaction"
              className="img-fluid mt-2"
              width={120}
            />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
              }}
              loop={true}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-4 rounded client-slider-box text-center h-100 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center justify-content-between gap-1">
                      <span className="d-flex gap-1">
                        {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill text-warning"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73-3.523-3.356c-.329-.314-.158-.888.283-.95l4.898-.696 2.173-4.39c.197-.398.73-.398.927 0l2.173 4.39 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        ))}
                      </span>
                      <span className="badge bg-success-subtle text-success border border-success-subtle fw-semibold">
                        Verified
                      </span>
                    </div>

                    <Link href={`https://share.google/9PEfqy12GYGINouiB`} className="text-blue text-left fw-medium small mt-2">
                      Rated 5 Stars on Google
                    </Link>
                  <blockquote className="blockquote text-muted text-left mb-3 mt-2">
                    “{item.text}”
                  </blockquote>
                  <div className="border-top">
                    <div className="d-flex justify-content-center align-items-center w-100 mb-2 pt-3">
                      <div className="bg-primary text-white p-2 rounded-circle me-2">
                        <User />
                      </div>
                      <h6 className="mb-0 fw-bold">{item.name}</h6>
                    </div>
                  </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientRatings;
