// import {useState} from 'react';
// import CTASection from '../components/CTASection.jsx';
// import {IMG,products} from '../data/siteData.js';
// import './ProductDetail.css'
// const tech=[['Rated Load Capacity','450kg / 680kg / 1000kg / 1350kg / 1800kg'],['Contract Travel Speed','1.0 m/s to 2.5 m/s (High Speed VVVF)'],['Maximum Travel Height','Up to 20 meters / high-rise custom engineering'],['Door Configuration Options','Center Opening / Side Opening / Automatic / Manual'],['Integrated Control System','Nidec Japan Integrated Intelligent PMSM Control System'],['Power Source','3-Phase 380V AC'],['Standard Car Enclosure Sizes','Custom width × depth × height'],['Required Pit Depth Clearance','1500mm / custom engineering'],['Minimum Overhead Clearance','4200mm / 4500mm / 4800mm']]
// export default function ProductDetail(){const [main,setMain]=useState(IMG.passenger);
// const p=products[0];
// return (
// <>
//   <section className="detailTop">
//     <div className="gallery">
//       <img className="mainImg" src={main} alt=""/>
//       <div>
//         {[IMG.passenger,IMG.office,IMG.factory,IMG.corridor].map(x=>
//         <img key={x} src={x} onClick={()=>setMain(x)} alt=""/>
//         )}
//       </div>
//     </div>
//     <div className="detailInfo">
//       <span>
//         PRODUCTS › PASSENGER ELEVATOR
//       </span>
//       <h1>
//         Passenger Elevator
//       </h1>
//       <p>
//         Engineered with high-torque gearless PMSM motors and robust Japanese Nidec controllers. Quiet operation, excellent ride quality and a premium passenger experience.
//       </p>
//       <article>
//         <b>
//           Standard Product Matrix Specs
//         </b>
//         <div>
//           <small>
//             Capacity
//             <br/>
//             <strong>
//               6–20 Persons
//             </strong>
//           </small>
//           <small>
//             Speed Control
//             <br/>
//             <strong>
//               1.0–2.5 m/s
//             </strong>
//           </small>
//           <small>
//             Door Architecture
//             <br/>
//             <strong>
//               PMSM Controls
//             </strong>
//           </small>
//         </div>
//       </article>
//       <button>
//         Request Technical Proposal
//       </button>
//       <button className="outline">
//         Download Product Brochure
//       </button>
//     </div>
//   </section>
//   <section className="techSpecs">
//     <span>
//       Technical Specifications
//     </span>
//     <h2>
//       Engineered Parameters Matrix
//     </h2>
//     <div>
//       {tech.map(([a,b])=>
//       <article key={a}>
//         <b>
//           {a}
//         </b>
//         <p>
//           {b}
//         </p>
//       </article>
//       )}
//     </div>
//   </section>
//   <section className="smartFeatures">
//     <h2>
//       Sophisticated Safety & Comfort System Integration
//     </h2>
//     <div>
//       {[['⌁','Smooth Ride Technology'],['ϟ','Energy Regeneration'],['▥','Smart Destination Control'],['⬡','Emergency Rescue Device'],['◉','Full-Color LCD Display'],['▣','Anti-Vibration System']].map(([i,t])=>
//       <article key={t}>
//         <i>
//           {i}
//         </i>
//         <h3>
//           {t}
//         </h3>
//         <p>
//           Integrated technology for smoother travel, efficient operation and dependable passenger safety.
//         </p>
//       </article>
//       )}
//     </div>
//   </section>
//   <section className="verticals">
//     <h2>
//       Designed for Premium Architectural Verticals
//     </h2>
//     <div>
//       {[['Office Towers',IMG.city],['Premium Malls',IMG.mall],['Luxury Hotels',IMG.home],['Luxury Estates',IMG.skyline],['Clinical Sectors',IMG.corridor]].map(([t,img])=>
//       <article key={t}>
//         <img src={img} alt=""/>
//         <span>
//           {t}
//         </span>
//       </article>
//       )}
//     </div>
//   </section>
//   <section className="benefitList">
//     <h2>
//       Uncompromising Lifecycle System Benefits
//     </h2>
//     {['40% Power Reduction Matrix','Acoustic Isolation (<50dB)','Zero-Incident Design Focus','25+ Years Working Service Life'].map((x,i)=>
//     <article key={x}>
//       <b>
//         0{i+1}
//       </b>
//       <div>
//         <h3>
//           {x}
//         </h3>
//         <p>
//           Optimized engineering choices designed to support dependable daily operation.
//         </p>
//       </div>
//     </article>
//     )}
//   </section>
//   <section className="otherUnits">
//     <h2>
//       Explore Other Specialized Vertical Transit Units
//     </h2>
//     <div>
//       {products.slice(4).concat(products.slice(1,3)).map(p=>
//       <article key={p.slug}>
//         <img src={p.image} alt=""/>
//         <h3>
//           {p.name}
//         </h3>
//         <p>
//           {p.desc.slice(0,58)}...
//         </p>
//         <button>
//           View Specifications
//         </button>
//       </article>
//       )}
//     </div>
//   </section>
//   <CTASection/>
// </>
// )}


// --------------------------------------------------- New Design -----------------------------------------------------


import { useState } from "react";
import "./ProductDetail.css";

const galleryImages = [
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1565969185439-4f6a7e2bba44?auto=format&fit=crop&w=1200&q=90",
];

const features = [
  {
    icon: "⌁",
    title: "Smooth Ride Technology",
    description:
      "Superior quiet VVVF drive control architecture dampens cabin sway and lateral acceleration to unnoticeable levels.",
  },
  {
    icon: "ϟ",
    title: "Energy Regeneration",
    description:
      "Eco-friendly regenerative feedback drives direct mechanical braking power back into your building grid infrastructure.",
  },
  {
    icon: "⇅",
    title: "Smart Destination Control",
    description:
      "Dynamic destination dispatching algorithms minimize user wait times and dispatch the optimized elevator capsule.",
  },
  {
    icon: "◈",
    title: "Emergency Rescue Device",
    description:
      "Standard battery backup Automatic Rescue Device lands safely at the nearest deck during mains power drop.",
  },
  {
    icon: "◉",
    title: "Full-Color LCD Display",
    description:
      "Premium integrated state-of-the-art interactive display boards providing architectural visual comfort inside.",
  },
  {
    icon: "▣",
    title: "Anti-Vibration System",
    description:
      "Heavy-duty frame guide rails and active dampers isolate mechanical vibrations from passenger capsules.",
  },
];

const verticals = [
  {
    title: "Office Towers",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Premium Malls",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Luxury Hotels",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Luxury Estates",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Clinical Sectors",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80",
  },
];

const benefits = [
  {
    number: "01",
    title: "40% Power Reduction Matrix",
    description:
      "Japanese co-engineered PMSM gearless machines emit near-zero heat loss and operate clean without gear oil.",
  },
  {
    number: "02",
    title: "Acoustic Insulation (50dB)",
    description:
      "Heavy mechanical structural isolators prevent hum propagation across host building structures.",
  },
  {
    number: "03",
    title: "Zero-Incident Design Focus",
    description:
      "Multiple safety block systems, overspeed governors, and heavy physical buffering stops built in.",
  },
  {
    number: "04",
    title: "25+ Years Working Service Life",
    description:
      "Strict testing protocols and reliable motor systems ensure decades of continuous vertical cycles.",
  },
];

const otherProducts = [
  {
    title: "Panoramic Lift",
    description: "Premium wide-view glass cabin.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Home Villa Lift",
    description: "Single-phase, zero pit required.",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Hospital Stretcher Lift",
    description: "Slow doors, soft micro-leveling.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Heavy Freight Lift",
    description: "Reinforced heavy-duty build.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80",
  },
];

const specifications = [
  {
    title: "Rated Load Capacity",
    value: "450kg / 680kg / 1000kg / 1360kg / 1600kg",
  },
  {
    title: "Contract Transit Speed",
    value: "1.0 m/s, 1.5 m/s, 1.75 m/s, 2.0 m/s, 2.5 m/s",
  },
  {
    title: "Maximum Travel Height",
    value: "Up to 120 meters (Typical high-rise structure setup)",
  },
  {
    title: "Door Configuration Options",
    value: "Center Opening / Side Opening (Automated Infrared Safety Curtain)",
  },
  {
    title: "Integrated Controller System",
    value: "Integrated Intelligent 32-Bit Microprocessor System",
  },
  {
    title: "Power Source Grid Supply",
    value: "3-Phase 380V, 50Hz AC Feed",
  },
  {
    title: "Standard Car Enclosure Sizes",
    value: "Width 1400mm × Depth 1350mm × Height 2400mm",
  },
  {
    title: "Required Pit Depth Clearance",
    value: "1500mm / 1600mm / 1800mm",
  },
  {
    title: "Minimum Overhead Clearance",
    value: "4200mm / 4500mm / 4800mm",
  },
];

function ProductDetail() {
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your technical proposal request has been submitted successfully.");
    setIsModalOpen(false);
  };

  const handleBrochure = () => {
    alert("Product brochure download started.");
  };

  return (
    <div className="product-details-page">
      {/* PRODUCT SECTION */}
      <section className="product-section">
        <div className="product-container">
          <div className="breadcrumb">
            <span>Home</span>
            <span>›</span>
            <span>Products</span>
            <span>›</span>
            <strong>Passenger Elevator</strong>
          </div>

          <div className="product-grid">
            <div className="gallery-section">
              <div className="main-image-wrapper">
                <img
                  src={galleryImages[activeImage]}
                  alt="Passenger Elevator"
                />
              </div>

              <div className="thumbnail-wrapper">
                {galleryImages.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    className={
                      activeImage === index
                        ? "thumbnail active"
                        : "thumbnail"
                    }
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`Elevator ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-content">
              <h1>Passenger Elevator</h1>

              <p className="product-description">
                Engineered with high-torque gearless PMSM motors and robust
                Japanese micro-controllers. Quiet operation, ultra-smooth VVVF
                acceleration curves, and up to 40% energy conservation.
                Optimized for hotels, corporate workspaces, and luxury
                residential apartments.
              </p>

              <div className="product-spec-card">
                <h3>Standard Product Matrix Specs</h3>

                <div className="quick-spec-grid">
                  <div className="quick-spec">
                    <span>Capacity Range</span>
                    <strong>6 - 20 Persons (450 - 1600 kg)</strong>
                  </div>

                  <div className="quick-spec">
                    <span>Speed Capabilities</span>
                    <strong>1.0 - 2.5 m/s High-Speed VVVF</strong>
                  </div>

                  <div className="quick-spec">
                    <span>Drive Architecture</span>
                    <strong>PMSM Gearless Traction</strong>
                  </div>
                </div>
              </div>

              <div className="product-buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  Request Technical Proposal
                </button>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleBrochure}
                >
                  Download Product Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL TAB */}
      <section className="technical-section">
        <div className="product-container">
          <div className="technical-tab">
            Technical Specifications
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="parameters-section">
        <div className="product-container">
          <h2 className="section-title">
            Engineered Parameters Matrix
          </h2>

          <div className="specification-table">
            {specifications.map((item) => (
              <div className="spec-row" key={item.title}>
                <div className="spec-title">
                  {item.title}
                </div>

                <div className="spec-value">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="safety-section">
        <div className="product-container">
          <h2 className="center-heading">
            Sophisticated Safety & Comfort System Integration
          </h2>

          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="vertical-section">
        <div className="product-container">
          <h2 className="center-heading">
            Designed for Premium Architectural Verticals
          </h2>

          <div className="vertical-grid">
            {verticals.map((vertical) => (
              <div
                className="vertical-card"
                key={vertical.title}
              >
                <img
                  src={vertical.image}
                  alt={vertical.title}
                />

                <div className="vertical-overlay">
                  {vertical.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <div className="product-container benefits-container">
          <h2 className="center-heading">
            Uncompromising Lifecycle System Benefits
          </h2>

          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div
                className="benefit-item"
                key={benefit.number}
              >
                <div className="benefit-number">
                  {benefit.number}
                </div>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="other-products-section">
        <div className="product-container">
          <h2 className="center-heading">
            Explore Other Specialized Vertical Transit Units
          </h2>

          <div className="other-products-grid">
            {otherProducts.map((product) => (
              <div
                className="other-product-card"
                key={product.title}
              >
                <img
                  src={product.image}
                  alt={product.title}
                />

                <div className="other-product-content">
                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <button
                    type="button"
                    className="small-outline-btn"
                    onClick={() =>
                      alert(`${product.title} specifications`)
                    }
                  >
                    View Specifications
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <h2>Request Technical Proposal</h2>

            <p>
              Our technical team will prepare a customized
              elevator proposal for your project.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <textarea
                rows="5"
                placeholder="Project Requirement"
                required
              />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;