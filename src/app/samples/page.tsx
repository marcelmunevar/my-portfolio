import Heading1 from "../components/Heading-1";
import MyCard from "../components/MyCard";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading1 text="Code Samples" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MyCard
              title="Portfolio 2024"
              repoHref="https://github.com/marcelmunevar/MY-PORTFOLIO"
              imgsrc="/portfolio.png"
              tech="React, Next.js, NextUI, Tailwind CSS, Typescript"
            />
            <MyCard
              title="Rensonaccounting.com (2024)"
              pageHref="https://www.rensonaccounting.com/"
              repoHref="https://github.com/marcelmunevar/renson-accounting"
              imgsrc="/rensonaccounting.png"
              tech="React, Next.js, Tailwind CSS, Typescript"
            />
            <MyCard
              title="Fujinon.com (2020)"
              pageHref="https://www.fujinon.com/"
              imgsrc="/fujinon.png"
              tech="WordPress, PHP, jQuery, Sass, ACF"
            />
            <MyCard
              title="Old Portfolio (2015)"
              pageHref="https://marcelmunevar.github.io/portfolio/"
              repoHref="https://github.com/marcelmunevar/portfolio"
              imgsrc="/old-resume.png"
              tech="HTML, CSS, jQuery, Bootstrap"
            />
            <MyCard
              title="Responsive Ecommerce Sample (2015)"
              pageHref="http://marcelmunevar.github.io/responsive-sample/"
              repoHref="https://github.com/marcelmunevar/responsive-sample"
              imgsrc="/blue.png"
              tech="HTML, CSS, jQuery"
            />
            <MyCard
              title="Chewy Landing Page (2015)"
              pageHref="https://marcelmunevar.github.io/Chewy-Test-Page/"
              repoHref="https://github.com/marcelmunevar/Chewy-Test-Page"
              imgsrc="/chewy.png"
              tech="HTML, CSS"
            />
            <MyCard
              title="jQuery Slider Plugin (2013)"
              pageHref="https://marcelmunevar.github.io/jquery-slider-plugin-landing-page/"
              repoHref="https://github.com/marcelmunevar/jquery-slider-plugin-landing-page"
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
