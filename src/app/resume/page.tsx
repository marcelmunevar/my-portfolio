import Heading1 from "../components/Heading-1";
import Heading3 from "../components/Heading-3";
import ResumeItem from "../components/ResumeItem";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading1 text="Resume" />
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
