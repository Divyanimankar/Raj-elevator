import "./CTASection.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">

        {/* Left Content */}
        <div className="cta-content">
          <h1>
            Ready to Elevate Your Building with Japanese Precision?
          </h1>

          <p>
            Speak to our engineering consultants today for site shaft
            audits, custom design drawings, and a detailed price proposal.
          </p>

          <div className="cta-info">
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

            <div className="cta-info-block">
              <span className="label">
                Email Inquiries
              </span>

              <a
                href="mailto:divyanimankar1@gmail.com"
                className="value"
              >
                sales@rajelevators.com
              </a>
            </div>

          </div>
        </div>


        {/* Right Form */}
        <div className="form-card">
          <h2>Request Consultation</h2>

          <form>

            <div className="form-group">
              <label htmlFor="fullname">
                Your Full Name
              </label>

              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter name"
              />
            </div>


            <div className="form-group">
              <label htmlFor="buildingtype">
                Building Type
              </label>

              <div className="select-wrapper">
                <select
                  id="buildingtype"
                  name="buildingtype"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select (e.g. Residential, Corporate)
                  </option>

                  <option value="residential">
                    Residential
                  </option>

                  <option value="corporate">
                    Corporate
                  </option>

                  <option value="hospital">
                    Hospital
                  </option>

                  <option value="industrial">
                    Industrial
                  </option>
                </select>
              </div>
            </div>


            <div className="form-group">
              <label htmlFor="contact">
                Contact Number
              </label>

              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Enter phone number"
              />
            </div>


            <button
              type="submit"
              className="submit-btn"
            >
              Submit Request
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}