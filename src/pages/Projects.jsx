import PageHero from '../components/PageHero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG,projects} from '../data/siteData.js';
import './Projects.css'
export default function Projects(){return (
<>
  {/* <PageHero image={IMG.project} eyebrow="★ Engineered with Japanese Nidec Precision Controls" title="Our Completed Projects" text="5000+ successful installations across India. Building ultra-reliable, safe and whisper-quiet vertical mobility solutions for premier infrastructure."/> */}
  

  {/* -------------------------- First Section ----------------------------------- */}
  <section className="projectHero">

  <div className="projectHeroContent">

    <div className="projectHeroBadge">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="12 2 15 9 22 9.5 16.5 14.5 18 22 12 18 6 22 7.5 14.5 2 9.5 9 9" />
      </svg>

      Engineered with Japanese Nidec Precision Controls
    </div>

    <h1 className="projectHeroTitle">
      Our Completed Projects
    </h1>

    <p className="projectHeroSubtitle">
      5000+ successful installations across India. Building ultra-reliable,
      safe, and whisper-quiet vertical mobility solutions for premier infrastructure.
    </p>

  </div>

</section>
  {/* ------------------------------ Second Section ----------------------------- */}
 <section className="rajProjectSection">
  <div className="rajProjectHeader">
    <div className="rajProjectHeaderPill">
      <h1>All Projects</h1>
    </div>
  </div>

  <div className="rajProjectGrid">

    {/* Project 1 */}
    <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
          alt="Oberoi Mall Mumbai"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Commercial</span>
          <span className="rajProjectYear">Year: 2025</span>
        </div>

        <h2 className="rajProjectTitle">
          Oberoi Mall Mumbai
        </h2>

        <div className="rajProjectLocation">

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 21s7-6.2 7-11A7 7 0 0 0 5 10c0 4.8 7 11 7 11z"
                fill="none"
                stroke="#00A86B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="2.5"
                fill="none"
                stroke="#00A86B"
                stroke-width="2"
              />
            </svg>

          Mumbai, Maharashtra
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          12 Lift Units Installed
        </div>
      </div>
    </article>


    {/* Project 2 */}
    <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
          alt="Max Hospital Delhi"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Hospital</span>
          <span className="rajProjectYear">Year: 2024</span>
        </div>

        <h2 className="rajProjectTitle">
          Max Hospital Delhi
        </h2>

        <div className="rajProjectLocation">
          <svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M12 21s7-6.2 7-11A7 7 0 0 0 5 10c0 4.8 7 11 7 11z"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle
    cx="12"
    cy="10"
    r="2.5"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
  />
</svg>
          New Delhi, NCR
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          8 Lift Units Installed
        </div>
      </div>
    </article>


    {/* Project 3 */}
    <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
          alt="DLF CyberCity"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Commercial</span>
          <span className="rajProjectYear">Year: 2025</span>
        </div>

        <h2 className="rajProjectTitle">
          DLF CyberCity
        </h2>

        <div className="rajProjectLocation">
         <svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M12 21s7-6.2 7-11A7 7 0 0 0 5 10c0 4.8 7 11 7 11z"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle
    cx="12"
    cy="10"
    r="2.5"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
  />
</svg>
          Gurgaon, Haryana
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          24 Lift Units Installed
        </div>
      </div>
    </article>


    {/* Project 4 */}
    <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop"
          alt="Lodha World Towers"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Residential</span>
          <span className="rajProjectYear">Year: 2024</span>
        </div>

        <h2 className="rajProjectTitle">
          Lodha World Towers
        </h2>

        <div className="rajProjectLocation">
         <svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M12 21s7-6.2 7-11A7 7 0 0 0 5 10c0 4.8 7 11 7 11z"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle
    cx="12"
    cy="10"
    r="2.5"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
  />
</svg>
          Mumbai, Maharashtra
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          18 Lift Units Installed
        </div>
      </div>
    </article>


    {/* Project 5 */}
    <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
          alt="ITC Grand Chola"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Hospitality</span>
          <span className="rajProjectYear">Year: 2023</span>
        </div>

        <h2 className="rajProjectTitle">
          ITC Grand Chola
        </h2>

        <div className="rajProjectLocation">
          <svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M12 21s7-6.2 7-11A7 7 0 0 0 5 10c0 4.8 7 11 7 11z"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle
    cx="12"
    cy="10"
    r="2.5"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
  />
</svg>
          Chennai, Tamil Nadu
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          10 Lift Units Installed
        </div>
      </div>
    </article>


    {/* Project 6 */}
    <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop"
          alt="Tata Steel Plant"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Industrial</span>
          <span className="rajProjectYear">Year: 2025</span>
        </div>

        <h2 className="rajProjectTitle">
          Tata Steel Plant
        </h2>

        <div className="rajProjectLocation">
         <svg viewBox="0 0 24 24" aria-hidden="true">
  <path
    d="M12 21s7-6.2 7-11A7 7 0 0 0 5 10c0 4.8 7 11 7 11z"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle
    cx="12"
    cy="10"
    r="2.5"
    fill="none"
    stroke="#00A86B"
    stroke-width="2"
  />
</svg>
          Jamshedpur, Jharkhand
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          6 Lift Units Installed
        </div>
      </div>
    </article>

  </div>
</section>

  {/* ---------------------------------- Third Section------------------------------ */}
<div className="stats-grid">

  <div className="stat-card">
    <div className="stat-card__top">
      <div className="stat-card__number">500+</div>

      <div className="stat-card__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
    </div>

    <div className="stat-card__title">
      Commercial Installations
    </div>

    <div className="stat-card__description">
      Corporate business parks, premier shopping malls, and IT complexes.
    </div>
  </div>


  <div className="stat-card">
    <div className="stat-card__top">
      <div className="stat-card__number">3000+</div>

      <div className="stat-card__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
    </div>

    <div className="stat-card__title">
      Residential Installations
    </div>

    <div className="stat-card__description">
      High-rise apartments, luxury villas, and smart township projects.
    </div>
  </div>


  <div className="stat-card">
    <div className="stat-card__top">
      <div className="stat-card__number">200+</div>

      <div className="stat-card__icon">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
    </div>

    <div className="stat-card__title">
      Industrial Installations
    </div>

    <div className="stat-card__description">
      Heavy duty freight and factories with custom load capacities.
    </div>
  </div>

</div>

  {/* --------------------------------- Fourth Section ------------------------------ */}
  <CTASection/>
</>
)}
