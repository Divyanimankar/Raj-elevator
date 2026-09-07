import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./CTASection.css";

export default function CTA() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    fullname: "",
    buildingtype: "",
    contact: "",
  });

  // =========================
  // FORM VALIDATION
  // =========================
  const validateForm = (form) => {
    const fullname = form.fullname.value.trim();
    const buildingtype = form.buildingtype.value;
    const contact = form.contact.value.trim();

    const newErrors = {
      fullname: "",
      buildingtype: "",
      contact: "",
    };

    let isValid = true;

    // =========================
    // NAME VALIDATION
    // =========================
    if (!fullname) {
      newErrors.fullname = "Please enter your full name.";
      isValid = false;
    } else if (fullname.length < 2) {
      newErrors.fullname = "Name must be at least 2 characters.";
      isValid = false;
    } else if (!/^[A-Za-z ]+$/.test(fullname)) {
      newErrors.fullname =
        "Name can contain only letters and spaces.";
      isValid = false;
    }

    // =========================
    // BUILDING TYPE VALIDATION
    // =========================
    if (!buildingtype) {
      newErrors.buildingtype = "Please select building type.";
      isValid = false;
    }

    // =========================
    // CONTACT VALIDATION
    // =========================
    if (!contact) {
      newErrors.contact = "Please enter your contact number.";
      isValid = false;
    } else if (!/^[6-9][0-9]{9}$/.test(contact)) {
      newErrors.contact =
        "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  // =========================
  // FORM SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    setStatus("");

    // Validate form
    const isValid = validateForm(form);

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      // =========================
      // EMAILJS CONFIGURATION
      // =========================
      console.log("Sending EmailJS request...", {
        serviceId: "service_1a934wi",
        templateId: "template_mxc496o",
        publicKey: "vaTV90ZSYJunHCoYN",
      });

      await emailjs.sendForm(
        "service_1a934wi",
        "template_fybm288",
        form,
        {
          publicKey: "vaTV90ZSYJunHCoYN",
        }
      );

      // =========================
      // SUCCESS
      // =========================
      setStatus(
        "Thank you! Your consultation request has been submitted successfully."
      );

      // Reset form
      form.reset();

      // Clear errors
      setErrors({
        fullname: "",
        buildingtype: "",
        contact: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);

    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================
  // NAME INPUT
  // =========================
  const handleNameChange = (e) => {
    const value = e.target.value;

    // Allow only letters and spaces
    if (value && !/^[A-Za-z ]+$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        fullname: "Only letters and spaces are allowed.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        fullname: "",
      }));
    }
  };

  // =========================
  // CONTACT INPUT
  // =========================
  const handleContactChange = (e) => {
    const value = e.target.value;

    // Allow only numbers
    if (value && !/^[0-9]*$/.test(value)) {
      return;
    }

    // Maximum 10 digits
    if (value.length > 10) {
      return;
    }

    // First digit must be 6-9
    if (value.length > 0 && !/^[6-9]/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        contact:
          "Mobile number must start with 6, 7, 8 or 9.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        contact: "",
      }));
    }
  };

  // =========================
  // BUILDING TYPE
  // =========================
  const handleBuildingChange = () => {
    setErrors((prev) => ({
      ...prev,
      buildingtype: "",
    }));
  };

  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="cta-content">

          <h1>
            Ready to Elevate Your Building with Japanese Precision?
          </h1>

          <p>
            Speak to our engineering consultants today for site shaft
            audits, custom design drawings, and a detailed price proposal.
          </p>

          <div className="cta-info">

            {/* Toll Free */}
            <div className="cta-info-block">

              <span className="label">
                Toll Free Helpline
              </span>

              <a
                href="tel:18001235678"
                className="value"
              >
                1800-123-5678
              </a>

            </div>

            {/* Email */}
            <div className="cta-info-block">

              <span className="label">
                Email Inquiries
              </span>

              <a
                href="mailto:sales@rajelevators.com"
                className="value"
              >
                sales@rajelevators.com
              </a>

            </div>

          </div>
        </div>

        {/* =========================
            RIGHT FORM
        ========================= */}
        <div className="form-card">

          <h2>
            Request Consultation
          </h2>

          <form
            onSubmit={handleSubmit}
            noValidate
          >

            {/* =========================
                FULL NAME
            ========================= */}
            <div className="form-group">

              <label htmlFor="fullname">
                Your Full Name
              </label>

              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter name"
                autoComplete="name"
                onChange={handleNameChange}
                className={
                  errors.fullname
                    ? "input-error"
                    : ""
                }
              />

              {errors.fullname && (
                <span className="field-error">
                  {errors.fullname}
                </span>
              )}

            </div>

            {/* =========================
                BUILDING TYPE
            ========================= */}
            <div className="form-group">

              <label htmlFor="buildingtype">
                Building Type
              </label>

              <div className="select-wrapper">

                <select
                  id="buildingtype"
                  name="buildingtype"
                  defaultValue=""
                  onChange={handleBuildingChange}
                  className={
                    errors.buildingtype
                      ? "input-error"
                      : ""
                  }
                >

                  <option
                    value=""
                    disabled
                  >
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

              </div>

              {errors.buildingtype && (
                <span className="field-error">
                  {errors.buildingtype}
                </span>
              )}

            </div>

            {/* =========================
                CONTACT NUMBER
            ========================= */}
            <div className="form-group">

              <label htmlFor="contact">
                Contact Number
              </label>

              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Enter phone number"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                onChange={handleContactChange}
                className={
                  errors.contact
                    ? "input-error"
                    : ""
                }
              />

              {errors.contact && (
                <span className="field-error">
                  {errors.contact}
                </span>
              )}

            </div>

            {/* =========================
                SUBMIT BUTTON
            ========================= */}
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >

              {isSubmitting
                ? "Submitting..."
                : "Submit Request"}

            </button>

            {/* =========================
                STATUS MESSAGE
            ========================= */}
            {status && (
              <p
                className={
                  status.startsWith("Thank you")
                    ? "form-status success"
                    : "form-status error"
                }
              >
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}