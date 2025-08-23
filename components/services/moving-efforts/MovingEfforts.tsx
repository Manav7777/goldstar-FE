import Image from "next/image";
import React from "react";

const MovingEfforts = ({ residentialMovingEfforts }: any) => {
  return (
    <>
      <div className="container mt-5 py-5" key={"moving-efforts"}>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark">
            {residentialMovingEfforts.title}
            <span className="text-primary">
              {residentialMovingEfforts.span}
            </span>
          </h2>
          <p className="lead text-muted mx-auto max-width-md">
            {residentialMovingEfforts.description}
          </p>
        </div>
        <div className="row gy-4">
          {residentialMovingEfforts.data &&
            residentialMovingEfforts.data.map((item: any, idx: number) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-3 position-relative cursor-pointer"
                  key={idx}
                  data-aos="fade-up" data-aos-delay="300"
                >
                  <div className="card h-100 border border-light shadow-sm step-card">
                    <div className="card-body pt-4">
                      <div
                        className={`d-flex ${
                          item.number
                            ? "justify-content-between"
                            : "justify-content-center"
                        } align-items-center mb-4`}
                      >
                        {item.number && (
                          <div className="step-number">{item.number}</div>
                        )}
                        <div
                          className={`icon-box ${item.bgColor} ${item.textColor}`}
                        >
                          <span
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                          ></span>
                        </div>
                      </div>
                      <h5 className={`fw-bold text-dark ${!item.number && 'text-center'}`}>{item.title}</h5>
                      <p className={`text-muted ${!
                        item.number && 'text-center'}`}>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MovingEfforts;
