import right from "../assets/right.jpg";
import center from "../assets/center.jpg";
import left from "../assets/left.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full lg:h-4/5 ">
      {/* Text Section */}
      <div className="py-4  flex flex-col gap-3 justify-center lg:w-1/2 ">
        <h1 className="nav text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-gray-700">
          NOTHING-R
        </h1>

        <p className="text-lg py-4 bg-slate-200 rounded-xl p-3 text-gray-800">
          _Built different. Designed with purpose.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full  lg:w-1/2 h-1/2 sm:h-1/2 lg:h-full rounded-2xl overflow-hidden">
        <video
          src="/images/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full lg:max-h-max  object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
