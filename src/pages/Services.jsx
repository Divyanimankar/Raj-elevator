import PageHero from '../components/PageHero.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG} from '../data/siteData.js';
import './Services.css'
const services=['Heavy-Duty Installation','Modernization Upgrade','Preventive AMC','AMC Shield Plans','Precision Repair','24/7 Breakdown Dispatch']
export default function Services(){return (
<>
  <PageHero image={IMG.service} title="Complete Elevator Lifespan Services" text="From precision mechanical installation by certified engineers to certified preventive maintenance and rapid breakdown support."/>
  <section className="serviceCards">
    <h2>
      Our Specialized Structural Elevator Engineering Support
    </h2>
    <div>
      {services.map((x,i)=>
      <article key={x}>
        <i>
          {['⌁','▥','⬡','▣','◉','☎'][i]}
        </i>
        <h3>
          {x}
        </h3>
        <p>
          Planned, certified support engineered for safety, uptime and reliable building operations.
        </p>
        <ul>
          <li>
            • High-standard service
          </li>
          <li>
            • Certified engineers
          </li>
          <li>
            • Transparent reporting
          </li>
        </ul>
      </article>
      )}
    </div>
  </section>
  <section className="serviceProcess">
    <h2>
      How Our Specialized Service Engineering Team Operates
    </h2>
    <div>
      {['Schedule Telemetry','Audit Inspection','Mechanical Action','Certified Safety Log'].map((x,i)=>
      <article key={x}>
        <b>
          0{i+1}
        </b>
        <h3>
          {x}
        </h3>
        <p>
          Clear coordination and documented engineering checks.
        </p>
      </article>
      )}
    </div>
  </section>
  <section className="plans">
    <h2>
      Standardized AMC Preventive Maintenance Plans
    </h2>
    <div>
      {[['Non-Comprehensive','Essential visits and basic checks'],['Comprehensive','24/7 response and preventive maintenance'],['Semi-Comprehensive','Flexible support for selected systems']].map(([x,d],i)=>
      <article className={i===1?'featured':''} key={x}>
        <span>
          {i===1?'RECOMMENDED PLAN':''}
        </span>
        <h3>
          {x}
        </h3>
        <p>
          {d}
        </p>
        <ul>
          <li>
            ✦ Scheduled maintenance visits
          </li>
          <li>
            ✦ Certified inspection
          </li>
          <li>
            ✦ Service documentation
          </li>
        </ul>
        <button>
          Inquire Plan Quotation
        </button>
      </article>
      )}
    </div>
  </section>
  <section className="network">
    <div>
      <h2>
        Our Scaled Support Network Across India
      </h2>
      <p>
        Centralized maintenance experts and localized, certified field teams help support reliable elevator operations nationwide.
      </p>
      <article>
        Mumbai Zone Depot
        <br/>
        <small>
          Mumbai, Pune, Navi Mumbai
        </small>
      </article>
      <article>
        Southern Zone Depot
        <br/>
        <small>
          Bengaluru, Chennai, Hyderabad
        </small>
      </article>
    </div>
    <div className="mapBox">
      ◈
      <br/>
      <b>
        500+ AMC Hubs
      </b>
      <small>
        Technician network across India
      </small>
    </div>
  </section>
  <section className="hotline">
    ☎ Emergency Passenger Trapping & Breakdown Hotline
    <b>
      1800-123-5678
    </b>
    <button>
      Call Now
    </button>
  </section>
  <section className="serviceFaq">
    <h2>
      Elevator AMC Maintenance FAQs
    </h2>
    {['How often are scheduled preventive maintenance visits performed?','What happens if a passenger gets trapped inside the cabin during a power failure?','Are genuine spare parts covered under the standard AMC contract plans?','How quickly does an AMC breakdown engineer arrive on site?'].map(x=>
    <details key={x}>
      <summary>
        {x}
      </summary>
      <p>
        Our service team follows the plan and escalation process agreed for your building and location.
      </p>
    </details>
    )}
  </section>
  <CTASection/>
</>
)}
