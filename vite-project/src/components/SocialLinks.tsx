import React from 'react';

type SocialLink = {
  url: string;
  icon: React.ReactNode;
};

type SocialLinksProps = {
  socials: SocialLink[];
};

export const SocialLinks = ({ socials }: SocialLinksProps) => {
  return (
    <div className="flex justify-center gap-6 mt-8">
      {socials.map((social, index) => (
        <a
          key={social.url}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Acessar rede social ${index + 1}`}
          className="text-gray-400 hover:text-white transition duration-200 transform hover:scale-110 cursor-pointer"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
