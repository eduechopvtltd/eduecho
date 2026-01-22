import { Contact } from "lucide-react";

import TopTab from "../smallComponents/TopTab";
import NavBar from "../smallComponents/NavBar";

import Footer from "../smallComponents/Footer";
import PrivacypolicyHero from "./privacypolicyHero";
import PrivacyPolicyBody from "./PrivacyPolicyBody";




export default function PrivacyPolicyPage() {
  return (
    <>
    <TopTab />
    <NavBar />
   <PrivacypolicyHero />
   <PrivacyPolicyBody/>
    <Footer />
         
         </>
      );
    }
    
