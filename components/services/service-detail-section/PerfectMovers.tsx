import React from 'react'

const PerfectMovers = ({services}:any) => {
  return (
    <>
    <section className="perfect-move-section bg-light mt-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Everything You Need for a <span className="highlight">Perfect Move</span>
          </h2>
          <p className="section-subtitle">
            Our comprehensive residential moving services are designed to handle every aspect of your move with precision and care.
          </p>
        </div>

        <div className="row g-4">
          {services && services.map((item:any, idx:any) => (
            <div key={idx} className="col-md-6 col-lg-4 cursor-pointer">
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