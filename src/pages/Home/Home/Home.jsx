import Banner from "../../../components/Banner/Banner";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import ShowCards from "../../../components/ShowCards/ShowCards";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="lg:conatiner mx-auto px-8">
        <SectionHeading heading="Books Available"></SectionHeading>
        <ShowCards></ShowCards>
      </div>
    </div>
  );
}
