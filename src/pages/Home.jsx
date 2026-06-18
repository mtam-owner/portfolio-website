import { Link } from "react-router-dom"

import { profile } from "../data/profile"
import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

function Home() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  )

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">{profile.title}</p>

        <h1>{profile.tagline}</h1>

        <p className="hero-intro">{profile.intro}</p>

        <p className="hero-location">{profile.location}</p>

        <div className="hero-actions">
          <Link to="/projects" className="button primary-button">
            View Projects
          </Link>

          <Link to="/resume" className="button secondary-button">
            Download Resume
          </Link>
        </div>
      </section>

      <section className="stats-grid">
        {profile.stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <section>
        <p className="eyebrow">Featured Work</p>

        <h2>Selected Projects</h2>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <Link to="/projects">
          View All Projects →
        </Link>
      </section>

      <section className="about-preview">
        <p className="eyebrow">About Me</p>

        <h2>A little bit about me</h2>

        <p>
          I started my analytics career early and have worked across
          marketing, sales, operations and management reporting. I enjoy
          building clean datasets, practical dashboards and analytical
          solutions that connect business problems with better decisions.
        </p>

        <Link to="/about">
          More About Me →
        </Link>
      </section>
    </main>
  )
}

export default Home