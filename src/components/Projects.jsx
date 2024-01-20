
import { IoOpenOutline } from "react-icons/io5";
import nateImage from "../assets/natepicone-logo-256.png";
// import Tags from "./ui/tags"
import Project from "./Project";


export default function Projects() {
  const projects = [
    {
      image: nateImage,
      link: "https://playful-pudding-8faa4e.netlify.app/",
      title: "We'ppreciate",
      tags: ["javascript", "react", "node", "mongodb", "express", "mui"],
      description: "Full stack employee recognition application, built in a social media format, \
        with a focus on celebrating peer success. Built on MERN stack with MUI. Currently in alpha, \
        and in active development. Contact me for access."
    },
    {
      image: nateImage,
      link: "https://github.com/nate-0hz/t2a2-api-webserver",
      title: "SaaS license management API",
      tags: ["python", "flask", "postgresql"],
      description: "An API project initiated by surprise at being unable to find an application \
        to easily and inexpensively track and manage enterprise-level user licenses allocation and \
        consumption. The API is a working proof of concept, and it not currently being developed further."
    },
    {
      image: nateImage,
      link: "https://natepicone.com",
      title: "natepicone.com",
      tags: ["javascript", "react", "tailwind"],
      description: "The beginnings of a portfolio website, built with React and TailWind CSS. The upcoming \
        blog API is powered by MongoDB, ExpressJS, and Node.js."
    },
  ]
  
  return (
    <div className="font-sans text-slate-300 py-6 lg:py-16">
    <h4 className="text-sky-600 text-xl lg:text-3xl uppercase">
      select projects
    </h4>
    {projects.map(project => <Project key={project.title} {...project} />)}
  </div>
);
}
