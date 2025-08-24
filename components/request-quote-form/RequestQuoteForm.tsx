"use client"
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Phone, Mail, MapPin, Package, CheckCircle } from "lucide-react";


export default function RequestQuoteForm( {open , close}: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    movingType: "",
    originAddress: "",
    destinationAddress: "",
    moveDate: "",
    additionalInfo: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const movingOptions = [
    { value: "1bhk", label: "1 Bedroom" },
    { value: "2bhk", label: "2 Bedroom" },
    { value: "3bhk", label: "3 Bedroom" },
    { value: "4bhk", label: "4+ Bedroom" },
 
    { value: "studio", label: "Studio Apartment" },
    { value: "office", label: "Office Moving" },
    { value: "storage", label: "Storage Moving" },
    { value: "long distance", label: "Long Distance Moving" },
    { value: "cross-country", label: "Cross-Country Moving" },
  { value: "appliance", label: "Appliance Moving },
  { value: "piano", label: "Piano Moving" },
  { value: "safe", label: "Safe Moving" },
  { value: "hot-tub moving", label:"Hot-tub moving"},

   { value: "packingunpacking", label: "Packing/Unpacking" },
    { value: "junk-removal", label: "Junk Removal" },
    { value: "demolition", label: "Demolition" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      close();
      setFormData({
        name: "",
        email: "",
        phone: "",
        movingType: "",
        originAddress: "",
        destinationAddress: "",
        moveDate: "",
        additionalInfo: "",
      });
    }, 3000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      movingType: "",
      originAddress: "",
      destinationAddress: "",
      moveDate: "",
      additionalInfo: "",
    });
  };

  return (
    <Modal
      show={open}
      onHide={() => close()}
      size="lg"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton className="bg-primary">
        <Modal.Title id="example-custom-modal-styling-title">
            Get Your Free Quote Today
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isSubmitted ? (
          <div className="text-center py-5">
            <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center p-3 mb-4">
              <CheckCircle className="text-dark" size={40} />
            </div>
            <h3 className="h4 text-dark mb-3">Request Submitted!</h3>
            <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "500px" }}>
              Thank you for your request. Our team will contact you to provide your personalized quote.
            </p>
            <Button
              onClick={resetForm}
              className="btn btn-warning fw-semibold"
            >
              Submit Another Request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="mb-4">
              <h6 className="d-flex align-items-center text-dark mb-3">
                <Phone className="me-2 text-warning wi-18" />
                Contact Information
              </h6>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="modal-name" className="form-label">Full Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="modal-phone" className="form-label">Mobile Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="(xxx) xxx-xxxx"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="modal-email" className="form-label">Email Address *</label>
                <input
                  id="modal-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="form-control"
                />
              </div>
            </div>

            {/* Moving Details */}
            <div className="mb-4 border-top pt-4">
              <h6 className="d-flex align-items-center text-dark mb-3">
                <Package className="me-2 text-warning wi-18" />
                Service Details
              </h6>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Type of Service *</label>
                  <select
                    className="form-select gold-star-select"
                    value={formData.movingType}
                    onChange={(e) => handleInputChange("movingType", e.target.value)}
                    required
                  >
                    <option value="">Select your Service type</option>
                    {movingOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="modal-moveDate" className="form-label">Preferred Service Date</label>
                  <input
                    id="modal-moveDate"
                    type="date"
                    value={formData.moveDate}
                    onChange={(e) => handleInputChange("moveDate", e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="mb-4 border-top pt-4">
              <h6 className="d-flex align-items-center text-dark mb-3">
                <MapPin className="me-2 text-warning wi-18" />
               Service Locations
              </h6>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="modal-originAddress" className="form-label">From *</label>
                  <textarea
                    id="modal-originAddress"
                    value={formData.originAddress}
                    onChange={(e) => handleInputChange("originAddress", e.target.value)}
                    required
                    rows={2}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="modal-destinationAddress" className="form-label">To</label>
                  <textarea
                    id="modal-destinationAddress"
                    value={formData.destinationAddress}
                    onChange={(e) => handleInputChange("destinationAddress", e.target.value)}
                    rows={2}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-4 border-top pt-4">
              <h6 className="d-flex align-items-center text-dark mb-3">
                <Mail className="me-2 text-warning wi-18" />
                Additional Information
              </h6>
              <div className="mb-3">
                <label htmlFor="modal-additionalInfo" className="form-label">Tell us more about your Services (Optional)</label>
                <textarea
                  id="modal-additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  rows={3}
                  className="form-control"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <Button type="submit" variant="warning" className="fw-semibold">
                Get My Quote
              </Button>
            </div>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
}
