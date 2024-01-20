

export default function Learning({ className }) {
  const pStyling = "py-1.5"

  return (
    <div className={ `font-sans ${className}` } >
      <h4 className=" text-sky-600 uppercase text-xl pt-5 pb-3">learning</h4>
      <p className={`${pStyling}`}>
        Continuous improvement and gaining new skills are integral to me, as is my love for exploring new tools and tech.
      </p>
      <p className={`${pStyling}`}>
        I am currently enjoying learning about the workings of machine learning and large language models, text and image 
        generative AI, and Next.js.
      </p>
    </div>
  )
}