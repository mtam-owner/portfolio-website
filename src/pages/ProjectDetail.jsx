import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"

function getAssetPath(path) {
  if (!path) return ""

  if (path.startsWith("http")) {
    return path
  }

  return `${import.meta.env.BASE_URL}${path}`
}

function ProjectDetail() {
  const { projectId } = useParams()

  const project = projects.find(
    (project) => project.id === projectId
  )

  if (!project) {
    return (
      <main>
        <section className="page-hero">
          <h1>Project Not Found</h1>

          <Link to="/projects">
            Back to Projects
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="page-hero">
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>

        <p className="eyebrow">
          {project.category}
        </p>

        <h1>{project.title}</h1>

        <p>{project.shortDescription}</p>

        {project.confidential && (
          <div className="notice-box">
            Some details have been modified or omitted due to
            confidentiality requirements.
          </div>
        )}
      </section>

      {project.screenshot && (
        <section className="project-media-section">
          <img
            src={getAssetPath(project.screenshot)}
            alt={`${project.title} preview`}
            className="project-screenshot"
          />
        </section>
      )}

      <section className="detail-grid">
        <div className="case-study-content">
          <h2>Project Context</h2>
          <p>{project.context}</p>

          <h2>Problem / Objective</h2>
          <p>{project.problem}</p>

          <h2>My Contribution</h2>
          <ul>
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Outcome</h2>
          <ul>
            {project.result.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="project-sidebar">
          <h3>Technologies</h3>

          <div className="tech-list">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="project-links">
              <h3>Resources</h3>

              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={getAssetPath(link.url)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </aside>
      </section>
    </main>
  )
}

export default ProjectDetail