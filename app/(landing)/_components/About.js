import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14">
            About MYCO
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`Magic Mushrooms`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">MYCO</span> is the meaning of the Magic Mushroom token! Did you know mushrooms can heal the body{" "}
                <span className="font-semibold italic">{'and'}</span>{" "}the mind! Not to mention MYCO helps you to get on board with generational wealth.{" "}
              </p>
              <p className="indent-12 mt-3">
                Climb on board the Magic Mushroom express for the ride of your life and we head to the moon or{" "}
                <span className=" italic font-bold">parts unknown</span> with an adventurous spirit!.
              </p>
              <p className="indent-12 mt-3">
                Whether it is a personal journey or party time, you know it is going to be deep 🍄</p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            Our team also wants to spread the word about how <span className="text-3xl font-bold">Magic Mushrooms</span>{" "}
            help heal PTSD{" "}
            <span className="italic font-semibold">so we will be donating a portion of proceeds</span>,
            to charitable causes in this area.
          </p>
          <p className="text-4xl p-10">
            Now{" "}
            <span className="text-5xl font-bold underline decoration-duis">
              MYCO
            </span>{" "}
            is growing on{" "}
            <span className="text-5xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
