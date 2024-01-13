

export default function Intro({ className }) {
  return (
    <div className={ `font-sans ${className}` }>
      <div className="pt-1.5">
        <h1 className="text-sky-500 text-5xl font-extralight">nate picone</h1>
      </div>
      <div className="pb-1.5">
        <h2 className="text-slate-200 text-3xl font-extralight tracking-tight">full stack web dev</h2>
      </div>
      <div className="py-3">
        <h3 className="text-slate-400 leading-relaxed">
          <span>I am a </span>
          <span className="font-bold">curious </span> 
          <span>and </span>
          <span className="font-bold">passionate </span>
          <span>problem purger, </span>
          <span>determined to </span>
          <span className="font-bold">solve </span>
          <span>problems faced by </span>
          <span className="font-bold">businesses.</span>
        </h3>
      </div>

    </div>
  )
};