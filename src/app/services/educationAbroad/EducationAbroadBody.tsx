import { educationAbroad } from "../../../../assets/images";
export default function EducationAbroadBody() {
  return (
    <section className="
      w-full max-w-7xl mx-auto 
      px-4 md:px-12 lg:px-20 
      py-10 space-y-16
      text-black dark:text-white
    ">

      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h1 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
            Education Abroad: Your Gateway to Global Opportunities
          </h1>

          <p className="text-sm md:text-base leading-7 font-['Nunito_Sans']">
            Studying abroad opens doors to world-class education, cultural exposure, and unparalleled career prospects. However, navigating the complexities of international education requires expert guidance. Our Education Abroad services are designed to simplify this journey, empowering you to achieve your academic and professional dreams in the global arena.
          </p>
        </div>

        <img
          src={educationAbroad.src}
          className="w-full rounded-lg"
        />
      </div>

      {/* WHY */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Why Choose Our Education Counseling Services?
        </h2>

        <div className="space-y-4 text-sm md:text-base leading-7 font-['Nunito_Sans']">
          <p><b>Global Expertise:</b> <br />With a deep understanding of international education systems, universities, and cultural nuances, we guide you to the best-fit program and institution.</p>
          <p><b>Personalized Approach:</b> <br />Your aspirations are unique, and so is our approach. We assess your academic background, career goals, and preferences to create a tailored plan for your study abroad journey.</p>
          <p><b>Comprehensive Support:</b><br /> From selecting universities to post-admission formalities, our end-to-end support ensures a smooth and stress-free process.</p>
          <p><b>Trusted Network:</b> <br />Our partnerships with reputed global institutions give you access to a wide range of programs, scholarships, and opportunities.</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Our Services Include:
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-sm md:text-base font-['Nunito_Sans']">
          <li><b>University and Program Selection:</b> Find the perfect match for your academic and career goals from top institutions worldwide.</li>
          <li><b>Application Assistance:</b> Ensure a flawless application with expert help on forms, documents, and submissions.</li>
          <li><b>Scholarship and Financial Aid Guidance:</b> Discover and apply for scholarships, grants, and financial aid opportunities to ease your financial burden.</li>
          <li><b>Visa and Immigration Support:</b> Navigate complex visa processes with confidence through our step-by-step guidance.</li>
          <li><b>Pre-Departure Orientation:</b> Prepare for life abroad with insights into cultural adaptation, academic expectations, and essential tips.</li>
          <li><b>Post-Arrival Support:</b> Settle into your new environment with assistance on accommodation, part-time work opportunities, and more.</li>
        </ul>
      </div>

      {/* BENEFITS */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Benefits of Studying Abroad:
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base font-['Nunito_Sans']">
          <li>Gain access to globally recognized education systems.</li>
          <li>Develop a multicultural perspective and global networking opportunities.</li>
          <li>Enhance career prospects with international experience.</li>
          <li>Build independence and adaptability in a new environment.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Your Journey Starts Here
        </h2>

        <p className="text-sm md:text-base leading-7 font-['Nunito_Sans']">
          Embarking on an education abroad journey is a life-changing decision. With our expertise and dedication, you can focus on your studies while we handle the 
complexities. Let us be your trusted partner in turning your global education aspirations into reality.
<br /> <br />  Contact us today to begin your journey toward a brighter future with Education Abroad!
        </p>
      </div>

    </section>
  );
}
