import Image from "next/image";
import logo from "@/assets/images/logo.png";
import logoDark from "@/assets/icons/logo-dark.svg";

export const Logo = ({light}) => (
    <div className="flex items-start gap-1">
            <Image src={light ? logoDark : logo} alt="logo" className="size-9 md:size-10" />
            <div className="flex flex-col items-end gap-0">
              <h2 className={`text-sm md:text-xl font-bold ${light ? "text-white" : ""}`}>Plumber Point</h2>
              <span className="text-[0.7rem] md:text-xs text-primary font-bold -mt-1">
                Company
              </span>
            </div>
          </div>
)