import { Link } from "react-router-dom"

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div>
        <p className="project-category">
          {project.category}
        </p>

        <h3>{project.title}</h3>

        <p>{project.shortDescription}</p>

        {project.confidential && (
          <p className="confidential-note">
            Modified for confidentiality.
          </p>
        )}
      </div>

      <div className="project-card-footer">
        <div className="tech-list">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <Link to={`/projects/${project.id}`}>
          View Project →
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard