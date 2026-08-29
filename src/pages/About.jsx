import PageHero from '../components/PageHero.jsx';
import CTASection from '../components/CTASection.jsx';
import {IMG} from '../data/siteData.js';
import './About.css'
const journey=[['1998','Founded'],['2005','ISO Certified'],['2010','1000th Lift'],['2015','Nidec Alliance'],['2020','5000+ Installs'],['2024','Pan-India Presence']]
export default function About(){return (
<>
  <PageHero image={IMG.factory} eyebrow="★ An ISO 9001:2015 Certified Vertical Transit Leader" title="About Raj Elevators" text="Elevating vertical mobility with 25+ years of Japanese-backed mechanical engineering excellence and zero-compromise safety."/>
  <section className="aboutStory">
    <img src={IMG.factory} alt=""/>
    <div>
      <span>
        OUR STORY
      </span>
      <h2>
        Crafting Safe Transit Since 1998
      </h2>
      <p>
        Founded in Pune as a specialized technical workshop, Raj Elevators has spent decades pioneering safe and efficient vertical transport. Today, our engineering combines Indian execution strength with Japanese Nidec precision.
      </p>
      <div className="storyStats">
        <article>
          <b>
            5000+
          </b>
          <small>
            Successful Installations
          </small>
        </article>
        <article>
          <b>
            100%
          </b>
          <small>
            Clean Safety Focus
          </small>
        </article>
      </div>
    </div>
  </section>
  <section className="visionMission">
    <div>
      <article>
        <i>
          ◉
        </i>
        <h3>
          Our Vision
        </h3>
        <p>
          To be India's most trusted and technologically advanced vertical transportation partner.
        </p>
      </article>
      <article>
        <i>◎</i>
        <h3>Our Mission</h3>
        <p>Delivering world-class, ISO-compliant elevator systems backed by strict quality and service standards.</p>
        </article>
        </div>
        </section>
        <section className="journey">
          <h2>Our Journey Over the Decades</h2>
          <div className="journeyRoad">
            {journey.map(([year,title],i)=><article key={year}><b>{year}</b>
            <h3>{title}</h3>
              <p>Milestone engineering progress and stronger national capability.</p>
              <span>{i+1}</span>
              </article>)}
              </div>
              </section>
              <section className="factoryBanner" style={{backgroundImage:`linear-gradient(rgba(17,38,58,.76),rgba(17,38,58,.76)),url(${IMG.factory})`}}>
                <span>THE MANUFACTURING CORE</span>
                <h2>50,000 Sq Ft Precision Factory</h2>
                <p>Advanced production, CNC engineering and rigorous testing help every Raj Elevator meet demanding safety and reliability standards.</p></section><CTASection/></>)}
