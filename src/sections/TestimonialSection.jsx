"use client";

import { Testimonial } from "@/components/Testimonial";
import { useEffect, useRef, useState } from "react";
import { SlArrowLeft, SlArrowLeftCircle, SlArrowRight } from "react-icons/sl";

const testimonials = [
  {
    name: "John Doe",
    location: "New York, NY",
    feedback:
      "The service was quick and professional. The plumber arrived on time and fixed my leaking pipe within an hour. Highly recommend!",
    rating: 5,
    date: "2024-09-20",
  },
  {
    name: "Jane Smith",
    location: "Los Angeles, CA",
    feedback:
      "Great experience! The plumber was very knowledgeable and explained everything clearly. Would definitely call them again.",
    rating: 4,
    date: "2024-09-15",
  },
  {
    name: "Mike Johnson",
    location: "Chicago, IL",
    feedback:
      "Affordable and efficient. They repaired my water heater and gave me tips on how to maintain it. Fantastic service!",
    rating: 5,
    date: "2024-09-12",
  },
  {
    name: "Emily Davis",
    location: "Houston, TX",
    feedback:
      "Very friendly and professional. They quickly fixed my clogged drain and cleaned up afterwards. Great job!",
    rating: 4,
    date: "2024-09-10",
  },
  {
    name: "David Wilson",
    location: "Phoenix, AZ",
    feedback:
      "Reliable and trustworthy. The plumber gave me an accurate estimate and finished the job perfectly. Will hire again.",
    rating: 5,
    date: "2024-09-08",
  },
];

export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollNext = (currentIndex) => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const scrollPrev = (currentIndex) => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(scrollNext, 8000);

    return () => clearInterval(interval);
  }, []);

  // console.log(activeIndex)

  return (
    <div className="relative pt-2 pb-16 bg-[url(/images/testimonial-bg.jpg)] bg-cover overflow-clip z-0">
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <div className="absolute inset-0 grid place-items-center text-white">
        <div className="relative container px-5 h-full">
          <button
            onClick={() => scrollPrev(activeIndex)}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 hover:translate-x-[10%] hover:scale-105 duration-300 z-10 size-10 md:size-12 lg:size-14 grid place-items-center rounded-full border border-white text-base md:text-xl lg:text-2xl pr-1"
          >
            <SlArrowLeft />
          </button>
          <button
            onClick={() => scrollNext(activeIndex)}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 hover:-translate-x-[10%] hover:scale-105 duration-300 z-10 size-10 md:size-12 lg:size-14 grid place-items-center rounded-full border border-white text-base md:text-xl lg:text-2xl pl-1"
          >
            <SlArrowRight />
          </button>
        </div>
      </div>

      <div className="container px-5 py-10">
        <h2 className="font-medium text-3xl text-primary text-center uppercase mb-8 md:mb-10">
          Testimonials
        </h2>

        <div className="[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div
            className="flex items-center duration-500"
            style={{ transform: `translateX(${activeIndex * -100}%)` }}
          >
            {testimonials.map((testimonial, idx) => {
              return (
                <div key={idx} className="min-w-full">
                  <Testimonial
                    name={testimonial.name}
                    feedback={testimonial.feedback}
                    date={testimonial.date}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4">
          {testimonials.map((_, idx) => (
            <span
            key={idx}
              onClick={() => {
                setActiveIndex(idx);
              }}
              className={`block size-2 md:size-2.5 lg:size-3 cursor-pointer rounded-full duration-300 ${
                idx === activeIndex ? "bg-primary scale-125" : "bg-[#E2E2E2]"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
