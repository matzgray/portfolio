export default function Contact() {
    return (<div className="
      md:flex justify-around mx-auto my-auto py-10 ">
          
      <br />

{/* left side */}
<div className="text-3xl w-full md:w-1/2  border-2 border-gray-600 mx-auto ">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1731697184256!5m2!1sen!2s" width="600" height="450" 
className="w-full p-8 sm:p-14"></iframe>
</div>
{/* right side */}
<br />
<div className="bg-white flex flex-col p-5  rounded-xl w-[80%] h-auto md:w-1/3 mx-auto border-2 border-gray-700">
  <input className="my-2 border border-1 border-gray-300 p-3 rounded-md 
  focus:outline-1 outline-blue-600 hover:bg-blue-100" 
  type="text" placeholder="Name" />
  <input className="my-2 border border-1 border-gray-300 p-3 rounded-md
  focus:outline-1 outline-blue-600 hover:bg-blue-100" 
  type="email" placeholder="Enter Your Email Address" />

 <p><textarea className="my-2 border border-1 border-gray-300 p-3 rounded-md w-[100%]
  focus:outline-1 outline-blue-600 hover:bg-blue-100" 
   name="Comments" cols={42} rows={5} placeholder="Message" ></textarea></p> 


 <button className="bg-blue-600 my-4 py-2 text-base sm:text-lg sm:font-bold text-white 
 rounded-md hover:bg-green-500  px-2 mx-auto w-full sm:w-2/3 h-12 ">Send Message </button>
 
</div>
<br />
</div>
  

      
     
    )}