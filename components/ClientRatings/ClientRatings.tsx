"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Williams",
    position: "Marketing Manager",
    text: "MetaFox delivered our site on time and exceeded expectations.",
    image: "/client1.jpg",
    starImage: "five-star-image.png"
  },
  {
    name: "John Smith",
    position: "CEO, FinBridge",
    text: "Professional, responsive, and very skilled. Highly recommend MetaFox Tech.",
    image: "/client2.jpg",
    starImage: "five-star-image.png"
  },
  {
    name: "Emily Chen",
    position: "Product Lead",
    text: "Their Next.js expertise helped us launch a fast, SEO-friendly site.",
    image: "/client3.jpg",
    starImage: "five-star-image.png"
  },
  {
    name: "Emily Chen-1",
    position: "Product Lead",
    text: "Their Next.js expertise helped us launch a fast, SEO-friendly site.",
    image: "/client3.jpg",
    starImage: "five-star-image.png"
  },
];
const ClientRatings = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4">WHAT OUR CLIENTS SAY</h2>
      <div className="customer-review-wrapper p-5 bg-light rounded">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <h5>Testimonials</h5>
            <h3>What our <span className="text-primary h3">Customers</span> Says</h3>
          </div>
          <div className="col-md-9 col-sm-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                    <Image
                      src={item.image}
                      width={80}
                      height={80}
                      alt={item.name}
                      className="rounded-circle mx-auto"
                    />
                    <img
                      src={process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL + item.starImage}
                      width={120}
                      height={30}
                      alt={item.starImage}
                      className="mx-auto mb-3"
                    />
                    <p className="text-muted mb-3">“{item.text}”</p>
                    <div>
                      <h6 className="mb-0 fw-bold">{item.name}</h6>
                      <small className="text-muted">{item.position}</small>
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
