"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { User } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Marjolein van Seeters",
    position: "Marketing Manager",
    text: `We moved from a house to an apartment. It was very hot, but the movers worked hard. They were careful with our things and had a very fast pace, despite the heat. We had arranged a moving truck ourselves and the men from Gold Star Movers got all the furniture and boxes in it, while I thought our truck was really too small. Like a puzzle, they made it fit. I definitely recommend!`,
  },
  {
    name: "Anton Belianin",
    position: "Marketing Manager",
    text: `We had great experience with the movers. They came on time, packed everything very carefully and moved our 1 bedroom + den apartment during 3 hours. It was a pleasure to work with Gold Star Movers, highly recommend.`,
  },
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
  {
    name: "Maureen Lawlor",
    position: "Marketing Manager",
    text: `Thy were great. They were very responsive by email leading up to the move. They arrived on time and got right to work. They worked very hard throughout the three hours we had booked with them.
There were stairs on both ends of the move, and we had a lot of stuff for the size of truck we had ordered, but they were very resourceful. They were pleasant and upbeat the whole time. I can’t say enough kind things. I would happily recommend them, and would gladly use their services again.`,
  },
   {
    name: "Mina Youssef",
    position: "Product Lead",
    text: `I needed 2 people to help with moving my furniture from a storage unit to a house. I provided the truck and they did all the lifting. They were very professional, polite, didn’t have any issues with a couple of pretty heavy items I had, took great care of the furniture and didn’t waste any time. Very hard-working crew! I would definitely recommend them for any moving job.`,
  }
];
const ClientRatings = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-4">WHAT  
        <span className="text-primary"> CUSTOMERS </span> SAY ABOUT US</h2>
      <div className="customer-review-wrapper p-5 pad-10 bg-light rounded">
        <div className="row" data-aos="fade-right">
          <div className="col-lg-3 col-md-12 col-sm-12 m-center">
            <h5>Testimonials</h5>
            <h3>
              What our <span className="text-primary h3">Customers</span> Says
            </h3>
            <img
              src={`/images/google-five-star-ratting.png`}
              alt="google-five-star-ratting"
              className="img-fluid"
              width={100}
            />
            <img
              src={`/images/statisfaction.png`}
              alt="statisfaction"
              className="img-fluid mt-2"
              width={120}
            />
            
            <img
              src={`/images/award-winner-2025.png`}
              alt="winner"
              className="img-fluid mt-3"
              width={80}
            />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
            <div
              className="card shadow google-rating border rounded-4 p-4 mb-2"
              style={{
                backgroundColor: "white",
                borderColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <div className="d-flex align-items-center gap-3">
                {/* Google Icon with Brand Colors */}
                <div
                  className="p-3 rounded-3 d-flex align-items-center justify-content-center"
                  style={{
                    background: "#fff",
                    border: "1px solid #ddd",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.6 20.5h-1.8V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l6-6C34.4 6.2 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"
                    />
                    <path
                      fill="#e53935"
                      d="M6.3 14.7l6.6 4.8C14.5 15.2 18.9 12 24 12c3 0 5.8 1.1 7.9 3l6-6C34.4 6.2 29.5 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24 44c5.2 0 9.9-2 13.4-5.3l-6.2-5.1C29.1 35.8 26.6 37 24 37c-5.3 0-9.8-3.4-11.3-8l-6.5 5C9.5 40.3 16.2 44 24 44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.6 20.5h-1.8V20H24v8h11.3c-0.9 2.6-2.7 4.8-5 6.3l6.2 5.1c-0.4 0.4 7.5-5.5 7.5-15.4 0-1.2-.1-2.3-.4-3.5z"
                    />
                  </svg>
                </div>

                {/* Text Section */}
                <div>
                  <h3 className="h6 fw-bold text-dark mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#facc15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-warning"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="fw-semibold text-dark">4.9 / 5</span>{" "}
                    Google Rating
                  </h3>
                  <small className="text-muted mb-0">Over 170 verified reviews</small>
                </div>
              </div>
              {/* Bottom Text and Visit Button */}
              <div className="d-flex justify-content-between m-btn align-items-center">
                <Link
                  href="https://www.google.com/search?sca_esv=8a0bc8a120541dc1&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3_6mPkR2F2ilEd_ITyFcLly6W_Aij8nfZBWEeHeoDVrVRLmaoz37eaRQI96xatssYTTCupk6FzXx44UKctLHXIaUDjPYKslSAtXW5tmUbfGetztXA%3D%3D&q=Gold+Star+Movers+Reviews&sa=X&ved=2ahUKEwjDvraEh6GPAxUKTmwGHVD8Cm4Q0bkNegQIGhAE&biw=1358&bih=620&dpr=1"
                  target="_blank"
                  className="button button-primary btn-sm"
                >
                  Visit
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="">
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
                      <Link
                        href={`https://share.google/9PEfqy12GYGINouiB`}
                        className="text-blue text-left fw-medium small mt-2"
                      >
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
      </div>
    </section>
  );
};

export default ClientRatings;
