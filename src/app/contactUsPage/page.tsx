import { Contact } from "lucide-react";
import ContactUsHero from "./ContactUsHero";
import TopTab from "../smallComponents/TopTab";
import NavBar from "../smallComponents/NavBar";
import ContactSection from "./ContactSection";
import Footer from "../smallComponents/Footer";
import ContactSupportCards from "./ContactSupportCards";


export default function ContactUsPage() {
  return (
    <>
    <TopTab />
    <NavBar />
    <ContactUsHero />
    <ContactSection />
    <ContactSupportCards />
    <Footer />
         
         </>
      );
    }
    
