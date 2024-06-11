import { usePortfolio } from '../hooks/usePortfolio';
import developer from '../img/sam3cropped.jpeg'

const About = () => {
  const { state } = usePortfolio();

  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto mt-20">
      <h2 className="text-textBase text-center text-4xl font-bold mb-5">
        Sobre mi
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="max-w-xs md:w-1/3">
            <img className='blob about rounded-lg' src={developer} alt="Imagen dev" />
        </div>
        <div className=" md:w-2/3 backdrop-blur bg-backdrop p-10 rounded-lg md:h-72 place-content-center shadow">
          <p className="text-textBase">
            {state.personalInformation.introduction}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
