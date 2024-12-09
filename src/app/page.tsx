"use client"
import Image from "next/image";
import heroimg from "../../public/muzammil-img.jpg"
import { Typewriter } from "react-simple-typewriter";


export default function Home() {
  return (
    <div className=" sm:flex justify-around py-6 mx-auto  border-2 rounded-3xl
  w-full   bg-gradient-to-r from-blue-200 to-purple-200">

      <div className="w-2/3 sm:w-1/3 my-[5%] mx-auto  
       ">
        <Image className=" opacity-70 rounded-3xl mx-auto  "
          src={heroimg}
          alt="machine"
          height={320}
          width={250}
          style={
            { boxShadow: " 10px 10px 10px rgb(110, 100, 120)", }
          }
          />
        {/* <button className=" w-36 h-10 ml-32 border-1 border-gray-700 bg-white rounded-md my-5 text-sm">Download CV</button> */}

      </div>

      <div className="w-2/3 h-2/3 sm:w-2/5   my-auto mx-auto">
      <h1 className="text-base font-semibold sm:text-xl p-4">     <Typewriter
        words={['Hello, I am Muzammil Hussain']}
        loop={0}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      /></h1>
        <p className="text-sm sm:text-base p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Error ea magnam nam pariatur minima similique
          neque quibusdam, itaque natus repudiandae.</p>
      </div>
    </div>
  );
}