import Image from "next/image";
import SocialLink from "./SocialLinks";

const About = () => {
  return (
    <section className="h-screen md:h-auto" id="about">
      <div className="flex flex-col md:flex-row h-full">
        <div className="bg-black-500 w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/assets/rafael.jpg"
            alt="Rafael"
            width={400}
            height={400}
            className="rounded-md z-10"
          />
        </div>
        <div className="bg-white w-full h-1/2 md:h-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="mb-4 font-acumin">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="mb-4 font-acumin">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex text-black-500 space-x-3">
            <SocialLink url="https://github.com/username" type="github" />
            <SocialLink
              url="https://www.linkedin.com/in/username"
              type="linkedin"
            />
            <SocialLink url="https://twitter.com/username" type="twitter" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
