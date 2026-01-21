import { GirlWithPen } from "../../../../assets/images";
export default function AdmissionGuidanceBody() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-10 space-y-16">

      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h1 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
            Admission Guidance: Your Gateway to Success
          </h1>
          <p className="text-sm md:text-base text-black leading-7 font-['Nunito_Sans']">
            Choosing the right educational institution is a pivotal step toward a bright future. However, the 
admission process can be complex and daunting. Our Admission Guidance services are 
designed to simplify this journey, providing expert support and personalized solutions to help 
you secure a spot at your dream institution.
          </p>
        </div>

        <img
          src={GirlWithPen.src}
          className="w-full rounded-lg"
        />
      </div>

      {/* WHY */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Why Choose Our Admission Guidance Services?
        </h2>

        <div className="text-sm md:text-base leading-7 space-y-4 font-['Nunito_Sans']">
          <p><b>Expert Insights:</b> With in-depth knowledge of admission criteria, processes, and deadlines, our team ensures you are always a step ahead in your application journey.</p>
          <p><b>Personalized Support:</b> We take the time to understand your aspirations, academic background, and career goals to help you choose the right program and institution.</p>
          <p><b>Streamlined Process:</b> From shortlisting institutions to preparing documents and submitting applications, we make the process seamless and stress-free.</p>
          <p><b>Global Reach:</b> Whether you’re looking to study locally or abroad, we provide guidance for institutions worldwide, ensuring you explore the best opportunities available.</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Our Services Include:
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-black text-sm md:text-base font-['Nunito_Sans']">
          <li><b>Institution Shortlisting:</b> We identify programs and universities that align with your academic profile and career objectives.</li>
          <li><b>Application Assistance:</b> Get help with completing forms, gathering required documents, and meeting deadlines.</li>
          <li><b>Essay & SOP Writing:</b> Craft compelling statements of purpose (SOPs) and essays that highlight your strengths and aspirations.</li>
          <li><b>Interview Preparation:</b> Ace admission interviews with expert tips and mock interview sessions.</li>
          <li><b>Scholarship Guidance:</b> Explore and apply for scholarships and financial aid opportunities to ease your financial burden.</li>
          <li><b>Visa Assistance:</b> Receive support for visa applications and documentation to study abroad.</li>
        </ul>
      </div>

      {/* WHO */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Who Can Benefit from Admission Guidance?
        </h2>

        <ul className="list-disc pl-5 text-black space-y-3 text-sm md:text-base font-['Nunito_Sans']">
          <li><b>High School Students:</b>  Plan your undergraduate journey and secure admissions at top colleges.</li>
          <li><b>Postgraduate Aspirants:</b> Identify the best programs and universities for advanced studies.</li>
          <li><b>International Students:</b> Get support navigating complex admission and visa processes for studying abroad.</li>
          <li><b>Parents:</b> Gain clarity and confidence in helping your child make the right choices.</li>
        </ul>
      </div>

      {/* FOOTER TEXT */}
      <div className="space-y-4">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Your Success, Our Priority
        </h2>

        <p className="text-sm md:text-base text-black leading-7 font-['Nunito_Sans']">
          Navigating the admission process requires precision, dedication, and a clear strategy. Our Admission Guidance services ensure you have the expertise and resources to 
make informed decisions, stand out in the competitive application pool, and achieve your academic dreams. <br /><br />Take the first step toward a brighter future. Contact us today for professional Admission Guidance and let us help you turn your aspirations into reality!
        </p>
      </div>

    </section>
  );
}
