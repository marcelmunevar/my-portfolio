import Heading1 from "./components/Heading-1";
import Heading2 from "./components/Heading-2";
import Proficiency from "./components/Proficiency";
import ResumeItem from "./components/ResumeItem";
import Navigation from "./components/Navigation";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Heading3 from "./components/Heading-3";

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <main className="my-4">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading1 text="About" id="about" />
          <p className="mb-4">
            Hi! I'm a full-stack developer and computer science graduate (Summa
            Cum Laude!) with over a decade of experience building web
            applications and dynamic CMS solutions. Currently, as a Full-Stack
            Marketing Developer at Fujifilm, I deliver web services for
            businesses across the Americas, managing Drupal and WordPress sites.
          </p>
          <p className="mb-4">
            My expertise spans technologies like React, TypeScript, Tailwind
            CSS, PHP, and MySQL. Whether designing scalable front-end interfaces
            or engineering functional solutions, I focus on creating
            user-centered experiences. This portfolio highlights my journey,
            showcasing the skills and projects that define my passion for
            development.
          </p>
        </div>

        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading2 text="Proficiencies" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Proficiency
              heading="Modern Web Apps"
              text="I build scalable web applications with React, leveraging Tailwind
            CSS for responsive, efficient styling and TypeScript for enhanced
            code quality and scalability."
              icon={faReact}
            />
            <Proficiency
              heading="WordPress Sites"
              text="Experienced in building and maintaining custom WordPress websites. I focus on theme development, performance 
              optimization, and SEO best practices."
              icon={faWordpress}
            />
            <Proficiency
              heading="Github Repositories"
              text="Adept in using GitHub for version control and managing code repositories. Proficient in branching, merging, and pull requests to streamline development workflows."
              icon={faGit}
            />
            <Proficiency
              heading="Databases"
              text="Skilled in designing and managing relational databases with MySQL and other SQL-based systems. Focused on optimizing queries, ensuring data integrity, and managing migrations."
              icon={faDatabase}
            />
          </div>
        </div>
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading1 text="Resume" id="resume" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Heading3 icon={faBriefcase} text="Experience" />
              <ResumeItem
                date="2018 - Present"
                title="Full-Stack Marketing Developer"
                institution="FUJIFILM Holdings America Corporation"
              />
              <ResumeItem
                date="2016 - 2018"
                title="Full-Stack Web Developer"
                institution="BMG Creative & Brandstar"
              />
              <ResumeItem
                date="2015 - 2016"
                title="Front-End Web Developer"
                institution="Nova Southeastern University"
              />
              <ResumeItem
                date="2013 - 2015"
                title="Ecommerce Front-End Web Developer"
                institution="Morris4x4Center"
              />
              <ResumeItem
                date="2011 - 2013"
                title="Front-End Developer"
                institution="plantANT"
              />
            </div>
            <div>
              <Heading3 icon={faGraduationCap} text="Education" />
              <ResumeItem
                date="2024"
                title="B.A. in Computer Science"
                distinction="Summa Cum Laude"
                institution="Florida International University"
              />
              <ResumeItem
                date="2007"
                title="Associate of Arts (A.A.)"
                institution="Florida International University"
              />
              <Heading3 icon={faUsers} text="Conferences" />
              <ResumeItem date="2024" title="React Summit" institution="NYC" />
            </div>
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
