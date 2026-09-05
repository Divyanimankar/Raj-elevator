// -------------------------------------- New Design ------------------------------------
import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";

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
      "Engineered with high-torque gearless PMSM motors and robust Japanese micro-controllers. Quiet operation, ultra-smooth VVVF acceleration curves, and up to 40% energy conservation. Perfectly optimized for hotels, corporate workspace complexes, and luxury residential apartments.",

    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",

        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    ],

    specs: [
      {
        label: "Capacity Range",
        value: "6 - 26 Persons (450 - 1600 kg)",
      },
      {
        label: "Speed Capabilities",
        value: "1.0 - 2.5 m/s (High-Speed VVVF)",
      },
      {
        label: "Drive Architecture",
        value: "PMSM Gearless Traction",
      },
    ],

    matrix: [
      ["Rated Load Capacity", "450kg / 680kg / 1000kg / 1360kg / 1600kg"],
      ["Contract Transit Speed", "1.0 m/s, 1.5 m/s, 1.75 m/s, 2.0 m/s, 2.5 m/s"],
      ["Maximum Travel Height", "Up to 120 meters"],
      ["Door Configuration Options", "Center Opening / Side Opening"],
      ["Integrated Controller System", "Intelligent 32-Bit Microprocessor System"],
      ["Power Source Grid Supply", "3-Phase 380V / 400V / 415V"],
      ["Standard Car Enclosure Sizes", "Width 1400mm × Depth 1350mm × Height 2400mm"],
      ["Required Pit Depth Clearance", "1500mm / 1600mm / 1800mm"],
      ["Minimum Overhead Clearance", "4200mm / 4500mm / 4800mm"],
    ],
  },

  "freight-elevator": {
    title: "Freight Elevator",
    badge: "UP TO 5000 KG CAPACITY",
    description:
      "Heavy-duty freight elevators engineered for industrial logistics, warehouses and manufacturing facilities. Reinforced cabins and powerful traction systems provide reliable transportation for heavy loads.",

    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
      // "https://images.unsplash.com/photo-1581092919535-7146a5a43c15?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",



       "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
      // "https://images.unsplash.com/photo-1581092919535-7146a5a43c15?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    ],

    specs: [
      {
        label: "Load Capacity",
        value: "1000 - 5000 kg",
      },
      {
        label: "Door Type",
        value: "Heavy Duty Vertical Sliding",
      },
      {
        label: "Drive Architecture",
        value: "Heavy Duty Gearless Traction",
      },
    ],

    matrix: [
      ["Rated Load Capacity", "1000kg / 2000kg / 3000kg / 5000kg"],
      ["Transit Speed", "0.5 m/s - 1.0 m/s"],
      ["Maximum Travel Height", "Up to 60 meters"],
      ["Door Configuration", "Center Opening / Vertical Sliding"],
      ["Cabin Construction", "Reinforced Structural Steel"],
      ["Power Supply", "3-Phase AC Supply"],
      ["Platform Flooring", "Anti-Skid Heavy Duty Steel"],
      ["Pit Depth", "1600mm - 2200mm"],
      ["Safety System", "Shock Buffers and Overload Protection"],
    ],
  },

  "hospital-elevator": {
    title: "Hospital Elevator",
    badge: "STRETCHER OPTIMIZED",
    description:
      "Specially engineered hospital elevators designed for smooth stretcher movement, patient comfort and emergency transportation. Features soft acceleration, accurate leveling and spacious cabin layouts.",

    images: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",


      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
    ],

    specs: [
      {
        label: "Stretcher Capacity",
        value: "1600 - 2000 kg",
      },
      {
        label: "Door Opening",
        value: "Wide Automatic Doors",
      },
      {
        label: "Leveling",
        value: "Precision Micro-Leveling",
      },
    ],

    matrix: [
      ["Rated Load Capacity", "1000kg / 1600kg / 2000kg"],
      ["Transit Speed", "0.5 m/s - 1.5 m/s"],
      ["Cabin Size", "Stretcher and medical equipment optimized"],
      ["Door Opening", "Wide center opening doors"],
      ["Leveling Accuracy", "High precision micro-leveling"],
      ["Control System", "Intelligent hospital priority mode"],
      ["Power Supply", "3-Phase AC Supply"],
      ["Emergency Backup", "Automatic rescue system"],
      ["Interior Finish", "Anti-microbial easy-clean surfaces"],
    ],
  },

  "home-lift": {
    title: "Home Lift",
    badge: "ZERO-PIT REQUIRED",
    description:
      "Compact and elegant residential lifts designed for villas, duplex homes and private residences. Quiet operation and space-efficient design make them ideal for modern homes.",

    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    ],

    specs: [
      {
        label: "Capacity",
        value: "2 - 6 Persons",
      },
      {
        label: "Power Supply",
        value: "Single Phase",
      },
      {
        label: "Pit Requirement",
        value: "Minimal / Zero Pit",
      },
    ],

    matrix: [
      ["Rated Capacity", "2 / 4 / 6 Persons"],
      ["Maximum Travel", "Up to 20 meters"],
      ["Drive System", "Compact gearless drive"],
      ["Power Supply", "Single Phase"],
      ["Pit Requirement", "Minimal or Zero Pit"],
      ["Cabin Type", "Custom Residential Interior"],
      ["Door Type", "Automatic Swing / Sliding"],
      ["Noise Level", "Low Noise Operation"],
      ["Safety", "Automatic Emergency Rescue"],
    ],
  },

  "panoramic-elevator": {
    title: "Panoramic Elevator",
    badge: "PANORAMIC GLASS DESIGN",
    description:
      "Premium panoramic elevators featuring large glass panels and elegant architectural finishes. Designed for hotels, malls and premium commercial spaces.",

    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    ],

    specs: [
      {
        label: "Capacity",
        value: "6 - 20 Persons",
      },
      {
        label: "Cabin Design",
        value: "Panoramic Glass",
      },
      {
        label: "Travel Speed",
        value: "Up to 2.0 m/s",
      },
    ],

    matrix: [
      ["Rated Load Capacity", "450kg - 1600kg"],
      ["Travel Speed", "1.0 m/s - 2.0 m/s"],
      ["Cabin Construction", "Panoramic Safety Glass"],
      ["Glass Type", "Laminated Safety Glass"],
      ["Drive System", "Gearless PMSM"],
      ["Maximum Travel", "Up to 100 meters"],
      ["Lighting", "Architectural LED Lighting"],
      ["Door Configuration", "Automatic Glass Doors"],
      ["Control System", "Intelligent Microprocessor Control"],
    ],
  },

  "high-speed-elevator": {
    title: "High-Speed Elevator",
    badge: "HIGH-RISE PERFORMANCE",
    description:
      "High-speed elevator systems designed for premium high-rise towers and large commercial developments with fast, smooth and efficient vertical transportation.",

    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    ],

    specs: [
      {
        label: "Maximum Speed",
        value: "Up to 6.0 m/s",
      },
      {
        label: "Building Height",
        value: "High-Rise Towers",
      },
      {
        label: "Control System",
        value: "Destination Control",
      },
    ],

    matrix: [
      ["Rated Load Capacity", "680kg - 2000kg"],
      ["Maximum Speed", "Up to 6.0 m/s"],
      ["Maximum Travel", "Up to 300 meters"],
      ["Drive System", "High Performance PMSM"],
      ["Control System", "Destination Dispatch Control"],
      ["Ride Comfort", "Advanced VVVF Control"],
      ["Door System", "High-Speed Automatic Doors"],
      ["Emergency System", "Automatic Rescue Device"],
      ["Power Optimization", "Regenerative Drive"],
    ],
  },

  "car-lift": {
    title: "Car Lift",
    badge: "VEHICLE TRANSPORT SYSTEM",
    description:
      "Heavy-duty car lifts engineered for transporting vehicles between parking levels in luxury residences, commercial buildings and automated parking facilities.",

    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1200&auto=format&fit=crop",
    ],

    specs: [
      {
        label: "Vehicle Capacity",
        value: "Up to 5000 kg",
      },
      {
        label: "Platform Type",
        value: "Heavy Duty Steel",
      },
      {
        label: "Door System",
        value: "Wide Vehicle Access",
      },
    ],

    matrix: [
      ["Rated Load Capacity", "2500kg / 3000kg / 5000kg"],
      ["Platform Size", "Customized for vehicle dimensions"],
      ["Transit Speed", "0.2 m/s - 0.6 m/s"],
      ["Door Width", "Wide vehicle entry"],
      ["Drive System", "Heavy Duty Hydraulic / Traction"],
      ["Safety System", "Vehicle Locking and Overload Protection"],
      ["Flooring", "Anti-Skid Steel Platform"],
      ["Pit Depth", "Project Specific"],
      ["Control", "Automatic Vehicle Lift Control"],
    ],
  },

  "capsule-lift": {
    title: "Capsule Lift",
    badge: "PREMIUM ARCHITECTURAL DESIGN",
    description:
      "Luxury capsule lifts designed as architectural centerpieces with premium glass cabins, elegant finishes and smooth high-performance vertical transportation.",

    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    ],

    specs: [
      {
        label: "Capacity",
        value: "4 - 15 Persons",
      },
      {
        label: "Cabin Type",
        value: "Luxury Capsule Design",
      },
      {
        label: "Glass Finish",
        value: "Premium Safety Glass",
      },
    ],

    matrix: [
      ["Rated Capacity", "4 - 15 Persons"],
      ["Travel Speed", "1.0 m/s - 2.5 m/s"],
      ["Cabin Design", "Architectural Capsule Cabin"],
      ["Glass Type", "Premium Laminated Safety Glass"],
      ["Drive System", "Gearless PMSM"],
      ["Lighting", "Custom LED Interior Lighting"],
      ["Maximum Travel", "Up to 120 meters"],
      ["Door System", "Automatic Premium Doors"],
      ["Control System", "Smart Microprocessor Control"],
    ],
  },
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

            {/* <div className="gallery__thumbs">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
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
            </div> */}

            {/* <div className="gallery__thumb-wrapper">

  {product.images.length > 4 && (
    <button
      type="button"
      className="gallery-arrow gallery-arrow--left"
      onClick={() => scrollThumbnails(-1)}
      aria-label="Previous images"
    >
      &#10094;
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
      &#10095;
    </button>
  )}

</div> */}


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
              <button
                type="button"
                className="btn btn--solid"
              >
                Request Technical Proposal
              </button>

              <button
                type="button"
                className="btn btn--outline"
              >
                Download Product Brochure
              </button>
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
            25+ Years Working Service Life
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
            Heavy Freight Lift
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
```


    </div>
  );
}

export default ProductDetail;