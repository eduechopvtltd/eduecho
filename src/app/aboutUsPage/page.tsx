import WhyChooseUs from "../homePage/WhyChooseUs";
import Blog from "../smallComponents/Blog";
import Footer from "../smallComponents/Footer";
import KnowMore from "../smallComponents/KnowMore";
import NavBar from "../smallComponents/NavBar";
import OrangeStrip from "../smallComponents/OrangeStrip";
import TopTab from "../smallComponents/TopTab";
import AboutUsHeroPage from "./AboutUsHeroPage";
import AboutUsIntro from "./AboutUsIntro";
import SkillDevelopmentAbout from "./SkillDevlopentAbout";
import TestimonialAbout from "./TestimonialAbout";


export default function AboutUsPage() {
  return (
    <>

        <TopTab />
        <NavBar />
        <AboutUsHeroPage />
        <AboutUsIntro   />
        <OrangeStrip />
        <WhyChooseUs />
        <SkillDevelopmentAbout />
        <TestimonialAbout />
        <Blog />
        <KnowMore />
        <Footer />
     </>
  );
}
