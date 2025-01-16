import { Children } from "react";
import AnimatedBackground from "../Motion/motionbackround";
import CustomPatternSVG from "../Motion/motiondraw";
import RotatingImage from "../rotating";

export default function MainContainer(props: { [x: string]: any; children: any; }) {
    const { children } = props;
  
    return (
      <div className="relative  w-full h-screen overflow-hidden">
        <AnimatedBackground/>
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <CustomPatternSVG/>
            </div>
        {/* Hintergrundanimation */}
        
        {/* Fixierter Header */}
        <div className="fixed top-0 w-full h-[80px] flex items-center justify-center w-full z-50">
      <img
        src="/Logo_web_11.svg" // Pfad zu SVG, ohne './public'
        alt="Logo"
        className="h-[50px] w-auto"
      />
        </div>
  
        {/* Hauptinhalt */}
        <div className="relative z-10 flex flex-col pt-[64px] h-full overflow-y-auto">
  
          {/* Main Content */}
          <main id="skip" className="flex-1 w-full  p-4">
          
          <div className="absolute right-0 top-20 flex flex-col items-start space-y-16 z-20" 
          style={{ marginTop: '20' }}
          >
    <button className="w-20 h-8 bg-black text-white rounded-sm shadow-md flex items-center justify-center transform rotate-90">
        FAQ
    </button>
    <button className="w-20 h-10 bg-black text-white rounded-sm shadow-md flex items-center justify-center transform rotate-90">
        Tickets
    </button>
    <button className="w-20 h-10 bg-black text-white rounded-sm shadow-md flex items-center justify-center transform rotate-90">
        Location
    </button>
    <button className="w-20 h-10 bg-black text-white rounded-sm shadow-md flex items-center justify-center transform rotate-90">
        Contact
    </button>
    
</div>
<div className="">
    {children}
</div>




          </main>
  
          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4">
            Footer Placeholder
          </footer>
        </div>
      </div>
    );
  }
  