"use client";
import TopSection from "@/components/Top-Section/TopSection";
import Link from "next/link";
import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // integrate with email API like EmailJS / Nodemailer
  };
  return (
    <>
      <TopSection title={"Contact"}/>
      <div className="container py-5">
        <div className="row">
          {/* Form */}
          <div className="col-md-7 mb-5">
            <p className="text-primary fw-bold">CONTACT</p>
            <h1 className="fw-bold mb-4">Get in touch</h1>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="full name"
                    className="form-control"
                    placeholder="Your name here"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email here"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Your subject here"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Your phone number here"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={5}
                    placeholder="Tell us a few words"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="button-primary button mt-4 px-4">
                Request Quote
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="col-md-5 text-white p-4 rounded"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}contact-to-gold-star-movers.webp)`,
              position: "relative",
            }}
          >
            <div className="overlay-bg"></div>
            <div className="contact-info-wrapper">
              <h2 className="fw-bold text-primary">Contact detail</h2>
              <p className="text-white">
                Need any consultations? Contact with us.
              </p>

              <div className="mb-3 d-flex ">
                <div className="wrapper-icon">
                  <FontAwesomeIcon className="text-primary" icon={faPhone} />
                </div>
                <div className="content">
                  <p className="fw-bold mb-1">Phone Number</p>
                  <Link href="tel:(289)541-7282">+1 (289) 541-7282</Link>
                </div>
              </div>
              <hr />
              <div className="mb-3 d-flex">
                <div className="wrapper-icon">
                  <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
                </div>
                <div className="content">
                  <p className="fw-bold mb-1">Email Address</p>
                  <Link href="mailto:goldstar4movers@gmail.com">
                    goldstar4movers@gmail.com
                  </Link>
                </div>
              </div>
              <hr />
              <div className="mb-4 d-flex">
                <div className="wrapper-icon">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faLocationDot}
                  />
                </div>
                <div className="content">
                  <p className="fw-bold mb-1">Location</p>
                  <p>
                    Guild Street 51, North Town,
                    <br />
                    London–06192, UK
                  </p>
                </div>
              </div>
              <hr />
              <div className="d-flex gap-3">
                <Link href="/" className="text-white social-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
                <Link href="/" className="text-white social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="/" className="text-white social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link href="/" className="text-white social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
