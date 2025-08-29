import styles from "./WhyChooseUs.module.css";
const WhyChooseUs = () => {
  return (
    <>
      <h2 className="text-center">WHY CHOOSE US</h2>
      <div className="container">
        <div className="row p-3 mt-3">
          <div className="col-lg-6 col-md-12 col-sm-12" data-aos="zoom-in" data-aos-duration="500">
            <h2>We Are Professional Moving Company</h2>
            <p>
              At <span className="text-primary">Gold Star Mover Company</span>,
              we’re more than just a moving service — we’re your trusted partner
              in every step of your move. Whether you're relocating your home or
              business, our team of professional movers is committed to making
              your move smooth, stress-free, and affordable.
            </p>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <h4>Trusted & Professional Movers</h4>
                <p>
                  Our experienced team of professional movers handles every item
                  with care. Gold Star Mover Company is known for reliability,
                  safety, and customer satisfaction.
                </p>
              </li>
              <li className={styles.featureItem}>
                <h4>Affordable, Transparent Pricing</h4>
                <p>
                  Enjoy competitive rates with no hidden costs. We provide clear
                  quotes, so you always know what you're paying for — quality
                  service at a great value.
                </p>
              </li>
              <li className={styles.featureItem}>
                <h4>Full-Service Packing & Moving</h4>
                <p>
                  We offer complete moving solutions — from packing and loading
                  to delivery and unpacking. Let us handle the heavy lifting
                  while you focus on your new beginning.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12" data-aos="zoom-in" data-aos-duration="500">
            <img
              src={
                "/images/why-choose-goldstar.webp"
              }
              alt={"why-choose-goldstar-movers"}
              className="border-radius-5 img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
