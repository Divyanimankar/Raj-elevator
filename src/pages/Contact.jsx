import {useState} from 'react';
import PageHero from '../components/PageHero.jsx';
import {IMG} from '../data/siteData.js';
import './Contact.css'
export default function Contact(){const [sent,setSent]=useState(false);
return (
<>
  <PageHero image={IMG.contact} eyebrow="★ Japanese Nidec Precision Engineering Inside" title="Get In Touch" text="Connect with India's premier high-precision elevator manufacturing team. Request systematic technical specs, site shaft audits, or AMC proposals."/>
  <section className="contactInfo">
    <article>
      <i>
        ⌖
      </i>
      <h3>
        Office Address
      </h3>
      <p>
        205, Hari Om Plaza, M.G. Road, Borivali (East), Mumbai - 400 066
      </p>
    </article>
    <article>
      <i>
        ☎
      </i>
      <h3>
        Phone Hotline
      </h3>
      <p>
        +91 808 845 028
      </p>
    </article>
    <article>
      <i>
        ✉
      </i>
      <h3>
        Email Inquiries
      </h3>
      <p>
        contact@rajelevators.com
      </p>
    </article>
  </section>
  <section className="contactMain">
    <form onSubmit={e=>{e.preventDefault();setSent(true)}}>
      <h2>
        Request a Technical Quote
      </h2>
      <div className="contactGrid">
        {[['Full Name','Enter your full name'],['Email Address','name@company.com'],['Phone Number','+91 XXXXX XXXXX'],['Company Name','Enter company or estate name'],['Number of Floors','Number of Floors'],['Inquiry Subject','New Elevator Installation (Nidec PMSM Core)'],['Shaft Dimensions','Shaft Dimensions']].map(([l,p],i)=>
        <label className={i>4?'wide':''} key={l}>
          {l}
          <input placeholder={p}/>
        </label>
        )}
      </div>
      <button>
        {sent?'Inquiry Sent ✓':'Send Inquiry Message'}
      </button>
    </form>
    <aside>
      <article>
        <h3>
          Business Operations
        </h3>
        <p>
          Monday - Saturday
          <b>
            9:00 AM - 6:00 PM
          </b>
        </p>
        <p>
          Sunday
          <strong>
            Closed
          </strong>
        </p>
      </article>
      <article className="whatsapp">
        <h3>
          ☏ WhatsApp Quick Connect
        </h3>
        <p>
          Need quick chat support? Send us a direct WhatsApp text: +91 98765 43210
        </p>
      </article>
      <div className="map">
        <span>
          ⌖
        </span>
        <b>
          Mumbai Headquarters
        </b>
      </div>
    </aside>
  </section>
  <section className="regional">
    <h2>
      Our Regional Operations Across Major Metros
    </h2>
    <div>
      <article>
        <h3>
          Bengaluru Office
        </h3>
        <p>
          ⌖ #20/27, Kaveri Complex, Gokula Stage 1, Phase 1, 1st Main, Mathikere, Bangalore - 560 054.
        </p>
        <p>
          ☎ +91 8494 909 414
        </p>
      </article>
      <article>
        <h3>
          Mumbai Office
        </h3>
        <p>
          ⌖ Mount Road, Nandanam, Chennai, Tamil Nadu 600035
        </p>
        <p>
          ☎ +91-44-34567890
        </p>
      </article>
    </div>
  </section>
</>
)}
