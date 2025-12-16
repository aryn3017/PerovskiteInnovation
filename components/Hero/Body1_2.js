import React from "react";
import { useState } from "react";
import Image from "next/image";
import { GiArmorUpgrade } from "react-icons/gi";
import { PiHeartBreakDuotone } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";
import { FaFileShield } from "react-icons/fa6";
import CountUp from "react-countup";
const Body1_2 = () => {
  return (
    <div className="bg-white grid lg:grid-cols-2 mmd:grid-rows-2 md:px-10% px-10">
      <div className="px-10 items-center justify-center flex">
        <Image
          className="rounded-3xl"
          src="/body1_2.png"
          alt="Error loading the image"
          width={800}
          height={1080}
        />
      </div>
      <section className="text-gray-600 items-center justify-center my-auto bg-gray-200 p-6 ssm:mt-3 mmd:mt-3">
        <div className="rounded-xl">
          <div className=" text-center w-full">
            <h1 className="sm:text-5xl text-3xl font-medium text-gray-400 font-limelight pb-6 ">
              PSI by Numbers
            </h1>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <div className="p-4 w-full text-center">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-xl">
                  <GiArmorUpgrade
                    size={60}
                    className="text-indigo-500 mx-auto"
                  />

                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    <CountUp start={0} end={30} duration={10} delay={2} />%
                  </h2>
                  <p className="leading-relaxed">Efficiency</p>
                </div>
              </div>
              <div className="p-4 w-full text-center">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-xl">
                  <PiHeartBreakDuotone
                    size={60}
                    className="text-indigo-500 mx-auto"
                  />
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    Decades
                  </h2>
                  <p className="leading-relaxed">of Durabiliity</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="p-4 w-full text-center">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-xl">
                  <FaFileShield size={60} className="text-indigo-500 mx-auto" />
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    10+
                  </h2>
                  <p className="leading-relaxed">Patents</p>
                </div>
              </div>
              <div className="p-4 w-full text-center">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-xl">
                  <LiaAwardSolid
                    size={60}
                    className="text-indigo-500 mx-auto"
                  />
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    5+
                  </h2>
                  <p className="leading-relaxed">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body1_2;
