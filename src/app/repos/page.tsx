import Heading1 from "../components/Heading-1";
import Repo from "../components/Repo";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <Heading1 text="Code Samples" />
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Repo
              title="My Portfolio (2024)"
              href="https://github.com/marcelmunevar/renson-accounting"
              tech="React, Next.js, Tailwind CSS, Typescript"
            />
            <Repo
              title="Rensonaccounting.com (2024)"
              href="https://github.com/marcelmunevar/renson-accounting"
              tech="React, Next.js, Tailwind CSS, Typescript"
            />
            <Repo
              title="Old Portfolio (2015)"
              href="https://github.com/marcelmunevar/portfolio"
              tech="HTML, CSS, jQuery, Bootstrap"
            />
            <Repo
              title="Responsive Ecommerce Sample (2015)"
              href="https://github.com/marcelmunevar/responsive-sample"
              tech="HTML, CSS, jQuery"
            />
            <Repo
              title="Chewy Landing Page (2015)"
              href="https://github.com/marcelmunevar/Chewy-Test-Page"
              tech="HTML, CSS"
            />
            <Repo
              title="jQuery Slider Plugin Landing Page (2013)"
              href="https://github.com/marcelmunevar/jquery-slider-plugin-landing-page"
              tech="HTML, CSS, jQuery, Bootstrap"
            />
            <Repo
              title="jQuery Slider Plugin (2013)"
              href="https://github.com/marcelmunevar/jquery-slider-plugin"
              tech="HTML, CSS, jQuery"
            />
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
