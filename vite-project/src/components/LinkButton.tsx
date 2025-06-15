type LinkButtonProps = {
  title: string;
  url: string; 
};

export const LinkButton = ({ title, url }: LinkButtonProps) => {
  return (
    
    <a
      href={url}
      target="_blank" 
      rel="noopener noreferrer" // 
      className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-4 rounded-lg w-full text-center transition-colors mb-4 block"
    >
      {title}
    </a>
  );
};
