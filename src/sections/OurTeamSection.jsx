import { Plumber } from "@/components/Plumber"
import { SectionHeader } from "@/components/SectionHeader"
import plumber1 from '@/assets/images/plumber-p-1.png'
import plumber2 from '@/assets/images/plumber-p-2-d.png'
import plumber3 from '@/assets/images/plumber-p-3-d.png'
import plumber4 from '@/assets/images/plumber-p-4-d.png'

export const OurTeamSection  = () => {
    return (
        <div className="py-16">
            <div className="container">
            <div>
            <SectionHeader title="Our Dedicated Team" description="Meet the passionate professionals who drive our success. Our team is committed to delivering exceptional results, bringing together expertise, innovation, and a shared vision for excellence."/>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-1 justify-between items-center md:items-end mt-12">
                <Plumber name="Mike Waters" image={plumber1} width="80%"/>
                <Plumber name="Joe Pipewell" image={plumber2} width="80%"/>
                <Plumber name="Sam Drayton" image={plumber3} width="87%"/>
                <Plumber name="Charlie Valve" image={plumber4} width="110%"/>
            </div>
            </div>
        </div>
    )
}