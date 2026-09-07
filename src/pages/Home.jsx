import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import {IMG,products,projects} from '../data/siteData.js';
import './Home.css';
import heroImage from "../assets/images/hero.png";
import trust from "../assets/images/Frame.png";
import aboutUs from "../assets/images/about.png";
import frameTwoo from "../assets/images/frameTwo.png";
import firstImage from "../assets/images/one.png";

// import quotationPdf  from "../assets/images/rajNidec.pdf";

import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";

import passengerLift from "../assets/images/passenger.png";
import freightLift from "../assets/images/freight.png";

import hospitalLift from "../assets/images/hospital.png";
import homeLift from "../assets/images/home.png";

import panoramicLift from "../assets/images/panoramic.png";
import highSpeedLift  from "../assets/images/highSpeed.png";


import carLift from "../assets/images/car.png";
import capsuleLift from "../assets/images/capsule.png";

const benefits=['Highly energy efficient gearless machines saving up to 40% power','Integrated microprocessor control systems for seamless floor leveling','Robust safety components including ARD (Automatic Rescue Device)']

const productss = [
  {
    name: "Passenger Elevator",
    image: IMG.passenger,
     tag: "Sleek, high-capacity cabins engineered with PMSM Gearless machinery for smart office towers and premium residential developments."
  },
  {
    name: "Freight Elevator",
    image: IMG.freight,
    tag: "Ultra-heavy duty freight solutions with reinforced mechanical structures. Built to withstand punishing industrial logistics.', image:IMG.freight, desc:'Reinforced load-bearing freight transit built for industrial logistics, factories and warehouses."  },
  {
    name: "Hospital Elevator",
    image: IMG.hospital,
    tag: "Sized for smooth stretcher transit. Features micro-leveling accuracy, slow door closing, and sterile, quiet-ride cabin design."
  },
  {
    name: "Home Lift",
    image: IMG.home,
    tag:"Compact, stylish, single-phase lifts requiring zero overhead or pit space. Seamlessly integrated into luxury villas.', image:IMG.home, desc:'Whisper-quiet home lift solutions for compact single-phase residential spaces."
  },
  {
    name: "Panoramic Elevator",
    image: IMG.panoramic,
    tag: "Advanced multi-level parking solutions featuring precise mechanical structural guidance and auto-door gate coordination."
  },
  {
    name: "High-Speed Elevator",
    image: IMG.highSpeed,
    tag: "Aesthetic architectural glass capsules providing stunning external panoramas. Designed as dynamic visual elements.', image:IMG.office, desc:'Fast, stable vertical transport engineered for demanding commercial towers."
  },
  {
    name: "Car Lift",
    image: IMG.car,
    tag: "'Supercharged transit operating up to 6.0 m/s. Integrated with smart dispatch controls and active vibration damping.', image:IMG.mall, desc:'A premium visual statement for malls, hotels and landmark buildings."
  },
  {
    name: "Capsule Elevator",
    image: IMG.capsule,
    tag: "Unique custom geometry shapes including rounded, oval, and pentagonal glass cabins for bespoke architectural layouts.', image:IMG.office, desc:'Fast, stable vertical transport engineered for demanding commercial towers."
  },
];

const steps = [
  { number: "01", title: "Consultation", desc: "Assessing building traffic, shafts, and specifications." },
  { number: "02", title: "Design", desc: "Drafting detailed cabin layout drawings and machine ratings." },
  { number: "03", title: "Manufacturing", desc: "Assembling structural components and Nidec controllers." },
  { number: "04", title: "Installation", desc: "Onsite mechanical alignment and stringent testing." },
  { number: "05", title: "Maintenance", desc: "Scheduled safety audits and preventive lubrications." },
];

const clientLogos = [
 client1,
  client2,
  client3,
  client4,
  client5,
];


const sliderLogos = [
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
  ...clientLogos,
];

export default function Home(){return (
<>


{/* -------------------------------- First Section------------------------------------- */}
  <section className="homeHero" style={{'--bg':`url(${heroImage})`}}>
    <div className="homeHeroContent">
      <span>
        ★ <span className='subHead'>Engineered with Japanese Nidec Precision Controls</span> 
      </span>
      <h1>
        Elevating India's Future<br/>with Japanese Precision</h1><p>India's leading partner in high-performance vertical transportation with Nidec-backed engineering and certified safety.
      </p>
      <div>
        <Link to="/products" className="primary">
          Explore Products
        </Link>
        {/* <Link to="/projects" className="secondary">
          Get Free Quote
        </Link> */}
<a
  // href={quotationPdf}
  // download="Raj-Elevators-Quotation.pdf"
  className="secondary"
>
  Get Free Quote
</a>
      </div>
    </div>
  </section>


  {/* -------------------------------- Second Section------------------------------------- */}

  <section className="stats">
  <div className="experience">
    <div className="experience-content">
      <div className="experience-title">
        <b>22+ Years</b>
        <img src={trust} alt="Trust" />
      </div>

      <p>Industry Excellence</p>

      <span>
        Decades of setting safety benchmarks in vertical transit across
        industrial & residential scales.
      </span>
    </div>
  </div>

  <div className="experience">
    <div className="experience-content">
      <div className="experience-title">
        <b>1800 +</b>
        <img src={trust} alt="Trust" />
      </div>

      <p>Installations</p>

      <span>
        Spanning corporate towers, hospitals, airports, and luxury residential estates nationwide.
      </span>
    </div>
  </div>

  <div className="experience">
    <div className="experience-content">
      <div className="experience-title">
        <b>500+</b>
        <img src={trust} alt="Trust" />
      </div>

      <p>Active AMC Clients</p>

      <span>
        Ensured with 24/7 rapid response, scheduled preventative checkups, and genuine parts. 
      </span>
    </div>
  </div>

  <div className="experience">
    <div className="experience-content">
      <div className="experience-title">
        <b>100%</b>
        <img src={trust} alt="Trust" />
      </div>

      <p>Safety Record</p>

      <span>
        Zero accidents, audited stringently with safety devices compliant to European Standards.
      </span>
    </div>
  </div>
</section>


    {/* -------------------------------- Third Section------------------------------------- */}
  <section className="intro wrap">
    <img src={aboutUs} alt=""/>
    <div>
      {/* <span className="kicker">
        OUR STORY
      </span> */}
      <h2>
        Pioneering Smart Vertical Transit Systems Since 1998
      </h2>
      <p>
        Founded with a vision to redefine vertical mobility, Raj Elevators has emerged as a premier manufacturer, supplier, and installer. Our strategic partnership with Nidec Corporation (Japan) infuses cutting-edge motor control and gearless PMSM technology into every elevator cabin we deliver.
      </p>
          <ul>
            {benefits.slice(0, 3).map(x => (
              <li key={x} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <img src={frameTwoo} alt="check" style={{ width: "20px", height: "20px" }}/>
                     {x}
              </li>
            ))}
          </ul>
      {/* <ul>
        {benefits.slice(0,3).map(x=>
        <li key={x}>
          ✦ {x}
        </li>
        )}
      </ul> */}
      <Link to="/about">
       Learn More About Our Journey 
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqElEQVR4nO3XQQ6CQAwF0B6PDhsWGhd4sWl7OvQWkGBE4kLYT7/5L+m+PxloK0JERERE7VRV8fLYKnQQOL41v+41i+tNgAOseCFCh0/TyCGsuxxCmC7i5S4wjCGSMIZADRGlF9fnz+8sY83nE/s4UPKWlekPA9TvUgX6hLKJ/nr6EVs3SnrB5hsJNt9IQDev4AeNo5+Ujn7U130DeK8HEBOWiIiISNJ4AepeIg9AbtT2AAAAAElFTkSuQmCC" alt="long-arrow-right"  style={{ width: "15px", height: "20px" }}></img>
      </Link>
    </div>
  </section>

  {/* -------------------------------- Fourth Section------------------------------------- */}

<section className="heroFourthSection">
  <h2 className="heroFourthSectionTitle">
    Explore Our Versatile Elevator Portfolio
  </h2>

  <div className="heroFourthSectionGrid">

    {/* Passenger Elevator */}
    <div className="heroFourthSectionCard">
      <img
        className="heroFourthSectionImage"
        src={passengerLift}
        alt="Passenger Elevator"
      />

      <div className="heroFourthSectionBody">
        <div className="heroFourthSectionTitleRow">
          <div className="heroFourthSectionIconBox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <h3>Passenger Elevator</h3>
        </div>

        <p className="heroFourthSectionDescription">
          Sleek, high-capacity cabins engineered with PMSM Gearless machinery
          for smart office towers.
        </p>

        <a href="/products/passenger-elevator" className="heroFourthSectionExplore">
          Explore Specs
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

    {/* Freight Elevator */}
    <div className="heroFourthSectionCard">
      <img
        className="heroFourthSectionImage"
        src={freightLift}
        alt="Freight Elevator"
      />

      <div className="heroFourthSectionBody">
        <div className="heroFourthSectionTitleRow">
          <div className="heroFourthSectionIconBox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>

          <h3>Freight Elevator</h3>
        </div>

        <p className="heroFourthSectionDescription">
          Ultra-heavy duty freight solutions with reinforced mechanical
          structures. Built to withstand demanding loads.
        </p>

        <a href="/products/freight-elevator" className="heroFourthSectionExplore">
          Explore Specs
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

    {/* Hospital Elevator */}
    <div className="heroFourthSectionCard">
      <img
        className="heroFourthSectionImage"
        src={hospitalLift}
        alt="Hospital Elevator"
      />

      <div className="heroFourthSectionBody">
        <div className="heroFourthSectionTitleRow">
          <div className="heroFourthSectionIconBox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <h3>Hospital Elevator</h3>
        </div>

        <p className="heroFourthSectionDescription">
          Sized for smooth stretcher and bed transit, with anti-bacterial
          finishes for critical care environments.
        </p>

        <a href="/products/hospital-elevator" className="heroFourthSectionExplore">
          Explore Specs
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

    {/* Home Lift */}
    <div className="heroFourthSectionCard">
      <img
        className="heroFourthSectionImage"
        src={homeLift}
        alt="Home Lift"
      />

      <div className="heroFourthSectionBody">
        <div className="heroFourthSectionTitleRow">
          <div className="heroFourthSectionIconBox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>

          <h3>Home Lift</h3>
        </div>

        <p className="heroFourthSectionDescription">
          Compact, stylish, single-phase lifts requiring zero overhead or pit
          space. Seamlessly integrates with home decor.
        </p>

        <a href="/products/home-lift" className="heroFourthSectionExplore">
          Explore Specs
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

    {/* Car Lift */}
    <div className="heroFourthSectionCard">
      <img
        className="heroFourthSectionImage"
        src={carLift}
        alt="Car Lift"
      />

      <div className="heroFourthSectionBody">
        <div className="heroFourthSectionTitleRow">
          <div className="heroFourthSectionIconBox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
          </div>

          <h3>Car Lift</h3>
        </div>

        <p className="heroFourthSectionDescription">
          Advanced multi-level parking solutions featuring precise mechanical
          positioning for tight urban plots.
        </p>

         <a href="/products/car-lift" className="heroFourthSectionExplore">
          Explore Specs
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

    {/* Panoramic Elevator */}
    <div className="heroFourthSectionCard">
      <img
        className="heroFourthSectionImage"
        src={panoramicLift}
        alt="Panoramic Elevator"
      />

      <div className="heroFourthSectionBody">
        <div className="heroFourthSectionTitleRow">
          <div className="heroFourthSectionIconBox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>

          <h3>Panoramic Elevator</h3>
        </div>

        <p className="heroFourthSectionDescription">
          Aesthetic architectural glass capsules providing stunning external
          panoramic views of the skyline.
        </p>

        <a href="/products/panoramic-elevator" className="heroFourthSectionExplore">
          Explore Specs
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

    {/* High-Speed Elevator */}
    <div className="heroFourthSectionCard">
      <img
        className="heroFourthSectionImage"
        src={highSpeedLift}
        alt="High-Speed Elevator"
      />

      <div className="heroFourthSectionBody">
        <div className="heroFourthSectionTitleRow">
          <div className="heroFourthSectionIconBox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>

          <h3>High-Speed Elevator</h3>
        </div>

        <p className="heroFourthSectionDescription">
          Supercharged transit operating up to 6.0 m/s. Integrated with smart
          dispatch for zero-wait travel.
        </p>

        <a href="/products/high-speed-elevator" className="heroFourthSectionExplore">
          Explore Specs
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

    {/* Capsule Elevator */}
    <div className="heroFourthSectionCard">
      <img
        className="heroFourthSectionImage"
        src={capsuleLift}
        alt="Capsule Elevator"
      />

      <div className="heroFourthSectionBody">
        <div className="heroFourthSectionTitleRow">
          <div className="heroFourthSectionIconBox">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>

          <h3>Capsule Elevator</h3>
        </div>

        <p className="heroFourthSectionDescription">
          Unique custom geometry shapes including rounded, oval, and
          pentagonal cabins for distinctive spaces.
        </p>

        <a href="/products/capsule-lift" className="heroFourthSectionExplore">
          Explore Specs
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>

  </div>
</section>

  {/* -------------------------------- Fifth  Section------------------------------------- */}

 <section className="raj-advantage-section">
      <div className="raj-advantage-inner">

        {/* LEFT CONTENT */}
        <div className="raj-advantage-content">

          <h2 className="raj-advantage-heading">
            The Raj Elevator Advantage
          </h2>

          <p className="raj-advantage-intro">
            The only elevator company in Mumbai combining 22+ years of local
            expertise with Nidec Japan&apos;s world-leading engineering -
            so every ride is silent, safe, and seamless.
          </p>

          <div className="raj-advantage-feature-list">

            {/* FEATURE 1 */}
            <div className="raj-advantage-feature-row">
              <div className="raj-advantage-feature-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              <div>
                <h3 className="raj-advantage-feature-title">
                  Nidec Japan-Grade Safety
                </h3>

                <p className="raj-advantage-feature-desc">
                  Every elevator uses Nidec&apos;s certified gearless traction
                  systems - meeting the most stringent global safety standards,
                  localised for Indian building codes.
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="raj-advantage-feature-row">
              <div className="raj-advantage-feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div>
                <h3 className="raj-advantage-feature-title">
                  2-Hour Emergency Response
                </h3>

                <p className="raj-advantage-feature-desc">
                  Our 60-strong team of certified technicians across Mumbai
                  guarantees a 2-hour on-site response for any emergency
                  breakdown - 365 days a year.
                </p>
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="raj-advantage-feature-row">
              <div className="raj-advantage-feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                </svg>
              </div>

              <div>
                <h3 className="raj-advantage-feature-title">
                  Transparent, Fixed Pricing
                </h3>

                <p className="raj-advantage-feature-desc">
                  No hidden charges. Detailed written quotations, fixed-cost
                  AMC contracts, and EMI-friendly payment options for
                  residential and commercial projects.
                </p>
              </div>
            </div>

            {/* FEATURE 4 */}
            <div className="raj-advantage-feature-row">
              <div className="raj-advantage-feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <div>
                <h3 className="raj-advantage-feature-title">
                  4.9 / 5 Google Rating
                </h3>

                <p className="raj-advantage-feature-desc">
                  320+ verified Google reviews from builders, housing
                  societies, corporates and homeowners across Mumbai, Thane,
                  and Navi Mumbai.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="raj-advantage-media">

          <div className="raj-advantage-media-frame">

            <img
              src="https://images.unsplash.com/photo-1631248979010-6775b0c88180?fm=jpg&q=60&w=1200&auto=format&fit=crop"
              alt="Modern elevator interior"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            <div className="raj-advantage-media-glow"></div>

          </div>

          {/* EXPERIENCE BADGE */}
          <div className="raj-advantage-badge">

            <div className="raj-advantage-badge-number">
              22+
            </div>

            <div className="raj-advantage-badge-label">
              Years of
              <br />
              Excellence
            </div>

          </div>

        </div>

      </div>
    </section>
  {/* -------------------------------- Sixth Section------------------------------------- */}

  <section className="raj-projects-section">
  <div className="raj-projects-container">

    <h2 className="raj-projects-title">
      Our Signature Landmark Installations
    </h2>

    <div className="raj-projects-grid">

      {/* Card 1 */}
      <article className="raj-project-card">

        <div
          className="raj-project-image raj-project-image-tower"
          role="img"
          aria-label="Modern skyscraper"
        />

        <div className="raj-project-overlay"></div>

        <span className="raj-project-badge">
          Commercial Landmark
        </span>

        <div className="raj-project-content">

          <div className="raj-project-location">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>Singapore</span>
          </div>

          <h3 className="raj-project-name">
            The Pinnacle Plaza
          </h3>

          <div className="raj-project-divider"></div>

          <div className="raj-project-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>

            <span>
              24 High-Speed Smart Elevators
            </span>
          </div>

          <div className="raj-project-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>

            <span>
              Operating at peak speed of 8.0 m/s with AI dispatch
            </span>
          </div>

        </div>
      </article>


      {/* Card 2 */}
      <article className="raj-project-card">

        <div
          className="raj-project-image raj-project-image-atrium"
          role="img"
          aria-label="Luxury hotel atrium"
        />

        <div className="raj-project-overlay"></div>

        <span className="raj-project-badge">
          Hospitality &amp; Leisure
        </span>

        <div className="raj-project-content">

          <div className="raj-project-location">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>Sydney, Australia</span>
          </div>

          <h3 className="raj-project-name">
            Grand Marina Atrium
          </h3>

          <div className="raj-project-divider"></div>

          <div className="raj-project-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>

            <span>
              8 Panoramic Glass Observation Lifts
            </span>
          </div>

          <div className="raj-project-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>

            <span>
              Custom gold-anodized aesthetic steel frames
            </span>
          </div>

        </div>
      </article>


      {/* Card 3 */}
      <article className="raj-project-card">

        <div
          className="raj-project-image raj-project-image-campus"
          role="img"
          aria-label="Modern corporate campus"
        />

        <div className="raj-project-overlay"></div>

        <span className="raj-project-badge">
          Corporate Campus
        </span>

        <div className="raj-project-content">

          <div className="raj-project-location">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>Silicon Valley, USA</span>
          </div>

          <h3 className="raj-project-name">
            Nexus Tech Headquarters
          </h3>

          <div className="raj-project-divider"></div>

          <div className="raj-project-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>

            <span>
              <strong>14</strong> Touchless Smart Transit Elevators
            </span>
          </div>

          <div className="raj-project-feature">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>

            <span>
              <strong>40%</strong> energy reduction via premium regenerative drives
            </span>
          </div>

        </div>
      </article>

    </div>


    {/* CTA */}
    <div className="raj-projects-cta">

      <button
        className="raj-projects-button"
        type="button"
      >
        {/* <span href= "/products">View All Global Projects</span> */}
        <Link to="/projects" className="heroFourthSectionLink">
  View All Global Projects
</Link>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>

    </div>

  </div>
</section>

  {/* -------------------------------- Seven Section------------------------------------- */}
<section className="workflow-section">
  <h1 className="workflow-title">
    Our Seamless Five-Step Workflow
  </h1>

  <div className="workflow-steps">
    {steps.map((step) => (
      <div className="workflow-step" key={step.number}>
        <div className="workflow-number">
          {step.number}
        </div>

        <h3 className="workflow-step-title">
          {step.title}
        </h3>

        <p className="workflow-desc">
          {step.desc}
        </p>
      </div>
    ))}
  </div>
</section>
   {/* -------------------------------- Eight Section------------------------------------- */}
<section className="clients-section">
  <div className="clients-container">
    <div className="clients-slider">
      <div className="clients-track">

        {sliderLogos.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img
              src={logo}
              alt={`Client ${(index % clientLogos.length) + 1}`}
            />
          </div>
        ))}

      </div>
    </div>

  </div>
</section>
   {/* -------------------------------- Nine Section------------------------------------- */}
 <section className="nidec-section">
  <div className="nidec-container">

    {/* LEFT SIDE */}
    <div className="nidec-left">

      <h1>Japanese Precision, Indian Expertise</h1>

      <p>
        Raj Elevator is an authorised partner of Nidec Corporation -
        Japan's #1 motor manufacturer with over 50 years of elevator
        engineering excellence. This partnership gives Mumbai access
        to technology previously reserved for global skyscrapers.
      </p>

      <div className="nidec-feature-list">

        <div className="nidec-feature-item">
          <div className="nidec-check-icon">&#10003;</div>

          <div className="nidec-feature-text">
            <div className="nidec-feature-title">
              Operations in 40+ countries
            </div>

            <div className="nidec-feature-subtitle">
              Nidec is the world's #1 motor manufacturer
            </div>
          </div>
        </div>


        <div className="nidec-feature-item">
          <div className="nidec-check-icon">&#10003;</div>

          <div className="nidec-feature-text">
            <div className="nidec-feature-title">
              Gearless PM traction motors with 99.5% energy efficiency
            </div>
          </div>
        </div>


        <div className="nidec-feature-item">
          <div className="nidec-check-icon">&#10003;</div>

          <div className="nidec-feature-text">
            <div className="nidec-feature-title">
              AI-powered predictive maintenance
            </div>

            <div className="nidec-feature-subtitle">
              via Nidec IoT Cloud platform
            </div>
          </div>
        </div>


        <div className="nidec-feature-item">
          <div className="nidec-check-icon">&#10003;</div>

          <div className="nidec-feature-text">
            <div className="nidec-feature-title">
              Compliant with EN 81-20, ISO 4190, IS 14665
            </div>

            <div className="nidec-feature-subtitle">
              International safety standards
            </div>
          </div>
        </div>


        <div className="nidec-feature-item">
          <div className="nidec-check-icon">&#10003;</div>

          <div className="nidec-feature-text">
            <div className="nidec-feature-title">
              Dedicated spare parts warehouse in Mumbai
            </div>

            <div className="nidec-feature-subtitle">
              Genuine Nidec parts, same-day delivery
            </div>
          </div>
        </div>

      </div>
    </div>


    {/* RIGHT SIDE */}
    <div className="nidec-right">

      <div className="nidec-card">

        <div className="nidec-card-top">

          <div className="nidec-official-partner">
            OFFICIAL PARTNER
          </div>

          <div className="nidec-logo-badge">
            <span className="nidec-brand">
              Nidec
            </span>

            <span className="nidec-sub">
              Elevator
            </span>
          </div>

          <div className="nidec-partner-name">
            Nidec Corporation, Japan
          </div>

          <div className="nidec-quote-box">
            <p>
              "Raj Elevator is our trusted distribution and service
              partner for Western India, delivering Nidec's engineering
              excellence to Mumbai's residential and commercial projects
              since 2012."
            </p>
          </div>

        </div>


        {/* STATS */}
        <div className="nidec-stats-grid">

          <div className="nidec-stat-box">
            <div className="nidec-stat-number">
              50+
            </div>

            <div className="nidec-stat-label">
              Years Nidec Heritage
            </div>
          </div>


          <div className="nidec-stat-box">
            <div className="nidec-stat-number">
              140K+
            </div>

            <div className="nidec-stat-label">
              Nidec Employees Globally
            </div>
          </div>


          <div className="nidec-stat-box">
            <div className="nidec-stat-number">
              40%
            </div>

            <div className="nidec-stat-label">
              Energy Saving vs. Old Lifts
            </div>
          </div>


          <div className="nidec-stat-box">
            <div className="nidec-stat-number">
              #1
            </div>

            <div className="nidec-stat-label">
              Motor Manufacturer World
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

   {/* --------------------------------Done  Ten Section------------------------------------- */}
  <section className="faqTeaser sectionLight"  >
    {/* style={{ backgroundColor: "#E2E8F0" }} */}
    <div className="wrap">
      <h2>
        Clearing Your Doubts on Elevator Technology
      </h2>
    </div>
  </section>
  <CTASection/>
</>
)}
