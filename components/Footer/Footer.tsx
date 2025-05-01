import { footersData, footersLinks, openingTimes } from "@/GlobalConstant";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <img
                src={
                  "https://goldstarmovers.ca/wp-content/uploads/2021/01/logo.png"
                }
                width={200}
                height={100}
                style={{background: '#fff'}}
                alt="logo"
              />
              <p className="text-white">
                We get your belongings where they need to be on time and within
                budget. Gold Star Movers has completed hundreds of successful
                moves with nothing but smiles and positive reviews.
              </p>
              <button className="button button-primary text-dark">
                Request Now
              </button>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="mt-4">
                <div className="mb-1-9">
                  <h3 className="h4 text-white">Useful Links</h3>
                </div>
                <ul className="list-unstyled list-style6 mb-0">
                  {footersLinks &&
                    footersLinks.map((f) => {
                      return (
                        <li key={f.id}>
                          <Link href={f.url} className="">
                            {f.menu}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="mt-4">
                <div className="mb-1-9">
                  <h3 className="h4 text-white">Opening hours</h3>
                </div>
                <ul className="list-unstyled list-style6 mb-0">
                  {openingTimes &&
                    openingTimes.map((f) => {
                      return (
                        <li key={f.id}>
                          <span className="sm-title">{f.day}</span>: {f.time}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="mt-4">
                <div className="mb-1-9">
                  <h3 className="h4 text-white">Contact Here</h3>
                </div>
                <ul className="list-unstyled list-style6 mb-0">
                  {/* {openingTimes &&
                    openingTimes.map((f) => {
                      return (
                        <li key={f.id}>
                          <span className="sm-title">{f.day}</span>: {f.time}
                        </li>
                      );
                    })} */}
                  <li key={"address"}>
                    <span className="sm-title">Address</span>: We service all
                    across Toronto and the GTA.
                  </li>
                  <li key={"Phone"}>
                    <span className="sm-title">Phone</span>:
                    <Link href={"tel:289-541-7282"}>289-541-7282</Link>
                  </li>
                  <li key={"Email"}>
                    <span className="sm-title">Email</span>:
                    <Link href={"mailto:goldstar4movers@gmail.com"}>
                      goldstar4movers@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
            <hr />
            <div className="col-md-12 text-center">
              © 2021 Gold Star Movers. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
