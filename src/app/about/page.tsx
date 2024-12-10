import Heading1 from "../components/Heading-1";
import Heading2 from "../components/Heading-2";
import Proficiency from "../components/Proficiency";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
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
      </main>
      <footer className=""></footer>
    </div>
  );
}
