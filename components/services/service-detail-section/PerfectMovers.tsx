import React from 'react'

const PerfectMovers = ({services, slug}:any) => {
  const subtitles:any = {
    "residential-moving-service":
      "Our comprehensive residential moving services are designed to handle every aspect of your move with precision and care.",
    "commercial-moving-service":
      "We provide efficient commercial moving solutions tailored to businesses of all sizes.",
    "cross-country-moving-service":
      "Relocate across states smoothly with our reliable cross-country moving services.",
    "junk-removal-moving-service":
      "Efficient and eco-friendly junk removal tailored to your needs.",
    "long-distance-moving-service":
      "We specialize in long-distance moves, ensuring your belongings arrive safely and on time.",
    "demolition-service": "Our demolition services are designed to handle every aspect of your project with precision and care.",
  };

  const subtitleText =
    subtitles[slug] ||
    "We provide professional moving and removal services tailored to your needs.";
  return (
    <>
    <section className="perfect-move-section bg-light mt-5" key={"perfect-move"}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
             {slug === "junk-removal-moving-service"
              ? "Everything You Need for Effortless "
              : "Everything You Need for a"}
            <span className="highlight">
              {" "}
              {slug === "junk-removal-moving-service"
                ? "Junk Removal"
                : slug === "demolition-service"
                ? "Safe Demolition"
                : "Perfect Move"}
            </span>
          </h2>
          <p className="section-subtitle">{subtitleText}</p>
        </div>

        <div className="row g-4">
          {services && services.map((item:any, idx:any) => (
            <div key={idx} className="col-md-6 col-lg-4 cursor-pointer" data-aos="fade-up"
            data-aos-delay={idx * 50}
            data-aos-duration="800">
              <div className="service-card h-100 p-4">
                <div className="service-icon">
                  <span dangerouslySetInnerHTML={{__html:item.icon}}></span>
                </div>
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default PerfectMovers