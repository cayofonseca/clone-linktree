type LinkButtonProps = {
  title: string;
  url: string;
};

export const LinkButton = ({ title, url }: LinkButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Acessar ${title}`}
      className="block w-full text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-200 ease-in-out transform hover:scale-105 shadow-md"
    >
      {title}
    </a>
  );
};
