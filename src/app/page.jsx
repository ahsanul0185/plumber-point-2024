import HeroSection from "@/sections/HeroSection";
import { History } from "@/sections/HistorySection";
import { OurTeamSection } from "@/sections/OurTeamSection";
import { PlumberPointsSecton } from "@/sections/PlumberPointsSection";
import { RecentBlogSection } from "@/sections/RecentBlogs";
import ServicesSection from "@/sections/ServicesSection";
import { TestimonialSection } from "@/sections/TestimonialSection";
import WelcomeVideoSection from "@/sections/WelcomeVideoSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WelcomeVideoSection />
      <History />
      <PlumberPointsSecton />
      <OurTeamSection />
      <TestimonialSection />
      <RecentBlogSection />
    </div>
  );
}
