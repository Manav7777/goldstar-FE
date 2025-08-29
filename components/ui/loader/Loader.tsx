"use client";
import Image from "next/image";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="preloader-content">
        <div className="preloader-image-wrapper">
          <Image
            src={`/images/preloader-goldstar.webp`}
            alt="GoldStar preloader Logo"
            className="preloader-logo"
            width={120}
            height={120}
            priority
          />
        </div>
        <p className="preloader-text h6">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
