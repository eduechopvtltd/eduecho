import Image from "next/image";
import { phoneCall,location,email } from "../../../assets/images"; 
// 👆 replace with your actual image imports

export default function ContactSupportCards() {
  return (
    <section className="w-full text-black bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADING */}
        <h2 className="text-center text-2xl md:text-3xl font-bold font-['Khula'] mb-10 text-black">
          Contact our support team to <br className="md:hidden" />
          know what you want
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-8 md:gap-24 justify-items-center">

          {/* CARD 1 */}
          <div className="w-72 h-64 bg-[#E5F8F6] flex flex-col items-center justify-start pt-10 gap-4 rounded-xl shadow-md border border-transparent">
            <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center">
              <Image src={phoneCall} alt="Call" width={28} height={28} />
            </div>
            <h3 className="text-lg font-bold font-['Khula'] text-black">Our Numbers</h3>
            <p className="text-xs text-center font-['Nunito_Sans'] text-slate-600">
              +91 7411605384 <br />
              +91 8660047495
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-72 h-64 bg-orange-50 flex flex-col items-center justify-start pt-10 gap-4 rounded-xl shadow-md border border-transparent">
            <div className="w-14 h-14 bg-orange-200 rounded-full flex items-center justify-center">
              <Image src={email} alt="Email" width={28} height={28} />
            </div>
            <h3 className="text-lg font-bold font-['Khula'] text-black">Email Address</h3>
            <p className="text-xs font-['Nunito_Sans'] text-slate-600">
              help@eduecho.in
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-72 h-64 bg-green-50 flex flex-col items-center justify-start pt-10 gap-4 px-4 overflow-y-auto rounded-xl shadow-md border border-transparent">
            <div className="w-14 h-14 bg-green-300 rounded-full flex items-center justify-center">
              <Image src={location} alt="Location" width={28} height={28} />
            </div>
            <h3 className="text-lg font-bold font-['Khula'] text-black">Address</h3>
            <div className="text-xs text-center font-['Nunito_Sans'] flex flex-col gap-2 text-slate-600">
              <p>
                <span className="font-bold">Bangalore:</span> 1009 B Wing, 10th Floor, Mittal Tower, MG Road Bangalore, Karnataka - 560001
              </p>
              <p>
                <span className="font-bold">Mumbai:</span> Office No. 230, 2nd floor, Sudama Space, Shree Ram Nagar Complex, Vartak Road Near Flyover, Virar West 401303
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
