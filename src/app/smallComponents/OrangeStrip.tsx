"use client";

import Image from "next/image";
import { expert, global, endToEnd } from "../../../assets/images";

export default function OrangeStrip() {
  return (
    <section className="w-full bg-orange-500 text-black">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="flex gap-4 items-start">
          <Image
            src={expert}
            alt="Expert Guidance"
            width={40}
            height={40}
            className="shrink-0"
          />
          <div>
            <h3 className="font-bold text-lg">EXPERT GUIDANCE</h3>
            <p className="text-sm mt-1">
              Our experienced consultants provide tailored advice to help you
              achieve your academic and career aspirations.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex gap-4 items-start">
          <Image
            src={global}
            alt="Global Opportunities"
            width={40}
            height={40}
            className="shrink-0"
          />
          <div>
            <h3 className="font-bold text-lg">GLOBAL OPPORTUNITIES</h3>
            <p className="text-sm mt-1">
              EduEcho connects you to leading universities worldwide for a
              successful international education journey.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex gap-4 items-start">
          <Image
            src={endToEnd}
            alt="End to End Support"
            width={40}
            height={40}
            className="shrink-0"
          />
          <div>
            <h3 className="font-bold text-lg">END-TO-END SUPPORT</h3>
            <p className="text-sm mt-1">
              From career counseling to visa assistance, we guide you through
              every step of your journey.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
