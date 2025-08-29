import TopSection from "@/components/Top-Section/TopSection";
import "./about.css";
import ClientRatings from "@/components/ClientRatings/ClientRatings";
import GsButton from "@/components/ui/GsButton";
import MovingEfforts from "@/components/services/moving-efforts/MovingEfforts";
import { aboutLists, aboutUsSteps } from "@/GlobalConstant";
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
              src={`/images/why-choose-goldstar.webp`}
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
                Established in 2017
              </span>
              <p data-aos="fade-up" data-aos-delay="400">
                Gold Star Movers began as a small moving company focused on
                local moves and piano transportation. From the very beginning,
                our mission has been to provide reliable, efficient, and
                professional moving solutions that customers can trust.
              </p>
              <p data-aos="fade-up" data-aos-delay="500">
                Through dedication, hard work, and the loyalty of our clients,
                we quickly expanded our services beyond local moving. Today,
                Gold Star Movers proudly offers a full range of solutions
                including:
              </p>
              <ul className="list" data-aos="fade-up" data-aos-delay="600">
                {aboutLists.map((li: any) => {
                  return (
                    <li key={li.text}>
                      <span className="text-dark">{li.text}</span>
                    </li>
                  );
                })}
              </ul>
              <p data-aos="fade-up" data-aos-delay="700">
                As we grew, we recognized the need to support our clients with
                more than just moving. We now provide expert junk removal and
                professional demolition services, ensuring that every
                project—from relocation to renovations—is handled efficiently,
                safely, and stress-free.
              </p>
              <p data-aos="fade-up" data-aos-delay="800">
                From our roots in Toronto, we have grown to serve not only the
                Greater Toronto Area, but also communities across Ontario,
                Canada, and the United States.
              </p>
              <p data-aos="fade-up" data-aos-delay="900">
                In a short period of time, Gold Star Movers has become one of
                the most trusted and recommended companies in Toronto and the
                surrounding regions. Our success is built on a reputation for
                professionalism, customer care, and delivering results that
                exceed expectations.
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
