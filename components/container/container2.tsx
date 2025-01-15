import CustomPatternSVG from "../Motion/motiondraw";
import RotatingImage from "../rotating";

export default function MainContainer(props: { [x: string]: any; children: any; }) {
    const { children } = props;
  
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hintergrundanimation */}
        <div className="absolute top-0 left-0 w-full h-full  z-0">
        <RotatingImage/>
        </div>
        {/* Fixierter Header */}
        <div className="fixed top-0 left-0 w-full z-50 text-white p-4">
          Header Placeholder
        </div>
  
        {/* Hauptinhalt */}
        <div className="relative z-10 flex flex-col pt-[64px] h-full overflow-y-auto">
          {/* Rotating Image */}
          <div className="relative z-20 bg-red-200 p-4">
            Rotating Image Placeholder
          </div>
  
          {/* Main Content */}
          <main id="skip" className="flex-1 w-full  p-4">
            <div>
                <CustomPatternSVG/>
            </div>
            {children}
          </main>
  
          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4">
            Footer Placeholder
          </footer>
        </div>
      </div>
    );
  }
  