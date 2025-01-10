import Heading1 from "../components/Heading-1";
import MyCard from "../components/MyCard";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl mb-12">
          <Heading1 text="Code Samples" />
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            <MyCard
              title="Portfolio"
              repoHref="https://github.com/marcelmunevar/MY-PORTFOLIO"
              imgsrc="/portfolio.png"
              tech="React, Next.js, NextUI, Tailwind CSS, Typescript"
            />

            <MyCard
              title="Fujinon.com"
              pageHref="https://www.fujinon.com/"
              repoHref="https://github.com/Fujifilm-By-Marcel/fujinon_theme"
              imgsrc="/fujinon.png"
              tech="WordPress, PHP, jQuery, Sass, ACF"
            />
            <MyCard
              title="Fujifilm-x.com homepage"
              pageHref="https://fujifilm-x.com/en-us/"
              repoHref="https://github.com/Fujifilm-By-Marcel/fujifilm-x_theme/blob/master/page-home.php"
              imgsrc="/x-home.jpg"
              tech="WordPress, PHP, jQuery, Sass, ACF"
            />
            <MyCard
              title="jQuery Slider Plugin"
              pageHref="https://marcelmunevar.github.io/jquery-slider-plugin-landing-page/"
              repoHref="https://github.com/marcelmunevar/jquery-slider-plugin-landing-page"
              imgsrc="/jquery-plugin.png"
              tech="HTML, CSS, jQuery, Bootstrap"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
