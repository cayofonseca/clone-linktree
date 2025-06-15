import { LinkButton } from "./components/LinkButton";
import { Profile } from "./components/Profile";
import { SocialLinks } from "./components/SocialLinks";

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const links = [
  { title: 'Meu GitHub', url: 'https://github.com/cayofonseca' },
  { title: 'Meu LinkedIn', url: 'https://www.linkedin.com/in/cayo-cesar-305b70350' },
  { title: 'Meu Instagram', url: 'https://www.instagram.com/cayolfonseca/' },
];

const socialLinksData = [
  { url: 'https://github.com/cayofonseca', icon: <FaGithub size={24} /> },
  { url: 'https://www.linkedin.com/in/cayo-cesar-305b70350', icon: <FaLinkedin size={24} /> },
  { url: 'https://www.instagram.com/cayolfonseca/', icon: <FaInstagram size={24} /> },
];

export function App() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl text-white">
        
        <Profile />

        <div className="w-full mt-8 flex flex-col gap-4">
          {links.map((link) => (
            <LinkButton
              key={link.title}
              title={link.title}
              url={link.url}
            />
          ))}
        </div>

        <div className="mt-6">
          <SocialLinks socials={socialLinksData} />
        </div>
      </div>
    </div>
  );
}

export default App;
