import React, { useState } from "react";

const ConsultationModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeframe: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  if (!isOpen) return null;

  return (
    <div className="consultation-modal-overlay">
      <div className="consultation-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        {!submitted ? (
          <>
            <h2>Book a Consultation</h2>
            <p className="desc">Fill out this quick survey to help us serve you better.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Branding">Branding</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Budget</label>
                  <input name="budget" value={form.budget} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Timeframe</label>
                  <input name="timeframe" value={form.timeframe} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Project Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} required rows={4} />
              </div>
              <button className="submit-btn" type="submit">Submit</button>
            </form>
          </>
        ) : (
          <div className="thank-you">
            <h3>Thank you!</h3>
            <p>We have received your request and will get back to you soon.</p>
            <button className="submit-btn" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
      <style jsx>{`
        .consultation-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(8, 14, 16, 0.7);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .consultation-modal {
          background: #fff;
          border-radius: 24px;
          max-width: 500px;
          width: 95vw;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          position: relative;
          color: #080e10;
        }
        .consultation-modal h2 {
          color: #003366;
          margin-bottom: 0.5rem;
        }
        .consultation-modal .desc {
          color: #00dc93;
          margin-bottom: 1.5rem;
        }
        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          font-size: 2rem;
          color: #003366;
          cursor: pointer;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-row {
          display: flex;
          gap: 1rem;
        }
        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        label {
          font-weight: 500;
          margin-bottom: 0.3rem;
          color: #003366;
        }
        input, select, textarea {
          border: 1px solid #003366;
          border-radius: 8px;
          padding: 0.5rem;
          font-size: 1rem;
          background: #f8fafd;
          color: #080e10;
        }
        .submit-btn {
          background: linear-gradient(90deg, #003366 60%, #00dc93 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 1rem;
          transition: background 0.2s;
        }
        .submit-btn:hover {
          background: linear-gradient(90deg, #00dc93 0%, #003366 100%);
        }
        .thank-you {
          text-align: center;
          color: #003366;
        }
        @media (max-width: 600px) {
          .consultation-modal {
            padding: 1rem 0.5rem;
          }
          .form-row {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ConsultationModal;
