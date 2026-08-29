import { Link } from 'react-router-dom'
import './NotFound.css'
export default function NotFound() {
return (
<section className="notFound">
  <p>
    404
  </p>
  <h1>
    Page Not Found
  </h1>
  <span>
    The page you requested does not exist.
  </span>
  <Link to="/">
    Back to Home
  </Link>
</section>
)
}
