import { IoOpenOutline } from "react-icons/io5";
import Tags from "./ui/tags"

export default function Project({ image, link, title, tags, description }) {
  return (
    <>
      <article className="group flex flex-col items-start justify-between z-10 bg-slate-300 hover:bg-sky-300 px-3 py-1.5 space-y-2 my-6">
        <div className="flex items-center gap-x-4 text-xs">
          <a 
            href={link} 
            className="relative font-medium text-gray-600"
            rel="noreferrer" 
            target="_blank">
              <h3 className="text-sky-600 mt-3 text-lg font-semibold leading-6 pt-1.5 group-hover:text-sky-800">
                {title} <IoOpenOutline className="inline text-slate-500" />
              </h3>
              <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">
                {description}
              </p>
              <div className="pt-2">
                {tags.map(tag => <Tags key={tag} techName={tag} />)}
              </div>
          </a>
        </div>
        <div className="group relative">
        </div>
      </article>
    </>
  );
}