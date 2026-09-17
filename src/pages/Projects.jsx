import PageHero from '../components/PageHero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG,projects} from '../data/siteData.js';
import './Projects.css';

// import artePlus from "../assets/images/project/arte.jpg";
// import transitCityTower from "../assets/images/project/transitCityToter.jpg";
// import MacMillanBuilding from "../assets/images/project/MacMillanBuilding.jpg";

// import arteMk from "../assets/images/project/arteMk.jpg";
// import sanFrancisco from "../assets/images/project/sanFrancisco.jpg";
// import sCOPear from "../assets/images/project/sCOPear.jpg";

// import riseTower from "../assets/images/project/riseTower.jpg";
// import afganistan from "../assets/images/project/afganistan.jpg";
// import torre from "../assets/images/project/torre.jpg"



export default function Projects(){
  return (
<>
  
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
  {/* <div className="rajProjectHeader">
    <div className="rajProjectHeaderPill">
      <h1>All Projects</h1>
    </div>
  </div> */}


{/* ------------------------------------------ Coming Soon----------------------------------- */}

<div className="rajProjectGridUpdated">
  <div className="comingSoonContent">
    <span className="comingSoonBadge">Projects</span>
    <h2>Coming Soon</h2>
    <p>
      Exciting new projects are on the way. Stay tuned for updates.
    </p>
  </div>
</div>



{/* ---------------------------------- Coming Soon-------------------------------------- */}


  {/* <div className="rajProjectGrid"> */}

    {/* Project 1 */}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src={artePlus}
          alt="artePlus"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Residential Development</span>
          <span className="rajProjectYear">Year: 2025</span>
        </div>

        <h2 className="rajProjectTitle">
         Arte Plus
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

          Malaysia
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 5.0 m/s
        </div>
      </div>
    </article> */}


    {/* Project 2 */}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src= {transitCityTower}
          alt="transitCityTower"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">High-Rise Residential</span>
          <span className="rajProjectYear">Year: 2024</span>
        </div>

        <h2 className="rajProjectTitle">
          Transit City Tower
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
          Canada
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 7.0 m/s
        </div>
      </div>
    </article> */}


    {/* Project 3 */}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src={MacMillanBuilding}
          alt="MacMillanBuilding"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Corporate Landmark</span>
          <span className="rajProjectYear">Year: 2025</span>
        </div>

        <h2 className="rajProjectTitle">
          MacMillan Building
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
          New York, USA
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 5.0 m/s
        </div>
      </div>
    </article> */}


    {/* Project 4 */}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src={arteMk}
          alt="arteMk"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Luxury Residence</span>
          <span className="rajProjectYear">Year: 2024</span>
        </div>

        <h2 className="rajProjectTitle">
          Arte MK
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
          Kuala Lumpur, Malaysia
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 5.0 m/s
        </div>
      </div>
    </article> */}


    {/* Project 5 */}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src={sanFrancisco}
          alt="sanFrancisco"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Commercial Landmark</span>
          <span className="rajProjectYear">Year: 2023</span>
        </div>

        <h2 className="rajProjectTitle">
          50 San Francisco
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
          California, USA
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 4.0 m/s
        </div>
      </div>
    </article> */}


    {/* Project 6 */}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src={sCOPear}
          alt="sCOPear"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Exhibition Center</span>
          <span className="rajProjectYear">Year: 2025</span>
        </div>

        <h2 className="rajProjectTitle">
          SCO Pearl International Expo Center
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
          China
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 1.5 m/s
        </div>
      </div>
    </article> */}
  {/* ------------------------------------ NEW ------------------------------------------------------------- */}

    {/* Project 7*/}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src={riseTower}
          alt="riseTower"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Iconic Tower</span>
          <span className="rajProjectYear">Year: 2025</span>
        </div>

        <h2 className="rajProjectTitle">
         Rise Tower
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

          Mexico
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 8.0 m/s
        </div>
      </div>
    </article> */}


    {/* Project 8 */}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src= {afganistan}
          alt="afganistan"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Diplomatic Facility</span>
          <span className="rajProjectYear">Year: 2024</span>
        </div>

        <h2 className="rajProjectTitle">
          Afghanistan American Embassy
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
          Afghanistan
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 2.5 m/s
        </div>
      </div>
    </article> */}


    {/* Project 9 */}
    {/* <article className="rajProjectCard">
      <div className="rajProjectImageWrap">
        <img
          className="rajProjectImage"
          src= {torre}
          alt="torre"
        />
      </div>

      <div className="rajProjectBody">
        <div className="rajProjectMeta">
          <span className="rajProjectBadge">Commercial Landmark</span>
          <span className="rajProjectYear">Year: 2025</span>
        </div>

        <h2 className="rajProjectTitle">
          T.OP (Torre Obispado)
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
          Mexico
        </div>

        <hr className="rajProjectDivider" />

        <div className="rajProjectUnits">
          Speed : 7.0 m/s
        </div>
      </div>
    </article> */}




  {/* </div> */}
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
