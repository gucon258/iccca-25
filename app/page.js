
import Slider from "@/components/Slider";
import Timeline from "@/components/Timeline";
import Hero from "@/components/Hero";
import Banner from "@/components/banner"
import Flowchart from "@/components/Flowchart";
import BrochureSection from "@/components/BrochureSection";
import PersonSlider from "@/components/PersonSlider";
import ChairsFlowchart from "@/components/ChairsFlowchart";
import SpecialTracks from "@/components/SpecialTracks";
import ScrollingLogos from "@/components/ScrollingLogos";
import TouristAttractions from "@/components/TouristAttractions";
import PublicationOpportunity from "@/components/PublicationOpportunity";
import IEEEPublicationDetails from "@/components/IEEEPublicationDetails";
import StudentSupport from "@/components/StudentSupport";
import AcknowledgementComponent from "@/components/Acknowledgement";

export default function Home() {
  return (
    <>
      <Slider />
      <Timeline />
      <Banner />
      <Hero />
      <ChairsFlowchart />
      <SpecialTracks />
      <PersonSlider />
      <Flowchart />
      <BrochureSection />
      <StudentSupport />
      <ScrollingLogos />
      <PublicationOpportunity />
      {/* <IEEEPublicationDetails/> */}
      <AcknowledgementComponent />
      <TouristAttractions />
    </>
  );
}
