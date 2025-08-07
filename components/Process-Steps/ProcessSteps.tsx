import "./ProcessSteps.css";
const ProcessSteps = () => {
  return (
    <div className="process-steps-container">
      <h2>Reliable moving services built around you</h2>
      <div className="process-steps-cards">
        <div className="process-step-container">
          <div className="process-steps">
            <div className="process-icon">
              <img
                decoding="async"
                src={
                  process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL +
                  "process-svgs/paper-pen-svgrepo-com.svg"
                }
                alt="book-appointment"
                width={55}
                height={55}
                className="border-radius-5"
                title="book-appointment"
              />
            </div>
            <h4 className="process-service">Book Your Service</h4>
            <p>
              Easily book trusted packers and movers online for hassle-free
              relocation services.
            </p>
            <span
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}arrow-moverie.png)`,
              }}
              className="step-arrow"
            ></span>
          </div>
          <div className="process-steps">
            <div className="process-icon">
              <img
                decoding="async"
                src={
                  process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL +
                  "process-svgs/box-open-svgrepo-com.svg"
                }
                alt="Pack Your Good"
                width={55}
                height={55}
                className="border-radius-5"
                title="Pack Your Good"
              />
            </div>
            <h4 className="process-service">Pack Your Good</h4>
            <p>
              Professional packing using high-quality materials to protect your
              belongings during the move.
            </p>
            <span
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}arrow-moverie.png)`,
              }}
              className="step-arrow"
            ></span>
          </div>
          <div className="process-steps">
            <div className="process-icon">
              <img
                decoding="async"
                src={
                  process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL +
                  "process-svgs/truck-loading-svgrepo-com.svg"
                }
                alt="Safe Loading"
                width={55}
                height={55}
                className="border-radius-5"
                title="Safe Loading"
              />
            </div>
            <h4 className="process-service">Safe Loading</h4>
            <p>
              Expert handling and secure loading to ensure zero damage during
              transportation.
            </p>
            <span
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}arrow-moverie.png)`,
              }}
              className="step-arrow"
            ></span>
          </div>
          <div className="process-steps">
            <div className="process-icon">
              <img
                decoding="async"
                src={
                  process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL +
                  "process-svgs/truck-speed-svgrepo-com.svg"
                }
                alt="Safe Delivery"
                width={55}
                height={55}
                className="border-radius-5"
                title="Safe Delivery"
              />
            </div>
            <h4 className="process-service">Safe Delivery</h4>
            <p>
              Timely and safe delivery of your goods to the destination,
              guaranteed by verified movers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
