import PageHero from '../components/PageHero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG,projects} from '../data/siteData.js';
import './Projects.css'
export default function Projects(){return (
<>
  <PageHero image={IMG.project} eyebrow="★ Engineered with Japanese Nidec Precision Controls" title="Our Completed Projects" text="5000+ successful installations across India. Building ultra-reliable, safe and whisper-quiet vertical mobility solutions for premier infrastructure."/>
  <section className="projectsPage">
    <h2>
      All Projects
    </h2>
    <div className="projectGrid">
      {projects.map(p=>
      <ProjectCard key={p.name} project={p}/>
      )}
    </div>
  </section>
  <section className="projectStats">
    {[['500+','Commercial Installations'],['3000+','Residential Installations'],['200+','Industrial Installations']].map(([a,b])=>
    <article key={b}>
      <b>
        {a}
      </b>
      <h3>
        {b}
      </h3>
      <p>
        Built for demanding environments and long-term performance.
      </p>
    </article>
    )}
  </section>
  <CTASection/>
</>
)}
