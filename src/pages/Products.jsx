import PageHero from '../components/PageHero.jsx';
import ProductCard from '../components/ProductCard.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG,products} from '../data/siteData.js';
import './Products.css';

import passengerLift from "../assets/images/passenger.png";
import freightLift from "../assets/images/freight.png";

import hospitalLift from "../assets/images/hospital.png";
import homeLift from "../assets/images/home.png";

import panoramicLift from "../assets/images/panoramic.png";
import highSpeedLift  from "../assets/images/highSpeed.png";


import carLift from "../assets/images/car.png";
import capsuleLift from "../assets/images/capsule.png";

export default function Products(){return (
<>
  <PageHero image={IMG.passenger} eyebrow="★ An ISO 9001:2015 Certified Vertical Transit Leader" title="Our Elevator Solutions" text="Explore a comprehensive and versatile portfolio co-engineered with Japanese Nidec precision controls for every architectural specification."/>
  
  {/* ---------------------------- Second Section ------------------------------------------ */}
  {/* <section className="productsPage">
    <h2>
      High Precision Products
    </h2>
    <div className="productsGrid">
      {[...products,...products.slice(0,2)].map((p,i)=>
      <ProductCard key={i} product={p}/>
      )}
    </div>
  </section> */}

  <section className="rep-products-section">
  <div className="rep-products-container">

    <h2 className="rep-products-title">
      High Precision Products
    </h2>

    <div className="rep-products-grid">

      {/* Passenger Elevator */}
      <article className="rep-products-card">
        <div className="rep-products-image-wrap">
          <img
            src= {passengerLift} alt="Passenger Elevator" />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            6–26 PERSON CAPACITY
          </span>

          <h3>Passenger Elevator</h3>

          <p>
            Sleek office & high-rise passenger lifts designed with gearless
            PMSM motors for absolute quiet, swift comfort, and micro-level
            leveling accuracy.
          </p>

          <a href="products/product-details">
            VIEW SPECIFICATIONS
          </a>
        </div>
      </article>


      {/* Freight Elevator */}
      <article className="rep-products-card">
        <div className="rep-products-image-wrap">
          <img
            src= {freightLift} alt="Freight Elevator" />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            UP TO 5000 KG CAPACITY
          </span>

          <h3>Freight Elevator</h3>

          <p>
            Reinforced load-bearing freight transit built to carry heavy
            industrial logistics. Features active shock buffers and thick
            structural steel walls.
          </p>

          <a href="#">
            VIEW SPECIFICATIONS
          </a>
        </div>
      </article>


      {/* Hospital Elevator */}
      <article className="rep-products-card">
        <div className="rep-products-image-wrap">
          <img
            src= {hospitalLift} alt="Hospital Elevator"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            STRETCHER OPTIMIZED
          </span>

          <h3>Hospital Elevator</h3>

          <p>
            Precisely sized for clinical emergency stretchers. Programmed
            with slow soft door controls, non-vibrate traction, and sterile
            anti-microbial trims.
          </p>

          <a href="#">
            VIEW SPECIFICATIONS
          </a>
        </div>
      </article>


      {/* Home Lift */}
      <article className="rep-products-card">
        <div className="rep-products-image-wrap">
          <img
            src= {homeLift} alt="Home Lift"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            ZERO-PIT REQUIRED
          </span>

          <h3>Home Lift</h3>

          <p>
            Whisper-quiet villa and duplex lifts designed for compact
            single-phase residential usage. Eliminates need for standard
            deep pits or headrooms.
          </p>

          <a href="#">
            VIEW SPECIFICATIONS
          </a>
        </div>
      </article>


      {/* Passenger Elevator - Repeat */}
      <article className="rep-products-card">
        <div className="rep-products-image-wrap">
          <img
            src= {panoramicLift} alt="Panoramic Elevator"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            6–26 PERSON CAPACITY
          </span>

          <h3>Panoramic Elevator</h3>

          <p>
            Sleek office & high-rise passenger lifts designed with gearless
            PMSM motors for absolute quiet, swift comfort, and micro-level
            leveling accuracy.
          </p>

          <a href="#">
            VIEW SPECIFICATIONS
          </a>
        </div>
      </article>


      {/* Freight Elevator - Repeat */}
      <article className="rep-products-card">
        <div className="rep-products-image-wrap">
          <img
            src= {highSpeedLift} alt="HighSpeed Lift"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            UP TO 5000 KG CAPACITY
          </span>

          <h3>High-Speed Elevator</h3>

          <p>
            Reinforced load-bearing freight transit built to carry heavy
            industrial logistics. Features active shock buffers and thick
            structural steel walls.
          </p>

          <a href="#">
            VIEW SPECIFICATIONS
          </a>
        </div>
      </article>


      {/* Hospital Elevator - Repeat */}
      <article className="rep-products-card">
        <div className="rep-products-image-wrap">
          <img
            src= {carLift}
            alt="Car Lift" />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            STRETCHER OPTIMIZED
          </span>

          <h3>Car Lift</h3>

          <p>
            Precisely sized for clinical emergency stretchers. Programmed
            with slow soft door controls, non-vibrate traction, and sterile
            anti-microbial trims.
          </p>

          <a href="#">
            VIEW SPECIFICATIONS
          </a>
        </div>
      </article>


      {/* Home Lift - Repeat */}
      <article className="rep-products-card">
        <div className="rep-products-image-wrap">
          <img
            src={capsuleLift}
            alt="Capsule Lift"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            ZERO-PIT REQUIRED
          </span>

          <h3>Capsule Lift</h3>

          <p>
            Whisper-quiet villa and duplex lifts designed for compact
            single-phase residential usage. Eliminates need for standard
            deep pits or headrooms.
          </p>

          <a href="#">
            VIEW SPECIFICATIONS
          </a>
        </div>
      </article>

    </div>
  </div>
</section>

  {/* ------------------------------------ Third Section ------------------------------------- */}
  <CTASection/>
</>
)}
