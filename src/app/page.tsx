import Heading1 from "../components/common/Heading-1";
import Heading2 from "../components/common/Heading-2";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import ClientBreadcrumbs from "@/components/common/ClientBreadcrumbs";
import CardSection from "@/components/about/CardSection";
import { getHomepagePosts } from "@/utils/getHomepagePosts";
import Hero from "@/components/common/Hero";

export default async function Home() {
  const homepagePostsResponse = await getHomepagePosts();

  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl lg:max-w-4xl mb-12">
          <ClientBreadcrumbs items={[{ label: "Home", href: "/" }]} />
          <Hero />
          <Heading1 text="About" />
        </div>

        <CardSection homepagePostsResponse={homepagePostsResponse} />
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
