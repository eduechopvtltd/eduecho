import { GirlWithPen } from "../../../../assets/images";
export default function ExaminationPreparationBody() {
  return (
    <section
      className="
        w-full max-w-7xl mx-auto
        px-6 sm:px-8 md:px-12 lg:px-20
        py-10 space-y-16
        text-black dark:text-white
      "
    >

      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h1 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold font-['Khula']">
            Examination Preparation: Empowering You to Excel
          </h1>

          <p className="text-xs sm:text-sm md:text-base leading-7 font-['Nunito_Sans']">
            Achieving success in examinations requires more than hard work—it demands a strategic
            approach, effective study methods, and consistent practice. Our <b>Examination Preparation </b>
            services are designed to help students and professionals excel in academic, competitive,
            and certification exams. With personalized guidance and expert resources, we ensure you
            are well-prepared to achieve your goals.
          </p>
        </div>

        <img
          src={GirlWithPen.src}
          className="w-full rounded-lg"
        />
      </div>

      {/* WHY */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold font-['Khula']">
          Why Choose Our Examination Preparation Services?
        </h2>

        <div className="space-y-4 text-xs sm:text-sm md:text-base leading-7 font-['Nunito_Sans']">
          <p><b>Expert Educators:</b><br /> Learn from highly qualified instructors with in-depth knowledge of various subjects and exam formats.</p>
          <p><b>Tailored Study Plans:</b> <br />We create personalized study schedules based on your strengths, weaknesses, and goals to maximize efficiency.</p>
          <p><b>Extensive Study Materials:</b> <br />Access comprehensive and updated resources, including notes, practice papers, and sample questions.</p>
          <p><b>Mock Tests and Assessments:</b><br /> Enhance your confidence and performance with regular practice tests that mimic real exam conditions.</p>
          <p><b>Time Management Techniques:</b><br /> Learn strategies to optimize your time during preparation and in the exam hall.</p>
          <p><b>Performance Analysis:</b> <br />Get detailed feedback on your progress, helping you focus on areas for improvement.</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold font-['Khula']">
          Our Services Include:
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-xs sm:text-sm md:text-base font-['Nunito_Sans']">
          <li><b>School and College Exam Preparation:</b><br /> Master core subjects with focused coaching tailored to your syllabus.</li>
          <li><b>Competitive Exam Coaching:</b><br /> Prepare for entrance exams like JEE, NEET, CAT, GRE, GMAT, UPSC, and more.</li>
          <li><b>Standardized Test Training:</b><br />Excel in tests like SAT, ACT, IELTS, TOEFL, and PTE with targeted preparation.</li>
          <li><b>Certification Exam Support:</b><br /> Get ready for industry certifications like PMP, CFA, and other professional qualifications.</li>
          <li><b>Customized Workshops:</b><br /> Join workshops on critical exam skills, including problem-solving, analytical thinking, and test-taking strategies.</li>
        </ul>
      </div>

      {/* BENEFITS */}
      <div className="space-y-6">
        <h2 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold font-['Khula']">
          Key Benefits of Our Programs:
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-xs sm:text-sm md:text-base font-['Nunito_Sans']">
          <li>Build a strong foundation in essential subjects and concepts.</li>
          <li>Improve speed, accuracy, and confidence with regular practice.</li>
          <li>Develop critical thinking and problem-solving skills for challenging questions.</li>
          <li>Achieve higher scores and unlock new academic or career opportunities.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <h2 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold font-['Khula']">
          Your Success Starts with the Right Preparation
        </h2>

        <p className="text-xs sm:text-sm md:text-base leading-7 font-['Nunito_Sans']">
          Exams are stepping stones to your academic and professional aspirations. With our dedicated support and proven methods, you can overcome challenges, achieve 
exceptional results, and confidently pursue your dreams.
          <br /><br />
          Take the first step today! Contact us to enroll in our <b>Examination Preparation </b> 
          services and unlock your full potential.
        </p>
      </div>

    </section>
  );
}
