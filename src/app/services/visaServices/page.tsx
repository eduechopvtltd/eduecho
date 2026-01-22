import Footer from "@/app/smallComponents/Footer";
import NavBar from "@/app/smallComponents/NavBar";
import TopTab from "@/app/smallComponents/TopTab";
import VisaServicesHero from "./VisaServicesHero";
import VisaServicesBody from "./visaServicesBody";



export default function visaServices() {
  return (
   
    <>
    <TopTab />
    <NavBar />
       <VisaServicesHero />
       <VisaServicesBody />    
    <Footer />
         
         </>
      );
}