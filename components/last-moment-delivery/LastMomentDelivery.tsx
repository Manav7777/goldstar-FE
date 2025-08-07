import Link from "next/link";

const LastMomentDelivery = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="last-moment-box">
          <div className="box-content">
            <h4>Last Minute Move?</h4>
            <p>
              Don't worry! We specialize in emergency and last-minute <br />
              relocations. Our team is ready to help you move on short notice.
            </p>
          </div>
          <div className="box-action">
            <Link href="" className="button-secondary button text-dark">
              Request Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMomentDelivery;
