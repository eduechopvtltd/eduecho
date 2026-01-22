import { visasImages } from "../../../../assets/images";
export default function VisaServicesBody() {
  return (
    <section className="w-full flex flex-col items-center">
      
      {/* HERO */}
      <div className="w-full flex flex-col lg:flex-row gap-10 px-8 lg:px-36 py-6 lg:py-0">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-orange-500 text-2xl mt-10 lg:text-4xl font-bold font-['Khula'] leading-8 lg:leading-none">
            Visa Services: Simplifying Your Journey  
            Abroad
          </h1>

          <p className="text-xs lg:text-base font-normal font-['Nunito_Sans'] leading-6 lg:leading-8
            text-black dark:text-white">
            Navigating the visa application process can be complex and time-consuming. Our Visa Services 
            are designed to make the process seamless, stress-free, and efficient. Whether you’re traveling 
            for education, work, business, or leisure, we provide expert guidance and personalized support 
            to ensure a successful visa application.
          </p>
        </div>

        <img
          src={visasImages.src}
          className="w-80 h-48 lg:w-[484px] lg:h-80 object-cover"
        />
      </div>

      {/* WHY CHOOSE */}
      <div className="w-full px-8 lg:px-36 flex flex-col gap-4">
        <h2 className="text-orange-500 text-2xl lg:text-4xl font-bold font-['Khula']">
          Why Choose Our Visa Services?
        </h2>

        <p className="text-black dark:text-white text-base font-['Nunito_Sans'] leading-8">
          <b>Expert Guidance:</b> <br />Our experienced professionals stay updated with the latest visa policies and requirements to guide you effectively.<br/><br/>
          <b>Comprehensive Support:</b><br /> From documentation to submission, we handle every step of the process, minimizing errors and delays.<br/><br/>
          <b>Customized Assistance:</b> <br />Whether it’s a student visa, work visa, or tourist visa, our services are tailored to your specific needs.<br/><br/>
          <b>Streamlined Process:</b> <br />We simplify the complexities of visa applications, ensuring a smooth and hassle-free experience.
        </p>
      </div>

      {/* SERVICES */}
      <div className="w-full px-8 lg:px-36 flex flex-col gap-4 mt-10">
        <h2 className="text-orange-500 text-2xl lg:text-4xl font-bold font-['Khula']">
          Our Visa Services Include:
        </h2>

        <p className="text-black dark:text-white text-base font-['Nunito_Sans'] leading-8">
          <b>Student Visa Assistance:</b><br /> Get step-by-step guidance for applying to universities abroad, including documentation, SOPs, and interview preparation.<br/><br/>
          <b>Work Visa Support:</b> <br />Navigate the application process for job-related visas, including employer letters and sponsorship requirements.<br/><br/>
          <b>Tourist and Visitor Visas:</b><br /> Enjoy a stress-free travel experience with assistance in obtaining short-term visas for tourism or visiting family and friends.<br/><br/>
          <b>Business Visa Services:</b><br /> Ensure timely approval for your business trips with complete documentation and application support.<br/><br/>
          <b>Visa Extensions and Renewals:</b> <br />Manage your stay without worries by applying for extensions or renewals with our expert help.<br/><br/>
          <b>Dependent Visa Assistance:</b> <br />Facilitate visa applications for family members accompanying you abroad.<br/><br/>
          <b>Post-Visa Guidance:</b> <br />Receive support with travel arrangements, health insurance, and adapting to the destination country.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="w-full px-8 lg:px-36 flex flex-col gap-4 mt-10">
        <h2 className="text-orange-500 text-2xl lg:text-4xl font-bold font-['Khula']">
          Benefits of Our Visa Services:
        </h2>

        <p className="text-black dark:text-white text-xs lg:text-base font-['Nunito_Sans'] leading-6 lg:leading-8">
          Avoid errors and delays with professional guidance.<br/>
          Save time and effort with our streamlined application process.<br/>
          Stay informed about visa policies and requirements for different countries.<br/>
          Increase your chances of visa approval with accurate documentation and preparation.
        </p>
      </div>

      {/* CTA */}
      <div className="w-full px-8 lg:px-36 flex flex-col gap-4 mt-10 mb-20">
        <h2 className="text-orange-500 text-2xl lg:text-4xl font-bold font-['Khula']">
          Your Journey Begins Here
        </h2>

        <p className="text-black dark:text-white text-xs lg:text-base font-['Nunito_Sans'] leading-6 lg:leading-8">
          Whether you’re pursuing academic dreams, career goals, or travel adventures, obtaining the right visa is the first step. Let our experts take the stress out of the process, 
so you can focus on what matters most.<br/><br/>
          Contact us today for reliable and efficient Visa Services, and let us help you turn your international aspirations into reality!
        </p>
      </div>
    </section>
  );
}
