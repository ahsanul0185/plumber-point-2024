import { SectionHeader } from "@/components/SectionHeader";
import { PageHeader } from "../components/page_header/PageHeader";
import icon_service_1 from "@/assets/icons/services-1.svg";
import icon_service_2 from "@/assets/icons/services-2.svg";
import icon_service_3 from "@/assets/icons/services-3.svg";

import { ServiceCard } from "./ServiceCard";
import { TestimonialSection } from "@/sections/TestimonialSection";
import { RecentBlogSection } from "@/sections/RecentBlogs";

const plumbingServices = [
  {
    name: "Emergency Plumbing Repair",
    description:
      "Available 24/7 for urgent leaks, burst pipes, or flooding. Quick and efficient repairs to prevent water damage.",
    img: icon_service_1,
  },
  {
    name: "Drain Cleaning",
    description:
      "Professional service to clear clogged drains and blockages. Ensures smooth water flow in sinks, tubs, and toilets.",
    img: icon_service_2,
  },
  {
    name: "Water Heater Installation",
    description:
      "Installation of modern and energy-efficient water heaters. Offers both tankless and traditional systems.",
    img: icon_service_3,
  },
  {
    name: "Leak Detection",
    description:
      "Advanced technology to detect hidden leaks in walls and floors. Prevents structural damage and costly repairs.",
    img: icon_service_1,
  },
  {
    name: "Pipe Repair and Replacement",
    description:
      "Fixes broken, rusted, or burst pipes with durable materials. Replaces old pipes for long-lasting solutions.",
    img: icon_service_2,
  },
  {
    name: "Toilet Repair and Installation",
    description:
      "Repair malfunctioning toilets or install new models. Services include fixing leaks, clogs, and faulty flushing.",
    img: icon_service_3,
  },
  {
    name: "Sewer Line Repair",
    description:
      "Specialized in repairing damaged or clogged sewer lines. Ensures proper waste disposal and prevents backups.",
    img: icon_service_1,
  },
  {
    name: "Faucet and Fixture Installation",
    description:
      "Upgrade your kitchen or bathroom with modern faucets. Installs high-quality fixtures for enhanced functionality.",
    img: icon_service_2,
  },
  {
    name: "Sump Pump Installation and Repair",
    description:
      "Protect your basement from flooding with a reliable sump pump. Offers both installation and repair services.",
    img: icon_service_3,
  },
  {
    name: "Water Softening and Filtration",
    description:
      "Install water softeners and filtration systems to improve water quality. Reduces hard water stains and health risks.",
    img: icon_service_1,
  },
  {
    name: "Gas Line Services",
    description:
      "Expert installation and repair of gas lines for appliances. Ensures safe and reliable gas connections in your home.",
    img: icon_service_3,
  },
  {
    name: "Bathroom Remodeling",
    description:
      "Complete bathroom renovation services, including plumbing. Ensures all new installations meet code and design needs.",
    img: icon_service_2,
  },
];

const Services = () => {
  return (
    <div className="py-6">
      <PageHeader
        title="Services"
        description="Routine maintenance is key to avoiding major plumbing problems. We provide this client with an annual drain cleaning service to ensure their plumbing system remains clog-free and efficient year-round, helping them avoid costly repairs."
      />
      <div className="container px-5 pt-14">
        <div className="pb-10">
          <SectionHeader
            title="Our Services"
            description="Our advanced sewer line inspection technology helped this homeowner identify and resolve a blockage deep within their plumbing system. We conducted a thorough camera inspection and provided a detailed report, followed by a successful cleaning of the sewer line."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {plumbingServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.name}
              description={service.description}
              img={service.img}
            />
          ))}
        </div>
      </div>

      <div className="py-12">
        <TestimonialSection />
      </div>

      <div className="container">
          <RecentBlogSection />
      </div>
    </div>
  );
};

export default Services;
