import React, { useEffect, useRef } from "react";
import right from "../assets/right.jpg";
import center from "../assets/center.jpg";
import left from "../assets/left.jpg";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays smoothly
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow motion effect for cinematic feel
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
      {/* Text Section */}
      <div className="flex flex-col gap-4 lg:gap-6 justify-center lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
        {/* Dot matrix pattern behind text */}
        <div
          className="absolute left-0 opacity-20 pointer-events-none hidden lg:block"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #9ca3af 1px, transparent 0)`,
            backgroundSize: "30px 30px",
            width: "300px",
            height: "300px",
            zIndex: 0,
          }}
        ></div>

        <div className="relative z-10">
          {/* Glyph corner decoration */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-gray-300"></div>

          <h1 className="font-light tracking-[-0.02em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gray-900 leading-none">
            <span className="block">NOTHING</span>
            <span className="block text-gray-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
              -R
            </span>
          </h1>

          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-gray-300"></div>
        </div>

        {/* Glyph line */}
        <div className="w-24 h-px bg-gray-300 my-4"></div>

        <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed tracking-wide">
          _Built different.
          <span className="block mt-2 text-gray-400">
            Designed with purpose.
          </span>
        </p>

        {/* CTA Button with glyph style */}
        <div className="mt-6 flex gap-4">
          <button className="group relative px-8 py-4 bg-gray-900 text-white text-sm tracking-[0.2em] uppercase overflow-hidden">
            <span className="relative z-10">Explore</span>
            <div className="absolute inset-0 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            {/* Glyph corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40"></div>
          </button>

          <button className="px-8 py-4 border border-gray-300 text-gray-700 text-sm tracking-[0.2em] uppercase hover:border-gray-900 hover:text-gray-900 transition-colors duration-300">
            Discover
          </button>
        </div>

        {/* Glyph indicator dots */}
        <div className="flex space-x-2 mt-8">
          <div className="w-1 h-1 bg-gray-400"></div>
          <div className="w-1 h-1 bg-gray-300"></div>
          <div className="w-1 h-1 bg-gray-200"></div>
          <div className="w-1 h-1 bg-gray-300"></div>
          <div className="w-1 h-1 bg-gray-400"></div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[80vh] order-1 lg:order-2 rounded-2xl overflow-hidden group">
        {/* Glyph corners around video */}
        <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gray-300 z-10"></div>
        <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-gray-300 z-10"></div>
        <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-gray-300 z-10"></div>
        <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gray-300 z-10"></div>

        {/* Video container with overlay */}
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src="/images/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dot matrix overlay on video */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>

          {/* Gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        {/* Video caption */}
        <div className="absolute bottom-4 left-4 text-white/60 text-xs tracking-wider uppercase">
          _Nothing (R) Edition
        </div>

        {/* Play indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 border border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-white border-b-4 border-b-transparent ml-1"></div>
        </div>
      </div>

      {/* Floating glyph lines */}
      <div className="absolute left-0 bottom-20 w-32 h-32 border-l-2 border-b-2 border-gray-200 hidden lg:block"></div>
      <div className="absolute right-0 top-20 w-32 h-32 border-r-2 border-t-2 border-gray-200 hidden lg:block"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-400 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gray-300"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
