import Footer from "@/app/smallComponents/Footer";
import NavBar from "@/app/smallComponents/NavBar";
import TopTab from "@/app/smallComponents/TopTab";
import InterviewPreparationHero from "./InterviewPreparationHero";
import InterviewPreparationBody from "./InterviewPreparationBody";


export default function InterviewPreparation() {
  return (
   
    <>
    <TopTab />
    <NavBar />
    <InterviewPreparationHero />
   <InterviewPreparationBody />
    <Footer />
         
         </>
      );
}