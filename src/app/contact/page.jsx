"use client"


import { Button } from "@/components/Button";
import { PageHeader } from "../components/page_header/PageHeader";
import { Loader } from '@googlemaps/js-api-loader';
import { useRef, useEffect } from "react";

const Contact = () => {


  const mapRef = useRef();

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Make sure your API key is stored in .env.local
      version: 'weekly', // Optional: Version of the API
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -3.745, lng: -38.523 },
        zoom: 14,
      });

      new google.maps.Marker({
        position: { lat: -3.745, lng: -38.523 },
        map,
        title: "Hello World!",
      });
    });
  }, [])


  return (
    <div className="py-20">
      <PageHeader
        title="Contact Us"
        description="At Plumber Point, we are committed to providing top-notch plumbing services. Whether you need repairs, installations, or emergency assistance, our experienced team is here to help."
      />
      <div className="container px-5">
        <div className="py-10 md:py-16">
          <h2 className="text-3xl md:text-[40px] font-bold text-center pb-11">
            Get in touch
          </h2>

          <form>
            <div className="flex flex-col gap-[52px]">
              <div className="flex flex-col md:flex-row gap-10">
                <input
                  className="w-full border-b border-b-[#707070] outline-none pb-2 placeholder:text-base placeholder:text-black"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                />

                <input
                  className="w-full border-b border-b-[#707070] outline-none pb-2 placeholder:text-base placeholder:text-black"
                  type="email"
                  name="email"
                  placeholder="Email adsress"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-10">
                <input
                  className="w-full border-b border-b-[#707070] outline-none pb-2 placeholder:text-base placeholder:text-black"
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  required
                />

                <input
                  className="w-full border-b border-b-[#707070] outline-none pb-2 placeholder:text-base placeholder:text-black"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <textarea
                className="w-full border-b border-b-[#707070] outline-none pb-2 placeholder:text-base placeholder:text-black resize-none"
                placeholder="Desciption"
                required
                name="description"
                rows="1"
              ></textarea>
            </div>

            <div className="text-right">
              <Button>Send a message</Button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-[#F9F9F9] py-8">
        <div className="container px-5 flex flex-col md:flex-row items-center gap-10 lg:gap-32">
          <div>
            <div className="mb-5 md:mb-9">
              <h3 className="text-[18px] text-primary font-bold">Contact Us</h3>
              <p className="text-sm">
                Need a professional plumber? Look no further! Plumber Point
                offers fast, reliable, and expert plumbing solutions.
              </p>
            </div>

            <div className="mb-2 md:mb-6">
              <h4 className="text-primary text-sm font-medium">Business hours:</h4>
              <p className="text-sm">Monday to Saturday 9:30 am - 4:30 pm</p>
            </div>

            <div className="mb-2 md:mb-6">
              <h4 className="text-primary text-sm font-medium">Address:</h4>
              <p className="text-sm">A-67 south Ex Delhi-11002</p>
            </div>

            <div className="mb-2 md:mb-6">
              <h4 className="text-primary text-sm font-medium">Email:</h4>
              <p className="text-sm">plumberpoint@mail.info</p>
            </div>
            <div className="">
              <h4 className="text-primary text-sm font-medium">Phone:</h4>
              <p className="text-sm">1800 - 458495-4455</p>
            </div>
          </div>

          <div ref={mapRef} className="w-full md:w-[58%] flex-shrink-0  h-60 md:h-96">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
