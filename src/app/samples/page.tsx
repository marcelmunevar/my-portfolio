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
              title="Rensonaccounting.com"
              description="Accounting landing page"
              href="https://www.rensonaccounting.com/"
              imgsrc="/rensonaccounting.png"
              alt="screenshot of rensonaccounting.com"
            />
            <CodeSample
              title="jQuery Slider Plugin"
              description="Plugin landing page"
              href="https://marcelmunevar.github.io/jquery-slider-plugin-landing-page/"
              imgsrc="/jquery-plugin.png"
              alt="screenshot of jQuery plugin landing page"
            />
          </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
