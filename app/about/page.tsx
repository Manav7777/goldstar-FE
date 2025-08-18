import TopSection from "@/components/Top-Section/TopSection";
import "./about.css";
import ClientRatings from "@/components/ClientRatings/ClientRatings";
import GsButton from "@/components/ui/GsButton";
import MovingEfforts from "@/components/services/moving-efforts/MovingEfforts";
import { aboutUsSteps } from "@/GlobalConstant";
import TrustUs from "@/components/why-trust-us/TrustUs";

const About = () => {
  return (
    <>
      <TopSection title={"About Us"} />
      <div className="container sm-container-1100">
        <div className="row mt-5 mb-5 justify-content-center">
          <div
            className="col-md-6 col-sm-12 about-us-image"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              decoding="async"
              src={`${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}about-us.jpeg`}
              alt="gold-star-movers"
              className="border-radius-5"
              title="gold-star-movers"
            />
          </div>
          <div
            className="col-md-6 col-sm-12"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h1 className="h3 about-title">
              Setting new standards in the moving industry
            </h1>
            <div className="about-section">
              <span
                className="story-starts text-primary"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Our story began 2017 in Mississauga, Ontario.
              </span>
              <p data-aos="fade-up" data-aos-delay="400">
                We started performing local residential relocation and piano
                moving in the beginning.
              </p>
              <p data-aos="fade-up" data-aos-delay="500">
                Soon, we've expanded our range of services covering the business
                industry, with the same quality as for residential.We started
                from Mississauga and right now we are operating all around
                Ontario and all across Canada.
              </p>
              <p data-aos="fade-up" data-aos-delay="600">
                We've got everything you need to make your moving experience
                seamless and stress-free.
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
                For a very short period of time, our company became one of the
                best choices for your move in Toronto.
              </p>
              <p data-aos="fade-up" data-aos-delay="800">
                At Gold Star Movers, we promise to take the greatest care of
                you, your family and your belongings from the time you ask us to
                move until after we settle you in your new home. We promise to
                take every precaution in packing, loading and transporting your
                belongings to protect them while they're in our care. We promise
                to settle any damage claims quickly and fairly.
              </p>
              <p data-aos="fade-up" data-aos-delay="900">
                Give us the opportunity and you'll look back on it as one smart
                move!
              </p>
              <div data-aos="fade-up" data-aos-delay="1000">
                <GsButton type="primary" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <MovingEfforts residentialMovingEfforts={aboutUsSteps} />
        </div>
      </div>
      <TrustUs />
      <ClientRatings />
    </>
  );
};

export default About;
