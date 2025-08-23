"use client";
import React, { useRef, useState } from "react";

const VideoCard = ({ title, description, person, location, videoSrc }: any) => {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card border-light shadow-sm mb-4" data-aos="fade-up">
      <div
        className="position-relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          src={videoSrc}
          ref={videoRef}
          className="card-img-top h-show-opa"
          controls
          style={{ height: "200px", objectFit: "cover" }}
        >
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div
            className="position-absolute top-0 start-0 bg-dark bg-opacity-50 text-white p-3 rounded-3"
            style={{ width: "100%", height: "100%" }}
          ></div>
        )}
        <div
          className={`position-absolute top-50 start-50 translate-middle bg-primary bg-opacity-50 text-white p-3 rounded-3
            ${isPlaying && "opacity-0"} ${
            isPlaying && isHovered && "opacity-50"
          } show-opacity`}
        >
          <div
            className="d-flex justify-content-center align-items-center cursor-pointer"
            onClick={handlePlayPause}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play text-white"
              aria-hidden="true"
            >
              {isPlaying ? (
                <>
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </>
              ) : (
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              )}
            </svg>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="text-muted text-primary">{title}</h5>
        <p className="card-text text-dark">{description}</p>
        <div className="d-flex align-items-center">
          <div className="bg-primary text-white p-2 rounded-circle me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user"
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <p className="fw-bold mb-0">{person}</p>
            <p className="text-muted small mb-1 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin me-1"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientReviewsVideos = () => {
  const videoData = [
    {
      title: "Why Our Clients Choose Us",
      description:
        "Sarah shares her experience with our professional moving team",
      person: "Junior Garcia",
      location: "Oshawa, CA to Buffalo, US",
      videoSrc: `${process.env.NEXT_PUBLIC_VIDEO_SERVICE_URL}Junior-Garcia.mp4`,
    },
    {
      title: "Stress-Free Business Move",
      description: "How we helped relocate their entire office in one day",
      person: "Pranav Shah",
      location: "Brampton, ON to Ashburn, Virginia, US ",
      videoSrc: `${process.env.NEXT_PUBLIC_VIDEO_SERVICE_URL}Pranav-Shah.mp4`,
    },
    {
      title: "Long Distance Excellence",
      description: "Moving from Toronto to Ottawa made simple",
      person: "Turiska Nolan",
      location: "Toronto, ON to Ottawa, ON ",
      videoSrc: `${process.env.NEXT_PUBLIC_VIDEO_SERVICE_URL}Turiska-Nolan.mp4`,
    },
    {
      title: "Same Day Moving Success",
      description: "Emergency relocation handled with care and speed",
      person: "Michael Chandler",
      location: "Oakville to Barrie",
      videoSrc: `${process.env.NEXT_PUBLIC_VIDEO_SERVICE_URL}Michael-Chandler.mp4`,
    },
    {
      title: "Piano Moving",
      description: "Making our family move smooth and worry-free",
      person: "Emran Khan",
      location: "Oakville, CA",
      videoSrc: `${process.env.NEXT_PUBLIC_VIDEO_SERVICE_URL}Emran-Khan.mp4`,
    },
    {
      title: "Professional Packing Service",
      description: "How our packing team protected all our valuables",
      person: "Catheriner Smith",
      location: "Mississauga, CA",
      videoSrc: `${process.env.NEXT_PUBLIC_VIDEO_SERVICE_URL}Catheriner-Smith.mp4`,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-3">
          <h2 className="text-center">HAPPY CLIENTS</h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {videoData.map((video, index) => (
          <div className="col" key={index}>
            <VideoCard {...video}  index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientReviewsVideos;
