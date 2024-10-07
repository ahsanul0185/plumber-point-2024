import Image from "next/image"

const Service = ({icon, title, desciption}) => {
  return (
    <div className="flex flex-col items-center max-w-60">
        <div className="relative w-20 h-[67px] grid place-items-center z-0">
          <Image src={icon} alt="title" className="size-14"/>
          <span className="absolute -z-10 rounded-full size-12 bg-white top-0 left-0"></span>
          <span className="absolute -z-10 rounded-full size-9 bg-white bottom-0 right-0"></span>
          
        </div>
        <h2 className="text-sm font-medium my-2.5">{title}</h2>
        <p className="text-xs text-center text-white">{desciption}</p>
        <button className="text-sm bg-[#F6FAFB] py-0.5 px-3 mt-5 rounded-md">Learn More</button>
    </div>
  )
}

export default Service
