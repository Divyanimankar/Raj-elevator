import './ProjectCard.css'
export default function ProjectCard({project}){return (
<article className="projectCard">
  <img src={project.image} alt=""/>
  <div>
    <div className="projectMeta">
      <b>
        {project.type}
      </b>
      <span>
        Year: {project.year}
      </span>
    </div>
    <h3>
      {project.name}
    </h3>
    <p>
      ⌖ {project.location}
    </p>
    <hr/>
    <small>
      {project.units}
    </small>
  </div>
</article>
)}
