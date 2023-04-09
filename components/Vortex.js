import dynamic from "next/dynamic";
import ParallaxWrapper from "./Layouts/ParallaxWrapper";
import ScrollAnimationWrapper from "./layouts/ScrollAnimationWrapper";
const GeometricSketch = dynamic(() => import("./GeometricSketch"), {
  ssr: false,
});

const Vortex = () => {
  return (
    <div
      className="relative bg-black-500 p-6 md:p-20 min-h-screen flex items-center justify-center"
      id="vortex"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full max-w-7xl gap-6">
        {/* First quadrant */}

        <ScrollAnimationWrapper>
          <div className="col-start-1 row-start-1">
            <h2 className="text-white text-2xl md:text-3xl">
              <span className="text-blue">Skills</span> and Tools
            </h2>
            <p className="pt-2 text-white tracking-wide font-acumin">
              For a more detailed overview, please feel free <br /> to check the
              tools used in <span className="text-blue"> each project.</span>
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Second quadrant */}
        <ParallaxWrapper>
          <ScrollAnimationWrapper>
            <div className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 bg-black-500 p-6">
              <div className="h-full flex items-center justify-center mt-12 md:mt-0">
                <GeometricSketch />
              </div>
            </div>
          </ScrollAnimationWrapper>
        </ParallaxWrapper>

        {/* Third quadrant */}
        <ScrollAnimationWrapper>
          <div className="col-start-1 md:col-start-1 row-start-3 md:row-start-2 bg-black-500 p-6">
            <div className="h-full flex items-center justify-center">
              <GeometricSketch />
            </div>
          </div>
        </ScrollAnimationWrapper>
        {/* Fourth quadrant */}
        <ScrollAnimationWrapper>
          <div className="col-start-1 row-start-4 md:col-start-2 md:row-start-2">
            <div className="text-white flex flex-wrap justify-center items-center">
              <span className="text-xl md:text-2xl opacity-70 mb-6">
                TailwindCSS
              </span>
              <span className="text-2xl md:text-3xl opacity-80 mr-6">
                Adobe Xd
              </span>
              <span className="text-3xl md:text-4xl opacity-90 mb-6">
                JavaScript
              </span>
              <span className="text-4xl md:text-5xl opacity-100">Nextjs</span>
              <span className="text-3xl md:text-4xl opacity-90 mt-6">git</span>
              <span className="text-2xl md:text-3xl opacity-80 ml-6">
                React
              </span>
              <span className="text-xl md:text-2xl opacity-70 mt-6">
                MongoDB
              </span>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Vortex;
