
import Image from "next/image"
import plumber1 from "@/assets/images/plumber-1.png"
import plumber2 from "@/assets/images/plumber-2.png"
import { Button } from "@/components/Button"

const HeroSection = () => {
  return (
    <div className="pt-24 pb-10 md:pb-0">
      <div className="container px-5 md:h-[436px] flex flex-col md:flex-row items-center gap-8 md:gap-20">
        <div className="order-2 md:order-1">
            <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl font-black">Call us for any <span className="block mt-1 md:mt-2 font-medium">Plumbing Needs</span> </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mt-2 md:mt-5">+1800-9938-2839 </h2>
            <Button>See All Service</Button>
        </div>
        <div className="flex-1 order-1 md:order-2 h-full  relative">
            <Image src={plumber1} alt="Plumber image" className="absolute hidden md:block w-[302px] bottom-0 md:left-10 lg:-left-6"/>
            <Image src={plumber2} alt="Plumber image" className="static md:absolute md:hidden lg:block w-72 md:w-[390px] bottom-8 right-0"/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
