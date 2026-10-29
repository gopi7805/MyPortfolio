import './App.css'

const projects = [
  {
    title: 'Food Ordering Processing System',
    type: 'BACKEND PROJECT',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    description:
      'A Java backend application for managing food orders, processing requests, and handling database operations through REST APIs.',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL'],
  },
  {
    title: 'Course Registration System',
    type: 'FULL STACK PROJECT',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
    description:
      'A web application designed to manage course information and student registrations through a frontend interface and backend APIs.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  {
    title: 'Event Ticket Booking System',
    type: 'FULL STACK PROJECT',
    image:
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80',
    description:
      'An event booking application concept for displaying event details and managing ticket booking workflows with backend and database integration.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
]

const skillGroups = [
  {
    title: 'Core Java',
    skills: [
      'OOPs',
      'Collections',
      'Multithreading',
      'Exception Handling',
      'Arrays & Strings',
      'JVM, JRE & JDK',
      'Lambda Expressions',
      'Stream API',
      'JDBC',

    ],
  },
  {
    title: 'Spring & Backend',
    skills: [
      'Spring Core',
      'Spring Boot',
      'REST API',
      'Spring Data JPA',
      'Hibernate',
      'Dependency Injection',
      'CRUD Operations',
    ],
  },
  {
    title: 'Database — MySQL',
    skills: [
      'DDL',
      'DML',
      'DQL',
      'TCL',
      'DCL',
      'Joins',
      'Subqueries',
      'Views',
      'Indexes',
      'Stored Procedures',
      'Functions',
      'Triggers',
      'CTE',
      'Window Functions',
    ],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'IntelliJ IDEA',
      'Eclipse',
      'MySQL Workbench',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Problem Solving',
      'Quick Learning',
      'Analytical Thinking',
      'Adaptability',
      'Teamwork',
      'Communication',
    ],
  },
]

function App() {
  function handleContactSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const name = data.get('name')
    const email = data.get('email')
    const subject = data.get('subject')
    const message = data.get('message')

    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`

    const mailtoLink =
      `mailto:gsgopi7805@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoLink
  }

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">
          GN<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
             Gomathi <span>Nayagam G</span>
            </h1>

            <h2>Java Backend Developer</h2>

            <p className="hero-description">
              I build backend applications using Java, Spring Boot,
              REST APIs and MySQL. I enjoy solving problems and
              developing practical software solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                View Projects
              </a>
              <a href="#contact" className="btn outline-btn">
                Contact Me
              </a>
            </div>

            <div className="tech-line">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>Spring Data JPA</span>
              <span>MySQL</span>
            </div>

          </div>

        </section>

        <section id="about" className="content-section">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>

          <div className="about-content">
            <p>
              I am a B.Tech Information Technology graduate from 2026,
              with a strong interest in Java Backend Development. I
              completed Full Stack Development with Java training at
              Besant Technologies, Velachery.
            </p>

            <p>
              I have learned Core Java, Object-Oriented Programming,
              Spring Boot, REST API development, Spring Data JPA,
              Hibernate and MySQL. I enjoy understanding how backend
              systems work, designing APIs and managing database
              operations.
            </p>

            <p>
              Through practical projects, I aim to strengthen my
              programming skills and develop reliable, maintainable
              applications. I am eager to learn new technologies,
              improve my problem-solving abilities and begin my career
              as a Java Backend Developer.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-number">2026</span>
              <span>B.Tech Graduate</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">Java</span>
              <span>Backend Focus</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">3</span>
              <span>Projects</span>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2>
            Technical <span>Skills</span>
          </h2>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <p className="eyebrow">WHAT I'VE BEEN BUILDING</p>
          <h2>
            My <span>Projects</span>
          </h2>
          <p className="section-description">
            A selection of projects related to backend development,
            database management and full-stack applications.
          </p>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    loading="lazy"
                  />
                  <span className="project-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="project-details">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="project-note">
            Project descriptions and technology lists should reflect
            the features you have actually implemented.
          </p>
        </section>

        <section id="education" className="content-section">
          <p className="eyebrow">MY BACKGROUND</p>
          <h2>
            Education &amp; <span>Training</span>
          </h2>

          <div className="education-grid">

             <article className="education-card">
              <span className="timeline-dot" />
              <p className="project-type">PROFESSIONAL TRAINING</p>
              <h3>Full Stack Development with Java</h3>
              <p>Besant Technologies, Velachery</p>
            </article>

            <article className="education-card">
              <span className="timeline-dot" />
              <p className="project-type">EDUCATION </p>
              <h3>B.Tech — Information Technology</h3>
              <p>MPNMJ Engineering College · Graduate · 2026</p>
            </article>

             <article className="education-card">
              <span className="timeline-dot" />
              <p className="project-type">EDUCATION </p>
              <h3>HIGHER SECONDARY · 12TH</h3>
              <p>HNUC Hr Sec School · 2022</p>
            </article>

             <article className="education-card">
              <span className="timeline-dot" />
              <p className="project-type">EDUCATION </p>
              <h3>SECONDARY · 10TH</h3>
              <p>HNUC Hr Sec School · 2020</p>
            </article>

           

          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="contact-intro">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>
              Let's work <span>together.</span>
            </h2>
            <p>
              I am interested in Java Backend Developer opportunities.
              If you would like to discuss a role, a project or a
              professional opportunity, feel free to contact me.
            </p>

            <div className="contact-links">
              <a href="mailto:gsgopi7805@gmail.com">
                <span>Email</span>
                <strong>gsgopi7805@gmail.com ↗</strong>
              </a>

              <a
                href="https://www.linkedin.com/in/gomathi-nayagam-g/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>View LinkedIn profile ↗</strong>
              </a>

              <a
                href="https://github.com/gopi7805"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <strong>View GitHub profile ↗</strong>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <h3>Send me a message</h3>

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              required
            />

            <button type="submit" className="btn primary-btn">
              Send Message <span aria-hidden="true">→</span>
            </button>

            <p className="form-note">
              Your email application will open with your message
              prepared. You can review it and send it from there.
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          GN<span>.</span>
        </a>
        <p>© 2026 Gomathi Nayagam G· Java Backend Developer</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  )
}

export default App