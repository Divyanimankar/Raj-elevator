import {useState} from 'react';
import CTASection from '../components/CTASection.jsx';
import {IMG,products} from '../data/siteData.js';
import './ProductDetail.css'
const tech=[['Rated Load Capacity','450kg / 680kg / 1000kg / 1350kg / 1800kg'],['Contract Travel Speed','1.0 m/s to 2.5 m/s (High Speed VVVF)'],['Maximum Travel Height','Up to 20 meters / high-rise custom engineering'],['Door Configuration Options','Center Opening / Side Opening / Automatic / Manual'],['Integrated Control System','Nidec Japan Integrated Intelligent PMSM Control System'],['Power Source','3-Phase 380V AC'],['Standard Car Enclosure Sizes','Custom width × depth × height'],['Required Pit Depth Clearance','1500mm / custom engineering'],['Minimum Overhead Clearance','4200mm / 4500mm / 4800mm']]
export default function ProductDetail(){const [main,setMain]=useState(IMG.passenger);
const p=products[0];
return (
<>
  <section className="detailTop">
    <div className="gallery">
      <img className="mainImg" src={main} alt=""/>
      <div>
        {[IMG.passenger,IMG.office,IMG.factory,IMG.corridor].map(x=>
        <img key={x} src={x} onClick={()=>setMain(x)} alt=""/>
        )}
      </div>
    </div>
    <div className="detailInfo">
      <span>
        PRODUCTS › PASSENGER ELEVATOR
      </span>
      <h1>
        Passenger Elevator
      </h1>
      <p>
        Engineered with high-torque gearless PMSM motors and robust Japanese Nidec controllers. Quiet operation, excellent ride quality and a premium passenger experience.
      </p>
      <article>
        <b>
          Standard Product Matrix Specs
        </b>
        <div>
          <small>
            Capacity
            <br/>
            <strong>
              6–20 Persons
            </strong>
          </small>
          <small>
            Speed Control
            <br/>
            <strong>
              1.0–2.5 m/s
            </strong>
          </small>
          <small>
            Door Architecture
            <br/>
            <strong>
              PMSM Controls
            </strong>
          </small>
        </div>
      </article>
      <button>
        Request Technical Proposal
      </button>
      <button className="outline">
        Download Product Brochure
      </button>
    </div>
  </section>
  <section className="techSpecs">
    <span>
      Technical Specifications
    </span>
    <h2>
      Engineered Parameters Matrix
    </h2>
    <div>
      {tech.map(([a,b])=>
      <article key={a}>
        <b>
          {a}
        </b>
        <p>
          {b}
        </p>
      </article>
      )}
    </div>
  </section>
  <section className="smartFeatures">
    <h2>
      Sophisticated Safety & Comfort System Integration
    </h2>
    <div>
      {[['⌁','Smooth Ride Technology'],['ϟ','Energy Regeneration'],['▥','Smart Destination Control'],['⬡','Emergency Rescue Device'],['◉','Full-Color LCD Display'],['▣','Anti-Vibration System']].map(([i,t])=>
      <article key={t}>
        <i>
          {i}
        </i>
        <h3>
          {t}
        </h3>
        <p>
          Integrated technology for smoother travel, efficient operation and dependable passenger safety.
        </p>
      </article>
      )}
    </div>
  </section>
  <section className="verticals">
    <h2>
      Designed for Premium Architectural Verticals
    </h2>
    <div>
      {[['Office Towers',IMG.city],['Premium Malls',IMG.mall],['Luxury Hotels',IMG.home],['Luxury Estates',IMG.skyline],['Clinical Sectors',IMG.corridor]].map(([t,img])=>
      <article key={t}>
        <img src={img} alt=""/>
        <span>
          {t}
        </span>
      </article>
      )}
    </div>
  </section>
  <section className="benefitList">
    <h2>
      Uncompromising Lifecycle System Benefits
    </h2>
    {['40% Power Reduction Matrix','Acoustic Isolation (<50dB)','Zero-Incident Design Focus','25+ Years Working Service Life'].map((x,i)=>
    <article key={x}>
      <b>
        0{i+1}
      </b>
      <div>
        <h3>
          {x}
        </h3>
        <p>
          Optimized engineering choices designed to support dependable daily operation.
        </p>
      </div>
    </article>
    )}
  </section>
  <section className="otherUnits">
    <h2>
      Explore Other Specialized Vertical Transit Units
    </h2>
    <div>
      {products.slice(4).concat(products.slice(1,3)).map(p=>
      <article key={p.slug}>
        <img src={p.image} alt=""/>
        <h3>
          {p.name}
        </h3>
        <p>
          {p.desc.slice(0,58)}...
        </p>
        <button>
          View Specifications
        </button>
      </article>
      )}
    </div>
  </section>
  <CTASection/>
</>
)}
