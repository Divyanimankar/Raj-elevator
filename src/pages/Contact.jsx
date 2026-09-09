import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    buildingtype: "",
    floors: "",
    subject: "",
    shaft: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Remove success/error message while editing
    setStatus("");
  };

  // =========================
  // VALIDATION
  // =========================
  const validateForm = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (formData.fullname.trim().length < 2) {
      newErrors.fullname = "Please enter a valid name";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone
    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Company
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    // Building Type
    if (!formData.buildingtype) {
      newErrors.buildingtype = "Building type is required";
    }

    // Floors
    if (!formData.floors.trim()) {
      newErrors.floors = "Number of floors is required";
    } else if (Number(formData.floors) < 1) {
      newErrors.floors = "Number of floors must be at least 1";
    }

    // Subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Inquiry subject is required";
    }

    // Shaft
    if (!formData.shaft.trim()) {
      newErrors.shaft = "Shaft dimensions are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");

    // Validate form
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = "service_1a934wi";
      const templateId = "template_8wdcqh1";
      const publicKey = "vaTV90ZSYJunHCoYN";

      console.log("Sending EmailJS request...", {
        serviceId,
        templateId,
        publicKey,
      });


      await emailjs.send(
        serviceId,
        templateId,
        {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          buildingtype: formData.buildingtype,
          floors: formData.floors,
          subject: formData.subject,
          shaft: formData.shaft,
        },
        {
          publicKey: publicKey,
        },
      );

      console.log("Email sent successfully");

      // Show success message
      setStatus("success");

      // Hide success message after 2 seconds
      setTimeout(() => {
        setStatus("");
      }, 2000);

      // Clear form
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        company: "",
        buildingtype: "",
        floors: "",
        subject: "",
        shaft: "",
      });

      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* =========================
          FIRST SECTION
      ========================= */}

      <section className="contactHero">
        <div className="contactHeroContent">
          <div className="contactHeroBadge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polygon points="12 2 15 9 22 9.5 16.5 14.5 18 22 12 18 6 22 7.5 14.5 2 9.5 9 9" />
            </svg>
            Japanese Nidec Precision Engineering Inside
          </div>

          <h1 className="contactHeroTitle">Get In Touch</h1>

          <p className="contactHeroSubtitle">
            Connect with India's premier high-precision elevator manufacturing
            team. Request systematic technical specs, site shaft audits, or AMC
            proposals.
          </p>
        </div>
      </section>

      {/* =========================
          SECOND SECTION
      ========================= */}

      <div className="contactGrid">
        {/* OFFICE ADDRESS */}

        <div className="contactCard">
          <div className="contactCardTop">
            <div className="contactCardTitle">Office Address</div>

            <div className="contactCardIcon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#009B4A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.05 11.34 7.35 11.6a1 1 0 0 0 1.3 0C13 21.34 20 15.25 20 10c0-4.42-3.58-8-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
          </div>

          <div className="contactCardText">
            205, Hari Om Plaza, M.G. Road, Borivali (East), Mumbai - 400 066
          </div>
        </div>

        {/* PHONE */}

        <div className="contactCard">
          <div className="contactCardTop">
            <div className="contactCardTitle">Phone Hotline</div>

            <a
              href="tel:+918080845028"
              className="contactCardIcon"
              aria-label="Call Raj Elevators"
            >
              <svg viewBox="0 0 24 24" fill="#009B4A" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.75-.25 1.03l-2.2 2.19z" />
              </svg>
            </a>
          </div>

          <a
            href="tel:+918080845028"
            className="contactCardText contactCardLink"
          >
            +91 8080 845 028
          </a>
        </div>

        {/* EMAIL */}

        <div className="contactCard">
          <div className="contactCardTop">
            <div className="contactCardTitle">Email Inquiries</div>

            <a
              href="mailto:contact@rajelevators.com"
              className="contactCardIcon"
              aria-label="Email Raj Elevators"
            >
              <svg viewBox="0 0 24 24" fill="#009B4A" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

          <a
            href="mailto:contact@rajelevators.com"
            className="contactCardText contactCardLink"
          >
            contact@rajelevators.com
          </a>
        </div>
      </div>

      {/* =========================
          THIRD SECTION
      ========================= */}

      <div className="contactUsPageWrap">
        {/* =========================
            LEFT — CONTACT FORM
        ========================= */}

        <div className="contactUsFormCard">
          <div className="contactUsFormTitle">Request a Technical Quote</div>

          <form onSubmit={handleSubmit} noValidate>
            {/* ROW 1 */}

            <div className="contactUsFormRow">
              <div className="contactUsFormGroup">
                <label htmlFor="contactFullName">Full Name</label>

                <input
                  type="text"
                  id="contactFullName"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

                {errors.fullname && (
                  <span className="formError">{errors.fullname}</span>
                )}
              </div>

              <div className="contactUsFormGroup">
                <label htmlFor="contactEmail">Email Address</label>

                <input
                  type="email"
                  id="contactEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                />

                {errors.email && (
                  <span className="formError">{errors.email}</span>
                )}
              </div>
            </div>

            {/* ROW 2 */}

            <div className="contactUsFormRow">
              <div className="contactUsFormGroup">
                <label htmlFor="contactPhone">Phone Number</label>

                <input
                  type="tel"
                  id="contactPhone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  maxLength={10}
                />

                {errors.phone && (
                  <span className="formError">{errors.phone}</span>
                )}
              </div>

              <div className="contactUsFormGroup">
                <label htmlFor="contactCompany">Company Name</label>

                <input
                  type="text"
                  id="contactCompany"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company or estate name"
                />

                {errors.company && (
                  <span className="formError">{errors.company}</span>
                )}
              </div>
            </div>

            {/* ROW 3 */}

            <div className="contactUsFormRow">
              <div className="contactUsFormGroup">
                <label htmlFor="contactBuildingType">Building Type</label>

                <select
                  id="contactBuildingType"
                  name="buildingtype"
                  value={formData.buildingtype}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Building Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Mall">Mall</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Other">Other</option>
                </select>

                {errors.buildingtype && (
                  <span className="formError">{errors.buildingtype}</span>
                )}
              </div>

              <div className="contactUsFormGroup">
                <label htmlFor="contactFloors">Number of Floors</label>

                <input
                  type="number"
                  id="contactFloors"
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  placeholder="Number of Floors"
                  min="1"
                />

                {errors.floors && (
                  <span className="formError">{errors.floors}</span>
                )}
              </div>
            </div>

            {/* SUBJECT */}

            <div className="contactUsFormRow">
              <div className="contactUsFormGroup contactUsFormGroupFull">
                <label htmlFor="contactSubject">Inquiry Subject</label>

                <input
                  type="text"
                  id="contactSubject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="New Elevator Installation (Nidec PMSM Core)"
                />

                {errors.subject && (
                  <span className="formError">{errors.subject}</span>
                )}
              </div>
            </div>

            {/* SHAFT */}

            <div className="contactUsFormRow">
              <div className="contactUsFormGroup contactUsFormGroupFull">
                <label htmlFor="contactShaft">Shaft Dimensions</label>

                <input
                  type="text"
                  id="contactShaft"
                  name="shaft"
                  value={formData.shaft}
                  onChange={handleChange}
                  placeholder="Shaft Dimensions"
                />

                {errors.shaft && (
                  <span className="formError">{errors.shaft}</span>
                )}
              </div>
            </div>

            {/* SUCCESS MESSAGE */}

            {status === "success" && (
              <div className="formSuccess">
                Your inquiry has been sent successfully!
              </div>
            )}

            {/* ERROR MESSAGE */}

            {status === "error" && (
              <div className="formErrorMessage">
                Something went wrong. Please try again.
              </div>
            )}

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="contactUsSubmitBtn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Inquiry Message"}
            </button>
          </form>
        </div>

        {/* =========================
            RIGHT — SIDEBAR
        ========================= */}

        <div className="contactUsSidebar">
          {/* BUSINESS OPERATIONS */}

          <div className="contactUsSidebarCard">
            <div className="contactUsSidebarTitle">Business Operations</div>

            <div className="contactUsHoursRow">
              <span className="contactUsHoursDay">Monday - Saturday</span>

              <span className="contactUsHoursTime">9:00 AM - 6:00 PM</span>
            </div>

            <div className="contactUsHoursRow">
              <span className="contactUsHoursDay">Sunday</span>

              <span className="contactUsHoursTime contactUsClosed">Closed</span>
            </div>
          </div>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="contactUsWhatsappCard"
          >
            <div className="contactUsWhatsappIcon">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="#14AE5C"
                  d="M24 2C11.85 2 2 11.85 2 24c0 4.12 1.13 8.05 3.25 11.45L2.2 46l10.8-3.05A21.9 21.9 0 0 0 24 46c12.15 0 22-9.85 22-22S36.15 2 24 2Z"
                />

                <path
                  fill="#ffffff"
                  d="M33.35 27.55c-.5-.25-2.95-1.45-3.4-1.62-.46-.17-.79-.25-1.12.25-.33.5-1.29 1.62-1.58 1.95-.29.33-.58.37-1.08.12-.5-.25-2.11-.78-4.02-2.48-1.49-1.33-2.5-2.97-2.79-3.47-.29-.5-.03-.77.22-1.02.23-.23.5-.58.75-.87.25-.29.33-.5.5-.83.17-.33.08-.62-.04-.87-.12-.25-1.12-2.7-1.54-3.7-.41-.99-.83-.85-1.12-.87-.29-.02-.62-.02-.95-.02-.33 0-.87.12-1.33.62-.46.5-1.74 1.7-1.74 4.15s1.78 4.82 2.03 5.15c.25.33 3.48 5.31 8.43 7.45 1.18.51 2.1.81 2.82 1.04 1.19.38 2.27.33 3.12.2.95-.14 2.95-1.2 3.36-2.36.41-1.16.41-2.15.29-2.36-.12-.21-.46-.33-.96-.58Z"
                />

                <path fill="#14AE5C" d="M2.2 46 5.25 35.45l8.05 7.5L2.2 46Z" />
              </svg>
            </div>

            <div>
              <div className="contactUsWhatsappTitle">
                WhatsApp Quick Connect
              </div>

              <div className="contactUsWhatsappText">
                Need quick chat support? Send us a direct WhatsApp text: +91
                98765 43210
              </div>
            </div>
          </a>

          {/* MUMBAI MAP */}

          <div className="contactUsMapCard">
            <iframe
              title="Mumbai Headquarters Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C19.20%2C72.89%2C19.27&layer=mapnik&marker=19.2307%2C72.8567"
              loading="lazy"
            />

            <div className="contactUsMapOverlay"></div>

            <div className="contactUsMapPin">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.05 11.34 7.35 11.6a1 1 0 0 0 1.3 0C13 21.34 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>

            <div className="contactUsMapInfo">
              <div className="contactUsMapTitle">Mumbai Headquarters</div>

              <div className="contactUsMapAddress">Borivali East, Mumbai</div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=205%2C%20Hari%20Om%20Plaza%2C%20M.G.%20Road%2C%20Borivali%20East%2C%20Mumbai%20400066"
              target="_blank"
              rel="noopener noreferrer"
              className="contactUsMapButton"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          FOURTH SECTION
      ========================= */}

      <section className="regional-section">
        <div className="regional-section__title">
          Our Regional Operations Across Major Metros
        </div>

        <div className="offices-grid">
          {/* Bengaluru Office */}

          <div className="office-card">
            <div className="office-card__title">Bengaluru Office</div>

            <div className="office-card__row">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <span>
                #20/27, Kaveri Complex, Gokula Stage 1, Phase 1, 1st Main Road,
                Mathikere, Bangalore - 560 054.
              </span>
            </div>

            <div className="office-card__row">
              <svg
                viewBox="0 0 24 24"
                className="icon-filled"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>

              <a href="tel:+918494909414">+91 8494 909 414</a>
            </div>
          </div>

          {/* Mumbai Office */}

          <div className="office-card">
            <div className="office-card__title">Mumbai Office</div>

            <div className="office-card__row">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <span>
                205, Hari Om Plaza, M.G. Road, Borivali East, Mumbai - 400066.
              </span>
            </div>

            <div className="office-card__row">
              <svg
                viewBox="0 0 24 24"
                className="icon-filled"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>

              <a href="tel:+912256789012">+91-22-56789012</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
