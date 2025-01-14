import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { TbLocationMinus } from "react-icons/tb";

export const Hero = () => {
  return (
   <div className='pb-20 pt-36'>

    <div>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="-top-40 left-full h-[80vh] w-[50vw] " fill="amber" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
    </div>

    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>

    <div className="flex justify-center relative my-20 z-10" >
      <div className="max-w-[89w] md:max-2xl lg:max-w[60w] flex flex-col items-center justify-center">

        <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-black max-w-80">Join Our Vibrant Community</h2>

        <TextGenerateEffect className=" text-center text-[40px] md:text-5xl lg:text-6xl"
        words="Connecting People Through Culture"
        >
        </TextGenerateEffect>

        <p className="text-center dark:text-white text-black-100 md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        Participate in enriching cultural events and be a part of something special.
        </p>

        <a
        href="#events"
        >
        <MagicButton 
          title="Discover Events"
          position="right"
          icon={<TbLocationMinus/>}
        />
        </a>
        
      </div>

    </div>

   </div>
  )
}
