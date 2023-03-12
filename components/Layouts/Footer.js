import SocialLink from "../SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-black-500">
      <div className="container flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <div className="flex items-center space-x-2">
              <p className="text-white">Rafael Modesto</p>

              <p className="text-white"> | {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-white items-center gap-2">
        <SocialLink url="https://github.com/username" type="github" />
        <SocialLink
          url="https://www.linkedin.com/in/username"
          type="linkedin"
        />
        <SocialLink url="https://twitter.com/username" type="twitter" />
      </div>
    </footer>
  );
};

export default Footer;
