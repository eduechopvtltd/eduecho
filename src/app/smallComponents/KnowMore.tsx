// app/components/KnowMoreCTA.tsx
import Image from "next/image";
import { guysOnStairs,celebGraduation } from "../../../assets/images";

export default function KnowMore() {
  return (
    <section
  className="relative w-full bg-cover bg-center py-12 md:py-20"
  style={{ backgroundImage: `url(${celebGraduation.src})` }}
>

      {/* Background image (optional if you already have parent bg) */}
      <div className="absolute inset-0 bg-[#4C3B78]/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* DESKTOP VIEW */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex w-full max-w-5xl bg-white dark:bg-black rounded-[10px] overflow-hidden">
            {/* LEFT IMAGE */}
            <div className="w-1/2 relative h-64">
              <Image
                src={guysOnStairs}
                alt="Students"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-1/2 px-10 py-12 flex flex-col justify-center gap-5">
              <h3 className="text-black dark:text-white text-2xl font-bold font-['Nunito_Sans'] leading-8">
                WOULD YOU LIKE TO KNOW MORE?
              </h3>

              {/* Call Now */}
              <a
                href="tel:+917411605384"
                className="inline-flex w-fit bg-orange-500 px-6 py-3 rounded-sm text-white text-sm font-bold font-['Nunito_Sans']"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden flex justify-center">
          <div className="w-72 px-8 pt-9 pb-8 bg-white rounded-bl-[10px] rounded-br-[10px] flex flex-col gap-4">
            <h3 className="text-black text-lg font-bold font-['Nunito_Sans'] leading-7">
              WOULD YOU LIKE TO <br />
              KNOW MORE?
            </h3>

            {/* Call Now */}
            <a
              href="tel:+917411605384"
              className="w-24 h-8 bg-orange-500 rounded-[1.06px] flex items-center justify-center text-white text-[8.09px] font-bold font-['Nunito_Sans']"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
