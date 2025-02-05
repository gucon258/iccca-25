import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Slider from "@/components/Slider";
import Timeline from "@/components/Timeline";
import VerticalTimeline from "@/components/VerticalTimeline";
import Hero from "@/components/Hero";
import Banner from "@/components/banner"
import Flowchart from "@/components/Flowchart";



export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
    <Navbar/> 
    <Slider/>
    <Timeline/>
    <Banner/>
    <VerticalTimeline/>
    <Hero/>
    <Flowchart/>
    </MaxWidthWrapper>
    </>
  );
}

