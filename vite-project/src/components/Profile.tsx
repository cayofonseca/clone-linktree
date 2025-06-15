function Profile() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-24 h-24 rounded-full object-cover"
        src="/image.jpg"
        alt="Foto de perfil"
      />
     
      <p className="font-bold text-white text-center mt-4">
        Cayo Fonseca
      </p>
    </div>
  );
}

export { Profile };