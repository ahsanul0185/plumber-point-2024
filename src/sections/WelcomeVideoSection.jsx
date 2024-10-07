
import { Button } from "@/components/Button";

const WelcomeVideoSection = () => {
  return (
    <div className="md:py-20">
      <div className="relative md:container  md:h-80 lg:h-[400px] overflow-clip">

        <div className="static sm:absolute z-10 sm:left-1/2 sm:-translate-x-1/2 md:-translate-x-0 md:left-0 top-1/2 sm:-translate-y-1/2 w-full h-full mobile:h-fit md:h-full
         md:[mask-image:linear-gradient(to_right,black,black,black_75%,transparent)] mobile:w-4/6 md:w-96 lg:w-1/2 py-5 px-6 lg:px-10 bg-white sm:bg-white/70  flex flex-col justify-center items-start">
            <h2 className="text-xl md:text-2xl lg:text-[44px] font-bold leading-tight lg:leading-[3rem]">Welcome to <br /> Plumber Company </h2>
            <p className="md:text-xs lg:text-sm font-normal md:mt-0.5 md:-mb-2 lg:mt-3 w-full md:w-3/4">We’re delighted to have you here! At [Plumber Company Name], we specialize in providing top-notch plumbing services tailored to meet the unique needs of our residential and commercial clients.</p>
            <Button>Learn More</Button>
        </div>

        <div className="hidden sm:flex items-center justify-centerh-full">
          <video autoPlay muted loop preload="none" className="scale-x-[-1] min-w-[600px]">
            <source src="./video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default WelcomeVideoSection;
