"use client";
import Heading1 from "./components/Heading-1";
import Heading2 from "./components/Heading-2";
import Heading3 from "./components/Heading-3";
import Proficiency from "./components/Proficiency";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@nextui-org/drawer";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Chip } from "@nextui-org/chip";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-8">
          <Heading1 text="About" />
          <Heading2 text="Introduction" />
          <p className="mb-4">
            Hi! I&apos;m a <strong>full-stack developer</strong> with over a
            decade of experience building web applications. During my time at
            Fujifilm, where I currently work, I pursued and completed a{" "}
            <strong>BA in Computer Science</strong>, graduating{" "}
            <strong>summa cum laude</strong>.
          </p>
          <Link className="mb-4 cursor-pointer" onPress={onOpen} showAnchorIcon>
            Learn more about my current role at Fujifilm{" "}
          </Link>
          <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
              {(onClose) => (
                <>
                  <DrawerHeader className="flex flex-col gap-1">
                    Fujifilm Holdings America Corporation
                  </DrawerHeader>
                  <DrawerBody>
                    <Heading3 text="Overview" />
                    <p className="mb-4">
                      At Fujifilm, I manage web services for businesses across
                      the Americas. My role involves processing website
                      management updates and other stakeholder requests.
                      Specifically, I oversee 4 Drupal sites and around 18
                      WordPress sites.
                    </p>
                    <Heading3 text="Website Management Updates" />
                    <p className="mb-4">
                      I handle bi-weekly website management update reports
                      spanning four regional sites that utilize a headless
                      Drupal CMS. These updates involve managing content for
                      dozens of consumer, business, and healthcare products. My
                      responsibilities include collaborating with stakeholders
                      and our contractor to draft, approve, and translate the
                      updates.
                    </p>
                    <Heading3 text="Subsidiary Sites" />
                    <p className="mb-4">
                      I also process stakeholder requests from 18 subsidiary
                      sites built in WordPress. I delegate content management
                      tasks to our contractor. Most of the subsidiary sites are
                      managed by external agencies whom I work with to maintain
                      and improve the sites.
                    </p>
                    <Heading3 text="Project Management" />
                    <p className="mb-4">
                      After taking a Software Engineering course, I began to
                      employ <strong>Kanban methodologies</strong> to track
                      projects and assign tasks to our contractor. Each project
                      progresses through defined phases: intake, in progress,
                      review, translation, and scheduling. This approach
                      optimizes efficiency, transparency, and allows us to
                      quickly respond to emerging projects.
                    </p>

                    <Heading3 text="Cross Functional Collaboration" />
                    <p className="mb-4">
                      My work demands extensive cross-functional coordination.
                      Some of the teams I collaborate with include:
                    </p>
                    <ul className="mb-4 list-disc pl-5 flex flex-col gap-2">
                      <li>
                        <strong>Marketing:</strong> to handle product updates
                        and create landing pages.
                      </li>
                      <li>
                        <strong>IT:</strong> for server management tasks related
                        to our in-house WordPress server (such as migrating
                        websites, setting up redirects, and relaying DNS
                        updates).
                      </li>
                      <li>
                        <strong>Legal:</strong> to implement cookie consent
                        solutions and update legal documents.
                      </li>
                      <li>
                        <strong>Press Teams:</strong> to draft, review, and
                        schedule press releases.
                      </li>
                    </ul>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button color="primary" onPress={onClose}>
                      Close
                    </Button>
                  </DrawerFooter>
                </>
              )}
            </DrawerContent>
          </Drawer>
        </div>
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading2 text="Interests" />
          <p className="mb-4">
            Beyond work, I&apos;ve hosted multisite WordPress on a Raspberry Pi,
            which has benefited my current role. That experience has allowed me
            to manage our in-house WordPress server at Fujifilm.
          </p>
          <p className="mb-4">
            More recently, I attended a React conference on behalf of Fujifilm
            and I&apos;ve been diving into React and Next.js. I&apos;m
            particularly excited about the component-based architecture and the
            efficiency it brings compared to monolithic systems like WordPress
            or older libraries like jQuery.
          </p>
        </div>
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading2 text="Proficiencies" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Proficiency
              heading="React + Next.js"
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
              icon={faGithub}
            />
            <Proficiency
              heading="Databases"
              text="Skilled in designing and managing relational databases with MySQL and other SQL-based systems. Focused on optimizing queries, ensuring data integrity, and managing migrations."
              icon={faDatabase}
            />
          </div>
        </div>
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-24">
          <Heading2 text="Additional Skills" />
          <div className="flex gap-2 flex-wrap">
            <Chip color="primary">PHP Development</Chip>
            <Chip color="primary">API integration</Chip>
            <Chip color="primary">Express JS</Chip>
            <Chip color="primary">SASS</Chip>
            <Chip color="primary">Less</Chip>
            <Chip color="primary">Bootstrap</Chip>
            <Chip color="primary">Page Speed Optimization</Chip>
            <Chip color="primary">Search Engine Optimization</Chip>
            <Chip color="primary">Responsive Web Development</Chip>
            <Chip color="primary">Google Tag Manager Implementation</Chip>
          </div>
        </div>
      </main>
      <footer className="text-center bg-content1 p-5">
        Marcel M 2025&copy;
      </footer>
    </div>
  );
}
