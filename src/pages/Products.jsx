import { Link } from "react-router-dom";

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
import { useNavigate } from "react-router-dom";

export default function Products(){
  

 const navigate = useNavigate();


  return (
<>
  {/* <PageHero image={IMG.passenger} eyebrow="★ An ISO 9001:2015 Certified Vertical Transit Leader" title="Our Elevator Solutions" text="Explore a comprehensive and versatile portfolio co-engineered with Japanese Nidec precision controls for every architectural specification."/> */}
  

  <PageHero
  image={IMG.passenger}
  eyebrow={
    <>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="eyebrow-icon">
        <polygon points="12 2 15 9 22 9.5 16.5 14.5 18 22 12 18 6 22 7.5 14.5 2 9.5 9 9" />
      </svg>
      An ISO 9001:2015 Certified Vertical Transit Leader
    </>
  }
  title="Our Elevator Solutions"
  text="Explore a comprehensive and versatile portfolio co-engineered with Japanese Nidec precision controls for every architectural specification."
/>
  {/* ---------------------------- Second Section ------------------------------------------ */}
  <section className="rep-products-section">
  <div className="rep-products-container">

    <h2 className="rep-products-title">
      High Precision Products
    </h2>

    <div className="rep-products-grid">

      {/* Passenger Elevator */}
      <article className="rep-products-card"  onClick={() => navigate("/products/passenger-elevator")}>
        <div className="rep-products-image-wrap">
          <img
            src= {passengerLift} alt="Passenger Elevator" />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            6–24 PASSENGERS CAPACITY
          </span>

          <h3>Passenger Elevator</h3>

          <p>
           Residential Buildings, Commercial Buildings, High Rise Buildings.
          </p>

          {/* <a href="products/product-details">
            VIEW SPECIFICATIONS
          </a> */}

          <Link to="/products/passenger-elevator">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </article>


      {/* Freight Elevator */}
      <article className="rep-products-card" onClick={() => navigate("/products/freight-elevator")}>
        <div className="rep-products-image-wrap">
          <img
            src= {freightLift} alt="Freight Elevator" />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            500 KG to 3000 KG CAPACITY
          </span>

          <h3>Freight Elevator</h3>

          <p>
            Factories, Industrial Buildings, Warehouses, Showrooms.
          </p>

          <Link to="/products/freight-elevator">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </article>


      {/* Hospital Elevator */}
      <article className="rep-products-card" onClick={() => navigate("/products/hospital-elevator")}>
        <div className="rep-products-image-wrap">
          <img
            src= {hospitalLift} alt="Hospital Elevator"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
           15 to 24 PASSENGERS 
          </span>

          <h3>Hospital Elevator</h3>

          <p>
           Stretcher Lifts for Hospitals, Nursing Homes.
          </p>

          <Link to="/products/hospital-elevator">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </article>


      {/* Home Lift */}
      <article className="rep-products-card" onClick={() => navigate("/products/home-lift")}>
        <div className="rep-products-image-wrap">
          <img
            src= {homeLift} alt="Home Lift"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            3 TO 6 PASSENGERS CAPACITY
          </span>

          <h3>Home Lift</h3>

          <p>
            Homes, Bungalows, Duplex pent houses, low pit and low overhead constraints.
          </p>

         <Link to="/products/home-lift">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </article>


      {/* Panoramic Elevator - Repeat */}
      <article className="rep-products-card"  onClick={() => navigate("/products/panoramic-elevator")}>
        <div className="rep-products-image-wrap">
          <img
            src= {panoramicLift} alt="Panoramic Elevator"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            13–24 PASSENGERS CAPACITY
          </span>

          <h3>Panoramic Elevator</h3>

          <p>
           Commercial Buildings, Hotels, Malls, Showrooms.
          </p>

         <Link to="/products/panoramic-elevator">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </article>


      {/* highSpeedLift Elevator - Repeat */}
      <article className="rep-products-card" onClick={() => navigate("/products/high-speed-elevator")}>
        <div className="rep-products-image-wrap">
          <img
            src= {highSpeedLift} alt="HighSpeed Lift"
          />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
             13 to 24 Passengers CAPACITY
          </span>

          <h3>High-Speed Elevator</h3>

          <p>
           Residential and Commercial Buildings, Heavy Duty requirements.
          </p>

          <Link to="/products/high-speed-elevator">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </article>


      {/* Car Elevator - Repeat */}
      <article className="rep-products-card" onClick={() => navigate("/products/car-lift")}>
        <div className="rep-products-image-wrap">
          <img
            src= {carLift}
            alt="Car Lift" />
        </div>

        <div className="rep-products-content">
          <span className="rep-products-badge">
            2500 KG to 3500 KG CAPACITY 
          </span>

          <h3>Car Lift</h3>

          <p>
           Residential and Commercial Buildings, Car Parking Buildings.
          </p>

          <Link to="/products/car-lift">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </article>


      {/* Capsule - Repeat */}
      {/* <article className="rep-products-card">
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

         <Link to="/products/capsule-lift">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </article> */}

    </div>
  </div>
</section>

  {/* ------------------------------------ Third Section ------------------------------------- */}
  <CTASection/>
</>
)}
