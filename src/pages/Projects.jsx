function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built using React showcasing my skills, education, and projects.",
      tech: "React, CSS",
    },
    {
      title: "Weather App",
      description:
        "Displays real-time weather information using a weather API with a clean user interface.",
      tech: "React, JavaScript, API",
    },
    {
      title: "Student Management System",
      description:
        "A web application to manage student records with CRUD operations.",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <main>
      <section id="projects">
        <h2>My Projects</h2>
        <p>
          Here are some of the projects I have developed during my learning
          journey.
        </p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;