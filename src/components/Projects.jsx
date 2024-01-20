import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJs, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiMui, SiFlask } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";
import nateImage from "../assets/nate-image.png";
import Tags from "./ui/tags"


library.add(faJs, faReact, faNodeJs, faPython)

export default function Projects() {
  return (
    <div className="font-sans text-slate-300 pt-6">
      <h4 className="text-sky-300 uppercase">
        select projects
      </h4>
      {/* project component 1 */}
      <section className="md:grid md:grid-cols-4 md:gap-16 md:grid-rows-1 pt-2">
        <img src={nateImage} className="md:col-span-1 w-24 " />
        <div className="md:col-span-1">
          <a href="https://playful-pudding-8faa4e.netlify.app/" rel="noreferrer" target="_blank">
            <p className="text-slate-200 pt-1.5 font-extrabold">
              We'ppreciate <IoOpenOutline className="inline text-slate-500" />
            </p>
          </a>
          <div className="space-x-2 col-span-1">
            <Tags techName="javascript" />
            <Tags techName="react" />
            <Tags techName="node" />
            <Tags techName="mongodb" />
            <Tags techName="express" />
            <Tags techName="mui" />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-slate-300 ">
            Full stack employee recognition application, built in a social media format, with a focus on celebrating peer success. 
            Built on MERN stack with MUI. Currently in alpha, and in active development. Contact me for access.
          </p>
        </div>
      </section>
      {/* project component 2 */}
      <div className="md:grid md:grid-cols-4 md:gap-16 md:grid-rows-1 pt-2">
        <img source="../assets/natepicone-logo-256.png" className="w-8" />
        <div className="md:col-span-1">
          <a href="https://github.com/nate-0hz/t2a2-api-webserver" rel="noreferrer" target="_blank">
            <p className="text-slate-200 pt-1.5 font-extrabold">
            SaaS license management API <IoOpenOutline className="inline text-slate-500" />
            </p>
          </a>
          <div className="space-x-2 md:col-span-1">
            <Tags techName="python" />
            <Tags techName="flask" />
            <Tags techName="postgresql" />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-slate-300 ">
          An API project initiated by being frustrated at being unable to find an application to easily and cheaply track and
          enterprise-level user licenses. The API is a working proof of concept, and it not currently being developed further.
          </p>
        </div>
      </div>
      {/* project component 3 */}
      <div className="md:grid md:grid-cols-4 md:gap-16 md:grid-rows-1 pt-2">
        <img source={nateImage} className="w-8" />
        <div className="md:col-span-1">
          <a href="https://natepicone.com" rel="noreferrer" target="_blank">
            <p className="text-slate-200 pt-1.5 font-extrabold">
              natepicone.com <IoOpenOutline className="inline text-slate-500" />
            </p>
          </a>
          <div className="space-x-2 col-span-1">
            <Tags techName="javascript" />
            <Tags techName="react" />
            <Tags techName="tailwind" />
          </div>
        </div>
        <div className="col-span-2">
          <p className="text-slate-300 ">
            The beginnings of a portfolio website, built with React and TailWind CSS. The upcoming blog API is powered by MongoDB, 
            ExpressJS, and Node.js.
          </p>
        </div>
      </div>
    </div>
  )
}


//       {/* SECTION: IN FLIGHT PROJECTS */}
//       <h4 className=" text-sky-300 uppercase pt-5 pb-3">projects in flight</h4>
//       <div className="">
//         <p className="text-slate-200 pt-1.5 font-extrabold">
//           A portfolio social media app for artists 
//         </p>
//         <p className="text-slate-300">
//           Currently working on a web application for artists to share creations and engage with their communities.
//         </p>
//       </div >
//       <div className="pt-3">
//         <p className="text-slate-200 pt-1.5 font-extrabold">
//           we.do co.de
//         </p>
//         <p className="text-slate-300">
//           Actively building my company website and customer portal
//         </p>
//       </div>
//     </div>
//   )
// }