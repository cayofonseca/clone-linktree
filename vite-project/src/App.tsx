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

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-11/12 max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl text-white">
        
       
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

        {/* Ícones sociais */}
        <div className="mt-6">
          <SocialLinks socials={socialLinksData} />
        </div>
      </div>
    </div>
  );
}

export default App;
