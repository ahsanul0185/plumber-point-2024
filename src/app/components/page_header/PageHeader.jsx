
export const PageHeader = ({title, description}) => {
    return (
        <div className="relative h-52 md:h-96 bg-[url(/images/page-header-bg.jpg)] bg-cover z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#DD3142_0%,transparent_100%)] -z-10" />
        <div className="container px-5 pt-10 md:pt-36">
          <h1 className="text-3xl md:text-5xl font-black uppercase">{title}</h1>
          <p className="text-xs md:text-sm text-white mt-5 max-w-md">{description}</p>
        </div>
    </div>
    )
}