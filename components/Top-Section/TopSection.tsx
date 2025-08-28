import Link from "next/link";
import "./TopSection.css";

const TopSection = ({title}:any) => {
  return (
    <div
      className="main-top-section"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}/images/packers-and-movers-new.webp)`,
      }}
    >
      <div className="overlay-section"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 top-content-section">
            <h1>{title}</h1>
            <div className="breadcrumb">
              <ul>
                <li>
                  <Link href="">Home</Link>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
