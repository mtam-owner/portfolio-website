function Resume() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Resume</p>

        <h1>Experience across analytics, reporting and business problem solving.</h1>

        <p>
          A concise overview of my professional experience, education and
          technical skill set.
        </p>

        <a
          href="/portfolio-website/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="button primary-button"
        >
          Download Resume
        </a>
      </section>

      <section className="content-section">
        <h2>Professional Summary</h2>

        <p>
          Data Analyst with 2.5+ years of experience in Melbourne's travel
          industry, supporting sales, marketing, operations and management teams
          through reporting automation, customer data consolidation, dashboard
          development and business analytics.
        </p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>

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
              Consolidated fragmented customer data into a more reliable
              analytics-ready environment.
            </li>
            <li>
              Developed dashboards and reporting workflows to improve visibility
              and reduce manual reporting effort.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>

        <div className="resume-item">
          <h3>Master of Business Analytics</h3>
          <p>Deakin University · Expected 2026</p>
        </div>

        <div className="resume-item">
          <h3>Bachelor of Business Information Systems</h3>
          <p>Swinburne University of Technology</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div>
            <h3>Analytics</h3>
            <p>SQL, Python, Power BI, Excel, Data Validation</p>
          </div>

          <div>
            <h3>Data & Reporting</h3>
            <p>Data Modelling, Reporting Automation, Data Governance</p>
          </div>

          <div>
            <h3>Tools</h3>
            <p>Databricks, DBeaver, Looker Studio, RapidMiner, HubSpot</p>
          </div>

          <div>
            <h3>Languages</h3>
            <p>Vietnamese, English, Mandarin</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resume