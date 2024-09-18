import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/dxrk09/Vidly-00" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Movie Database App </h3>
              <p>
              Website allows users to create movie listings. Users are able to update a movies, like, and even search for a movie. Only logged in users are able to make any changes to the movies.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/dxrk09/DiscordBot_SlashBadge" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Discord Bot Slash Badge</h3>
              <p> A mini-project allows discord users to get the developer badge and to imigrate the slash command badge on their bot to meet the discord devs criteria. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Python</li> <li>Git Bash</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/dxrk09/Ethical-Hacking" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Ethical Hacking</h3>
              <p>A repository dedicated to edcuate the basic things that you might focus on for en ETH path (Still on progress).</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}