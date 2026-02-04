// app/components/WhyChooseUs.tsx
import { chooseUs } from "../../../assets/images"; 
export default function WhyChooseUs() {
  const items = [
    {
      title: "Proven Expertise",
      desc: "Our experienced consultants provide tailored advice to help you achieve your career aspirations.",
    },
    {
      title: "Tailored Solutions",
      desc: "Customized guidance based on your unique academic interests and career goals.",
    },
    {
      title: "Extensive Network",
      desc: "Partnerships with top universities and institutions globally, offering diverse opportunities.",
    },
    {
      title: "Affordable Services",
      desc: "Transparent and competitive pricing with no hidden costs.",
    },
    {
      title: "Student-Centric Approach",
      desc: "Dedicated support and resources to ensure your success at every step of your journey.",
    },
    {
      title: "Scholarship",
      desc: "Our Scholarship Program is designed to support deserving students.",
    },
  ];

  return (
    <section className="relative bg-[#4C3B78] py-16 md:py-28"
    style={{ backgroundImage: `url(${chooseUs.src})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#4C3B78]/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-orange-500 text-2xl md:text-4xl font-extrabold uppercase mb-3">
            Why Choose Us:
          </h2>
          <div className="w-14 h-[2px] bg-orange-500" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-md px-6 py-8 md:px-8 md:py-10 text-center"
            >
              <h3
  className="
    text-black dark:text-white
    text-[14px] md:text-[16px]
    leading-[28px] md:leading-[34px]
    tracking-tightest
    font-extrabold
    uppercase
    mb-3
    font-['Khula']
  "
>

                {item.title}
              </h3>
              <p
  className="
    text-[#686F7A] dark:text-white
    text-[13.5px] md:text-[16px]
    leading-[24.3px] md:leading-[29px]
    tracking-tightest
    font-bold
    font-['Nunito']
  "
>

                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
