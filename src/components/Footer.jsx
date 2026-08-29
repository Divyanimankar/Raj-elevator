import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-main">RAJ</span>
            <span className="logo-sub">ELEVATORS</span>
          </div>

          <p>
            Partnered with Nidec (Japan). Designing, manufacturing,
            and servicing smart vertical transit infrastructure across India.
          </p>
        </div>


        {/* Elevators */}
        <div className="footer-col">
          <h4>Elevators</h4>

          <ul>
            <li>
              <Link to="/passenger-elevators">
                Passenger Elevators
              </Link>
            </li>

            <li>
              <Link to="/freight-elevators">
                Freight Elevators
              </Link>
            </li>

            <li>
              <Link to="/high-speed-elevator">
                High Speed Elevator
              </Link>
            </li>

            <li>
              <Link to="/panoramic-elevator">
                Panoramic Elevator
              </Link>
            </li>

            <li>
              <Link to="/hospital-elevator">
                Hospital Elevator
              </Link>
            </li>
          </ul>
        </div>


        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/projects">
                Project
              </Link>
            </li>

            <li>
              <Link to="/career">
                Career
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>


        {/* Headquarters */}
        <div className="footer-col footer-headquarters">
          <h4>Headquarters</h4>

          <div className="hq-item">

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <span>
              Plot 14, Industrial Area Phase II, Mumbai,
              Maharashtra 400011
            </span>

          </div>


          <div className="hq-item">

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            <span>
              +91-22-56789012
            </span>

          </div>


          <div className="hq-item">

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>

            <span>
              info@rajelevators.com
            </span>

          </div>

        </div>

      </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Raj Elevators Private Limited. All Rights Reserved.
        </p>

        <div className="footer-links">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms &amp; Conditions
          </Link>

          <Link to="/sitemap">
            Sitemap
          </Link>

        </div>

      </div>

    </footer>
  )
}