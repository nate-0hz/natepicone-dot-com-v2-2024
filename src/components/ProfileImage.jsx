import nateImageSlate from '../assets/natepicone-outline-slate-300.png'
import nateImageAmber from '../assets/natepicone-outline-amber-300.png'
import nateImageSky from '../assets/natepicone-outline-sky-950.png'


export default function ProfileImage() {
  return(
    <div className="relative flex justify-center md:h-[224px] lg:h-[305px]">
      <img src={nateImageAmber} className="w-96 pt-6 absolute ml-2 -mt-2" alt="an outline drawing of Nate"></img>
      <img src={nateImageSlate} className="w-96 pt-6 z-1 absolute ml-1 -mt-1" alt="an outline drawing of Nate"></img>
      <img src={nateImageSky} className="w-96 pt-6 absolute " alt="an outline drawing of Nate"></img>
    </div>

  )
}
