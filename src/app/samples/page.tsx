import Heading1 from "../components/Heading-1";
import CodeSample from "../components/CodeSample";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading1 text="Code Samples" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CodeSample
              title="My Github"
              description=""
              href="https://github.com/marcelmunevar?tab=repositories"
              imgsrc="/github-logo.png"
              alt=""
              tech="Next.js, jQuery, Bootstrap, PHP"
            />
            <CodeSample
              title="Rensonaccounting.com"
              description=""
              href="https://www.rensonaccounting.com/"
              imgsrc="/rensonaccounting.png"
              alt=""
              tech="React, Next.js, Tailwind CSS, Typescript"
            />
            <CodeSample
              title="jQuery Slider Plugin"
              description=""
              href="https://marcelmunevar.github.io/jquery-slider-plugin-landing-page/"
              imgsrc="/jquery-plugin.png"
              alt=""
              tech="HTML, CSS, jQuery, Bootstrap"
            />
            <CodeSample
              title="Old Portfolio Website"
              description=""
              href="https://marcelmunevar.github.io/portfolio/"
              imgsrc="/old-resume.png"
              alt=""
              tech="HTML, CSS, jQuery, Bootstrap"
            />
            <CodeSample
              title="Responsive Ecommerce Page"
              description=""
              href="http://marcelmunevar.github.io/responsive-sample/"
              imgsrc="/blue.png"
              alt=""
              tech="HTML, CSS, jQuery"
            />
            <CodeSample
              title="Chewy Landing Page"
              description=""
              href="https://marcelmunevar.github.io/Chewy-Test-Page/"
              imgsrc="/chewy.png"
              alt=""
              tech="HTML, CSS"
            />
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
