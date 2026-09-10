import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import { IMG } from "../data/siteData.js";
import "./About.css";

// import JourneySection from "../pages/Journey.jsx";

import aboutHero from "../assets/images/aboutUsPage.png";
import aboutUs from "../assets/images/about.png";
import eye from "../assets/images/eye1.png";
import mission from "../assets/images/round1.png";
import factory from "../assets/images/factory.png";
import newJourney from "../assets/images/journeyNew.jpg"

const journey = [
  ["1998", "Founded"],
  ["2005", "ISO Certified"],
  ["2010", "1000th Lift"],
  ["2015", "Nidec Alliance"],
  ["2020", "5000+ Installs"],
  ["2024", "Pan-India Presence"],
];
export default function About() {
  return (
    <>
      {/*------------------- first Section---------------------- */}
      <section className="about-hero">
        {/* Background Image */}
        <div className="about-hero-bg">
          <img src={aboutHero} alt="Raj Elevators modern elevator" />
        </div>

        {/* Dark Green Overlay */}
        <div className="about-hero-overlay"></div>

        {/* Hero Content */}
        <div className="about-hero-content">
          <div className="about-hero-badge">
            <span className="badge-star">★</span>
            <span>An ISO 9001:2015 Certified Vertical Transit Leader</span>
          </div>

          <h1 className="about-hero-heading">About Raj Elevators</h1>

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
            <img src={aboutUs} alt="Raj Elevators manufacturing facility" />
          </div>

          {/* Content */}
          <div className="story-content">
            <p className="eyebrow">Our Story</p>

            <h2 className="story-heading">Crafting Safe Transit Since 1998</h2>

            <p className="story-text">
              Raj Elevators (India) Private Limited, founded in 1997 by Mr. K.P.
              Rajan and headquartered in Mumbai, has over 30 years of experience
              in the Indian Elevator and Escalator market with manufacturing
              facilities in Mumbai and Bangalore. With a team of well trained
              and experienced engineers and skilled technicians, Raj Elevators
              has created a niche in the elevator market supplying high quality
              products and following it up with efficient after-sales service.
              Now, in partnership with NIDEC Corporation, we bring to you world
              class products from Japan. NIDEC Corporation was founded by Mr.
              Shigenobu Nagamori in 1973 and its headquarters is located in
              Kyoto, Japan. NIDEC supplies unparalled products to global markets
              and is the world’s No. 1 comprehensive motor manufacturer. With an
              international team consisting of over 100,000 dedicated
              individuals, the engineering expertise is limitless, from minor
              components to the most significant structures. NIDEC Elevator is
              one of the core business of Nidec Corporation, with its
              headquarters in California, USA. NIDEC Elevator boasts 8 globally
              distributed elevator R&D and manufcaturing bases.  
            </p>

            {/* <p className="story-text story-text-small"> */}

            {/* </p> */}

            {/* Stats */}
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-number">1800+</div>
                <div className="stat-label">
                  Successful
                  <br />
                  Installations
                </div>
              </div>

              {/* <div className="stat-card">
              <div className="stat-number">10000 sq.ft</div>
              <div className="stat-label">
               P facory
              </div>
            </div> */}

              <div className="stat-card">
                <div className="stat-number">8</div>
                <div className="stat-label">
                  Globally Distributed R&D Centers
                  {/* <br />
                Safety & Quality */}
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
            <h3>Our Vision</h3>
            <p>
              To be recognized as India's most trusted and technologically
              advanced vertical transportation partner, powering smart
              architectural skylines with seamless energy efficiency..
            </p>
          </article>
          <article>
            <div>
              <img src={mission} alt="Mission Icon" />
            </div>
            <h3>Our Mission</h3>
            <p>
              Delivering world-class, ISO-compliant elevator systems driven by
              Japanese Nidec precision gearless controls, backed by strict rapid
              AMC assistance for total lifetime safety..
            </p>
          </article>
        </div>
      </section>
      {/*------------------------------------------- Journey Section----------------------------------*/}


<section className="newJourney">
<img src={newJourney} alt="Raj Elevators modern elevator" />
</section>
      {/* <JourneySection /> */}

      {/* --------------------------------------------------------- Second Last------------------ */}
      <section className="facility-hero">
        {/* Background Image */}
        <div className="facility-bg">
          <img src={factory} alt="Raj Elevators manufacturing facility" />
        </div>

        {/* Dark Overlay */}
        <div className="facility-overlay"></div>

        {/* Content */}
        <div className="facility-content">
          <p className="facility-eyebrow">The Manufacturing Core</p>

          <h1 className="facility-heading">10,000 Sq Ft Precision Factory</h1>

          <p className="facility-subtext">
            Our advanced production plant incorporates heavy-duty structural CNC
            sheet lasers, robotic welding centers, and rigorous safety-drop
            testing shafts up to 100 meters, ensuring every cabin exceeds strict
            BIS and safety standards.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
