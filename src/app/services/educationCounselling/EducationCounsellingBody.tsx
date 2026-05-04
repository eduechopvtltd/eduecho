import { educationCounslling } from "../../../../assets/images";

export default function EducationCounselingBody() {
  return (
    <div className="w-full text-black px-6 md:px-16 lg:px-32 py-12 space-y-20 bg-white">

      {/* HERO */}
      <section className="flex flex-col lg:flex-row items-start gap-10">
        <div className="space-y-4">
          <h1 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
            Education Counseling: <br />
            Guiding Your Path to Success
          </h1>

          <p className="text-sm md:text-base leading-7 font-['Nunito_Sans'] max-w-xl">
            Education is the cornerstone of a successful future, but navigating the vast array of choices can be overwhelming. Our Education Counseling services are designed to provide personalized guidance, helping you make informed decisions about your academic and career journey. Whether you’re a student exploring options, a parent seeking the best for your child, or a professional looking to upskill, we’re here to support you every step of the way.
          </p>
        </div>

        <img
          src={educationCounslling.src}
          className="w-full max-w-md rounded-md object-cover"
        />
      </section>

      {/* WHY CHOOSE */}
      <section className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Why Choose Our Education Counseling Services?
        </h2>

        <div className="space-y-4 text-sm md:text-base leading-7 font-['Nunito_Sans'] max-w-3xl">
          <p><strong>Personalized Approach:</strong> We understand that each individual is unique, with distinct aspirations, strengths, and challenges. Our counselors take the time to get to know you, assess your interests, and design a tailored plan that aligns with your goals.</p>
          <p><strong>Expert Guidance:</strong> Our team of experienced education counselors stays up-to-date with the latest trends, courses, and institutions globally. Whether it’s choosing the right school, college, or certification program, we provide insights that help you make confident decisions.</p>
          <p><strong>Comprehensive Support:</strong> From career assessments and course selection to application assistance and interview preparation, we offer end-to-end support to ensure you achieve your dreams.</p>
          <p><strong>Focus on Soft Skills:</strong>Beyond academics, we emphasize the importance of soft skills such as communication, time management, and adaptability, which are critical for long-term success.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Our Services Include:
        </h2>

        <ul className="list-disc pl-6 space-y-2  text-sm md:text-base font-['Nunito_Sans'] max-w-3xl">
          <li><strong>Career Guidance:</strong> Understand your strengths and explore career options that align with your interests.</li>
          <li><strong>Academic Planning:</strong> Select the right courses, institutions, and study programs tailored to your aspirations.</li>
          <li><strong>College Admissions:</strong> Get step-by-step support for college and university applications, essays, and interviews.</li>
          <li><strong>Scholarships:</strong>Discover funding opportunities and prepare compelling applications.</li>
          <li><strong>Study Abroad:</strong> Explore global education options, including visa assistance and cultural adaptation tips.</li>
          <li><strong>Test Preparation:</strong> Access resources and strategies for standardized tests like SAT, GRE, IELTS, and more.</li>
        </ul>
      </section>

      {/* WHO */}
      <section className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          Who Can Benefit from Education Counseling?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base font-['Nunito_Sans'] max-w-3xl">
          <li><strong>High School Students:</strong> Plan your academic journey and prepare for college admissions.</li>
          <li><strong>Graduates:</strong> Explore higher education opportunities or transition to a career.</li>
          <li><strong>Parents:</strong> Understand the best educational paths for your children.</li>
          <li><strong>Professionals:</strong> Upskill or switch careers with advanced education guidance.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="space-y-6">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold font-['Khula']">
          The Path to Success Starts Here
        </h2>

        <p className="text-sm md:text-base  leading-7 font-['Nunito_Sans'] max-w-3xl">
          Education Counseling is more than just guidance—it’s about empowering you to make choices that shape a brighter future. With our support, you can navigate the 
complexities of academic and career planning with clarity and confidence.
          <br /><br />
       Start your journey today with our expert counselors by your side. Contact us to schedule a consultation and take the first step toward achieving your educational goals!
        </p>
      </section>

    </div>
  );
}
