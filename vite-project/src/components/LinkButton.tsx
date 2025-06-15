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
      className="block w-full text-center bg-violet-500 hover:bg-violet-600 text-white font-semibold py-4 px-6 rounded-xl transition duration-200 ease-in-out transform hover:scale-105 shadow"
    >
      {title}
    </a>
  );
};
