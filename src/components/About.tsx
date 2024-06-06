import developer from '../img/sam3cropped.jpeg'

type AboutProps = {
  introduction: string
}
const About = ({introduction} : AboutProps) => {
  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto mt-20">
      <h2 className="text-bluechill-50 text-center text-4xl font-bold mb-5">
        Sobre mi
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="max-w-xs md:w-1/3">
            <img className='rounded-lg' src={developer} alt="Imagen dev" />
        </div>
        <div className=" md:w-2/3 backdrop-blur-xl backdrop-brightness-75 bg-white/20 p-10 rounded-lg md:h-72 place-content-center">
          <p className="text-bluechill-50">
            {introduction}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
