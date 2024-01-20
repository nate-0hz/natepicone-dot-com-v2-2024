

export default function About({ className }) {
  const pStyling = "py-1.5"
  return (
    <div className={ `font-sans ${className} lg:py-16` }>
      <h3 className=" text-sky-600 uppercase text-xl lg:text-3xl pt-5 pb-3">about</h3>
      <p className="py-1.5">
        My interest in software development started in primary school, when my parents bought a
        Commodore VIC-20. Instantly my free time was gobbled up with writing line after 
        line of BASIC, and saving it all to a casette tape, leaving dad with nothing to listen 
        to in the car. I love how far tech has come.
      </p>
      <p className="py-1.5">
        A few years later we received our first desktop, and my interest moved into the command 
        line, but by then I was a teenager, and all sorts of other things were competing for my 
        attention!
      </p>
      <p className="py-1.5">
        Later, my interest in software was renewed when I saw the importance that applications
        and good UI plays in improving processes, workflows, and business operations. 
      </p>
      <p className="py-1.5">
        Now, a full stack web developer, I love solving problems being faced by businesses,
        and looking for any opportunity to grow knowledge, and apply that for your benefit.
      </p>
      <p className="py-1.5">
        I am focussing more this year on being better with downtime, and when not at my 
        laptop, I am likely reading, spending time with my husband, exploring new food, learning 
        about emerging tech, building my own skills, or armchair travelling. 
      </p>
    </div>
  )
}