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
    <div className="bg-slate-200 text-sky-900 px-6 md:px-0 py-6 md:grid md:grid-cols-7 gap-4">
      <div className=""></div>
      <div className="md:col-span-5">

        {/* mobile screen hero section layout */}
        <div className="md:hidden grid">
          <div className="grid grid-cols-1 grid-rows-2 min-h-0">
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

        {/* tablet hero section layout */}
        <div className="hidden md:block lg:hidden" >
          <HomeHeading className="block place-content-center"/>
          <div className="grid grid-cols-2 grid-rows-1 gap-6 my-16 h-fit">
            <ProfileImage className="" />
            <div className="order-last flex flex-col justify-end">
              <Intro className=""/>
              <Socials className=""/>
            </div>
          </div>
        </div>

        {/* large hero section layout */}
        <div className="hidden lg:block my-32" >
          <div className="grid grid-cols-2 auto-rows-min gap-6">
            <div className="order-last col-span-1 flex flex-col justify-between">
              <HomeHeading className=""/>
              <Intro className=""/>
              <Socials className=""/>
            </div>
            <ProfileImage className="col-span-1 h-full" />
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

