import dynamic from "next/dynamic";
import TopTab from "./smallComponents/TopTab";
import NavBar from "./smallComponents/NavBar";
import Hero from "./homePage/Hero";

// Dynamically import sections below the fold for better initial load performance
const AboutIntro = dynamic(() => import("./homePage/AboutIntro"), { 
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" /> 
});
const HomePageServices = dynamic(() => import("./homePage/HomePageServices"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" />
});
const WhyChooseUs = dynamic(() => import("./homePage/WhyChooseUs"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" />
});
const SkillDevelopment = dynamic(() => import("./homePage/SkillDevelopment"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" />
});
const Testimonial = dynamic(() => import("./smallComponents/Testimonial"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" />
});
const Blog = dynamic(() => import("./smallComponents/Blog"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" />
});
const KnowMore = dynamic(() => import("./smallComponents/KnowMore"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" />
});
const Footer = dynamic(() => import("./smallComponents/Footer"), {
  loading: () => <div className="h-96 w-full animate-pulse bg-gray-50" />
});

export default function Home() {
  return (
    <>
      <TopTab />
      <NavBar />
      <Hero />
      <AboutIntro />
      <HomePageServices />
      <WhyChooseUs />
      <SkillDevelopment />
      <Testimonial />
      <Blog />
      <KnowMore />
      <Footer />
    </>
  );
}
