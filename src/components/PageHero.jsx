import './PageHero.css'
export default function PageHero({eyebrow,title,text,image}){return (
<section className="pageHero" style={{'--hero-image':`url(${image})`}}>
  <div className="pageHeroInner">
    {eyebrow&&
    <span>
      {eyebrow}
    </span>
    }
    <h1>
      {title}
    </h1>
    <p>
      {text}
    </p>
  </div>
</section>
)}
