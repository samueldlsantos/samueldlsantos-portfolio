import developer from '../img/developer.png'

const Hero = () => {
  return (
    <div className="max-w-6xl mx-3 md:mx-auto place-content-center h-2/3 mt-10">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div>
          <p className="text-white text-5xl">
            Hola, soy{" "}
            <span className="flex felx-column font-bold text-blue-600 text-6xl">
              Samuel de los Santos
            </span>
          </p>
          <p className="text-white text-5xl mt-10 bg-blue-600 p-2 rounded-md font-bold">Desarrollador web</p>
        </div>
        <div className="text-white max-w-sm lg:max-w-lg">
            <img src={developer} alt="Imagen del desarrollador" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
