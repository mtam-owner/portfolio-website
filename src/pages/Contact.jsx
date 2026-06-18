function Contact() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>

        <h1>Let's connect.</h1>

        <p>
          Whether you're interested in analytics, business intelligence,
          reporting solutions or simply want to connect, I'd be happy to hear
          from you.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h2>Email</h2>

          <p>
            For opportunities, networking or general enquiries.
          </p>

          <a href="mailto:dang.minhtamforwork@gmail.com">
            dang.minhtamforwork@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h2>LinkedIn</h2>

          <p>
            Connect with me professionally and follow my career journey.
          </p>

          <a
            href="https://www.linkedin.com/in/minh-tam-dang-609516245/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-card">
          <h2>GitHub</h2>

          <p>
            Explore the code and documentation behind my public projects.
          </p>

          <a
            href="https://github.com/mtam-owner"
            target="_blank"
            rel="noreferrer"
          >
            github.com/mtam-owner
          </a>
        </div>
      </section>

      <section className="content-section">
        <h2>Areas of Interest</h2>

        <p>
          Data Analytics · Business Intelligence · Analytics Consulting · Data
          Solutions · Reporting Automation · AI Applications for Business
        </p>
      </section>
    </main>
  )
}

export default Contact