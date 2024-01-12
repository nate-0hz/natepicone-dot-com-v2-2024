import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareXTwitter, faSquareGithub, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faSquareXTwitter, faSquareGithub, faLinkedin, faSquareInstagram)

const socialMediaClassName = "px-0 text-slate-500 hover:text-sky-500 hover:scale-125 transition-colors transition-scale duration-300 delay-100 ease-in-out";

export default function Intro() {
  return (
    <div className="font-sans">
      <div className="py-1.5">
        <h1 className="text-sky-500 text-5xl font-semibold">nate picone</h1>
      </div>
      <div className="py-1.5">
        <h2 className="text-slate-200 text-2xl">full stack web dev</h2>
      </div>
      <div className="py-3">
        <h3 className="text-slate-400">
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
      <div className="py-6 justify-around">
        <ul className="flex flex-row justify-between max-w-56">
          <li>
            <a href="https://github.com/nate-0hz" alt="Nate's GitHub profile." rel="noreferrer" target="_blank">
              <FontAwesomeIcon className={socialMediaClassName} icon="fa-brands fa-square-github" size="2xl" />
            </a>
          </li>
          <li>
          <a href="https://twitter.com/nate0hz" alt="Nate's plaform-formally-known-as-Twitter profile." rel="noreferrer" target="_blank">
              <FontAwesomeIcon className={socialMediaClassName} icon="fa-brands fa-square-x-twitter" size="2xl" />
              </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nate0hz" alt="Nate's LinkedIn profile." rel="noreferrer" target="_blank">
              <FontAwesomeIcon className={socialMediaClassName} icon="fa-brands fa-linkedin" size="2xl"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/nate-0hz" alt="Nate's GitHub profile." rel="noreferrer" target="_blank">
              <FontAwesomeIcon className={socialMediaClassName} icon="fa-brands fa-square-instagram" size="2xl"/>
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
};