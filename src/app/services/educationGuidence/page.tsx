import Footer from "@/app/smallComponents/Footer";
import NavBar from "@/app/smallComponents/NavBar";
import TopTab from "@/app/smallComponents/TopTab";
import EducationGuidenceComponent from "./EducationGuidence";
import EducationGuidenceBody from "./EducationGuidenceBody";

export default function EducationGuidence() {
  return (
   
    <>
    <TopTab />
    <NavBar />
    <EducationGuidenceComponent />
    <EducationGuidenceBody />
    <Footer />
         
         </>
      );
}