

export default function HomeHeading({ className }) {
  return (
    <div className={ `font-sans flex flex-col ${className}` }>
      <div className="pt-1.5 relative order-1">
        <h1 className={`${className} text-amber-300 text-5xl md:text-6xl font-extralight ml-2 -mt-2 absolute`}>nate picone</h1>
        <h1 className={`${className} text-sky-300 text-5xl md:text-6xl font-extralight ml-1 -mt-1 absolute`}>nate picone</h1>
        <h1 className={`${className} text-sky-950 text-5xl md:text-6xl font-extralight absolute`}>nate picone</h1>
      </div>
      <div className="pt-16 order-2 relative">
        <h2 className="text-slate-800 text-3xl font-normal tracking-tight">full stack web dev</h2>
      </div>
    </div>
  )
}