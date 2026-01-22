import Image from "next/image";
import { bgImage1 } from "../../../assets/images";

export default function VisaServicesHero() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="relative h-[260px] md:h-[360px]">
        <Image
          src={bgImage1}
          alt="Contact Us"
          fill
          className="object-cover"
        />

        {/* White overlay */}
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-2xl text-black md:text-4xl font-bold">
           Privacy Policy
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            Home <span className="mx-2">›</span> Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}
