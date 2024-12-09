import Image from "next/image";
import mypicture from "../../../public/muzammil-img.jpg"
export default function About() {
    return (
       
        ///////////////Light side///////////////////////////////////////
        <div className=" sm:flex items-center justify-around bg-gradient-to-r from-purple-100 to-blue-100 border-2 rounded-md">
            <div className=" sm:w-1/3" >
              
            
                <Image className=" overflow-hidden"
                    src={mypicture}
                    alt="machine"
                    height={700}
                    width={700}
                />
            </div>
        
            {/* right side///////////////////////////////////////////// */}

            <div className="sm:w-2/4 py-6">
            
             <h1 className="text-lg font-semibold sm:text-xl px-6">About Me</h1>
             <p className="text-sm sm:text-base px-6">Hello I am Muzammil Hussain, <br />A highly skilled front-end web developer with 5+ years of experience in building responsive , user friendly interfaces for web applications. Proficient in HTML, CSS3, JavaScript, and popular frame work like React.js next.js and Angular. Passionate about staying up to date with the latest industry trends and technologies.</p>
        </div>
        </div>

    );
}