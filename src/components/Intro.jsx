

export default function Intro({ className }) {
  return (
    <div className={ `font-sans ${className}` }>
      <div className="py-3">
        <h3 className="text-slate-600 leading-relaxed">
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