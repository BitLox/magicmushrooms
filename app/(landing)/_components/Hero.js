import React from "react";

const Hero = () => {
  return (
    <div className="h-dvh flex items-center justify-center relative">  {/* Already relative, good */}
      <div className="bg-[url(/hero.png)] bg-center bg-cover bg-no-repeat absolute top-0 left-0 h-full w-full -z-10"></div>  {/* Changed fixed to absolute */}
      <h1 className="text-6xl md:text-8xl font-bold text-white glow-text z-10 text-center">
        Magic Mushrooms Coin
      </h1>
    </div>
  );
};

export default Hero;