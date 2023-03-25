import dynamic from "next/dynamic";
import ButtonOutline from "./ButtonOutline";

const Sketch = dynamic(() => import("./Sketch"), { ssr: false });

const Hero = () => {
  return (
    <section className="hero relative bg-black-500 flex items-center justify-center min-h-screen bg-gray-900">
      <div className="sketch-wrapper absolute w-full h-full inset-0 overflow-hidden z-0">
        <Sketch />
      </div>
      <div className="hero__content relative z-10 p-4">
        <h1 className="hero__title text-5xl tracking-wider text-white">
          Hello, I'm <span className="text-blue">Rafael</span>
        </h1>
        <p className="hero__subtitle text-white font-acumin tracking-wide text-2xl pt-3">
          I'm a Web Developer based in NYC
        </p>
        <p className="text-sm text-white font-acumin tracking-widest font-thin pt-3">
          {" "}
          I'm passionate about building{" "}
          <span className="text-blue"> interactive</span> web applications.
        </p>
        <div className="pt-5">
          <ButtonOutline text="View my work" className="pt-3" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
