import AboutIntro from "./homePage/AboutIntro";
import Hero from "./homePage/Hero";
import NavBar from "./smallComponents/NavBar";
import TopTab from "./smallComponents/TopTab";
import HomePageServices from "./homePage/HomePageServices";
import WhyChooseUs from "./homePage/WhyChooseUs";
import SkillDevelopment from "./homePage/SkillDevelopment";
import Testimonial from "./smallComponents/Testimonial";
import Blog from "./smallComponents/Blog";
import KnowMore from "./smallComponents/KnowMore";
import Footer from "./smallComponents/Footer";

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
