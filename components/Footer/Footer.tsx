import {
  Phone,
  Mail,
  MapPin,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "lucide-react";
import "./Footer.css";
import Link from "next/link";
import { footersLinks, socialLinks } from "@/GlobalConstant";
const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="pt-5 pb-2">
        <div className="container-xl">
          <div className="row g-4">
            {/* <div className="col-12"> */}
              <div className="col-sm-12 col-md-8 text-gray-300">
                <p>Subscribe to our newsletter to <br /> receive updates on the latest news!</p>
              </div>
              <div className="subscribe-input col-sm-12 col-md-4 ">
                  <input
                    className="form-control news-box"
                    placeholder="Subscribe with us"
                    type="email"
                    name="email"
                    required
                  />
                  <button className="btn btn-warning">Subscribe</button>
              </div>
            {/* </div> */}
            <hr style={{color: "#fff"}} />
            <div className="col-12 col-md-4">
              <div className="d-inline-block mb-1">
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}footer-logo.png`}
                  width={180}
                  alt="logo"
                />
              </div>
              <p className="text-gray-300 small">
                Canada's trusted moving company. Professional, reliable, and
                affordable moving services across the country.
              </p>
              <div className="d-flex">
                <Link href={socialLinks.facebook} target="_blank" className="text-gray-300 me-2">
                  <FacebookIcon className="me-2 text-warning wi-18" />
                </Link>
                <Link href={socialLinks.instagram} target="_blank" className="text-gray-300 me-2">
                  <InstagramIcon className="me-2 text-warning wi-18" />
                </Link>
                <Link href={socialLinks.youtube} target="_blank" className="text-gray-300">
                  <YoutubeIcon className="me-2 text-warning wi-18" />
                </Link>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-2">
              <h5 className="font-weight-semibold mb-4 text-white">
                Quick Links
              </h5>
              <ul className="list-unstyled small">
                <li>
                  <Link href="/" className="text-gray-300 text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 text-decoration-none"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 text-decoration-none"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-3">
              <h5 className="font-weight-semibold mb-4 text-white">Services</h5>
              <ul className="list-unstyled small">
                {footersLinks.map((s) => {
                  return <li key={s.id}>
                  <Link
                    href={s.url}
                    className="text-gray-300 text-decoration-none"
                  >
                   {s.menu}
                  </Link>
                </li>
                })}
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-12 col-md-3">
              <h5 className="font-weight-semibold mb-4 text-white">
                Contact Info
              </h5>
              <div className="d-flex align-items-center mb-3">
                <Phone className="me-2 text-warning wi-18" />
                <Link href={"tel:(289) 541-7282"} className="text-white">
                  +1 (289) 541-7282
                </Link>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Mail className="me-2 text-warning wi-18" />
                <Link
                  href={"mailto:goldstar4movers@gmail.com"}
                  className="text-white"
                >
                  goldstar4movers@gmail.com
                </Link>
              </div>
              <div className="d-flex align-items-start">
                <MapPin className="me-2 text-warning wi-18" />
                <span className="text-white">
                  1850 Rathburn Rd E,
                  <br />
                   Mississauga, ON L4W 2X9, Canada
                </span>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
            <hr />
            <div className="col-md-6 col-sm-12">
              {" "}
              © 2021 Gold Star Movers. All Rights Reserved.
            </div>
            <div className="col-md-6 col-sm-12"> Powered by : MetaFox Tech</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
