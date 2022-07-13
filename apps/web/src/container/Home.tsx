import { Banner } from "../components/Banner";
import { Interested } from "../components/Interested";
import { OutstandingProject } from "../components/OutstandingProject";
import { PropertyRegions } from "../components/PropertyRegions";
import { RealEstateForYou } from "../components/RealEstateForYou";

export default function HomeContainer() {
  return (
    <div className="space-y-10">
      <Banner />
      <Interested />
      <section>
        <PropertyRegions />
      </section>
      <section>
        <RealEstateForYou />
      </section>
      <section>
        <OutstandingProject />
      </section>
    </div>
  );
}
