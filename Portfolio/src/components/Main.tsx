import React from "react";
import ParticlesBackground from "./Particles";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";



function Main() {
  return (
    <div className="h-[100vh] w-full flex justify-center p-5">
      <div className="text-3xl font-bold pt-10">
        <p>Hi</p>
        <p>
          I am
          <span className="text-blue-600">&nbsp; Aashik Gautam</span>
        </p>
        <p>I am a Full Stack Developer</p>

        <div>

<FaGithubSquare className="bg-black"/>

        </div>
      </div>

      <div className="flex ">
        <Image
          src={"/avatar2.png"}
          height={1000}
          className="h-125 w-auto bg-transparent object-cover"
          unoptimized
          width={1000}
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Main;
