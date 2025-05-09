import Heading1 from "../../components/common/Heading-1";
import Heading2 from "@/components/common/Heading-2";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";
import { ConstellationSwitcher } from "@/components/common/ConstellationSwitcher";
import ClientBreadcrumbs from "@/components/common/ClientBreadcrumbs";

export default function Home() {
  return (
    <div className="">
      <main className="my-4 ">
        <div className="container mx-auto px-8 max-w-2xl md:max-w-4xl mb-12">
          <ClientBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Settings", href: "/settings" },
            ]}
          />
          <Heading1 text="Settings" />
          <Heading2 text="Theme" />
          <div className=" grid grid-cols-1 gap-8">
            <div className="flex gap-5 align-middle items-center">
              <span>Dark/Light</span>
              <ThemeSwitcher />
            </div>
            <div className="flex gap-5 align-middle items-center">
              <span>Particles</span>
              <ConstellationSwitcher />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
