import Image from "next/image"
import histoyImage from '@/assets/images/our-company-image.jpg'

export const History = () => {
    return (
        <div className="bg-primary py-10">
            <div className="container px-5  flex flex-col lg:flex-row gap-10 md:gap-20 items-center justify-center">
                <div className="lg:w-1/2 h-72 flex-shrink-0 overflow-y-clip">
                    <Image src={histoyImage} alt="History image" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-white">Our Company History</h2>
                    <p className="text-sm text-white my-2">Plumber Point began with a simple mission: to provide reliable, high-quality plumbing services to the local community. What started as a small, family-owned business with a single plumber and a truck has grown into a trusted name in the plumbing industry, serving both residential and commercial clients across the region.</p>

                    <h3 className="text-[30px] text-white font-light mt-5">Trust Our Team of Experts</h3>
                    <p className="text-sm text-white my-2">Our journey began with [Founder’s Name], who had a passion for solving plumbing problems and a commitment to delivering exceptional service. From fixing small leaks to installing plumbing systems in new homes.</p>
                </div>
            </div>
        </div>
    )
}