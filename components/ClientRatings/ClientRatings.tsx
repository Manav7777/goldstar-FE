"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { User } from "lucide-react";

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
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
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
                    <img
                      src={
                        process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL +
                        item.starImage
                      }
                      width={120}
                      height={30}
                      alt={item.starImage}
                      className="mx-auto mb-3"
                    />
                    <p className="text-muted mb-3">“{item.text}”</p>
                    <div>
                      <div className="d-flex justify-content-center align-items-center w-100 mb-2">
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
