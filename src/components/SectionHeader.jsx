export const SectionHeader = ({title, description}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl text-center text-[#0e0e0e] font-medium uppercase">
        {title}
      </h2>
      <p className="text-base text-[#6d6d6d] text-center mt-2 w-4/5">
        {description}
      </p>
    </div>
  );
};
