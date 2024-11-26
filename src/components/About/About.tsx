import { Container } from "./styles";
import ilyas from "../../assets/IlyasAlla.gif";
import python from "../../assets/python-icon.svg";
import azure from "../../assets/azure-icon.svg";
import kubernetes from "../../assets/kubernetes-icon.svg";
import mongodb from "../../assets/mongodb-icon.svg";
import openstack from "../../assets/openstack-icon.svg";
import docker from "../../assets/docker-icon.svg";
import oracle from "../../assets/oracle-icon.svg";
import git from "../../assets/git-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Ilyas, an IT and Cloud technician.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          With a solid background in cloud computing, systems administration, and virtualization, I have developed strong technical expertise. My skills include managing virtualized infrastructures and cloud computing environments. I am proficient in applications security and hacking techniques. 
          I am well-equipped to assist companies in transitioning to modern cloud solutions, optimizing their IT infrastructures.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            So if you're in need of any IT service or consulting, I'd love to chat and see how I can help.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="Python" />
              <div className="tooltip">Python</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={azure} alt="Azure" />
              <div className="tooltip">Azure</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={openstack} alt="Openstack" />
              <div className="tooltip">OpenStack</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={oracle} alt="Oracle" />
              <div className="tooltip">Oracle</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mongodb} alt="MongoDB" />
              <div className="tooltip">MongoDB</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={docker} alt="Docker" />
              <div className="tooltip">Docker</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={kubernetes} alt="" />
              <div className="tooltip">kubernetes</div>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={git} alt="git" />
              <div className="tooltip">Git</div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={ilyas} alt="Ilyas Alla" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
