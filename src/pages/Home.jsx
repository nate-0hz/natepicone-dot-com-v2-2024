import Intro from '../components/Intro';
import About from '../components/About';
import Learning from '../components/Learning';
import Socials from '../components/Socials';
import ProfileImage from '../components/ProfileImage';
import Projects from '../components/Projects';
import HomeHeading from '../components/HomeHeading';



export default Home
function Home() {
  return (
    <div className="bg-slate-200 text-sky-900 px-6 md:px-0 py-6 md:grid md:grid-cols-7 md:grid-row-1 gap-4">
      <div className=""></div>
      <div className="md:col-span-5">
        {/* mobile hero section layout */}
        <div className="md:hidden grid">
          <div className="grid grid-cols-1 grid-rows-2 h-screen min-h-0">
            <div className="row-span-1 overflow-hidden">
              <ProfileImage className="" />
            </div>
            <div className="row-span-1 overflow-auto">
              <HomeHeading className="pt-2"/>
              <Intro className="pt-2"/>
              <Socials className="pt-2"/>
            </div>
          </div>
        </div>

        {/* table hero section layout */}
        <div className="hidden md:block" >
          <div className="md:grid md:grid-cols-2 md:auto-rows-min">
            <div className="order-last md:col-span-1 md:flex md:flex-col md:justify-center">
              <HomeHeading className=""/>
              <Intro className=""/>
              <Socials className=""/>
            </div>
            <ProfileImage className="md:col-span-1 h-full" />
          </div>
        </div>

        {/* common rest of page */}
        <div>
          <About />
          <Projects  />
          <Learning />
        </div>
      </div>
    </div>
  )
};

