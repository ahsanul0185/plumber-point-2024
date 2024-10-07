import Image from "next/image";
import plumbinImage from "@/assets/images/recent-post-2.jpg";

export const ServiceSection = ({ title, description }) => (
  <div className="relative flex justify-end pt-32 md:pt-20 pb-20">
    <div className="absolute left-1/2 md:left-0  md:top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-72 md:w-96 lg:w-[630px] h-36 md:h-56 lg:h-[314px] overflow-clip flex justify-center items-center">
      <Image src={plumbinImage} alt="image" />
    </div>

    <div className="w-full md:w-3/4 md:h-72 lg:h-[390px] bg-primary flex flex-col text-white justify-center pt-28 md:pt-1 pb-8 md:pb-1 pl-5 md:pl-[33%] lg:pl-[35%] pr-5 md:pr-16 gap-3 md:gap-2 lg:gap-6">
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);
