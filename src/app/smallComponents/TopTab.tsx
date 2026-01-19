// app/components/TopTab.tsx
import React from "react";
import { Phone, Mail, } from "lucide-react";
import { facebook, instagram, linkdlin } from "../../../assets/images";

const TopTab = () => {
  return (
    <div className="w-full bg-[#3E2A7B] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>+91 7411605384</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <Mail size={14} />
            <span>help@eduecho.in</span>
          </div>
        </div>

        {/* Right */}
       <div className="flex items-center gap-3">
  <span className="hidden sm:block">Follow us :</span>

  <a href="#" className="hover:opacity-80">
    <img src={facebook.src} alt="Facebook" className="w-4 h-4" />
  </a>

  <a href="#" className="hover:opacity-80">
    <img src={instagram.src} alt="Instagram" className="w-4 h-4" />
  </a>

  <a href="#" className="hover:opacity-80">
    <img src={linkdlin.src} alt="LinkedIn" className="w-4 h-4" />
  </a>
</div>

      </div>
    </div>
  );
};

export default TopTab;
