import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareXTwitter, faSquareGithub, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faSquareXTwitter, faSquareGithub, faLinkedin, faSquareInstagram)

const socialMediaClassName = "px-0 text-slate-500 hover:text-sky-500 hover:scale-125 transition-colors transition-scale duration-300 delay-100 ease-in-out";

export default function Socials() {
  return (
    <>
      <div className={`py-6 flex`}>
        <ul className="flex flex-row justify-between max-w-72">
          <li className="pr-6">
            <a href="https://github.com/nate-0hz" alt="Nate's GitHub profile." rel="noreferrer" target="_blank">
              <FontAwesomeIcon className={socialMediaClassName} icon="fa-brands fa-square-github" size="2xl" />
            </a>
          </li>
          <li className="pr-6">
          <a href="https://twitter.com/nate0hz" alt="Nate's plaform-formally-known-as-Twitter profile." rel="noreferrer" target="_blank">
              <FontAwesomeIcon className={socialMediaClassName} icon="fa-brands fa-square-x-twitter" size="2xl" />
              </a>
          </li>
          <li className="pr-6">
            <a href="https://linkedin.com/in/nate0hz" alt="Nate's LinkedIn profile." rel="noreferrer" target="_blank">
              <FontAwesomeIcon className={socialMediaClassName} icon="fa-brands fa-linkedin" size="2xl"/>
            </a>
          </li>
          <li className="pr-6">
            <a href="https://www.instagram.com/nate0hz/" alt="Nate's GitHub profile." rel="noreferrer" target="_blank">
              <FontAwesomeIcon className={socialMediaClassName} icon="fa-brands fa-square-instagram" size="2xl"/>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}