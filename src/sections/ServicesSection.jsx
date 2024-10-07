import Service from '@/components/Service'
import iconCommercial from "@/assets/icons/commercial.svg"
import iconMaintenance from "@/assets/icons/maintenance.svg"
import iconResidental from "@/assets/icons/residental.svg"
import Image from 'next/image'

const ServicesSection = () => {
  return (
    <div className='bg-primary py-14'>
      <div className="container px-5 flex flex-col md:flex-row justify-center items-center gap-16">
        <Service icon={iconResidental} title="Residental Service" desciption="Your home’s plumbing system is essential to your everyday comfort, and we’re here to keep it running smoothly."/>
        <span className='bg-white/50 block w-full md:w-[0.1rem]  h-[0.1rem] md:h-60'></span>
        <Service icon={iconCommercial} title="Commercial Service" desciption="We understand that businesses need efficient, reliable plumbing to keep operations running smoothly."/>
        <span className='bg-white/50 block w-full md:w-[0.1rem]  h-[0.1rem] md:h-60'></span>
        <Service icon={iconMaintenance} title="Maintenance" desciption="Routine maintenance is key to preventing costly plumbing problems and extending the life of your plumbing system. "/>
        
      </div>
    </div>
  )
}

export default ServicesSection
