export const BulletText = ({ children, bold }) => (
  <div className="flex items-center gap-2">
    <div className="size-4 border-[3.5px] border-primary rounded-full"></div>
    <p className={`font-medium text-sm ${bold && "font-semibold"}`}>{children}</p>
  </div>
);
