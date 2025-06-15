import { LinkButton } from "./components/LinkButton";
import { Profile } from "./components/Profile";
import { SocialLinks } from "./components/SocialLinks";


const links = [
  { title: 'Meu GitHub', url: 'https://github.com/SEU-USUARIO-AQUI' },
  { title: 'Meu LinkedIn', url: 'www.linkedin.com/in/cayo-cesar-305b70350' },
  { title: 'Meu Instagram', url: 'https://www.instagram.com/cayolfonseca/' },
  
];

function App() {
  return (
    <div className="bg-gray-600 min-h-screen flex flex-col items-center pt-16 px-4">
      <Profile />

      <div className="w-full max-w-xs mt-8">
        
        {links.map((link) => (
          <LinkButton
            key={link.title} // 
            title={link.title}
            url={link.url}
          />
        ))}
      </div>

      <SocialLinks />
    </div>
  );
}

export default App;