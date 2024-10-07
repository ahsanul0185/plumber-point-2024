import Image from "next/image"

export const Plumber = ({name, image, width}) => {
    return (
        <div className="w-4/6 md:w-44 lg:w-64 flex flex-col items-center">
            <div style={{width : width}}>
                <Image src={image} alt="Plumber"/>
            </div>
            <div className="bg-primary text-center py-4 px-1 rounded-md w-full">
                <h2 className="text-white text-base md:text-lg font-medium ">{name}</h2>
            </div>
        </div>
    )
}