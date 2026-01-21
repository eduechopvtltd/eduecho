import Image from "next/image";
import { groupStudyYellow } from "../../../../assets/images";

export default function EducationCounsellingg() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="relative h-[260px] md:h-[360px]">
        <Image
          src={groupStudyYellow}
          alt="Contact Us"
          fill
          className="object-cover"
        />

        {/* White overlay */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-2xl text-black md:text-4xl font-bold">
            Education Counseling
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            Home <span className="mx-2">›</span> Education Counseling
          </p>
        </div>
      </div>
    </section>
  );
}
