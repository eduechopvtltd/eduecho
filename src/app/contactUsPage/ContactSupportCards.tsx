import Image from "next/image";
import { phoneCall,location,email } from "../../../assets/images"; 
// 👆 replace with your actual image imports

export default function ContactSupportCards() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADING */}
        <h2 className="text-center text-2xl md:text-3xl font-bold font-['Khula'] mb-10">
          Contact our support team to <br className="md:hidden" />
          know what you want
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 justify-items-center">

          {/* CARD 1 */}
          <div className="w-72 h-64 bg-emerald-50 flex flex-col items-center justify-start pt-10 gap-4">
            <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center">
              <Image src={phoneCall} alt="Call" width={28} height={28} />
            </div>
            <h3 className="text-lg font-bold font-['Khula']">Our Numbers</h3>
            <p className="text-xs text-center font-['Nunito_Sans']">
              +91 7411605384 <br />
              +91 8660047495
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-72 h-64 bg-orange-50 flex flex-col items-center justify-start pt-10 gap-4">
            <div className="w-14 h-14 bg-orange-200 rounded-full flex items-center justify-center">
              <Image src={email} alt="Email" width={28} height={28} />
            </div>
            <h3 className="text-lg font-bold font-['Khula']">Email Address</h3>
            <p className="text-xs font-['Nunito_Sans']">
              help@eduecho.in
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-72 h-64 bg-green-50 flex flex-col items-center justify-start pt-10 gap-4 px-4">
            <div className="w-14 h-14 bg-green-300 rounded-full flex items-center justify-center">
              <Image src={location} alt="Location" width={28} height={28} />
            </div>
            <h3 className="text-lg font-bold font-['Khula']">Address</h3>
            <p className="text-xs text-center font-['Nunito_Sans']">
              Slv Estate, Sy No 49/283, Rajanakunte, <br />
              Bangalore North, Karnataka, <br />
              India, 560064
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
