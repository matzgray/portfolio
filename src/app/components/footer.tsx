export default function Footer() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-between  sm:flex-row lg:flex-row py-10 pl-[10%] 
   bg-white font-light text-sm"  >
          <div className="  text-left   flex flex-col 
          -ml-[6] 
         
           ">
            <h1 className="font-bold">Contact us:</h1>
            <p>Email:muzammil123@gmail.com</p>
            <p>Phone No:987654321</p>
            <p>Karachi, Pakistan</p>
          </div><br /><br />
          <div className="flex flex-col -mt-12 sm:mr-20
          -ml-[6]">
          
              <ul>
                <li className="flex"><h1 className="font-bold mt-12">Follow us:</h1></li>
                <li>Facebook</li>
                <li>instagram</li>
                <li>linkedInn</li>
              </ul>
        




          </div>

        </div>


      </div>
      <p className="text-sm text-center py-4 px-4
     
     
 
 bg-black
 text-white">Copyright 2022 Portfolio All Rights Reserved  |  Created By : Muzammil Hussain</p>
 
    </div>
  );

}
