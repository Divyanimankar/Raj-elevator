import PageHero from '../components/PageHero.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG} from '../data/siteData.js';
import './About.css';


import aboutHero from '../assets/images/aboutUsPage.png';
import aboutUs from "../assets/images/about.png";
import eye from "../assets/images/eye1.png";
import mission from "../assets/images/round1.png";
import factory from "../assets/images/factory.png";

const journey=[['1998','Founded'],['2005','ISO Certified'],['2010','1000th Lift'],['2015','Nidec Alliance'],['2020','5000+ Installs'],['2024','Pan-India Presence']]
export default function About(){return (
<>

{/*------------------- first Section---------------------- */}
  {/* <PageHero image={IMG.factory} eyebrow="★ An ISO 9001:2015 Certified Vertical Transit Leader" title="About Raj Elevators" text="Elevating vertical mobility with 25+ years of Japanese-backed mechanical engineering excellence and zero-compromise safety."/> */}
  
<section className="about-hero">
      
      {/* Background Image */}
      <div className="about-hero-bg">
        <img src= {aboutHero} alt="Raj Elevators modern elevator"/>
      </div>

      {/* Dark Green Overlay */}
      <div className="about-hero-overlay"></div>

      {/* Hero Content */}
      <div className="about-hero-content">
        <div className="about-hero-badge">
          <span className="badge-star">★</span>
          <span>
            An ISO 9001:2015 Certified Vertical Transit Leader
          </span>
        </div>

        <h1 className="about-hero-heading">
          About Raj Elevators
        </h1>

        <p className="about-hero-subtext">
          Elevating vertical mobility with 25+ years of Japanese-backed
          mechanical engineering excellence and zero-compromise safety.
        </p>
      </div>

    </section>

  
  {/* Second Section */}

   <section className="our-story">
      <div className="story-container">
        
        {/* Image */}
        <div className="story-image">
          <img
            src={aboutUs}
            alt="Raj Elevators manufacturing facility"
          />
        </div>

        {/* Content */}
        <div className="story-content">
          <p className="eyebrow">Our Story</p>

          <h2 className="story-heading">
            Crafting Safe Transit Since 1998
          </h2>

          <p className="story-text">
            Founded in Pune as a small specialized technical workshop, Raj
            Elevators has spent over two decades pioneering safe, efficient
            vertical transport infrastructure.  From residential passenger systems to high-speed commercial
            elevators, we have consistently pushed engineering boundaries.
            Our defining breakthrough came with our alliance with Nidec
            Corporation, integrating advanced magnetic control technology
            into our national portfolio.
          </p>

          {/* <p className="story-text story-text-small"> */}
           
          {/* </p> */}

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <div className="stat-label">
                Successful
                <br />
                Installations
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">
                Commitment to
                <br />
                Safety & Quality
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  {/* Vision and Mission Section */}
  <section className="visionMission">
    <div>
      <article>
        <div>
          <img src={eye} alt="Vision Icon" />
        </div>
        <h3>
          Our Vision
        </h3>
        <p>
          To be recognized as India's most trusted and technologically advanced vertical transportation partner, powering smart architectural skylines with seamless energy efficiency..
        </p>
      </article>
      <article>
        <div>
          <img src={mission} alt="Mission Icon" />
        </div>
        <h3>Our Mission</h3>
        <p>Delivering world-class, ISO-compliant elevator systems driven by Japanese Nidec precision gearless controls, backed by strict rapid AMC assistance for total lifetime safety..</p>
        </article>
        </div>
        </section>
{/*------------------------------------------- Journey Section----------------------------------*/}
        <section className="journey-section">
  <div className="journey-container">

    <h2 className="journey-title">
      Our Journey Over the Decades
    </h2>

    <div className="journey-timeline">

      {/* ================= ROAD ================= */}
      <div className="journey-road">

        <svg
          className="journey-road-svg"
          viewBox="0 0 1180 1500"
          preserveAspectRatio="none"
        >
          {/* Road outer border */}
          <path
            d="
              M 0 1480
              C 200 1480, 240 1400, 280 1350
              S 380 1150, 340 1000
              S 640 850, 660 750
              S 760 550, 700 450
              S 700 350, 780 300
              S 1000 250, 1100 200
            "
            fill="none"
            stroke="#ffffff"
            strokeWidth="70"
            strokeLinecap="round"
          />

          {/* Road */}
          <path
            d="
              M 0 1480
              C 200 1480, 240 1400, 280 1350
              S 380 1150, 340 1000
              S 640 850, 660 750
              S 760 550, 700 450
              S 700 350, 780 300
              S 1000 250, 1100 200
            "
            fill="none"
            stroke="#c3c9d4"
            strokeWidth="60"
            strokeLinecap="round"
          />

          {/* Road center dashed line */}
          <path
            d="
              M 0 1480
              C 200 1480, 240 1400, 280 1350
              S 380 1150, 340 1000
              S 640 850, 660 750
              S 760 550, 700 450
              S 700 350, 780 300
              S 1000 250, 1100 200
            "
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="16 16"
            strokeLinecap="round"
          />
        </svg>

        {/* ================= 1998 ================= */}

        <div className="journey-connector connector-1998"></div>

        <div className="journey-dot dot-1998"></div>

        <div className="journey-pin pin-1998">
          <svg viewBox="0 0 24 24">
            <path d="M4 22V3l16 5-16 5" />
          </svg>
        </div>

        <div className="journey-card card-1998">
          <div className="journey-year">1998</div>

          <div className="journey-card-title">
            Founded
          </div>

          <div className="journey-card-text">
            Started as a regional service firm with a small
            engineering workshop.
          </div>
        </div>


        {/* ================= 2005 ================= */}

        <div className="journey-connector connector-2005"></div>

        <div className="journey-dot dot-2005"></div>

        <div className="journey-pin pin-2005">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="6" />
            <path d="M9 14l-2 8 5-3 5 3-2-8" />
          </svg>
        </div>

        <div className="journey-card card-2005">
          <div className="journey-year">2005</div>

          <div className="journey-card-title">
            ISO Certified
          </div>

          <div className="journey-card-text">
            First in Pune to gain comprehensive ISO 9001
            quality certification.
          </div>
        </div>


        {/* ================= 2010 ================= */}

        <div className="journey-connector connector-2010"></div>

        <div className="journey-dot dot-2010"></div>

        <div className="journey-pin pin-2010">
          <svg viewBox="0 0 24 24">
            <rect
              x="4"
              y="2"
              width="16"
              height="20"
              rx="2"
            />

            <path d="M8 6h8M8 10h8M9 22v-6h6v6" />
          </svg>
        </div>

        <div className="journey-card card-2010">
          <div className="journey-year">2010</div>

          <div className="journey-card-title">
            1000th Lift
          </div>

          <div className="journey-card-text">
            Milestone deployment at premium IT park structures
            in western India.
          </div>
        </div>


        {/* ================= 2015 ================= */}

        <div className="journey-connector connector-2015"></div>

        <div className="journey-dot dot-2015"></div>

        <div className="journey-pin pin-2015">
          <svg viewBox="0 0 24 24">
            <path d="M11 17H4a2 2 0 0 1-2-2v-1a4 4 0 0 1 4-4h.5" />

            <path d="M13 17h7a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-.5" />

            <path d="M9 12h6l-1.5-2.5a2 2 0 0 0-3 0z" />
          </svg>
        </div>

        <div className="journey-card card-2015">
          <div className="journey-year">2015</div>

          <div className="journey-card-title">
            Nidec Alliance
          </div>

          <div className="journey-card-text">
            Strategic co-engineering partnership with Nidec
            Kyoto, Japan.
          </div>
        </div>


        {/* ================= 2020 ================= */}

        <div className="journey-connector connector-2020"></div>

        <div className="journey-dot dot-2020"></div>

        <div className="journey-pin pin-2020">
          <svg viewBox="0 0 24 24">

            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />

            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />

            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />

            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />

          </svg>
        </div>

        <div className="journey-card card-2020">
          <div className="journey-year">2020</div>

          <div className="journey-card-title">
            5000+ Installs
          </div>

          <div className="journey-card-text">
            Pan-industry dominance with multi-story, hospital,
            and freight systems.
          </div>
        </div>


        {/* ================= 2024 ================= */}

        <div className="journey-connector connector-2024"></div>

        <div className="journey-dot dot-2024"></div>

        <div className="journey-pin pin-2024">
          <svg viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <div className="journey-card card-2024">
          <div className="journey-year">2024</div>

          <div className="journey-card-title">
            Pan-India Presence
          </div>

          <div className="journey-card-text">
            Expanded service network to 12 major metro hubs
            across India.
          </div>
        </div>

      </div>


      {/* ================= MOBILE / TABLET ================= */}

      <div className="journey-mobile">

        <div className="journey-mobile-item">
          <div className="journey-mobile-icon">
            🚩
          </div>

          <div className="journey-mobile-card">
            <div className="journey-year">1998</div>
            <div className="journey-card-title">Founded</div>
            <div className="journey-card-text">
              Started as a regional service firm with a small
              engineering workshop.
            </div>
          </div>
        </div>


        <div className="journey-mobile-item">
          <div className="journey-mobile-icon">
            🏅
          </div>

          <div className="journey-mobile-card">
            <div className="journey-year">2005</div>
            <div className="journey-card-title">ISO Certified</div>
            <div className="journey-card-text">
              First in Pune to gain comprehensive ISO 9001
              quality certification.
            </div>
          </div>
        </div>


        <div className="journey-mobile-item">
          <div className="journey-mobile-icon">
            🛗
          </div>

          <div className="journey-mobile-card">
            <div className="journey-year">2010</div>
            <div className="journey-card-title">
              1000th Lift
            </div>
            <div className="journey-card-text">
              Milestone deployment at premium IT park structures
              in western India.
            </div>
          </div>
        </div>


        <div className="journey-mobile-item">
          <div className="journey-mobile-icon">
            🤝
          </div>

          <div className="journey-mobile-card">
            <div className="journey-year">2015</div>
            <div className="journey-card-title">
              Nidec Alliance
            </div>
            <div className="journey-card-text">
              Strategic co-engineering partnership with Nidec
              Kyoto, Japan.
            </div>
          </div>
        </div>


        <div className="journey-mobile-item">
          <div className="journey-mobile-icon">
            🚀
          </div>

          <div className="journey-mobile-card">
            <div className="journey-year">2020</div>
            <div className="journey-card-title">
              5000+ Installs
            </div>
            <div className="journey-card-text">
              Pan-industry dominance with multi-story, hospital,
              and freight systems.
            </div>
          </div>
        </div>


        <div className="journey-mobile-item">
          <div className="journey-mobile-icon">
            📍
          </div>

          <div className="journey-mobile-card">
            <div className="journey-year">2024</div>
            <div className="journey-card-title">
              Pan-India Presence
            </div>
            <div className="journey-card-text">
              Expanded service network to 12 major metro hubs
              across India.
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

{/* --------------------------------------------------------- Second Last------------------ */}
<section className="facility-hero">
      
      {/* Background Image */}
      <div className="facility-bg">
        <img
          src={factory}
          alt="Raj Elevators manufacturing facility"
        />
      </div>

      {/* Dark Overlay */}
      <div className="facility-overlay"></div>

      {/* Content */}
      <div className="facility-content">
        <p className="facility-eyebrow">
          The Manufacturing Core
        </p>

        <h1 className="facility-heading">
          50,000 Sq Ft Precision Factory
        </h1>

        <p className="facility-subtext">
          Our advanced production plant incorporates heavy-duty structural CNC
          sheet lasers, robotic welding centers, and rigorous safety-drop
          testing shafts up to 100 meters, ensuring every cabin exceeds strict
          BIS and safety standards.
        </p>
      </div>

    </section>        
             
             
             
             <CTASection/></>)}
