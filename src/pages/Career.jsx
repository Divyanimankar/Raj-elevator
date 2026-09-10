import {useState} from 'react';
import PageHero from '../components/PageHero.jsx';
import JobCard from '../components/JobCard.jsx';
import {IMG} from '../data/siteData.js';
import './Career.css'
const jobs=[{type:'Full-time',dept:'Field Operations & Services',title:'Senior Elevator Technician',location:'Mumbai, Maharashtra'},{type:'Full-time',dept:'Corporate Business Development',title:'Sales Manager – North India',location:'New Delhi, NCR'},{type:'Full-time',dept:'Kyoto Co-engineering Alliance',title:'Mechanical Engineer (PMSM)',location:'Mumbai Plant, Maharashtra'},{type:'Full-time',dept:'24/7 Helpdesk & Maintenance AMC',title:'Customer Support Executive',location:'Bengaluru, Karnataka'}]
const benefits=['Health Insurance','9 am – 6 pm Hours','Travel Allowance','Skill Training','Annual Bonus','Provident Fund']
export default function Career(){const [sent,setSent]=useState(false);
return (
<>

{/* ------------------- First Section------------------------------ */}
  <PageHero image={IMG.team} title="Join Our Team" text="Build your career at India's leading elevator company. Co-create quiet and efficient vertical mobility systems."/>
  
  {/* -------------------------- Second Section ---------------- */}
 <div className="careerWhySection">

  <div className="careerWhySectionTitle">
    Why Work With Us
  </div>

  <div className="careerWhyGrid">

    <div className="careerWhyCard">
      <div className="careerWhyCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>

      <div className="careerWhyCardTitle">
        Growth Opportunities
      </div>

      <div className="careerWhyCardText">
        We support continuous progression. Learn gearless PMSM technology
        and Japanese Nidec precision controls.
      </div>
    </div>


    <div className="careerWhyCard">
      <div className="careerWhyCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className="careerWhyCardTitle">
        Competitive Salary
      </div>

      <div className="careerWhyCardText">
        We value expert craft. Enjoy industry-standard remuneration
        structures with performance incentives.
      </div>
    </div>


    <div className="careerWhyCard">
      <div className="careerWhyCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12l9-9 9 9" />
          <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
        </svg>
      </div>

      <div className="careerWhyCardTitle">
        Work-Life Balance
      </div>

      <div className="careerWhyCardText">
        Our workforce excels in healthy environments. Enjoy reasonable
        working shifts and balanced site allocations.
      </div>
    </div>


    <div className="careerWhyCard">
      <div className="careerWhyCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 10 12 4 2 10l10 6 10-6z" />
          <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
          <path d="M22 10v6" />
        </svg>
      </div>

      <div className="careerWhyCardTitle">
        Training &amp; Development
      </div>

      <div className="careerWhyCardText">
        Gain hands-on through Kyoto co-developed curriculum and high-speed
        diagnostic programs.
      </div>
    </div>

  </div>
</div>


  {/* -------------------- Third Section ------------------------- */}
  <div className="careerCareersSection" >

  <div className="careerCareersSectionTitle">
    Current Career Opportunities
  </div>

  <div className="careerJobList">

    {/* Job 1 */}
    <div className="careerJobCard">
      <div className="careerJobCardInfo">

        <div className="careerJobCardMeta">
          <span className="careerJobCardBadge">
            Full-time
          </span>

          <span className="careerJobCardDepartment">
            Field Operations &amp; Services
          </span>
        </div>

        <div className="careerJobCardTitle">
          Senior Elevator Technician
        </div>

        <div className="careerJobCardLocation">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <span>Mumbai, Maharashtra</span>
        </div>

      </div>

      {/* <button className="careerJobCardButton" href="#careerApplySection">
        Apply Now
      </button> */}

      <a href="#careerApplySection" className="careerJobCardButton">
  Apply Now
</a>

    </div>


    {/* Job 2 */}
    <div className="careerJobCard">
      <div className="careerJobCardInfo">

        <div className="careerJobCardMeta">
          <span className="careerJobCardBadge">
            Full-time
          </span>

          <span className="careerJobCardDepartment">
            Corporate Business Development
          </span>
        </div>

        <div className="careerJobCardTitle">
          Sales Manager - North India
        </div>

        <div className="careerJobCardLocation">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <span>New Delhi, NCR</span>
        </div>

      </div>

      {/* <button className="careerJobCardButton">
        Apply Now
      </button> */}
      <a href="#careerApplySection" className="careerJobCardButton">
  Apply Now
</a>
    </div>


    {/* Job 3 */}
    <div className="careerJobCard">
      <div className="careerJobCardInfo">

        <div className="careerJobCardMeta">
          <span className="careerJobCardBadge">
            Full-time
          </span>

          <span className="careerJobCardDepartment">
            Kyoto Co-engineering Alliance
          </span>
        </div>

        <div className="careerJobCardTitle">
          Mechanical Engineer (PMSM)
        </div>

        <div className="careerJobCardLocation">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <span>Mumbai Plant, Maharashtra</span>
        </div>

      </div>

      {/* <button className="careerJobCardButton">
        Apply Now
      </button> */}

      <a href="#careerApplySection" className="careerJobCardButton">
  Apply Now
</a>
    </div>


    {/* Job 4 */}
    <div className="careerJobCard">
      <div className="careerJobCardInfo">

        <div className="careerJobCardMeta">
          <span className="careerJobCardBadge">
            Full-time
          </span>

          <span className="careerJobCardDepartment">
            24/7 Helpdesk &amp; Maintenance AMC
          </span>
        </div>

        <div className="careerJobCardTitle">
          Customer Support Executive
        </div>

        <div className="careerJobCardLocation">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <span>Bengaluru, Karnataka</span>
        </div>

      </div>

      {/* <button className="careerJobCardButton">
        Apply Now
      </button> */}
      <a href="#careerApplySection" className="careerJobCardButton">
  Apply Now
</a>
    </div>

  </div>

</div>

  {/* ---------------------- Fourth Section------------------- */}
<div className="careerBenefitsSection">
<div className="careerBenefitsSectionNew">
  <div className="careerBenefitsSectionEyebrow">
    Corporate Care
  </div>

  <div className="careerBenefitsSectionTitle">
    Our Employee Benefits
  </div>

  <div className="careerBenefitsGrid">

    {/* Health Insurance */}
    <div className="careerBenefitCard">
      <div className="careerBenefitCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>

      <div className="careerBenefitCardTitle">
        Health Insurance
      </div>

      <div className="careerBenefitCardText">
        Comprehensive coverage for you and your dependents
      </div>
    </div>

    {/* Working Hours */}
    <div className="careerBenefitCard">
      <div className="careerBenefitCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>

      <div className="careerBenefitCardTitle">
        9 am - 6 pm Hours
      </div>

      <div className="careerBenefitCardText">
        Coordinated shift timings for engineering site specialists
      </div>
    </div>

    {/* Travel Allowance */}
    <div className="careerBenefitCard">
      <div className="careerBenefitCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="1" y="7" width="13" height="10" rx="1" />
          <path d="M14 10h4l4 3v4h-8z" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
        </svg>
      </div>

      <div className="careerBenefitCardTitle">
        Travel Allowance
      </div>

      <div className="careerBenefitCardText">
        Generous support for transit and field operations
      </div>
    </div>

    {/* Skill Training */}
    <div className="careerBenefitCard">
      <div className="careerBenefitCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 10 12 4 2 10l10 6 10-6z" />
          <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
          <path d="M22 10v6" />
        </svg>
      </div>

      <div className="careerBenefitCardTitle">
        Skill Training
      </div>

      <div className="careerBenefitCardText">
        Funded credentials on Kyoto-grade elevator controllers
      </div>
    </div>

    {/* Annual Bonus */}
    <div className="careerBenefitCard">
      <div className="careerBenefitCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polygon points="12 2 15 9 22 9.5 16.5 14.5 18 22 12 18 6 22 7.5 14.5 2 9.5 9 9" />
        </svg>
      </div>

      <div className="careerBenefitCardTitle">
        Annual Bonus
      </div>

      <div className="careerBenefitCardText">
        Generous profit-sharing incentives on milestone installations
      </div>
    </div>

    {/* Provident Fund */}
    <div className="careerBenefitCard">
      <div className="careerBenefitCardIcon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>

      <div className="careerBenefitCardTitle">
        Provident Fund
      </div>

      <div className="careerBenefitCardText">
        Double contribution matching retirement safety nest
      </div>
    </div>
</div>
  </div>
</div>

  {/* ------------------------ Fifth Section------------------------- */}
 

<div className="careerApplySection" id="careerApplySection">

  <div className="careerApplySectionEyebrow">
    Start Your Journey
  </div>

  <div className="careerApplySectionTitle">
    Ready to Elevate Your Career?
  </div>

  <div className="careerApplyCard">

    <p className="careerApplyDescription">
     We're always looking for passionate and talented individuals to join our team. Explore open positions and take the next step in your career with us.
    </p>

    <a
      href="mailto:info@rajelevators.com"
      className="careerEmailButton"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="careerEmailIcon"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>

      <span>Apply Now</span>
    </a>

    <a
      href="mailto:info@rajelevators.com"
      className="careerEmailAddress"
    >
      contact@rajelevators.com
    </a>

  </div>

</div>


</>
)}
