import Image from "next/image";
import cover_image from '@/assets/images/our-recent-blog-3.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import project_image_1 from '@/assets/images/our-recent-blog-1.jpg'
import project_image_2 from '@/assets/images/our-recent-blog-2.jpg'
import project_image_3 from '@/assets/images/our-recent-blog-3.jpg'
import { ServiceSection } from "../components/service_section/ServiceSection";


const projects = [
  {
    projectType: "Residential",
    projectFullName: "Complete Bathroom Renovation",
    image: project_image_1
  },
  {
    projectType: "Commercial",
    projectFullName: "Office Building Plumbing Installation",
    image: project_image_2
  },
  {
    projectType: "Emergency",
    projectFullName: "24/7 Pipe Leak Repair",
    image: project_image_3
  },
  {
    projectType: "Maintenance",
    projectFullName: "Annual Drain Cleaning Service",
    image: project_image_3
  },
  {
    projectType: "New Construction",
    projectFullName: "Plumbing System for New Apartment Complex",
    image: project_image_2
  },
  {
    projectType: "Renovation",
    projectFullName: "Kitchen Plumbing Upgrade",
    image: project_image_1
  },
  {
    projectType: "Inspection",
    projectFullName: "Sewer Line Camera Inspection",
    image: project_image_1
  },
  {
    projectType: "Emergency",
    projectFullName: "24/7 Pipe Leak Repair",
    image: project_image_3
  },
  {
    projectType: "Maintenance",
    projectFullName: "Annual Drain Cleaning Service",
    image: project_image_1
  },
];


const Projects = () => {
    return (
      <div className="pb-20">
        <div className="relative h-96 overflow-clip grid items-center">
          <Image className="absolute" src={cover_image} alt="Cover image" />
        </div>
        <div className="container pt-10 px-5">

          <SectionHeader title="Our Projects" description="We transformed this outdated bathroom into a modern, functional space by installing new plumbing fixtures, upgrading the piping system, and ensuring optimal water pressure. Our expert team handled everything from start to finish, providing the homeowner with a hassle-free renovation experience." /> 


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-12">
            {projects.map((project, idx) => (
              <div key={idx}>
                <div className="h-64">
                  <Image src={project.image} className="w-full object-cover block h-full" alt="project image" />
                </div>
                <div>
                <h2 className="text-base text-primary text-center font-medium py-1.5">{project.projectType}</h2>
                <p className="text-sm text-[#222222] font-medium text-center pb-2">{project.projectFullName}</p>
                </div>
              </div>
            ))}
          </div>
            
            <ServiceSection title="About Our Project" description="For this large commercial project, we installed a comprehensive plumbing system that meets the demands of a busy office building. Our team ensured proper water supply, drainage, and energy-efficient fixtures to support the daily needs of the business." />

        </div>
      </div>
    );
  };
  
  export default Projects;
  