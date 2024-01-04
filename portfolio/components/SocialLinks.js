import { Icon } from 'react-icons';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNextjs  } from 'react-icons/fa';

const SocialLink = ({ url, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return <FaGithub className="w-6 h-6" />;
      case 'linkedin':
        return <FaLinkedin className="w-6 h-6" />;
      case 'twitter':
        return <FaTwitter className="w-6 h-6" />;
  
      default:
        return null;
    }
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {getIcon()}
    </a>
  );
};

export default SocialLink;

