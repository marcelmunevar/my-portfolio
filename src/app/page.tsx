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
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="">
      <main className="mb-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-8">
          <Heading1 text="About" />
          <Heading2 text="Introduction" />
          <div className="flex flex-col md:flex-row gap-8 items-center mb-4">
            <Card isFooterBlurred>
              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-items-center">
                  <div className="max-w-52 text-center">
                    <Image
                      alt="Picture of the author"
                      className="w-100 mb-1 rounded-xl"
                      src="/marcel.png"
                      width={178}
                      height={173}
                    />
                    <p> Marcel Munevar </p>
                    <p className="text-default-500"> Full-Stack Developer </p>
                    <p className="text-default-500"> Stamford, CT </p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="mb-4">
                      I have{" "}
                      <span className="text-success">
                        over a decade of experience
                      </span>{" "}
                      building web applications. I pursued and completed a{" "}
                      <span className="text-success">
                        BA in Computer Science
                      </span>
                      , graduating{" "}
                      <span className="text-success">Summa Cum Laude</span> in
                      2024. I have hands-on experience working with{" "}
                      <span className="text-success">React and Next.js</span>{" "}
                      and recently attended a{" "}
                      <span className="text-success">React conference</span> to
                      stay current with the latest advancements. I also have an
                      affinity for{" "}
                      <span className="text-success">WordPress websites</span>{" "}
                      with extensive knowledge of{" "}
                      <span className="text-success">LAMP stack</span>. I&apos;m
                      comfortable using{" "}
                      <span className="text-success">Github</span> for version
                      control and cloud-based deployment.
                    </p>
                  </div>
                </div>
              </CardBody>
              <hr />
              <CardFooter>
                <Link
                  className="cursor-pointer"
                  onPress={onOpen}
                  showAnchorIcon
                  color="primary"
                >
                  Learn more about my current role at Fujifilm{" "}
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading2 text="Proficiencies" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Proficiency
              heading="React + Next.js"
              text="I build scalable web applications with React, leveraging Tailwind
            CSS for responsive, efficient styling and TypeScript for enhanced
            code quality and scalability."
              icon={faReact}
              footerText="Visit a code sample on Github."
              footerLink="https://github.com/marcelmunevar/MY-PORTFOLIO"
            />
            <Proficiency
              heading="WordPress Sites"
              text="Experienced in building and maintaining custom WordPress websites. I focus on theme development, performance 
              optimization, and SEO best practices."
              icon={faWordpress}
              footerText="Visit a code sample on Github."
              footerLink="https://github.com/Fujifilm-By-Marcel/fujinon_theme"
            />
            <Proficiency
              heading="MySQL Databases"
              text="Skilled in designing and managing relational databases with MySQL and other SQL-based systems. Focused on optimizing queries, ensuring data integrity, and managing migrations."
              icon={faDatabase}
              footerText="Visit a code sample on Github."
              footerLink="https://github.com/FIU-By-Marcel/RESTAPI"
            />
            <Proficiency
              heading="Github Repositories"
              text="Adept in using GitHub for version control and managing code repositories. Proficient in branching, merging, and pull requests to streamline development workflows."
              icon={faGithub}
              footerText="Visit my Github."
              footerLink="https://github.com/marcelmunevar"
            />
            <Card>
              <CardBody>
                <Heading3 text="Hard Skills" />
                <div className="flex gap-2 flex-wrap">
                  <Chip color="primary">Node</Chip>
                  <Chip color="primary">Express</Chip>
                  <Chip color="primary">PHP</Chip>
                  <Chip color="primary">PostgreSQL</Chip>
                  <Chip color="primary">APIs</Chip>
                  <Chip color="primary">Integrations</Chip>
                  <Chip color="primary">Sass</Chip>
                  <Chip color="primary">Less</Chip>
                  <Chip color="primary">Bootstrap</Chip>
                  <Chip color="primary">Page Speed</Chip>
                  <Chip color="primary">SEO</Chip>
                  <Chip color="primary">Tag Manager</Chip>
                  <Chip color="primary">Analytics</Chip>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Heading3 text="Soft Skills" />
                <div className="flex gap-2 flex-wrap">
                  <Chip color="primary">Agile</Chip>
                  <Chip color="primary">Kanban</Chip>
                  <Chip color="primary">Adaptable</Chip>
                  <Chip color="primary">Communication</Chip>
                  <Chip color="primary">Attention to Detail</Chip>
                  <Chip color="primary">Problem Solving</Chip>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Heading3 text="More" />
                <div className="flex gap-2 flex-wrap">
                  <ul className="list-disc pl-6">
                    <li>Responsive web applications.</li>
                    <li>Object Oriented Programming concepts.</li>
                    <li>Event-based software design.</li>
                    <li>Software Engineering Principles</li>
                    <li>Human Computer Interaction</li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading2 text="Clients" />
          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row gap-4 flex-wrap items-stretch ">
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow flex items-center ">
                  <Image
                    src="/FUJIFILM.jpg"
                    alt="Fujifilm logo"
                    className="m-auto"
                    width={100}
                    height={27}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow flex items-center">
                  <Image
                    src="/instax.svg"
                    alt="Instax logo"
                    className="m-auto"
                    width={100}
                    height={49}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow flex items-center">
                  <Image
                    src="/fujifilm-X-GFX.png"
                    alt="Fujifilm X GFX logo"
                    className="m-auto"
                    width={100}
                    height={44}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow flex items-center">
                  <Image
                    src="/fujinon_logo.png"
                    alt="Fujinon logo"
                    className="m-auto"
                    width={100}
                    height={44}
                  />
                </div>
              </div>
            </CardBody>
            <hr />
            <CardFooter>
              <p>
                I&apos;m currently serving Fujifilm Holdings America Corporation
                which oversees over two dozen businesses in the Americas. These
                are just a few of the businesses I support. We also support
                businesses in healthcare, manufacturing, printing, and more.
              </p>
            </CardFooter>
          </Card>
        </div>
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-24">
          <Heading2 text="Tech Stack" />
          <Card>
            <CardBody>
              <div className="flex flex-col md:flex-row gap-4 flex-wrap items-center ">
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow items-stretch">
                  <Image
                    src="/html.jpg"
                    alt="HTML5"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow">
                  <Image
                    src="/css.jpg"
                    alt="CSS3"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl  flex-grow">
                  <Image
                    src="/js.jpg"
                    alt="JS5+"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow">
                  <Image
                    src="/jquery.jpg"
                    alt="jQuery"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow">
                  <Image
                    src="/php.jpg"
                    alt="PHP"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow">
                  <Image
                    src="/mysql.jpg"
                    alt="MySQL"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
              </div>
            </CardBody>
            <hr />
            <CardFooter>
              <p>
                These components are foundational to the tech stacks which I
                support.
              </p>
            </CardFooter>
          </Card>
        </div>
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
                    At Fujifilm, I manage web services for businesses across the
                    Americas. My role involves processing website management
                    updates and other stakeholder requests. Specifically, I
                    oversee 4 regional Drupal sites, around 18 WordPress
                    subsidiary sites, more than 300 domains, and a WordPress
                    server.
                  </p>
                  <Heading3 text="Website Management Updates" />
                  <p className="mb-4">
                    I handle bi-weekly website management update reports
                    spanning four regional sites that utilize a headless Drupal
                    CMS. These updates involve managing content for dozens of
                    consumer, business, and healthcare products. My
                    responsibilities include collaborating with stakeholders to
                    draft, approve, and translate the updates and other
                    stakeholder requests.
                  </p>
                  <Heading3 text="Subsidiary Sites" />
                  <p className="mb-4">
                    I also process stakeholder requests from 18 subsidiary sites
                    built in WordPress. Most of them are managed by external
                    agencies whom I work with to maintain and improve the sites.
                  </p>
                  <Heading3 text="Project Management" />
                  <p className="mb-4">
                    I employ{" "}
                    <span className="text-success">Kanban methodologies</span>{" "}
                    to track projects and assign content management tasks to our
                    contractor. Each project progresses through defined phases:
                    intake, in progress, review, translation, and scheduling.
                    This approach optimizes efficiency, transparency, and allows
                    us to quickly respond to emerging projects.
                  </p>

                  <Heading3 text="Cross Functional Collaboration" />
                  <p className="mb-4">
                    My work demands extensive cross-functional coordination.
                    Some of the teams I collaborate with include:
                  </p>
                  <ul className="mb-4 list-disc pl-5 flex flex-col gap-2">
                    <li>
                      Marketing: to handle product updates and create landing
                      pages.
                    </li>
                    <li>
                      IT: for server management tasks related to our in-house
                      WordPress server (such as migrating websites, setting up
                      redirects, and relaying DNS updates).
                    </li>
                    <li>
                      Legal: to implement cookie consent solutions and update
                      legal documents.
                    </li>
                    <li>
                      Press Teams: to draft, review, and schedule press
                      releases.
                    </li>
                  </ul>
                  <p className="mb-4">
                    I also play a key role in facilitating application processes
                    for domain and web application registrations for
                    stakeholders.
                  </p>
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
      </main>
    </div>
  );
}
