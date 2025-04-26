import { footersData, footersLinks } from "@/GlobalConstant";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={
                  "https://goldstarmovers.ca/wp-content/uploads/2021/01/logo.png"
                }
                width={200}
                height={100}
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
            <div className="col-md-4">
              <div className="mt-4">
                <h4 className="text-uppercase text-white">Useful Links</h4>
                <ul className="list-unstyled list-style6 mb-0">
                    {footersLinks && footersLinks.map((f) => {
                        return <li key={f.id}>
                            <Link href={f.url} className="text-white">{f.menu}</Link>
                        </li>
                    })}
                </ul>
              </div>
            </div>
            <div className="col-md-4">s</div>
          </div>
          <div className="row">
            <div className="col-md-12">s</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
