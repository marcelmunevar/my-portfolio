import Heading1 from "../components/common/Heading-1";
import Heading2 from "../components/common/Heading-2";
import "@fortawesome/fontawesome-svg-core/styles.css";
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
        
      </main>
    </div>
  );
}
