export const Testimonial = ({feedback, name, date}) => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-center">
      <p className="w-4/6 text-base md:text-xl ">{feedback}
      </p>
      <h3 className="mt-8 text-base md:text-xl font-bold">{name}</h3>
      <p className="mt-2 sm:text-sm italic text-white/60">{date}</p>
    </div>
  );
};
