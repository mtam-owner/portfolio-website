function Resume() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Resume</p>

        <h1>Experience across analytics, consulting and business intelligence.</h1>

        <p>
          A concise overview of my professional experience, education and
          technical skill set.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="button primary-button"
        >
          Download CV
        </a>
      </section>

      <section className="content-section">
        <h2>Professional Summary</h2>

        <p>
          Data Analyst and Consultant with 3 years of experience delivering
          business intelligence platforms, analytics solutions and AI-enabled
          reporting across customer analytics, marketing, operations and
          commercial decision-making. Experienced in designing data models,
          automating reporting workflows and transforming complex data into
          practical business insights.
        </p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="resume-item">
          <h3>Consultant</h3>
          <p>Melbourne, Australia</p>
          <p>Current</p>

          <ul>
            <li>
              Deliver consulting work across data, analytics and business
              reporting.
            </li>
            <li>
              Translate business requirements into practical analytical
              solutions.
            </li>
            <li>
              Support reporting, data management and business intelligence
              solutions for organisational decision-making.
            </li>
            <li>
              Collaborate with stakeholders to understand business processes and
              improve data-driven operations.
            </li>
          </ul>
        </div>

        <div className="resume-item">
          <h3>Data Analyst</h3>
          <p>Global Travel Xperts / Gaura Travel · Melbourne</p>
          <p>Aug 2023 – Jan 2026</p>

          <ul>
            <li>
              Built reporting and analytics solutions across sales, marketing,
              operations and management.
            </li>
            <li>
              Designed customer, marketing and sales data models to improve
              reporting reliability and business visibility.
            </li>
            <li>
              Developed web-based reporting platforms, automated reporting
              workflows and AI-assisted business summaries.
            </li>
            <li>
              Consolidated fragmented customer, sales and activity data into
              structured analytics-ready environments.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>

        <div className="resume-item">
          <h3>Master of Business Analytics</h3>
          <p>Deakin University · Expected 2026</p>

          <ul>
            <li>
              Accelerated a two-year program into one year through an approved
              fast-track pathway.
            </li>
          </ul>
        </div>

        <div className="resume-item">
          <h3>Bachelor of Business Information Systems</h3>
          <p>Swinburne University of Technology</p>

          <ul>
            <li>
              Awarded the 50% Academic Excellence Scholarship.
            </li>
            <li>
              Member of Alpha Beta Psi.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div>
            <h3>Programming</h3>
            <p>SQL, Python</p>
          </div>

          <div>
            <h3>Business Intelligence</h3>
            <p>Power BI, DAX, DAX Studio, Looker Studio</p>
          </div>

          <div>
            <h3>Data</h3>
            <p>Data Modelling, ETL, Data Validation, Data Governance</p>
          </div>

          <div>
            <h3>Analytics</h3>
            <p>
              Customer Analytics, Marketing Analytics, Business Intelligence,
              Predictive Analytics
            </p>
          </div>

          <div>
            <h3>Tools</h3>
            <p>Excel, Databricks, DBeaver, HubSpot, RapidMiner, DashboardFox</p>
          </div>

          <div>
            <h3>Other</h3>
            <p>Git, GitHub, Streamlit, PHP</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resume