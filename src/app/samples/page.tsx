import Heading1 from "../../components/common/Heading-1";
import MyCard from "../../components/samples/Sample";
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
              title="Fujinon.com theme"
              pageHref="https://www.fujinon.com/"
              repoHref="https://github.com/Fujifilm-By-Marcel/fujinon_theme"
              imgsrc="/fujinon.png"
              tech="Sass, WordPress, PHP, jQuery, ACF"
            />
            <MyCard
              title="Fujifilm-x.com homepage"
              pageHref="https://fujifilm-x.com/en-us/"
              repoHref="https://github.com/Fujifilm-By-Marcel/fujifilm-x_theme/blob/master/page-home.php"
              imgsrc="/x-home.jpg"
              tech="WordPress, PHP, jQuery, ACF"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
