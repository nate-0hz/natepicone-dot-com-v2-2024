import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiMui } from "react-icons/si";


library.add(faJs, faReact, faNodeJs)

export default function Projects() {

  return (
    <div className="font-sans">
      <h4 className=" text-sky-300 uppercase pt-5 pb-3">select projects</h4>
      <div className="">
        <p className="text-slate-200 font-extrabold">
          We'ppreciate
        </p>
        <div className="flex flex-row start max-w-28 py-2">
          <FontAwesomeIcon icon="fa-brands fa-js" style={{color: "#FFD43B",}} className="pr-1 scale-200" />
          <FontAwesomeIcon icon="fa-brands fa-react" style={{color: "#61dbfb",}} className="pr-1" />
          <FontAwesomeIcon icon="fa-brands fa-node-js" style={{color: "#6cc24a",}} className="pr-1" />
          <DiMongodb style={{color: "#3FA037",}} className="pr-1" />
          <SiExpress className="text-slate-200 pr-1" />
          <SiMui className="text-blue-500 pr-1"/>
        </div>
        <p className="text-slate-300 ">
          Full stack employee recognition application, built in a social media format, with a focus on celebrating peer success. 
          Built on MERN stack with MUI. Currently in Alpha, and in active development.
        </p>
      </div >
      <div className="pt-3">
        <p className="text-slate-200 pt-1.5 font-extrabold">
          natepicone.com
        </p>
        <div className="flex flex-row start max-w-28 py-2">
          <FontAwesomeIcon icon="fa-brands fa-js" style={{color: "#FFD43B",}} className="pr-1 scale-200" />
          <FontAwesomeIcon icon="fa-brands fa-react" style={{color: "#61dbfb",}} className="pr-1" />
          <FontAwesomeIcon icon="fa-brands fa-node-js" style={{color: "#6cc24a",}} className="pr-1" />
          <DiMongodb style={{color: "#3FA037",}} className="pr-1" />
          <SiExpress className="text-slate-200 pr-1" />
          <SiTailwindcss style={{color: "#A5F3FC",}}/>
        </div>
        <p className="text-slate-300">
          Portfolio website built with React and TailWind CSS. The blog API is powered by MongoDB, ExpressJS, and Node.js.
        </p>
      </div>
      {/* SECTION: IN FLIGHT PROJECTS */}
      <h4 className=" text-sky-300 uppercase pt-5 pb-3">projects in flight</h4>
      <div className="">
        <p className="text-slate-200 pt-1.5 font-extrabold">
          A portfolio social media app for artists 
        </p>
        <p className="text-slate-300">
          Currently working on a web application for artists to share creations and engage with their communities, without 
          fear of creatively destructive behaviour being carried out by major platforms.
        </p>
      </div >
      <div className="pt-3">
        <p className="text-slate-200 pt-1.5 font-extrabold">
          wedo co.de
        </p>
        <p className="text-slate-300">
          Actively building my company website and customer portal
        </p>
      </div>
    </div>
  )
}