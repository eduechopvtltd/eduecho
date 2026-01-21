import { educationAbroad } from "../../../../assets/images";
export default function InterviewPreparationBody() {
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
            Interview Preparation: Your Path to Career Success
          </h1>

          <p className="text-sm md:text-base leading-7 font-['Nunito_Sans']">
            Interviews are a critical step in securing your dream job, admission, or opportunity.
            Excelling in interviews requires more than just answering questions—it demands confidence,
            preparation, and effective communication. Our Interview Preparation services are designed
            to equip you with the skills and strategies to stand out and leave a lasting impression.
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
          Why Choose Our Interview Preparation Services?
        </h2>

        <div className="space-y-4 text-sm md:text-base leading-7 font-['Nunito_Sans']">
          <p><b>Experienced Coaches:</b> Learn from experts who understand the dynamics of interviews across industries and roles.</p>
          <p><b>Personalized Approach:</b> We tailor our training to match your profile, aspirations, and the specific interview format.</p>
          <p><b>Comprehensive Coverage:</b> From behavioral questions to technical assessments, we ensure you’re ready for all aspects of the interview.</p>
          <p><b>Mock Interviews:</b> Practice with realistic mock sessions and receive detailed feedback to enhance your performance.</p>
          <p><b>Confidence Building:</b> Overcome nervousness and develop a confident, professional demeanor.</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Our Interview Preparation Services Include:
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-sm md:text-base font-['Nunito_Sans']">
          <li><b>Resume and Portfolio Review:</b> Ensure your application materials reflect your strengths and align with the role you’re targeting.</li>
          <li><b>Behavioral Interview Training:</b> Master the STAR method (Situation, Task, Action, Result).</li>
          <li><b>Industry-Specific Guidance:</b> Prepare for technical and industry-related questions.</li>
          <li><b>Soft Skills Training:</b> Improve communication, body language, and presentation.</li>
          <li><b>Stress Management Techniques:</b> Learn how to stay calm and focused under pressure.</li>
        </ul>
      </div>

      {/* WHO */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Who Can Benefit from Interview Preparation?
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-sm md:text-base font-['Nunito_Sans']">
          <li><b>Job Seekers:</b> Ace interviews for entry-level, mid-level, or senior positions.</li>
          <li><b>Students:</b> Prepare for college, scholarship, or internship interviews.</li>
          <li><b>Professionals:</b> Transition to new roles or industries with confidence.</li>
          <li><b>Executives:</b> Excel in leadership role interviews and boardroom discussions.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Step into Your Future with Confidence
        </h2>

        <p className="text-sm md:text-base leading-7 font-['Nunito_Sans']">
          Interviews are opportunities to showcase your strengths and potential.
          With our guidance, you’ll walk into any interview prepared, confident,
          and ready to succeed.
          <br /><br />
          Contact us today to begin your Interview Preparation journey and take
          the next big step toward achieving your goals!
        </p>
      </div>

    </section>
  );
}
