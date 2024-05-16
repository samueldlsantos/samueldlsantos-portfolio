import developer from '../img/developer.png'

const About = () => {
  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto mt-10">
      <h2 className="text-white text-center text-4xl font-bold mb-5">
        Sobre mi
      </h2>

      <div className="flex gap-3 items-center">
        <div className="w-1/3">
            <img src={developer} alt="Imagen dev" />
        </div>
        <div className=" w-2/3">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            recusandae minima sapiente dolorem, nisi obcaecati est repudiandae
            aperiam at eaque. Praesentium fugit esse est earum error quia harum
            corporis voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
