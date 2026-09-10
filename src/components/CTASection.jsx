import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./CTASection.css";


export default function CTA() {

 return (
    <section className="cta-section">

      <div className="cta-container">

        <h1 className="cta-heading">
          Ready to Elevate Your Building with Japanese Precision?
        </h1>

        <p className="cta-subtext">
          Speak to our engineering consultants today for site shaft audits,
          custom design drawings, and a detailed price proposal.
        </p>

        <div className="cta-contact-row">

          <div className="cta-contact-item">
            <div className="cta-contact-label">
              TOLL FREE HELPLINE
            </div>

            <a
              href="tel:8108800283"
              className="cta-contact-value"
            >
              81088 00283 / 72085 53162
            </a>
          </div>

          <div className="cta-contact-item">
            <div className="cta-contact-label">
              EMAIL INQUIRIES
            </div>

            <a
              href="mailto:contact@rajelevators.com"
              className="cta-contact-value"
            >
              contact@rajelevators.com
            </a>
          </div>

        </div>

        <a
          href="/contact"
          className="cta-button"
        >
          Send Inquiry Message
        </a>

      </div>

    </section>
  );


}