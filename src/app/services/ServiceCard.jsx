import Image from "next/image"

export const ServiceCard = ({title, description, img}) => {
    return (
        <div className="px-5 py-8 text-center shadow-lg flex flex-col gap-3 justify-center items-center">
            <div className="bg-primary size-20 rounded-full grid place-items-center text-white">
                <Image src={img} alt={title} className="size-12 text-white"/>
            </div>
            <h2 className="text-sm font-semibold text-black mt-3">{title}</h2>
            <p className="text-[#6d6d6d] text-xs">{description}</p>
        </div>
    )
}