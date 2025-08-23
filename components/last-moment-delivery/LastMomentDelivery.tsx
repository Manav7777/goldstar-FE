import GsButton from "../ui/GsButton";

const LastMomentDelivery = () => {
  return (
    <div className="container">
      <div className="row"  data-aos="zoom-in" data-aos-duration="400">
        <div className="last-moment-box">
          <div className="box-content">
            <h4 className="text-dark">Last Minute Move?</h4>
            <p className="text-muted">
              Don't worry! We specialize in emergency and last-minute <br />
              relocations. Our team is ready to help you move on short notice.
            </p>
          </div>
          <div className="box-action">
            <GsButton type="white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMomentDelivery;
