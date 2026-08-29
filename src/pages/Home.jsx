import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import {IMG,products,projects} from '../data/siteData.js';
import './Home.css';
import heroImage from "../assets/images/hero.png";
import trust from "../assets/images/Frame.png";
import aboutUs from "../assets/images/about.png";
import frameTwoo from "../assets/images/frameTwo.png";
import firstImage from "../assets/images/one.png";

import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";

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
        <Link to="/projects" className="secondary">
          Get Free Quote
        </Link>
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

<section className="portfolio sectionLight">
  <div className="wrap">
    <h2>Explore Our Versatile Elevator Portfolio</h2>

    <div className="homeProducts">
      {productss.slice(0, 8).map((p, i) => (
        <article key={i} className="productCard">

          {/* Product Image */}
          <div className="productImage">
            <img src={p.image} alt={p.name} />
          </div>

          {/* Card Content */}
          <div className="productContent">

            {/* Title + Icon */}
            <div className="heroHomeProductsList">
              <img src={firstImage} alt="" />
              <span className="productName">{p.name}</span>
            </div>

            {/* Description */}
            <p className="productTag">
              {p.tag}
            </p>

            {/* Explore */}
            <span className="exploreSpec">
              Explore Spec →
            </span>

          </div>
        </article>
      ))}
    </div>
  </div>
</section>

  {/* -------------------------------- Fifth  Section------------------------------------- */}
  <section className="advantage">
    <div className="wrap advantageGrid">
      <div>
        <h2>
          The Raj Elevator Advantage
        </h2>
        <p>
          Engineered to perform with consistent ride quality, safety and long-term serviceability.
        </p>
        {benefits.map(x=>
        <div className="advItem" key={x}>
          <b>
            ✦ {x}
          </b>
          <span>
            Designed for dependable, efficient vertical mobility.
          </span>
        </div>
        )}
      </div>
      <div className="advImage">
        <img src={IMG.home} alt=""/>
        <em>
          22+
          <small>
            YEARS
          </small>
        </em>
      </div>
    </div>
  </section>

  {/* -------------------------------- Sixth Section------------------------------------- */}
  <section className="signature sectionLight">
    <div className="wrap">
      <h2>
        Our Signature Landmark Installations
      </h2>
      <div className="signatureGrid">
        {projects.slice(0,3).map(p=>
        <article key={p.name}>
          <img src={p.image} alt=""/>
          <div>
            <span>
              {p.type}
            </span>
            <h3>
              {p.name}
            </h3>
            <small>
              ⌖ {p.location}
            </small>
          </div>
        </article>
        )}
      </div>
      <div className="center">
        <Link className="primary" to="/projects">
          View All Projects →
        </Link>
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
  <section className="faqTeaser sectionLight">
    <div className="wrap">
      <h2>
        Clearing Your Doubts on Elevator Technology
      </h2>
    </div>
  </section>
  <CTASection/>
</>
)}
