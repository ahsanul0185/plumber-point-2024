import { BulletText } from "@/components/BulletText";
import { PageHeader } from "../components/page_header/PageHeader";

import { ServiceSection } from "../components/service_section/ServiceSection";
import { OurTeamSection } from "@/sections/OurTeamSection";

const services = [
  "AquaFix Plumbing",
  "FlowMaster Plumbers",
  "PipePros Services",
  "Drain Wizards",
  "BlueWave Plumbing",
  "PipeLine Experts",
  "SwiftFlow Solutions",
  "Golden Valve Plumbing",
];

const About = () => {
  return (
    <div className="py-16">
      <PageHeader
        title="About Us"
        description="We are a locally owned and operated plumbing company built on the core values of trust, honesty, and reliability. Over the years, we have earned a solid reputation for being one of the most dependable plumbing service providers in the area. "
      />

      <div className="container text-5xl px-5 pt-11">
        <div className="">
          <h1 className="font-medium text-3xl text-[#0e0e0e] uppercase mb-6">
            Plumber Points Company
          </h1>

          <p className="text-base text-[#6d6d6d] mb-6">
          We are committed to delivering top-quality plumbing services with professionalism, reliability, and integrity. With years of experience in the plumbing industry, we pride ourselves on providing comprehensive solutions for both residential and commercial properties. From routine maintenance and emergency repairs to full system installations and renovations, our skilled team is equipped to handle any plumbing challenge.{" "}
          </p>
          <p className="text-base text-[#6d6d6d] mb-6">
          Our mission is simple: to offer reliable plumbing services that exceed customer expectations. We understand how important a well-functioning plumbing system is to your home or business, which is why we focus on delivering efficient, long-lasting solutions that ensure your comfort and peace of mind.{" "}
          </p>
          <p className="text-base text-[#6d6d6d] mb-6">
          Whether you need a minor repair, a full system installation, or regular maintenance, we are here to help. With our expertise and commitment to quality, we strive to be the plumbing company you can trust for years to come.{" "}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-7 mt-12">
            {services.map((service, idx) => {
              return (
                <li key={idx} className="">
                  <BulletText bold>{service}</BulletText>
                  <p className="ml-6 text-base text-[#6d6d6d] pt-1">
                  Our team specializes in handling both planned projects and unexpected plumbing emergencies. We are available 24/7, because we know that plumbing problems can arise at the most inconvenient times.
                  </p>
                </li>
              );
            })}
          </ul>


            <ServiceSection title="Commercial Service" description="At Plumber Point, we believe that plumbing is more than just fixing leaks and installing pipes—it’s about creating a lasting impact through excellent service and building relationships with our clients. We are committed to delivering the highest standard of work, ensuring that every project is completed to your satisfaction."/>
    

          <div className="-mt-14">
          <OurTeamSection />

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
