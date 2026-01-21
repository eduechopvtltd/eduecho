import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";

export default function ContactSection() {
  return (
    <section className="w-full  px-6 py-12 md:px-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16">

        {/* DESKTOP */}
        <div className="hidden md:flex items-start gap-14">
          <div className="w-[480px]">
            <ContactForm />
          </div>
          <div className="flex-1">
            <LocationMap />
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex flex-col gap-6">
          <ContactForm />
          <LocationMap />
        </div>

      </div>
    </section>
  );
}
