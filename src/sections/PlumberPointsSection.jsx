import { BulletText } from "@/components/BulletText";
import { SectionHeader } from "../components/SectionHeader";
import Image from "next/image";
// import {happyPlumber} from '@/assets/images/happy-plumber.jpg'

const plumberPoints = [
  "AquaFix Plumbing",
  "FlowMaster Plumbers",
  "PipePros Services",
  "Drain Wizards",
  "BlueWave Plumbing",
  "PipeLine Experts",
  "SwiftFlow Solutions",
  "Golden Valve Plumbing",
];

export const PlumberPointsSecton = () => {
  return (
    <div className="pt-16">
      <div className="container px-5">
        <SectionHeader
          title="Plumber Points"
          description="Discover reliable and professional plumbing services tailored to meet your every need. From emergency repairs to routine maintenance, our expert plumbers are here to ensure your pipes flow smoothly and efficiently. Whether you're dealing with a minor leak or a major overhaul."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex flex-col md:flex-row justify-between gap-7 md:gap-0 items-center mt-12">
          <div className="flex flex-col gap-7">
            <BulletText>Aqua Fix Plumbing</BulletText>
            <BulletText>Flow Master Plumbers</BulletText>
          </div>
          <div className="flex flex-col gap-7">
            <BulletText>Pipe Pros Services</BulletText>
            <BulletText>Drain Wizards</BulletText>
          </div>
          <div className="flex flex-col gap-7">
            <BulletText>Blue Wave Plumbing</BulletText>
            <BulletText>Pipe Line Experts</BulletText>
          </div>
          <div className="flex flex-col gap-7">
            <BulletText>Swift Flow Solutions</BulletText>
            <BulletText>Golden Valve Plumbing</BulletText>
          </div>
        </div>
      </div>
      <div
        className={`h-72 mt-16 overflow-hidden bg-fixed bg-center bg-cover`}
        style={{ backgroundImage: `url(/images/happy-plumber.jpg)` }}
      ></div>
    </div>
  );
};
