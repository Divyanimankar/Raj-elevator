import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./CTASection.css";

export default function CTA() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    buildingtype: "",
    floors: "",
    shaft: "",
    subject: "",
  });

  /* =========================
     NAME CHANGE
  ========================= */

  const handleNameChange = (e) => {
    const value = e.target.value;

    // Numbers / special characters remove
    const cleanValue = value.replace(/[^a-zA-Z\s]/g, "");

    e.target.value = cleanValue;

    if (cleanValue.trim().length >= 2) {
      setErrors((prev) => ({
        ...prev,
        fullname: "",
      }));
    }
  };

  /* =========================
     PHONE CHANGE
  ========================= */

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Only numbers + maximum 10 digits
    const cleanValue = value.replace(/\D/g, "").slice(0, 10);

    e.target.value = cleanValue;

    if (/^[6-9]\d{9}$/.test(cleanValue)) {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };

  /* =========================
     FLOORS CHANGE
  ========================= */

  const handleFloorsChange = (e) => {
    const value = e.target.value;

    // Only numbers
    const cleanValue = value.replace(/\D/g, "");

    e.target.value = cleanValue;

    if (cleanValue !== "") {
      setErrors((prev) => ({
        ...prev,
        floors: "",
      }));
    }
  };

  /* =========================
     GENERAL FIELD CHANGE
  ========================= */

  const handleFieldChange = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    if (status) {
      setStatus("");
    }
  };

  /* =========================
     FORM VALIDATION
  ========================= */

  const validateForm = (form) => {
    const newErrors = {};

    const fullname = form.fullname?.value.trim();
    const email = form.email?.value.trim();
    const phone = form.phone?.value.trim();
    const company = form.company?.value.trim();
    const buildingtype = form.buildingtype?.value.trim();
    const floors = form.floors?.value.trim();
    const shaft = form.shaft?.value.trim();
    const subject = form.subject?.value.trim();

    /* Full Name */
    if (!fullname) {
      newErrors.fullname = "Full name is required.";
    } else if (fullname.length < 2) {
      newErrors.fullname = "Please enter a valid name.";
    } else if (!/^[a-zA-Z\s]+$/.test(fullname)) {
      newErrors.fullname =
        "Name can contain only letters and spaces.";
    }

    /* Email */
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    /* Phone */
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number.";
    }

    /* Company */
    if (!company) {
      newErrors.company = "Company name is required.";
    }

    /* Building Type */
    if (!buildingtype) {
      newErrors.buildingtype =
        "Please select building type.";
    }

    /* Floors */
    if (!floors) {
      newErrors.floors =
        "Number of floors is required.";
    } else if (!/^\d+$/.test(floors)) {
      newErrors.floors =
        "Please enter numbers only.";
    }

    /* Shaft */
    if (!shaft) {
      newErrors.shaft =
        "Shaft dimensions are required.";
    }

    /* Subject */
    if (!subject) {
      newErrors.subject =
        "Inquiry subject is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================
     SEND EMAIL
  ========================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    setStatus("");

    // Validation
    if (!validateForm(form)) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_1a934wi",
        "template_8wdcqh1",
        form,
        {
          publicKey: "vaTV90ZSYJunHCoYN",
        }
      );

      /* Success */
      setStatus(
        "Thank you! Your consultation request has been submitted successfully."
      );

      // Clear complete form
      form.reset();

      // Clear validation errors
      setErrors({
        fullname: "",
        email: "",
        phone: "",
        company: "",
        buildingtype: "",
        floors: "",
        shaft: "",
        subject: "",
      });

      // Hide message after 2 seconds
      setTimeout(() => {
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        "Something went wrong. Please try again."
      );

      // Hide error after 2 seconds
      setTimeout(() => {
        setStatus("");
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="cta-content">

          <h1>
            Ready to Elevate Your
            <br />
            Building with Japanese
            <br />
            Precision?
          </h1>

          <p>
            Speak to our engineering consultants today
            for site shaft audits, custom design drawings,
            and a detailed price proposal.
          </p>

          <div className="cta-info">

            <div className="cta-info-block">
              <span>Tell Free Helpline</span>

              {/* <strong>
                1800-123-5678
              </strong> */}

               <a href="tel:18001235678">
    <strong>1800-123-5678</strong>
  </a>
            </div>

            <div className="cta-info-block">
              <span>Email Inquiries</span>

               <a href="mailto:sales@rajelevators.com">
    <strong>sales@rajelevators.com</strong>
  </a>

              {/* <strong>
                sales@rajelevators.com
              </strong> */}
            </div>

          </div>
        </div>


        {/* =========================
            FORM CARD
        ========================= */}

        <div className="form-card">

          <h2>
            Request Consultation
          </h2>

          <form
            onSubmit={handleSubmit}
            noValidate
          >

            <div className="form-grid">

              {/* FULL NAME */}

              <div className="form-group">
                <label htmlFor="fullname">
                  Full Name
                </label>

                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your full name"
                  onChange={handleNameChange}
                  className={
                    errors.fullname
                      ? "input-error"
                      : ""
                  }
                />

                {errors.fullname && (
                  <span className="error-message">
                    {errors.fullname}
                  </span>
                )}
              </div>


              {/* EMAIL */}

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  onChange={() =>
                    handleFieldChange("email")
                  }
                  className={
                    errors.email
                      ? "input-error"
                      : ""
                  }
                />

                {errors.email && (
                  <span className="error-message">
                    {errors.email}
                  </span>
                )}
              </div>


              {/* PHONE */}

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  inputMode="numeric"
                  maxLength="10"
                  onChange={handlePhoneChange}
                  className={
                    errors.phone
                      ? "input-error"
                      : ""
                  }
                />

                {errors.phone && (
                  <span className="error-message">
                    {errors.phone}
                  </span>
                )}
              </div>


              {/* COMPANY */}

              <div className="form-group">
                <label htmlFor="company">
                  Company Name
                </label>

                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter company or estate name"
                  onChange={() =>
                    handleFieldChange("company")
                  }
                  className={
                    errors.company
                      ? "input-error"
                      : ""
                  }
                />

                {errors.company && (
                  <span className="error-message">
                    {errors.company}
                  </span>
                )}
              </div>


              {/* BUILDING TYPE */}

              <div className="form-group">
                <label htmlFor="buildingtype">
                  Building Type
                </label>

                <select
                  id="buildingtype"
                  name="buildingtype"
                  defaultValue=""
                  onChange={() =>
                    handleFieldChange("buildingtype")
                  }
                  className={
                    errors.buildingtype
                      ? "input-error"
                      : ""
                  }
                >
                  <option value="" disabled>
                    Select (e.g. Residential, Corporate)
                  </option>

                  <option value="Residential">
                    Residential
                  </option>

                  <option value="Corporate">
                    Corporate
                  </option>

                  <option value="Hospital">
                    Hospital
                  </option>

                  <option value="Industrial">
                    Industrial
                  </option>
                </select>

                {errors.buildingtype && (
                  <span className="error-message">
                    {errors.buildingtype}
                  </span>
                )}
              </div>


              {/* NUMBER OF FLOORS */}

              <div className="form-group">
                <label htmlFor="floors">
                  Number of Floors
                </label>

                <input
                  type="text"
                  id="floors"
                  name="floors"
                  placeholder="Number of Floors"
                  inputMode="numeric"
                  onChange={handleFloorsChange}
                  className={
                    errors.floors
                      ? "input-error"
                      : ""
                  }
                />

                {errors.floors && (
                  <span className="error-message">
                    {errors.floors}
                  </span>
                )}
              </div>


              {/* SHAFT DIMENSIONS */}

              <div className="form-group full-width">
                <label htmlFor="shaft">
                  Shaft Dimensions
                </label>

                <input
                  type="text"
                  id="shaft"
                  name="shaft"
                  placeholder="Shaft Dimensions"
                  onChange={() =>
                    handleFieldChange("shaft")
                  }
                  className={
                    errors.shaft
                      ? "input-error"
                      : ""
                  }
                />

                {errors.shaft && (
                  <span className="error-message">
                    {errors.shaft}
                  </span>
                )}
              </div>


              {/* INQUIRY SUBJECT */}

              <div className="form-group full-width">
                <label htmlFor="subject">
                  Inquiry Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="New Elevator Installation (Nidec PMSM Core)"
                  onChange={() =>
                    handleFieldChange("subject")
                  }
                  className={
                    errors.subject
                      ? "input-error"
                      : ""
                  }
                />

                {errors.subject && (
                  <span className="error-message">
                    {errors.subject}
                  </span>
                )}
              </div>

            </div>


            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Sending..."
                : "Send Inquiry Message"}
            </button>


            {/* STATUS MESSAGE */}

            {status && (
              <div
                className={`form-status ${
                  status.includes("Thank you")
                    ? "success"
                    : "error"
                }`}
              >
                {status}
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}