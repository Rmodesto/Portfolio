import dynamic from "next/dynamic";

const GeometricSketch = dynamic(() => import("./GeometricSketch"), {
  ssr: false,
});

const Vortex = () => {
  return (
    <div className="relative bg-black-500 p-20 min-h-screen">
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        {/* First quadrant */}
        <div className="col-span-2 md:col-span-1 md:row-span-1">
          <h2 className="text-white text-3xl">
            <span className="text-blue">Skills</span> and Tools
          </h2>
          <p className="pt-2 text-white tracking-wide font-acumin">
            For a more detailed overview, please feel free <br /> to check the
            tools used in <span className="text-blue"> each project.</span>
          </p>
        </div>

        {/* Second quadrant */}
        <div className="col-span-1 md:col-span-1 md:row-span-2">
          <div className="h-full flex items-center justify-center">
            <GeometricSketch />
          </div>
        </div>

        {/* Third quadrant */}
        <div className="col-span-1 md:col-span-1 md:row-span-2">
          <div className="h-full flex items-center justify-center">
            <GeometricSketch />
          </div>
        </div>

        {/* Fourth quadrant */}
        <div className="col-span-2 md:col-span-1 md:row-span-1">
          <div className="relative">
            <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-wrap justify-center items-center">
                <span className="text-2xl opacity-70 mb-6">TailwindCSS</span>
                <span className="text-3xl opacity-80 mr-6">Adobe Xd</span>
                <span className="text-4xl opacity-90 mb-6">JavaScript</span>
                <span className="text-5xl opacity-100">Nextjs</span>
                <span className="text-4xl opacity-90 mt-6">git</span>
                <span className="text-3xl opacity-80 ml-6">React</span>
                <span className="text-2xl opacity-70 mt-6">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vortex;
