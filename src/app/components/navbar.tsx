

import Link from "next/link";

const Navbar = () => {
    return (

        <div
            className="  flex flex-col justify-between  md:flex-row lg:flex-row  :my-10 md:my-9 lg:my-5 px-8  mx-auto "
            style={{
                boxShadow: " 1px,1px 20px 20px blue)",

            }}>
            <div className="text-center text-5xl ">
                <div className="border-b-2 border-black sm:border-0 md:border-0 lg-border-0 xl:border-0 py-2 ">
                  
                    <h4 className="mx-auto pl-10% mt-3 text-4xl">Muzammil Hussain</h4>

                </div>

            </div>
            <div>
                <div className="flex flex-col justify-between text-center md:flex-row lg:flex-row p-10 sm:p-20 md:p-0 lg:p-0 ">
                    <button className="p-3  sm:my-1 text-xl bg-white hover:bg-blue-200 rounded-md"><Link href="/">Home</Link></button>
                    <button className="p-3 sm:my-1 text-xl  bg-white hover:bg-blue-200 rounded-md"><Link href="/about">About</Link></button>
                    <button className="p-3 sm:my-1 text-xl  bg-white hover:bg-blue-200 rounded-md"><Link href="/contact">Contact</Link></button>

                </div>
            </div>
        </div>

    );
}
export default Navbar