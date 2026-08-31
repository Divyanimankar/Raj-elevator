import { useState } from "react";     
import PageHero from '../components/PageHero.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG} from '../data/siteData.js';
import './Services.css';
import IndiaMapImage from "../assets/images/IndiaMap.png"



const services=['Heavy-Duty Installation','Modernization Upgrade','Preventive AMC','AMC Shield Plans','Precision Repair','24/7 Breakdown Dispatch']

  const steps = [
    {
      number: "01",
      title: "Schedule & Telemetry",
      description:
        "Instantly register your request via online CRM portal or automated breakdown warning system.",
    },
    {
      number: "02",
      title: "Audit Inspection",
      description:
        "Onsite dispatch of certified service technician to perform visual and diagnostic log audits.",
    },
    {
      number: "03",
      title: "Mechanical Action",
      description:
        "Perform fast adjustments, motor diagnostic runs, VVVF tuning, and replacement of parts if required.",
    },
    {
      number: "04",
      title: "Certified Safety Log",
      description:
        "Handover standard regulatory compliant safety signature checklist with system test results.",
    },
  ];

const depots = [
  {
    title: "Western Zone Depot",
    cities: "Mumbai, Pune, Surat, Ahmedabad",
  },
  {
    title: "Southern Zone Depot",
    cities: "Bengaluru, Chennai, Hyderabad, Kochi",
  },
];

const hubs = [
  { name: "MUMBAI", x: 22, y: 53 },
  { name: "NEW DELHI NCR", x: 53, y: 25 },
  { name: "HYDERABAD", x: 50, y: 63 },
  { name: "BENGALURU", x: 72, y: 52 },
];



export default function Services(){return (
<>
  <PageHero image={IMG.service} title="Complete Elevator Lifespan Services" text="From precision mechanical installation by certified engineers to certified preventive maintenance and rapid breakdown support."/>
  
  {/* ----------------------------------- SECOND SECTION -------------------------------------------- */}
 <section className="raj-support-section">
      <div className="raj-support-container">

        <h2 className="raj-support-title">
          Our Specialized Structural Elevator Engineering Support
        </h2>

        <div className="raj-support-grid">

          {/* Heavy-Duty Installation */}
          <article className="raj-support-card">
            <div className="raj-support-icon">
              <svg viewBox="0 0 24 24">
                <polyline points="2 12 6 12 9 20 15 4 18 12 22 12" />
              </svg>
            </div>

            <h3>Heavy-Duty Installation</h3>

            <p>
              Precise structural shaft alignment, guide rail setup, and Nidec
              motor commissioning by certified engineers.
            </p>

            <ul>
              <li>CAD shaft auditing included</li>
              <li>European safety device tests</li>
              <li>Regulatory load test clearance</li>
            </ul>
          </article>

          {/* Modernization Upgrade */}
          <article className="raj-support-card">
            <div className="raj-support-icon">
              <svg viewBox="0 0 24 24">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
            </div>

            <h3>Modernization Upgrade</h3>

            <p>
              Transform legacy mechanical elevators. Swap old motors with
              quiet VVVF PMSM gearless Japanese tech.
            </p>

            <ul>
              <li>Save up to 40% building power</li>
              <li>Sleek stainless steel interiors</li>
              <li>Smart landing controller sync</li>
            </ul>
          </article>

          {/* Preventive AMC */}
          <article className="raj-support-card">
            <div className="raj-support-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <h3>Preventive AMC</h3>

            <p>
              Comprehensive and structural preventive Annual Maintenance
              Contracts with guaranteed safety audits.
            </p>

            <ul>
              <li>Pre-scheduled lubrication visits</li>
              <li>Free emergency backup battery test</li>
              <li>Full structural diagnostic logs</li>
            </ul>
          </article>

          {/* AMC Shield Plans */}
          <article className="raj-support-card">
            <div className="raj-support-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>

            <h3>AMC Shield Plans</h3>

            <p>
              Custom service contract tiers tailored to commercial hubs,
              public transit complexes, and duplex villas.
            </p>

            <ul>
              <li>Includes genuine Nidec spares</li>
              <li>Fast breakdown response targets</li>
              <li>Flexible billing schedules</li>
            </ul>
          </article>

          {/* Precision Repair */}
          <article className="raj-support-card">
            <div className="raj-support-icon">
              <svg viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <h3>Precision Repair</h3>

            <p>
              Fast mechanical fixes, wire rope replacement, controller
              updates, and automatic door tuning by tech experts.
            </p>

            <ul>
              <li>Using original certified spares</li>
              <li>High testing tolerances</li>
              <li>Post-repair performance logs</li>
            </ul>
          </article>

          {/* 24/7 Breakdown Dispatch */}
          <article className="raj-support-card">
            <div className="raj-support-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <h3>24/7 Breakdown Dispatch</h3>

            <p>
              Immediate telemetry-activated dispatch and emergency breakdown
              support line for critical callouts.
            </p>

            <ul>
              <li>Zero passenger trapping target</li>
              <li>24/7 monitoring desk coverage</li>
              <li>Real-time dispatch telemetry</li>
            </ul>
          </article>

        </div>
      </div>
    </section>


  {/* ----------------------------------------- THIRD Section ----------------------------------- */}
<section className="raj-process-section">
  <div className="raj-process-container">

    <h2 className="raj-process-title">
      How Our Specialized Service Engineering Team Operates
    </h2>

    <div className="raj-process-steps">
      {steps.map((step) => (
        <div
          className="raj-process-step"
          key={step.number}
        >
          <div className="raj-process-number">
            {step.number}
          </div>

          <div className="raj-process-content">
            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
  {/* ---------------------------------------- FOURTH SECTION --------------------------------------- */}
  <section className="raj-pricing-section">
  <div className="raj-pricing-container">

    <h2 className="raj-pricing-title">
      Standardized AMC Preventive Maintenance Plans
    </h2>

    <div className="raj-pricing-grid">

      {/* Non-Comprehensive */}
      <div className="raj-pricing-card">
        <span className="raj-pricing-badge">RECOMMENDED OUTLINE</span>

        <h3>Non-Comprehensive</h3>

        <p className="raj-pricing-desc">
          For single-villa duplex home elevators. Standard scheduled audits.
        </p>

        <hr />

        <ul>
          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            4 Pre-Scheduled Maintenance Visits/Year
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Automatic Rescue Device (ARD) battery check
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Standard working-hours callout dispatch
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            General mechanical lubrication checks
          </li>
        </ul>

        <button className="raj-pricing-btn">
          Inquire Plan Quotation
        </button>
      </div>

      {/* Comprehensive */}
      <div className="raj-pricing-card raj-pricing-middle">
        <span className="raj-pricing-badge">RECOMMENDED OUTLINE</span>

        <h3>Comprehensive</h3>

        <p className="raj-pricing-desc">
          Ideal for residential complexes and commercial office spaces with high cycles.
        </p>

        <hr />

        <ul>
          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            12 Pre-Scheduled Maintenance Visits/Year
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Full spare parts replacement coverage
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            24/7 Breakdown rapid dispatch support
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Microprocessor telemetry diagnostics logs
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Annual certified elevator load test validation
          </li>
        </ul>

        <button className="raj-pricing-btn">
          Inquire Plan Quotation
        </button>
      </div>

      {/* Semi-Comprehensive */}
      <div className="raj-pricing-card">
        <span className="raj-pricing-badge">RECOMMENDED OUTLINE</span>

        <h3>Semi-Comprehensive</h3>

        <p className="raj-pricing-desc">
          Optimized for extreme traffic assets, malls, hospitals, and transit hubs.
        </p>

        <hr />

        <ul>
          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Unlimited 24/7 priority emergency dispatch
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Complete motor winding & VVVF board replacement
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Dedicated engineer assigned to your building shaft
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Monthly active safety sensor audits
          </li>

          <li>
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Regenerative drive feedback diagnostic logs
          </li>
        </ul>

        <button className="raj-pricing-btn">
          Inquire Plan Quotation
        </button>
      </div>

    </div>
  </div>
</section>

  {/* ---------------------------------------------- Fifth Section ----------------------------------- */}
 <main className="support-network-section">
      <section className="support-network-container">

        {/* LEFT SIDE - SAME */}
        <div className="support-network-content">

          <h1 className="support-network-title">
            Our Scaled Support Network Across India
          </h1>

          <p className="support-network-description">
            With centralized maintenance depots in key industrial corridors,
            we operate fully-stocked parts warehouses in Mumbai, New Delhi NCR,
            Bengaluru, Hyderabad, and Pune. Over 500+ active field engineers
            ready for dynamic emergency dispatch.
          </p>

          <div className="support-depots">
            {depots.map((depot) => (
              <div
                className="support-depot"
                key={depot.title}
              >
                <h2>{depot.title}</h2>

                <p>{depot.cities}</p>
              </div>
            ))}
          </div>

        </div>


        {/* RIGHT SIDE - NEW DESIGN */}
      
      <div className = "rightIndiaImage">
        <img src= {IndiaMapImage} alt='rightIndiaImage' ></img>
      </div>

      </section>
    </main>

  {/* -------------------------------------- Sixth Section ---------------------------------------- */}
  <section className="hotline">
    ☎ Emergency Passenger Trapping & Breakdown Hotline
    <b>
      1800-123-5678
    </b>
    <button>
      Call Now
    </button>
  </section>

  {/* ------------------------------------ Seventh Section ------------------------------------------------------- */}
{/* <main className="faq-section">
  <div className="faq-container">

    <h1 className="faq-title">
      Elevator AMC Maintenance FAQs
    </h1>

    <div className="faq-list">

      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            className={`faq-item ${isOpen ? "active" : ""}`}
            key={faq.question}
          >

            <button
              type="button"
              className="faq-question"
              onClick={() =>
                setOpenFaq(isOpen ? null : index)
              }
              aria-expanded={isOpen}
            >

              <span className="faq-question-text">
                {faq.question}
              </span>

              <svg
                className="faq-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>

            </button>

            <div className="faq-answer-wrapper">
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>

          </div>
        );
      })}

    </div>
  </div>
</main> */}

  {/* ---------------------------------------- Eight Section ----------------------------------------- */}
  <CTASection/>
</>
)}
