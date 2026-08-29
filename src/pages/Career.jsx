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
  <PageHero image={IMG.team} title="Join Our Team" text="Build your career at India's leading elevator company. Co-create quiet and efficient vertical mobility systems."/>
  <section className="whyWork">
    <h2>
      Why Work With Us
    </h2>
    <div>
      {[['ϟ','Growth Opportunities'],['✓','Competitive Salary'],['⌂','Work-Life Balance'],['◉','Training & Development']].map(([i,t])=>
      <article key={t}>
        <i>
          {i}
        </i>
        <h3>
          {t}
        </h3>
        <p>
          Build expertise through challenging projects, supportive teams and structured development.
        </p>
      </article>
      )}
    </div>
  </section>
  <section className="jobs">
    <h2>
      Current Career Opportunities
    </h2>
    {jobs.map(j=>
    <JobCard key={j.title} job={j}/>
    )}
  </section>
  <section className="employeeBenefits">
    <span>
      CORPORATE CARE
    </span>
    <h2>
      Our Employee Benefits
    </h2>
    <div>
      {benefits.map((x,i)=>
      <article key={x}>
        <i>
          {['◈','ϟ','◫','◉','☆','⬡'][i]}
        </i>
        <h3>
          {x}
        </h3>
        <p>
          Practical support designed to help our people grow and perform at their best.
        </p>
      </article>
      )}
    </div>
  </section>
  <section className="application" id="apply">
    <span>
      START YOUR JOURNEY
    </span>
    <h2>
      Submit Your Application
    </h2>
    <form onSubmit={e=>{e.preventDefault();setSent(true)}}>
      <div>
        {[['Your Full Name','Rajesh Kumar'],['Email Address','rajesh@example.com'],['Phone Number','+91 98765 43210'],['Position Applying For','Mechanical Engineer (PMSM)'],['Years of Experience','4+ Years of Professional Experience']].map(([l,p],i)=>
        <label className={i===4?'wide':''} key={l}>
          {l}
          <input placeholder={p}/>
        </label>
        )}
      </div>
      <label className="wide">
        Upload Resume / CV
        <input type="file"/>
      </label>
      <label className="wide">
        Cover Letter / Why do you want to join Raj Elevators?
        <textarea placeholder="Write your message here..."/>
      </label>
      <button>
        {sent?'Application Submitted ✓':'Submit Application'}
      </button>
    </form>
  </section>
</>
)}
