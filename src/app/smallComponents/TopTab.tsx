import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const TopTab = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white text-xs py-2 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-6">
          <a href="tel:+917411605384" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-3 h-3" />
            </div>
            <span>+91 7411605384</span>
          </a>
          <a href="mailto:help@eduecho.in" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <Mail className="w-3 h-3" />
            </div>
            <span>help@eduecho.in</span>
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-gray-400">Follow us :</span>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-7 h-7 rounded-full bg-white/5 hover:bg-orange-500 flex items-center justify-center transition-all duration-300">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTab;
