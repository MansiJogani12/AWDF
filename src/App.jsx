import { projects } from './data/projects'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main>
        <section>
          <h2>Hi, I’m Mansi Jogani</h2>
          <p>Welcome to my portfolio website built with React.</p>
        </section>

        <About />

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <Skills />

        <section>
          <h2>Contact</h2>
        </section>
      </main>
      <Footer />
    </div>
  )
}
