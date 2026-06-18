import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h3>Andrea Dang</h3>

          <p>
            Data Analyst
          </p>

          <p>
            Melbourne, Australia
          </p>
        </div>

        <div>
          <h4>Navigation</h4>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/resume">Resume</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Connect</h4>

          <ul>
            <li>
              <a
                href="mailto:dang.minhtamforwork@gmail.com"
              >
                Email
              </a>
            </li>

            <li>
              <a
                href="https://github.com/mtam-owner"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/minh-tam-dang-609516245/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Andrea Dang
        </p>
      </div>
    </footer>
  )
}

export default Footer