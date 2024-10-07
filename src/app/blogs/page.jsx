import Image from "next/image";
import our_blog_title_img from "@/assets/images/recent-post-1.jpg";
import section_title_img from "@/assets/images/recent-post-3.jpg";
import { RecentBlogSection } from "@/sections/RecentBlogs";

const Blogs = () => {
  return (
    <div className="py-20">
      <div className="container px-5">
        <div className="lg:h-64 flex flex-col md:flex-row gap-5 md:gap-16 lg:gap-20 items-center justify-between overflow-clip">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-[44px] font-bold">Our Blogs</h2>
            <p className="text-sm mt-3 md:mt-5">
            Upgrading your plumbing fixtures can add value to your home, improve water efficiency, and enhance your everyday comfort. We explore the latest trends in plumbing fixtures and how these upgrades can make a difference.
            </p>
          </div>

          <div className="w-full md:w-3/5 flex-shrink-0">
            <Image
              src={our_blog_title_img}
              className="w-full h-full object-cover"
              alt="Blog title image"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row pt-10 md:pt-20 gap-8 md:gap-14 items-center">
          <div className="order-2 flex-shrink-0 w-full lg:w-1/2">
            <Image
              src={section_title_img}
              className="w-full h-full object-cover"
              alt="Blog title image"
            />
          </div>

          <div>
            <h2 className="text-xl md:text-3xl">
              The Importance of Regular Plumbing Maintenance
            </h2>
            <div className="text-sm flex flex-col gap-3 md:gap-5 mt-3 md:mt-6 lg:mt-8">
            <p>
              Regular maintenance can save you from costly repairs and
              emergencies. Our blog explains the benefits of routine plumbing
              checks and how they can improve your home’s efficiency, prevent
              damage, and extend the lifespan of your plumbing system.
            </p>
            <p>
              Water leaks can cause severe damage to your home if left
              undetected. In this post, we guide you through the signs of hidden
              leaks and offer expert tips on how to prevent them, ensuring your
              plumbing system remains in top condition.
            </p>
            <p>
              Regular maintenance can save you from costly repairs and
              emergencies. Our blog explains the benefits of routine plumbing
              checks and how they can improve your home’s efficiency, prevent
              damage, and extend the lifespan of your plumbing system.
            </p>
            </div>
          </div>
        </div>


        <RecentBlogSection />
      </div>
    </div>
  );
};

export default Blogs;
