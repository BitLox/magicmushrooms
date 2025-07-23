import React from "react";

const Hero = () => {
  return (
    <div className="h-dvh flex items-center justify-center relative">  {/* Added flex centering and relative for layering */}
      <div className="bg-[url(/hero.png)] bg-center bg-cover bg-no-repeat fixed top-0 left-0 h-full w-full -z-10"></div>
      <h1 className="text-6xl font-bold text-white glow-text z-10">  {/* Added classes for size, color, glow, and z-index */}
        Magic Mushroom Coin
      </h1>
    </div>
  );
};

export default Hero;