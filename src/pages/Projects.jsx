import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

function Projects() {
  const professionalProjects = projects.filter(
    (project) => project.category === "professional"
  )

  const personalProjects = projects.filter(
    (project) => project.category === "personal"
  )

  const academicProjects = projects.filter(
    (project) => project.category === "academic"
  )

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Portfolio</p>

        <h1>Projects</h1>

        <p>
          A collection of professional, academic and personal projects
          demonstrating my experience in analytics, reporting, data engineering
          and business problem solving.
        </p>
      </section>

      <section>
        <p className="eyebrow">Professional</p>

        <h2>Professional Experience</h2>

        <p className="section-intro">
          Projects delivered during previous professional roles. Due to
          confidentiality requirements, some datasets, screenshots and
          implementation details have been modified or omitted.
        </p>

        <div className="project-grid">
          {professionalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <section>
        <p className="eyebrow">Personal</p>

        <h2>Personal Projects</h2>

        <p className="section-intro">
          Projects built independently to explore new ideas, technologies and
          analytical approaches.
        </p>

        <div className="project-grid">
          {personalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <section>
        <p className="eyebrow">Academic</p>

        <h2>Academic Projects</h2>

        <p className="section-intro">
          Selected university projects demonstrating data modelling, analytics,
          simulation and governance capabilities.
        </p>

        <div className="project-grid">
          {academicProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects