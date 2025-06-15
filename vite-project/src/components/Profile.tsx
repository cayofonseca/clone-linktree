export function Profile() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        className="w-24 h-24 rounded-full object-cover shadow-md"
        src="cayo.jpg"
        alt="Foto de perfil de Cayo Fonseca"
      />
      <p className="font-semibold text-white text-xl text-center">
        Cayo Fonseca
      </p>
      <p className="text-gray-400 text-sm text-center max-w-xs">
        Desenvolvedor FullStack, apaixonado por tecnologia e pelo ecossistema Javascript e pela filosofia de aprendizado contínuo
      </p>
    </div>
  );
}
