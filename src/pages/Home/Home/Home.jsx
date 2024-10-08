import Banner from "../../../components/Banner/Banner";
import HowItWorks from "../../../components/HowItWorks/HowItWorks";
import ImageSection from "../../../components/ImageSection/ImageSection";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import ShowCards from "../../../components/ShowCards/ShowCards";
import ContactUs from "../../ContactUs/ContactUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="lg:conatiner mx-auto px-8">
        <SectionHeading heading="How It Works"></SectionHeading>
        <HowItWorks />
        {/* <SectionHeading heading="Our Products"></SectionHeading> */}
        <ImageSection />
        <ContactUs />
        <SectionHeading heading="Books Available"></SectionHeading>
        <ShowCards></ShowCards>
      </div>
    </div>
  );
}
