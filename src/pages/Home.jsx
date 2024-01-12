import Intro from '../components/Intro';
import About from '../components/About';
import Learning from '../components/Learning';
import './Home.css';
import Projects from '../components/Projects';

function Home() {
  return (
    <div className="bg-sky-950 px-6 py-6 " >
      <Intro />
      <About />
      <Projects />
      <Learning />
    </div>
  )
};

export default Home