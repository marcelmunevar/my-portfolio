import Heading1 from "../../components/common/Heading-1";
import Heading3 from "../../components/common/Heading-3";
import ResumeItem from "../../components/resume/Item";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ClientBreadcrumbs from "@/components/common/ClientBreadcrumbs";
import ResumeMultiItem from "@/components/resume/MultiItem";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl mb-12">
          <ClientBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resume", href: "/resume" },
            ]}
          />
          <Heading1 text="Resume" />
          <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-8">
            <div>
              <div className="mb-8">
                <Heading3 icon={faBriefcase} text="Experience" />
                <ResumeMultiItem
                  institution="FUJIFILM Holdings America Corporation"
                  items={[
                    {
                      date: "March 2025 - Present",
                      title: "Lead Developer",
                    },
                    {
                      date: "November 2022 - March 2025",
                      title: "Marketing Developer",
                    },
                    {
                      date: "October 2018 - November 2022",
                      title: "Full-Stack Developer (Contract)",
                    },
                  ]}
                />
                <ResumeItem
                  date="September 2017 - April 2018"
                  title="Full-Stack Developer"
                  institution="BMG Creative"
                />
                <ResumeItem
                  date="June 2016 - June 2017"
                  title="Full-Stack Developer (Contract→Hire)"
                  institution="Brandstar"
                />
                <ResumeItem
                  date="May 2015 - September 2015"
                  title="Front-End Developer (Contract)"
                  institution="Nova Southeastern University"
                />
                <ResumeItem
                  date="December 2013 - October 2014"
                  title="Front-End Developer"
                  institution="Morris4x4Center"
                />
                <ResumeItem
                  date="November 2011 - November 2013"
                  title="Front-End Developer"
                  institution="plantANT"
                />
              </div>
            </div>
            <div>
              <div className="mb-8">
                <Heading3 icon={faGraduationCap} text="Education" />
                <ResumeItem
                  date="May 2024"
                  title="BA in Computer Science"
                  distinction="Summa Cum Laude"
                  institution="Florida International University"
                />
                <ResumeItem
                  date="May 2007"
                  title="Associate of Arts (AA)"
                  institution="College Academy at Broward College"
                />
              </div>
              <div className="mb-8">
                <Heading3 icon={faUsers} text="Conferences" />
                <ResumeItem
                  date="September 2025"
                  institution="Techlead Conf: AI in Orgs"
                  title="Remote"
                />
                <ResumeItem
                  date="April 2025"
                  institution="React Miami"
                  title="Miami"
                />
                <ResumeItem
                  date="November 2024"
                  institution="React Summit"
                  title="NYC"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
