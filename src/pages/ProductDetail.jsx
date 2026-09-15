// -------------------------------------- New Design ------------------------------------
import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
// import { Link } from "react-router-dom";


// ---------------------------------------- Import Product Images---------------------------------------------------------

// --------------------------------------- Passenger-------------------------------------------
import pass1 from "../assets/images/product/pass1.jpg";
import pass2 from "../assets/images/product/pass2.jpg";
import pass3 from "../assets/images/product/pass3.jpg";
import pass4 from "../assets/images/product/pass4.jpg";
import pass5 from "../assets/images/product/pass5.jpg";
import pass6 from "../assets/images/product/pass6.jpg";

// ---------------------------------------------------------Freight Elevators----------------------------------------
import f1 from "../assets/images/product/f1.jpg";
import f2 from "../assets/images/product/f2.jpg";
import f3 from "../assets/images/product/f3.jpg";
import f4 from "../assets/images/product/f4.jpg";
import f5 from "../assets/images/product/f5.jpg";
import f6 from "../assets/images/product/f6.jpg";
import f7 from "../assets/images/product/f7.jpg";

// ---------------------------------------------------------Hospital Elevators----------------------------------------

import hospi1 from "../assets/images/product/hospi1.jpg";
import hospi2 from "../assets/images/product/hospi2.jpg";
import hospi3 from "../assets/images/product/hospi3.jpg";
import hospi4 from "../assets/images/product/hospi4.jpg";
import hospi5 from "../assets/images/product/hospi5.jpg";
import hospi6 from "../assets/images/product/hospi6.jpg";
import hospi7 from "../assets/images/product/hospi7.jpg";

// ---------------------------------------------------------Home Elevators----------------------------------------

import home1 from "../assets/images/product/home1.jpg";
import home2 from "../assets/images/product/home2.jpg";
import home3 from "../assets/images/product/home3.jpg";
import home4 from "../assets/images/product/home4.jpg";
import home5 from "../assets/images/product/home5.jpg";
import home6 from "../assets/images/product/home6.jpg";
import home7 from "../assets/images/product/home7.jpg";
import home8 from "../assets/images/product/home8.jpg";

// ---------------------------------------------------------High Speed Elevators----------------------------------------

import hs1 from "../assets/images/product/hs1.jpg";
import hs2 from "../assets/images/product/hs2.jpg";
import hs3 from "../assets/images/product/hs3.jpg";
import hs4 from "../assets/images/product/hs4.jpg";
import hs5 from "../assets/images/product/hs5.jpg";
import hs6 from "../assets/images/product/hs6.jpg";

// ---------------------------------------------------------Panaromic Elevators----------------------------------------

import pana1 from "../assets/images/product/pana1.jpg";
import pana2 from "../assets/images/product/pana2.jpg";
import pana3 from "../assets/images/product/pana3.jpg";
import pana4 from "../assets/images/product/pana4.jpg";
import pana5 from "../assets/images/product/pana5.jpg";
import pana6 from "../assets/images/product/pana6.jpg";

// ---------------------------------------------------------Panaromic Elevators----------------------------------------

import car1 from "../assets/images/product/car1.jpg";
import car2 from "../assets/images/product/car2.jpg";
import car3 from "../assets/images/product/car3.jpg";
import car4 from "../assets/images/product/car4.jpg";
import car5 from "../assets/images/product/car5.jpg";
import car6 from "../assets/images/product/car6.jpg";



// ----------------------------------------END  Import Product Images---------------------------------------------------------


const verticals = [
  {
    title: "Office Towers",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Premium Malls",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luxury Hotels",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luxury Estates",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Clinical Sectors",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=900&auto=format&fit=crop",
  },
];


const productsData = {
  "passenger-elevator": {
    title: "Passenger Elevator",
    badge: "6–26 PERSON CAPACITY",
    description:
      "Residential Buildings, Commercial Buildings, High Rise Buildings.",

    images: [
      pass1,
      pass2,
      pass3,
      pass4,
      pass5,
      pass6,
    ],

    specs: [

      {
        label: "Speed Capabilities",
        value: "0.6 mps to 7 mps",
      },
      {
        label: "Capacity Range:",
        value: "6 to 24 Passengers",
      },
      
      {
        label: "Drive Type",
        value: "Traction Geared, Traction Gearless, Hydraulic",
      },
    ],

    matrix: [
      ["Rated Load ", "408 Kg / 544 Kg / 680 Kg / 816 kg / 884 kg / 1020 kg / 1088 kg / 1360 kg / 1600 kg"],
      ["Rated Speed", "1 mps to 7 mps"],
      ["Maximum Travel Height", "240 m"],
      ["Door Configuration Options", "Automatic Center Opening/ Automatic Telescopic Opening"],
      ["Integrated Controller System", "Integrated Microprocesssor Based VVVF Drive System"],
      ["Power Source", "3 Phase 380V, 50Hz"],
      ["Standard Car Enclosure Sizes", "MS Powder Coated / Stainless Steel Hairline Finish / GI-PVC Coated Lampre Designers Sheets"],
      ["Required Pit Depth", "1500mm to 2500mm Depending on Rated Speed"],
      ["Minimum Overhead Clearance", "3000mm to 6000mm Depending on Rated Speed and Capacity"],
    ],
  },

  "freight-elevator": {
    title: "Freight Elevators",
    badge: "UP TO 5000 KG CAPACITY",
    description:
      "Factories, Industrial Buildings, Warehouses, Showrooms.",

    images: [
      f1,
      f2,
      f3,
      f4,
      f5,
      f6,
      f7,
    ],

    specs: [
      {
        label: "Speed Capabilities",
        value: "0.3 to 1 mps",
      },
      {
        label: "Capacity Range",
        value: "500 kg to 3000 kg",
      },
      {
        label: "Drive Type",
        value: "Traction Geared/Gearless, Hydraulic",
      },
    ],

    matrix: [
      ["Rated Load", "500 kg / 1000 kg / 1500 kg / 2000 kg / 2500 kg / 3000 kg"],
      ["Rated Speed", "0.5 mps to 2 mps"],
      ["Maximum Travel Height", "30 m "],
      ["Door Configuration Option", "Manual Collapsible Gates, Automatic 6 Panel Center Opening, Vertical Telescopic"],
      ["Integrated Controller System", "Microprocessor Based Drive"],
      ["Power Source", "3 Phase 380V, 50Hz"],
      ["Standard Car Enclosure Finish", "MMS Powder Coated / Stainless Steel, Crash Guards, Chequered Plate Flooring"],
      ["Pit Depth", "1500mm to 1800mm Depending on Rated Speed"],
      ["Minimum Overhead Clearnace", "4800mm to 5500 mm Depending on Rated Speed and Capacity"],
    ],
  },

  "hospital-elevator": {
    title: "Hospital Elevator",
    badge: "STRETCHER OPTIMIZED",
    description:
      "Stretcher Lifts for Hospitals, Nursing Homes.",

    images: [
     hospi1,
     hospi2,
     hospi3,
     hospi4,
     hospi5,
     hospi6,
     hospi7,
    ],

    specs: [
      {
        label: "Speed Capabilities",
        value: " 0.5 mps to 1.5 mps",
      },
      {
        label: "Capacity Range",
        value: "15 to 24 Passengers",
      },
      {
        label: "Drive Type",
        value: "Traction Geared, Traction Gearless",
      },
    ],

    matrix: [
      ["Rated Load ", "1020 kg / 1088 kg / 1360 kg / 1600 kg "],
      ["Transit Speed", "0.5 mps to 1.5 mps"],
      ["Maximum Travel Height", "60 m"],
      ["Door Configuration Options", "Automatic Center Opening/ Automatic Telescopic Opening"],
      ["Integrated Controller System", "Integrated Microprocesssor Based VVVF Drive System"],
      ["Power Source", "3 Phase 380V, 50Hz"],
      ["Standard Car Enclosure Finish", "Stainless Steel 304 Finish, Optional - Anti Bacterial GI Panels"],
      ["Required Pit Depth", "1500mm to 1800mm Depending on Rated Speed"],
      ["Minimum Overhead Clearnace", "4800mm to 5500 mm Depending on Rated Speed and Capacity"],
    ],
  },

  "home-lift": {
    title: "Home Lift",
    badge: "ZERO-PIT REQUIRED",
    description:
      "Homes, Bungalows, Duplex pent houses, low pit and low overhead constraints.",

    images: [
      home1,
      home2,
      home3,
      home4,
      home5,
      home6,
      home7,
      home8,
    ],

    specs: [
      {
        label: "Speed Capabilities",
        value: "0.1 to 1 mps",
      },
      {
        label: "Capacity Range:",
        value: "3 to 6 Passenger",
      },
      {
        label: "Drive Type",
        value: "Traction Gearless, Hydraulic",
      },
    ],

    matrix: [
      ["Rated Load", "272 kg / 340 kg / 408 kg "],
      ["Rated Speed", "0.1 mps to 1 mps"],
      ["Maximum Travel Height", "6 m"],
      ["Door Configuration Options", "Manual Swing Doors, Automatic Telescopic doors, Center Opening Semi Automatic Bus Doors"],
      ["Integrated Controller System", " "],
      ["Power Source", "3 Phase / Single Phase, 50 Hz"],
      ["Standard Car Enclosure Finish", "MS Powder Coated / Stainless Steel Hairline Finish / GI-PVC Coated Lampre Designers Sheets, Full Glass Panels"],
      ["Required Pit Depth", "150mm to 1500mm"],
      ["Minimum Overhead Clearnace", "2700mm to 3500mm"],
    ],
  },

  "panoramic-elevator": {
    title: "Panoramic Elevator",
    badge: "PANORAMIC GLASS DESIGN",
    description:
      "Commercial Buildings, Hotels, Malls, Showrooms.",

    images: [
     pana1,
     pana2,
     pana3,
     pana4,
     pana5,
     pana6,
    ],

    specs: [
      {
        label: "Speed Capabilities",
        value: "1 mps to 3 mps",
      },
      {
        label: "Capacity Range",
        value: "13 to 24 Passengers",
      },
      {
        label: "Drive Type",
        value: "Traction Geareless",
      },
    ],

    matrix: [
      ["Rated Load", "816 kg / 884 kg / 1020 kg / 1088 kg / 1360 kg / 1600 kg "],
      ["Rated Speed", "1 mps to 3 mps"],
      ["Maximum Travel Height", "30 m  "],
      ["Door Configuration Options", "Automatic Center Opening/ Automatic Telescopic Opening"],
      ["Integrated Controller System", "Integrated Microprocesssor Based VVVF Drive System"],
      ["Power Source", "3 Phase 380V, 50Hz"],
      ["Standard Car Enclosure Finish", "Sandwich glass panels for clear view, Stainless Steel Panels, Designer False ceiling, "],
      ["Required Pit Depth", "1500mm to 2000mm Depending on Rated Speed"],
      ["Minimum Overhead Clearnace", "4800mm to 5500 mm Depending on Rated Speed and Capacity"],
    ],
  },

  "high-speed-elevator": {
    title: "High-Speed Elevator",
    badge: "HIGH-RISE PERFORMANCE",
    description:
      "Residential and Commercial Buildings, Heavy Duty requirements.",

    images: [
      hs1,
      hs2,
      hs3,
      hs4,
      hs5,
      hs6,

    ],

    specs: [
      {
        label: "Speed Capabilities",
        value: "1 mps to 7 mps",
      },
      {
        label: "Capacity Range",
        value: " 13 to 24 Passengers",
      },
      {
        label: "Drive Type",
        value: "Traction Gearless",
      },
    ],

    matrix: [
      ["Rated Load", "816 kg / 884 kg / 1020 kg / 1088 kg / 1360 kg / 1600 kg "],
      ["Rated Speed", "1 mps to 7 mps"],
      ["Maximum Travel Height", "180 m"],
      ["Door Configuration Options", "Automatic Center Opening/ Automatic Telescopic Opening"],
      ["Integrated Controller System", "Integrated Microprocesssor Based VVVF Drive System"],
      ["Power Source", "3 Phase 380V, 50Hz"],
      ["Standard Car Enclosure Finish", "MS Powder Coated / Stainless Steel, Crash Guards, Chequered Plate Flooring"],
      ["Required Pit Depth", "1500mm to 2500mm Depending on Rated Speed"],
      ["Minimum Overhead Clearnace", "4800mm to 5500 mm Depending on Rated Speed and Capacity"],
    ],
  },

  "car-lift": {
    title: "Car Lift",
    badge: "VEHICLE TRANSPORT SYSTEM",
    description:
      "Residential and Commercial Buildings, Car Parking Buildings.",

    images: [
     car1,
     car2,
     car3,
     car4,
     car5,
     car6,
    ],

    specs: [
      {
        label: "Speed Capabilities",
        value: "0.3 to 1 mps",
      },
      {
        label: "Capacity Range:",
        value: "2500 kg to 3500 kg ",
      },
      {
        label: "Drive Type:",
        value: "Traction Gearless, Hydraulic",
      },
    ],

    matrix: [
      ["Rated Load", "2500 kg / 3000 kg"],
      ["Rated Speed", "0.3 to 1 mps"],
      ["Maximum Travel Height", "30 m"],
      ["Door Configuration Options", "Automatic 6 Panel Center Opening, Vertical Telescopic"],
      ["Integrated Controller System", "Microprocessor Based Drive"],
      ["Power Source", "3 Phase 380V, 50Hz"],
      ["Standard Car Enclosure Finish", "MS Powder Coated / Stainless Steel, Crash Guards, Chequered Plate Flooring"],
      ["Required Pit Depth", "1500mm"],
      ["Minimum Overhead Clearnace", "5000mm"],
    ],
  },

  // "capsule-lift": {
  //   title: "Capsule Lift",
  //   badge: "PREMIUM ARCHITECTURAL DESIGN",
  //   description:
  //     "Luxury capsule lifts designed as architectural centerpieces with premium glass cabins, elegant finishes and smooth high-performance vertical transportation.",

  //   images: [
  //     "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  //   ],

  //   specs: [
  //     {
  //       label: "Capacity",
  //       value: "4 - 15 Persons",
  //     },
  //     {
  //       label: "Cabin Type",
  //       value: "Luxury Capsule Design",
  //     },
  //     {
  //       label: "Glass Finish",
  //       value: "Premium Safety Glass",
  //     },
  //   ],

  //   matrix: [
  //     ["Rated Capacity", "4 - 15 Persons"],
  //     ["Travel Speed", "1.0 m/s - 2.5 m/s"],
  //     ["Cabin Design", "Architectural Capsule Cabin"],
  //     ["Glass Type", "Premium Laminated Safety Glass"],
  //     ["Drive System", "Gearless PMSM"],
  //     ["Lighting", "Custom LED Interior Lighting"],
  //     ["Maximum Travel", "Up to 120 meters"],
  //     ["Door System", "Automatic Premium Doors"],
  //     ["Control System", "Smart Microprocessor Control"],
  //   ],
  // },
};


const scrollThumbnails = (direction) => {
  if (thumbsRef.current) {
    thumbsRef.current.scrollBy({
      left: direction * 350,
      behavior: "smooth",
    });
  }
};


function ProductDetail() {
  const { slug } = useParams();

  const product = productsData[slug];

  const [activeImage, setActiveImage] = useState(0);
  const thumbsRef = useRef(null);

  const scrollThumbnails = (direction) => {
  const container = thumbsRef.current;

  if (!container) return;

  const thumbnail = container.querySelector(".gallery__thumb");

  if (!thumbnail) return;

  const thumbnailWidth = thumbnail.offsetWidth;
  const gap = 12;

  container.scrollBy({
    left: direction * (thumbnailWidth + gap) * 4,
    behavior: "smooth",
  });
};

  

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>

        <Link to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">

      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>

          <span className="sep">&gt;</span>

          <Link to="/products">Products</Link>

          <span className="sep">&gt;</span>

          <span className="current">
            {product.title}
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="container">
        <div className="product-hero">

          <div className="gallery">
            <div className="gallery__main">
              <img
                src={product.images[activeImage]}
                alt={product.title}
              />
            </div>


<div className="gallery__thumb-wrapper">

  {product.images.length > 4 && (
    <button
      type="button"
      className="gallery-arrow gallery-arrow--left"
      onClick={() => scrollThumbnails(-1)}
      aria-label="Previous images"
    >
      ‹
    </button>
  )}

  <div
    className="gallery__thumbs"
    ref={thumbsRef}
  >
    {product.images.map((image, index) => (
      <button
        type="button"
        key={`${image}-${index}`}
        className={
          activeImage === index
            ? "gallery__thumb active"
            : "gallery__thumb"
        }
        onClick={() => setActiveImage(index)}
      >
        <img
          src={image}
          alt={`${product.title} ${index + 1}`}
        />
      </button>
    ))}
  </div>

  {product.images.length > 4 && (
    <button
      type="button"
      className="gallery-arrow gallery-arrow--right"
      onClick={() => scrollThumbnails(1)}
      aria-label="Next images"
    >
      ›
    </button>
  )}

</div>

          </div>

          <div className="product-info">
            <h1 className="product-info__title">
              {product.title}
            </h1>

            <p className="product-info__desc">
              {product.description}
            </p>

            <div className="specs-box">
              <div className="specs-box__title">
                Standard Product Matrix Specs
              </div>

              <div className="specs-box__row">
                {product.specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="specs-box__label">
                      {spec.label}
                    </div>

                    <div className="specs-box__value">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-actions">
              {/* <button
                type="button"
                className="btn btn--solid"
              >
                Request Technical Proposal
              </button> */}

              <Link
  to="/contact"
  className="btn btn--solid"
>
  Request Technical Proposal
</Link>


              {/* <button
                type="button"
                className="btn btn--outline"
              >
                Download Product Brochure
              </button> */}
            </div>
          </div>

        </div>
      </div>

      {/* Tab */}
      <div className="container">
        <div className="tab-bar">
          <button
            type="button"
            className="tab-btn"
          >
            Technical Specifications
          </button>
        </div>
      </div>

      {/* Matrix */}
      <div className="container">
        <div className="matrix-section">
          <h2 className="section-title">
            Engineered Parameters Matrix
          </h2>

          <div className="matrix-table">
            {product.matrix.map(([label, value]) => (
              <div
                className="matrix-row"
                key={label}
              >
                <div className="matrix-row__label">
                  {label}
                </div>

                <div className="matrix-row__value">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------- Safety & Comfort Section --------------------------*/}

            {/* Safety & Comfort */}
<section className="safety-section">
  <div className="container">

    <h2 className="safety-section__title">
      Sophisticated Safety &amp; Comfort System Integration
    </h2>

    <div className="safety-grid">

      <div className="feature-card">
        <div className="feature-card__icon">
          <svg viewBox="0 0 24 24">
            <path d="M3 12h4l2 8 4-16 2 8h6" />
          </svg>
        </div>

        <h3 className="feature-card__title">
          Smooth Ride Technology
        </h3>

        <p className="feature-card__text">
          Whisper-quiet VVVF drive control architecture dampens cabin sway
          and lateral acceleration to unnoticeable levels.
        </p>
      </div>


      <div className="feature-card">
        <div className="feature-card__icon">
          <svg viewBox="0 0 24 24">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>

        <h3 className="feature-card__title">
          Energy Regeneration
        </h3>

        <p className="feature-card__text">
          Eco-friendly regenerative feedback drives direct mechanical
          braking power directly back into your building grid infrastructure.
        </p>
      </div>


      <div className="feature-card">
        <div className="feature-card__icon">
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

        <h3 className="feature-card__title">
          Smart Destination Control
        </h3>

        <p className="feature-card__text">
          Dynamic destination dispatching algorithms minimize user wait
          times and dispatch the optimized lift capsule.
        </p>
      </div>


      <div className="feature-card">
        <div className="feature-card__icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z" />
          </svg>
        </div>

        <h3 className="feature-card__title">
          Emergency Rescue Device
        </h3>

        <p className="feature-card__text">
          Standard battery backup Automatic Rescue Device (ARD) lands
          safety-cabin to nearest deck instantly during main power drop.
        </p>
      </div>


      <div className="feature-card">
        <div className="feature-card__icon">
          <svg viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        <h3 className="feature-card__title">
          Full-Color LCD Display
        </h3>

        <p className="feature-card__text">
          Premium integrated state-of-the-art interactive display boards
          providing architectural visual comfort inside.
        </p>
      </div>


      <div className="feature-card">
        <div className="feature-card__icon">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <h3 className="feature-card__title">
          Anti-Vibration System
        </h3>

        <p className="feature-card__text">
          Heavy-duty frame guide rails and active dampers isolate mechanical
          vibrations from passenger capsules.
        </p>
      </div>

    </div>
  </div>
</section>



{/* ---------------------------------- Architectural verticals  ---------------------------------- */}

 <section className="verticals-section">
      <div className="container">
        <h2 className="verticals-section__title">
          Designed for Premium Architectural Verticals
        </h2>

        <div className="verticals-grid">
          {verticals.map((vertical) => (
            <div className="vertical-card" key={vertical.title}>
              <img
                src={vertical.image}
                alt={vertical.title}
                loading="lazy"
              />

              <div className="vertical-card__label">
                {vertical.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


{/* -------------------------------Lifecycle Benefits----------------------------------------- */}
<section className="lifecycle-section">
  <div className="container">

    <h2 className="lifecycle-section__title">
      Uncompromising Lifecycle System Benefits
    </h2>

    <div className="lifecycle-list">

      <div className="lifecycle-item">
        <div className="lifecycle-item__num">01</div>

        <div className="lifecycle-item__content">
          <h3 className="lifecycle-item__title">
            40% Power Reduction Matrix
          </h3>

          <p className="lifecycle-item__text">
            Japanese co-engineered PMSM gearless machines emit near-zero
            heat loss and operate clean without gear oil.
          </p>
        </div>
      </div>

      <div className="lifecycle-item">
        <div className="lifecycle-item__num">02</div>

        <div className="lifecycle-item__content">
          <h3 className="lifecycle-item__title">
            Acoustic Insulation (&lt;50dB)
          </h3>

          <p className="lifecycle-item__text">
            Heavy mechanical structural isolators prevent hum propagation
            across host building structures.
          </p>
        </div>
      </div>

      <div className="lifecycle-item">
        <div className="lifecycle-item__num">03</div>

        <div className="lifecycle-item__content">
          <h3 className="lifecycle-item__title">
            Zero-Incident Design Focus
          </h3>

          <p className="lifecycle-item__text">
            Multiple safety block systems, overspeed governors, and heavy
            physical buffering stops built in.
          </p>
        </div>
      </div>

      <div className="lifecycle-item">
        <div className="lifecycle-item__num">04</div>

        <div className="lifecycle-item__content">
          <h3 className="lifecycle-item__title">
            30+ Years Working Service Life
          </h3>

          <p className="lifecycle-item__text">
            Strict testing of structural steel and Nidec motor machines
            ensures decades of continuous vertical cycles.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/*------------------------------------Related Products------------------------------------- */}
<section className="related-section">
  <div className="container">

    <h2 className="related-section__title">
      Explore Other Specialized Vertical Transit Units
    </h2>

    <div className="related-grid">

      {/* Card 1 */}
      <div className="related-card">
        <img
          className="related-card__image"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop"
          alt="Panoramic Lift"
        />

        <div className="related-card__body">
          <h3 className="related-card__title">
            Panoramic Lift
          </h3>

          <p className="related-card__text">
            Aesthetic external capsule.
          </p>

          {/* <button className="related-card__btn">
            View Specifications
          </button> */}

           <Link className="related-card__btn" to="/products/panoramic-elevator">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="related-card">
        <img
          className="related-card__image"
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=500&auto=format&fit=crop"
          alt="Home Villa Lift"
        />

        <div className="related-card__body">
          <h3 className="related-card__title">
            Home Lift
          </h3>

          <p className="related-card__text">
            Single phase, zero pit needed.
          </p>

          {/* <button className="related-card__btn">
            View Specifications
          </button> */}

          <Link className="related-card__btn" to="/products/home-lift">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="related-card">
        <img
          className="related-card__image"
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=500&auto=format&fit=crop"
          alt="Hospital Stretcher Lift"
        />

        <div className="related-card__body">
          <h3 className="related-card__title">
            Hospital Lift
          </h3>

          <p className="related-card__text">
            Slow doors, soft micro-leveling.
          </p>

          {/* <button className="related-card__btn">
            View Specifications
          </button> */}

          
          <Link className="related-card__btn" to="/products/hospital-elevator">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </div>

      {/* Card 4 */}
      <div className="related-card">
        <img
          className="related-card__image"
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=500&auto=format&fit=crop"
          alt="Heavy Freight Lift"
        />

        <div className="related-card__body">
          <h3 className="related-card__title">
            Freight Lift
          </h3>

          <p className="related-card__text">
            Reinforced mechanical build.
          </p>

          {/* <button className="related-card__btn">
            View Specifications
          </button> */}

          <Link className="related-card__btn" to="/products/freight-elevator">
  VIEW SPECIFICATIONS
</Link>
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  );
}

export default ProductDetail;