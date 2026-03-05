import React from "react";

const OurPolicy = () => {
  return (
    <div className="w-full py-12 px-4">
      <div className="relative w-full overflow-hidden rounded-2xl group">
        {/* Image */}
        <img
          src="/images/banner.jpg"
          alt="Brand Banner"
          className="w-full h-[220px] smրվում:h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <p className="text-white text-center text-sm sm:text-lg md:text-2xl font-light max backpage-md">
            Built different. Designed with purpose. <br />
            Every detail stripped back to what truly matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
