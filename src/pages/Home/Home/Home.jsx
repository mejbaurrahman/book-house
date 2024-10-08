import Banner from "../../../components/Banner/Banner";
import HowItWorks from "../../../components/HowItWorks/HowItWorks";
import ImageSection from "../../../components/ImageSection/ImageSection";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

import About from "../../About/About";
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
        <About />
      </div>
    </div>
  );
}
