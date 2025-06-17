"use client";
import Heading1 from "../components/common/Heading-1";
import Heading2 from "../components/common/Heading-2";
import Heading3 from "../components/common/Heading-3";
import Proficiency from "../components/about/Proficiency";
import {
  faReact,
  faWordpress,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUniversalAccess,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  faChalkboardUser,
  faDatabase,
  faGraduationCap,
  faPlug,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import ClientBreadcrumbs from "@/components/common/ClientBreadcrumbs";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-8">
          <ClientBreadcrumbs items={[{ label: "Home", href: "/" }]} />
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
                      priority={true}
                    />
                    <p> Marcel Munevar </p>
                    <p className="text-default-500"> Lead Developer </p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="mb-4">
                      I am a Lead Developer with nearly 12 years of experience
                      in web development. My strong front-end expertise has
                      empowered me to design, launch, and maintain numerous
                      responsive websites focused on excellent user experience.
                      I prioritize SEO, page speed, and the smooth integration
                      of marketing, compliance tools, and CMS platforms.
                      Currently, my team is advancing our workflows by adopting
                      React and Next.js, building reusable components to boost
                      consistency, scalability, and development efficiency.
                    </p>
                  </div>
                </div>
              </CardBody>
              <hr />
              <CardFooter>
                Continue reading to learn more about my educational background
                and specialized skills.
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading2 text="Education" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Proficiency
              heading="Computer Science Grad"
              text={`I earned my Bachelor&apos;s degree in Computer Science, graduating <span class="text-default-500">summa cum laude</span> in 2024. The program strengthened my problem-solving skills and gave me a solid foundation in software engineering.`}
              icon={faGraduationCap}
            />
            <Proficiency
              heading="Conferences"
              text={`I've attended React Summit (2025) and React Miami (2024) to stay current with the latest in front-end development, and I plan to attend Vercel Ship (2025) to deepen my expertise in modern web workflows.`}
              icon={faChalkboardUser}
            />
          </div>
        </div>

        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading2 text="Proficiencies" />
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
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
              heading="Github Repositories"
              text="Adept in using GitHub for version control and managing code repositories. Proficient in branching, merging, and pull requests to streamline development workflows."
              icon={faGithub}
              footerText="Visit my Github."
              footerLink="https://github.com/marcelmunevar"
            />

            <Proficiency
              heading="Database Design"
              text={`Completed coursework in data modeling, normalization, and query design, with professional experience building complex SQL queries and exposure to GraphQL.`}
              icon={faDatabase}
              footerText="Visit a code sample on Github."
              footerLink="https://github.com/FIU-By-Marcel/RESTAPI"
            />
            <Proficiency
              heading="Accessibility"
              text="I build interfaces that are inclusive and usable by everyone. I use tools like Lighthouse and screen readers to identify and resolve accessibility issues throughout development."
              icon={faUniversalAccess}
            />
            <Proficiency
              heading="Privacy Compliance"
              text="I ensure websites respect user privacy by implementing consent management, minimizing tracking, and supporting GDPR and CCPA standards. My work integrates tools like OneTrust CookiePro."
              icon={faUserShield}
            />
            <Proficiency
              heading="API Integration"
              text="I connect front-end applications to external APIs to deliver dynamic, data-driven experiences. Skilled in REST and third-party integrations like Contentful and inriver PIM, with experience using Express for building backend services."
              icon={faPlug}
            />
            <Proficiency
              heading="Analytics"
              text={`I leverage tools like Google Analytics and custom tracking solutions to measure user behavior and drive data-informed decisions. Skilled in setting up events, dashboards, and performance monitoring.`}
              icon={faChartLine}
            />
            <Card>
              <CardBody>
                <Heading3 text="Other Hard Skills" />
                <div className="flex gap-2 flex-wrap">
                  <Chip color="primary">Vercel</Chip>
                  <Chip color="primary">Bootstrap</Chip>
                  <Chip color="primary">Node</Chip>
                  <Chip color="primary">jQuery</Chip>
                  <Chip color="primary">Vanilla JS</Chip>
                  <Chip color="primary">Sass</Chip>
                  <Chip color="primary">Less</Chip>
                  <Chip color="primary">LAMP</Chip>
                  <Chip color="primary">Linux</Chip>
                  <Chip color="primary">Apache</Chip>
                  <Chip color="primary">MySQL</Chip>
                  <Chip color="primary">PostgreSQL</Chip>
                  <Chip color="primary">PHP</Chip>
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
                  <Chip color="primary">Collaborative</Chip>
                  <Chip color="primary">Cross-Functional</Chip>
                </div>
              </CardBody>
            </Card>
            <Card className=" col-span-2">
              <CardBody>
                <Heading3 text="Best Practices" />
                <div className="flex gap-2 flex-wrap">
                  <Chip color="primary">Responsive Web Design</Chip>
                  <Chip color="primary">Object Oriented Programming</Chip>
                  <Chip color="primary">Event-Based Software Design</Chip>
                  <Chip color="primary">Software Engineering Principles</Chip>
                  <Chip color="primary">Human Computer Interaction</Chip>
                  <Chip color="primary">Search Engine Optimization</Chip>
                  <Chip color="primary">Page Speed Optimization</Chip>
                  <Chip color="primary">CMS Integrations</Chip>
                  <Chip color="primary">
                    Marketing and Compliance Tool Integration
                  </Chip>
                  <Chip color="primary">Accessibility Review</Chip>
                  <Chip color="primary">API Integrations</Chip>
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
                I currently support Fujifilm Holdings America Corporation, which
                oversees more than two dozen businesses across the Americas. My
                work spans a diverse range of industries, including healthcare,
                manufacturing, printing, and more.
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
                    alt="HTML5"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                    alt="CSS3"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl  flex-grow">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript ES5+"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                    alt="jQuery"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    alt="PHP"
                    className="m-auto"
                    width={75}
                    height={104}
                  />
                </div>
                <div className="p-2 bg-white w-full md:w-auto rounded-xl flex-grow">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
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
                These technologies form the foundation of the legacy and modern
                systems I support.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
