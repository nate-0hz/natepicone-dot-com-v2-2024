import Intro from '../components/Intro';
import About from '../components/About';
import Learning from '../components/Learning';
import Socials from '../components/Socials';
import './Home.css';
import nateImage from '../assets/nate-image-crop.png'
import Projects from '../components/Projects';

//  use: https://stackoverflow.com/questions/74393652/tailwind-grid-height



export default Home
function Home() {
  return (
    <div className="bg-sky-950 px-6 py-6 md:grid md:grid-cols-7 md:grid-rows-1 gap-4 " >
      <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 md:fixed md:max-w-72" >
        <Intro />
        <img src={nateImage} className="w-96 pt-6" alt="an outline drawing of Nate"></img>
        <Socials />
      </div>
      <div className="md:col-start-5 lg:col-start-4 md:col-end-8 md:row-start-1 md:row-end-2">
        <About />
        <Projects  />
        <Learning />
      </div>
    </div>
  )
};

