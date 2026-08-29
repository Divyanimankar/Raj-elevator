import './JobCard.css';
export default function JobCard({job}){return (
<article className="jobCard">
  <div>
    <span>
      {job.type}
    </span>
    <small>
      {job.dept}
    </small>
    <h3>
      {job.title}
    </h3>
    <p>
      ⌖ {job.location}
    </p>
  </div>
  <a href="#apply">
    Apply Now
  </a>
</article>
)}
