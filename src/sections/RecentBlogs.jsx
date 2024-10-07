import Image from "next/image";
import img_blog_1 from "@/assets/images/our-recent-blog-1.jpg"
import img_blog_2 from "@/assets/images/our-recent-blog-2.jpg"
import img_blog_3 from "@/assets/images/our-recent-blog-3.jpg"

const plumberBlogs = [
    {
      title: "Top 5 Signs You Need a Professional Plumber Immediately",
      summary: "Learn about the common signs indicating plumbing problems, such as low water pressure, damp walls, or unusual noises from pipes, and why immediate professional help is essential to avoid expensive repairs.",
      img : img_blog_1
    },
    {
      title: "DIY Plumbing Fixes: When It's Safe to Do It Yourself vs. Calling a Plumber",
      summary: "This blog explains which plumbing tasks are safe for homeowners to tackle on their own, like unclogging a drain or fixing a leaky faucet, and when it’s best to leave it to the professionals.",
      img : img_blog_2
    },
    {
      title: "How to Prevent Common Plumbing Issues During Winter",
      summary: "Explore tips on winter plumbing maintenance, such as insulating pipes and protecting outdoor faucets, to avoid burst pipes and other seasonal plumbing issues.",
      img : img_blog_3
    }
  ];
  

export const RecentBlogSection = () => {
    return (
        <div>
            <div className="container px-5 py-16">
                <h2 className="text-3xl text-[#0e0e0e] font-medium uppercase">Our Recent Blogs</h2>

                 <div className="flex justify-between mt-12 flex-wrap gap-10">
                    {plumberBlogs.map((blog, idx) => (
                        <div key={idx} className="w-full md:w-80">
                            <div>
                                <Image src={blog.img} alt={blog.title}/>
                            </div>
                            <h2 className="my-3 text-xl">{blog.title}</h2>
                            <p className="text-sm">{blog.summary}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    )
}