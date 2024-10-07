import { Logo } from "@/components/Logo";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import recent_post_img_1 from '@/assets/images/recent-post-1.jpg'
import recent_post_img_2 from '@/assets/images/recent-post-2.jpg'
import recent_post_img_3 from '@/assets/images/recent-post-3.jpg'
import Image from "next/image";


const recentPosts = [
    {
      title: "5 Signs Your Water Heater Needs Repair",
      shortDesc: "Learn the warning signs that indicate your water heater needs immediate attention.",
      img: recent_post_img_1,
      url: "/posts/water-heater-repair",
      date: "October 1, 2024"
    },
    {
      title: "How to Prevent Clogged Drains",
      shortDesc: "Simple tips to keep your drains flowing smoothly and avoid costly repairs.",
      img: recent_post_img_2,
      url: "/posts/prevent-clogged-drains",
      date: "September 28, 2024"
    },
    {
      title: "Why Plumbing Inspections Matter",
      shortDesc: "Discover why routine plumbing checks are essential for your home's safety and efficiency.",
      img: recent_post_img_3,
      url: "/posts/plumbing-inspections",
      date: "September 25, 2024"
    }
  ];
  

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container pt-10 px-5">
        <div className="flex flex-row gap-8 justify-between flex-wrap">
          <div className="lg:w-[320px]">
            <div className="flex justify-center mobile:justify-start">
            <Logo light />
            </div>
            <p className="text-xs mt-7 text-white text-center mobile:text-left">
              A website for plumbing services connects users to professional
              plumbers, offering easy bookings, pricing details, and customer
              reviews. It provides access to services for repairs,
              installations, and maintenance.
            </p>
            <div className="text-primary flex gap-5 justify-center mobile:justify-start  mt-3">
              <FaFacebookF />
              <FaTwitter />
              <FaGoogle />
            </div>
          </div>

          <div className="hidden mobile:block w-full mobile:w-fit">
            <h2 className="font-bold text-base  text-primary uppercase mb-5 lg:mb-10 text-center mobile:text-left">Our Services</h2>
            <ul className="text-sm flex flex-col gap-4 text-white items-center mobile:items-start">
                <li>Plumbing Repairs</li>
                <li>Drain Unblocking</li>
                <li>Pipe Installation </li>
                <li>Leak Detection </li>
                <li>Water Heater Installation</li>
            </ul>
          </div>

          <div className="w-full mobile:w-fit">
            <h2 className="font-bold text-base  text-primary uppercase mb-5 lg:mb-10 text-center mobile:text-left">Contact</h2>
            <ul className="text-sm flex flex-col gap-8 text-white items-center mobile:items-start text-center mobile:text-left">
                <li>1800-9938-2839
                <span className="block text-xs">support@plumberpoint.com</span></li>

                <li>1234 Main St, Boulder  <span className="block text-xs">CO 80302, USA</span> </li>
                <li>Mon-Sat 9.00-15:00
                 <span className="block text-xs">Sunday CLOSED</span></li>
            </ul>
          </div>


          <div className="hidden md:block">
            <h2 className="font-bold text-base  text-primary uppercase mb-5 lg:mb-10">Recent Post</h2>

           <ul className="flex flex-col gap-3">
            {recentPosts.map((post, idx) => (
                <li key={idx} className="flex gap-3 text-white">
                    <div className="w-20 flex-shrink-0">
                        <Image src={post.img} alt="Plumber post" />
                    </div>
                    <div className="max-w-52">
                        <h3 className="text-xs font-medium hover:underline"><a href="#">{post.title}</a></h3>
                        <p className="text-[8px] my-1">{post.shortDesc}...</p>
                    </div>
                </li>
            ))}
           </ul>
          </div>

        </div>

        <hr className="mt-8"/>
        <div className="text-primary text-xs flex flex-col md:flex-row items-center gap-3 justify-between py-3">
            <p>&copy;Copyright 2024 Plumber Point | Ahsanul Haque</p>
            <ul className="flex gap-5">
                <li className="hover:underline"><a href="#">Term of Services</a></li>
                <li className="hover:underline"><a href="#">Privacy & policy</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};
