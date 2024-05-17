import developer from '../img/sam1cropped.jpeg'

type HeroProps = {
  name: string,
  profession: string
}

const Hero = ({name, profession} : HeroProps) => {
  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto place-content-center h-screen">
      <div className="flex justify-between items-center flex-col gap-5 lg:flex-row">
        <div>
          <h1 className="text-white text-5xl font-thin">
            Hola, soy{" "}
            <span className="flex felx-column font-bold text-blue-600 text-6xl">
              {name}
            </span>
          </h1>
          <p className="text-white text-4xl mt-10 bg-blue-600 p-2 rounded-md font-bold">{profession}</p>
        </div>
        <div className="max-w-xs lg:max-w-md">
            <img className='rounded-lg' src={developer} alt="Imagen del desarrollador" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
