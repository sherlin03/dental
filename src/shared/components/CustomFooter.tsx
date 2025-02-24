
import { Link } from "react-router-dom";


export default function CustomFooter() {
  

const year= new Date();



  return (
    <footer className="py-5 bg-[#E5E3E3] max-[768px]:pr-6 max-[768px]:pl-6">
      <div className="mx-auto md:container">

      <div className="w-full  py-2 bg-[#E5E3E3] lg:px-5 mt-8 sm:mt-10 sm:px-4 sm:flex sm:items-center sm:justify-between">
            <div >
            <img src="./dentallogo.svg" className="h-24" alt="" />
            </div>
          <div className="flex -mt-12 space-x-2 list-none sm:mt-0 text-stone-950 sm:justify-center mr-10 sm:mr-0">
            <div className="mx-auto text-xs text-gray-300">
            </div>
            <div className="mx-auto text-xs text-gray-300">
            <a href="https://www.instagram.com/"><img src="./images/social/instagram.png" className="h-6 w-6" alt="" /></a>
             
            </div>
            <div className="mx-auto text-xs text-gray-300">
            <a href="https://www.facebook.com/"><img src="./images/social/facebook.png" className="h-6 w-6" alt="" /></a>
             
            </div>
            <div className="mx-auto text-xs text-gray-300">
            <a href="https://x.com/?lang=en&mx=2"><img src="./images/social/twitter.png" className="h-6 w-6" alt="" /></a>
             
            </div>
            
          </div>
        </div>

        <div className="grid w-full gap-2  pb-2  pl-5 pr-5  mt-8 sm:mt-0 grid-cols-1 lg:grid-cols-12  ">
          <div className="pl-0 lg:pl-4 col-span-2 lg:col-span-5" >
            <h2 className="font-semibold">Dental Care</h2>
            <p className="text-sm text-justify mt-4">
            Your trusted partner in oral health.
             Offering expert dental services with personalized care in a comfortable, welcoming environment.
            </p>
          </div>

          <div className="text-stone-950 pl-0 lg:pl-4 col-span-2 lg:col-span-3">
            <h2 className="font-semibold">Contact Us</h2>
            <p className="text-sm text-justify md:text-start mt-4 ">
            25G/1,Nazareth road near new 
            bus stand, <br/>
            Tuticorin District,
            Sathankulam-628704. <br/> 
            Phone No:+91 9443750377. 
            </p>
            
          </div>

          <div className="pl-0 lg:pl-2 col-span-2">
            <h2 className="font-semibold">Clinic Timings</h2>
            <p className="text-sm mt-4">
            Mon-Sat: 9.00AM - 8.30PM <br />
            Sun: 10.00 AM - 3.00 PM <br />
           
            </p>
          </div>

          <div className="text-stone-950 pl-0 lg:pl-4 col-span-2">
            <h2 className="font-semibold">Quick Links</h2>

            <ul className="list-disc list-inside ml-4 mt-4">
            <li><Link to="/" className="text-sm">Home</Link></li>
            <li><Link to="/about" className="text-sm">About</Link></li>
            <li><Link to="/service" className="text-sm">Service</Link></li>
            <li><Link to="/patientExperience" className="text-sm">Patient Experience</Link></li>
            <li><Link to="/contact" className="text-sm">Contact Us</Link></li>
        </ul>
          </div>
        </div>
       
        
        <div className="
    w-full 
    p-4 
    py-6 
    bg-[#E5E3E3] 
    lg:px-8 
    sm:px-4 
    grid 
    justify-items-center 
    sm:grid-cols-1 
    sm:justify-between

  ">
            <div className="text-sm  text-stone-950 justify-self-center md:justify-self-start">
           &copy; Subhadentalcare {year.getFullYear()}. All rights reserved
            </div>
          
        </div>
      </div>
    </footer>
  );
}
