import {useState} from 'react';
import PageHero from '../components/PageHero.jsx';
import {IMG} from '../data/siteData.js';
import './Contact.css'
export default function Contact(){const [sent,setSent]=useState(false);
return (
<>
 {/*-----------------------------  First Section -----------------------------   */}
 <section className="contactHero">

  <div className="contactHeroContent">

    <div className="contactHeroBadge">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="12 2 15 9 22 9.5 16.5 14.5 18 22 12 18 6 22 7.5 14.5 2 9.5 9 9" />
      </svg>

      Japanese Nidec Precision Engineering Inside
    </div>

    <h1 className="contactHeroTitle">
      Get In Touch
    </h1>

    <p className="contactHeroSubtitle">
     Connect with India's premier high-precision elevator manufacturing team. Request systematic technical specs, site shaft audits, or AMC proposals.
    </p>

  </div>

</section>
 

 {/* ------------------------------ Second Section -------------------------- */}

<div className="contactGrid">

  {/* Office Address */}
  <div className="contactCard">
    <div className="contactCardTop">

      <div className="contactCardTitle">
        Office Address
      </div>

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


  {/* Phone Hotline */}
  <div className="contactCard">

    <div className="contactCardTop">

      <div className="contactCardTitle">
        Phone Hotline
      </div>

      {/* CALL BUTTON */}
      <a
        href="tel:+918080845028"
        className="contactCardIcon"
        aria-label="Call Raj Elevators"
      >
        <svg
          viewBox="0 0 24 24"
          fill="#009B4A"
          aria-hidden="true"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.75-.25 1.03l-2.2 2.19z" />
        </svg>
      </a>

    </div>

    {/* CLICKABLE PHONE NUMBER */}
    <a
      href="tel:+918080845028"
      className="contactCardText contactCardLink"
    >
      +91 8080 845 028
    </a>

  </div>


  {/* Email Inquiries */}
  <div className="contactCard">

    <div className="contactCardTop">

      <div className="contactCardTitle">
        Email Inquiries
      </div>

      {/* EMAIL BUTTON */}
      <a
        href="mailto:contact@rajelevators.com"
        className="contactCardIcon"
        aria-label="Email Raj Elevators"
      >
        <svg
          viewBox="0 0 24 24"
          fill="#009B4A"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </a>

    </div>

    {/* CLICKABLE EMAIL */}
    <a
      href="mailto:contact@rajelevators.com"
      className="contactCardText contactCardLink"
    >
      contact@rajelevators.com
    </a>

  </div>

</div>


  {/* ----------------------------------- Third Section ----------------------------- */}

<div className="contactUsPageWrap">

  {/* =========================
      LEFT — CONTACT FORM
  ========================= */}

  <div className="contactUsFormCard">

    <div className="contactUsFormTitle">
      Request a Technical Quote
    </div>

    <form>

      <div className="contactUsFormRow">

        <div className="contactUsFormGroup">
          <label htmlFor="contactFullName">Full Name</label>

          <input
            type="text"
            id="contactFullName"
            placeholder="Enter your full name"
          />
        </div>

        <div className="contactUsFormGroup">
          <label htmlFor="contactEmail">Email Address</label>

          <input
            type="email"
            id="contactEmail"
            placeholder="name@company.com"
          />
        </div>

      </div>


      <div className="contactUsFormRow">

        <div className="contactUsFormGroup">
          <label htmlFor="contactPhone">Phone Number</label>

          <input
            type="tel"
            id="contactPhone"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div className="contactUsFormGroup">
          <label htmlFor="contactCompany">Company Name</label>

          <input
            type="text"
            id="contactCompany"
            placeholder="Enter company or estate name"
          />
        </div>

      </div>


      <div className="contactUsFormRow">

        <div className="contactUsFormGroup">
          <label htmlFor="contactFloors">
            Number of Floors
          </label>

          <input
            type="text"
            id="contactFloors"
            placeholder="Number of Floors"
          />
        </div>

      </div>


      <div className="contactUsFormRow">

        <div className="contactUsFormGroup contactUsFormGroupFull">
          <label htmlFor="contactSubject">
            Inquiry Subject
          </label>

          <input
            type="text"
            id="contactSubject"
            placeholder="New Elevator Installation (Nidec PMSM Core)"
          />
        </div>

      </div>


      <div className="contactUsFormRow">

        <div className="contactUsFormGroup contactUsFormGroupFull">
          <label htmlFor="contactShaft">
            Shaft Dimensions
          </label>

          <input
            type="text"
            id="contactShaft"
            placeholder="Shaft Dimensions"
          />
        </div>

      </div>


      <button
        type="submit"
        className="contactUsSubmitBtn"
      >
        Send Inquiry Message
      </button>

    </form>

  </div>


  {/* =========================
      RIGHT — SIDEBAR
  ========================= */}

  <div className="contactUsSidebar">


    {/* Business Operations */}

    <div className="contactUsSidebarCard">

      <div className="contactUsSidebarTitle">
        Business Operations
      </div>

      <div className="contactUsHoursRow">

        <span className="contactUsHoursDay">
          Monday - Saturday
        </span>

        <span className="contactUsHoursTime">
          9:00 AM - 6:00 PM
        </span>

      </div>

      <div className="contactUsHoursRow">

        <span className="contactUsHoursDay">
          Sunday
        </span>

        <span className="contactUsHoursTime contactUsClosed">
          Closed
        </span>

      </div>

    </div>


    {/* WhatsApp */}

    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="contactUsWhatsappCard"
    >

      {/* <div className="contactUsWhatsappIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.13c-.25.7-1.45 1.34-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.9-4.26-5.05-4.46-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.52.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.54-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.75.82 2.05.97.3.15.5.22.57.35.08.13.08.75-.17 1.45z" />
        </svg> 
      </div> */}

      <div className="contactUsWhatsappIcon">
  {/* <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="24" fill="#25D366" />

    <path
      fill="#ffffff"
      d="M34.7 28.4c-.5-.3-3-1.5-3.5-1.7-.5-.2-.8-.3-1.1.3-.3.5-1.3 1.7-1.6 2-.3.3-.6.4-1.1.1-.5-.3-2.1-.8-4-2.5-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1 .2-.2.5-.6.8-.9.3-.3.3-.5.5-.8.2-.3.1-.6 0-.9-.1-.3-1.1-2.7-1.5-3.7-.4-1-.8-.9-1.1-.9h-.9c-.3 0-.9.1-1.3.6-.5.5-1.8 1.7-1.8 4.1s1.8 4.8 2 5.1c.3.3 3.5 5.4 8.5 7.5 1.2.5 2.2.8 3 .9 1.3.2 2.5.2 3.4.1 1-.1 3-1.2 3.4-2.4.4-1.2.4-2.2.3-2.4-.1-.2-.4-.4-.9-.7z"
    />
  </svg> */}

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
    fill="#ffffff "
    d="M33.35 27.55c-.5-.25-2.95-1.45-3.4-1.62-.46-.17-.79-.25-1.12.25-.33.5-1.29 1.62-1.58 1.95-.29.33-.58.37-1.08.12-.5-.25-2.11-.78-4.02-2.48-1.49-1.33-2.5-2.97-2.79-3.47-.29-.5-.03-.77.22-1.02.23-.23.5-.58.75-.87.25-.29.33-.5.5-.83.17-.33.08-.62-.04-.87-.12-.25-1.12-2.7-1.54-3.7-.41-.99-.83-.85-1.12-.87-.29-.02-.62-.02-.95-.02-.33 0-.87.12-1.33.62-.46.5-1.74 1.7-1.74 4.15s1.78 4.82 2.03 5.15c.25.33 3.48 5.31 8.43 7.45 1.18.51 2.1.81 2.82 1.04 1.19.38 2.27.33 3.12.2.95-.14 2.95-1.2 3.36-2.36.41-1.16.41-2.15.29-2.36-.12-.21-.46-.33-.96-.58Z"
  />

  <path
    fill="#14AE5C"
    d="M2.2 46 5.25 35.45l8.05 7.5L2.2 46Z"
  />
</svg>
</div>

      <div>

        <div className="contactUsWhatsappTitle">
          WhatsApp Quick Connect
        </div>

        <div className="contactUsWhatsappText">
          Need quick chat support? Send us a direct WhatsApp text:
          +91 98765 43210
        </div>

      </div>

    </a>


    {/* =========================
        MUMBAI MAP
    ========================= */}

    <div className="contactUsMapCard">

      <iframe
        title="Mumbai Headquarters Map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C19.20%2C72.89%2C19.27&layer=mapnik&marker=19.2307%2C72.8567"
        loading="lazy"
      ></iframe>


      <div className="contactUsMapOverlay"></div>


      {/* Location Pin */}

      <div className="contactUsMapPin">

        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.05 11.34 7.35 11.6a1 1 0 0 0 1.3 0C13 21.34 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>

      </div>


      <div className="contactUsMapInfo">

        <div className="contactUsMapTitle">
          Mumbai Headquarters
        </div>

        <div className="contactUsMapAddress">
          Borivali East, Mumbai
        </div>

      </div>


      {/* Google Maps Button */}

      <a
        href="https://www.google.com/maps/search/?api=1&query=205%2C%20Hari%20Om%20Plaza%2C%20M.G.%20Road%2C%20Borivali%20East%2C%20Mumbai%20400066"
        target="_blank"
        rel="noopener noreferrer"
        className="contactUsMapButton"
      >
        Open in Google Maps
      </a>

    </div>


    {/* =========================
        BANGALORE MAP
    ========================= */}

    {/* <div className="contactUsMapCard">

      <iframe
        title="Bangalore Office Map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=77.52%2C13.00%2C77.60%2C13.08&layer=mapnik&marker=13.0358%2C77.5619"
        loading="lazy"
      ></iframe>


      <div className="contactUsMapOverlay"></div>

      <div className="contactUsMapPin">

        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.05 11.34 7.35 11.6a1 1 0 0 0 1.3 0C13 21.34 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>

      </div>


      <div className="contactUsMapInfo">

        <div className="contactUsMapTitle">
          Bangalore Office
        </div>

        <div className="contactUsMapAddress">
          Mathikere, Bangalore
        </div>

      </div>

      <a
        href="https://www.google.com/maps/search/?api=1&query=%2320%2F27%2C%20Kaveri%20Complex%2C%201st%20Main%20Road%2C%20Mathikere%2C%20Bangalore%20560054"
        target="_blank"
        rel="noopener noreferrer"
        className="contactUsMapButton"
      >
        Open in Google Maps
      </a>

    </div> */}

  </div>

</div>

  {/* ------------------------------------- Fourth Section ------------------------------------- */}

<section className="regional-section">

  <div className="regional-section__title">
    Our Regional Operations Across Major Metros
  </div>

  <div className="offices-grid">

    {/* Bengaluru Office */}
    <div className="office-card">

      <div className="office-card__title">
        Bengaluru Office
      </div>

      <div className="office-card__row">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>

        <span>
          #20/27, Kaveri Complex, Gokula Stage 1, Phase 1,
          1st Main Road, Mathikere, Bangalore - 560 054.
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

        <a href="tel:+918494909414">
          +91 8494 909 414
        </a>

      </div>

    </div>


    {/* Mumbai Office */}
    <div className="office-card">

      <div className="office-card__title">
        Mumbai Office
      </div>

      <div className="office-card__row">

        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>

        <span>
          Mount Road, Nandanam, Chennai, Tamil Nadu 600035
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

        <a href="tel:+914434567890">
          +91-44-34567890
        </a>

      </div>

    </div>

  </div>

</section>


</>
)}
