"use client"
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Phone, Mail, MapPin, Package, CheckCircle } from "lucide-react";

export default function RequestQuoteForm({ open, close }: any) {
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

 const movingOptions = [
  { value: "1bhk", label: "1 Bed Room" },
    { value: "2bhk", label: "2 Bed Room" },
    { value: "3bhk", label: "3 Bed Room" },
    { value: "4bhk", label: "4+ Bed Room" },
    { value: "studio", label: "Studio Apartment" },
    { value: "commercial", label: "Commercial Space" },
    { value: "piano", label: "Piano Moving" },
    { value: "safe", label: "Safe Move"},
    { value: "long distance", label: "Long Distance Move" },
    { value: "cross-country", label: "Cross-Country Move" },
    { value: "junk-removal", label: "Junk Removal" },
    { value: "demolition", label: "Demolition" },
   
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        close();
        resetForm();
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Failed to send request.");
    } finally {
      setIsLoading(false);
    }
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
          Get Your Free Moving Quote
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
            <Button onClick={resetForm} className="btn btn-warning fw-semibold">
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
                  <label htmlFor="modal-name" className="form-label">
                    Full Name *
                  </label>
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
                  <label htmlFor="modal-phone" className="form-label">
                    Mobile Number *
                  </label>
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
                <label htmlFor="modal-email" className="form-label">
                  Email Address *
                </label>
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
                Moving Details
              </h6>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Type of Services *</label>
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
                  <label htmlFor="modal-moveDate" className="form-label">
                    Preferred Move Date
                  </label>
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
                Moving Locations
              </h6>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="modal-originAddress" className="form-label">
                    Moving From *
                  </label>
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
                  <label htmlFor="modal-destinationAddress" className="form-label">
                    Moving To *
                  </label>
                  <textarea
                    id="modal-destinationAddress"
                    value={formData.destinationAddress}
                    onChange={(e) => handleInputChange("destinationAddress", e.target.value)}
                    required
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
                <label htmlFor="modal-additionalInfo" className="form-label">
                  Tell us more about your move (Optional)
                </label>
                <textarea
                  id="modal-additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  rows={3}
                  className="form-control"
                />
              </div>
            </div>

            {/* Show error if any */}
            {error && (
              <div className="alert alert-danger mb-3" role="alert">
                {error}
              </div>
            )}

            {/* Show loading indicator */}
            {isLoading && (
              <div className="text-center mb-3">Sending request...</div>
            )}

            {/* Submit Button */}
            <div className="text-center mt-4">
              <Button type="submit" variant="warning" className="fw-semibold" disabled={isLoading}>
                {isLoading ? "Sending..." : "Get My Quote"}
              </Button>
            </div>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
}


