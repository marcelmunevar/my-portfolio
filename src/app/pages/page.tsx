import Heading1 from "../components/Heading-1";
import Page from "../components/Page";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading1 text="Code Samples" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Page
              title="Rensonaccounting.com (2024)"
              href="https://www.rensonaccounting.com/"
              imgsrc="/rensonaccounting.png"
              tech="React, Next.js, Tailwind CSS, Typescript"
            />
            <Page
              title="Fujinon.com (2020)"
              href="https://www.fujinon.com/"
              imgsrc="/fujinon.png"
              tech="WordPress, PHP, jQuery, Sass, ACF"
            />
            <Page
              title="Old Portfolio (2015)"
              href="https://marcelmunevar.github.io/portfolio/"
              imgsrc="/old-resume.png"
              tech="HTML, CSS, jQuery, Bootstrap"
            />
            <Page
              title="Responsive Ecommerce Sample (2015)"
              href="http://marcelmunevar.github.io/responsive-sample/"
              imgsrc="/blue.png"
              tech="HTML, CSS, jQuery"
            />
            <Page
              title="Chewy Landing Page (2015)"
              href="https://marcelmunevar.github.io/Chewy-Test-Page/"
              imgsrc="/chewy.png"
              tech="HTML, CSS"
            />
            <Page
              title="jQuery Slider Plugin (2013)"
              href="https://marcelmunevar.github.io/jquery-slider-plugin-landing-page/"
              imgsrc="/jquery-plugin.png"
              tech="HTML, CSS, jQuery, Bootstrap"
            />
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
