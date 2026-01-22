import Footer from "@/app/smallComponents/Footer";
import NavBar from "@/app/smallComponents/NavBar";
import TopTab from "@/app/smallComponents/TopTab";
import ExaminationPreparationHero from "./ExaminationPreparationHero";
import ExaminationPreparationBody from "./ExaminationPreparationBody";



export default function InterviewPreparation() {
  return (
   
    <>
    <TopTab />
    <NavBar />
            <ExaminationPreparationHero />
            <ExaminationPreparationBody />
    <Footer />
         
         </>
      );
}