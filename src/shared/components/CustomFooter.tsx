
import { Link } from "react-router-dom";


export default function CustomFooter() {
  

const year= new Date();
  return (
    <footer className="py-5 bg-[#E5E3E3] max-[768px]:pr-6 max-[768px]:pl-6">
      <div className="mx-auto md:container">

      <div className="w-full  py-2 bg-[#E5E3E3] lg:px-5 sm:px-4 sm:flex sm:items-center sm:justify-between">
            <div >
            <img src="./dentallogo.png" className="h-20" alt="" />
            </div>
          <div className="flex mt-4 space-x-2 list-none sm:mt-0 text-stone-950 sm:justify-center">
            <div className="mx-auto text-xs text-gray-300">
            </div>
            <div className="mx-auto text-xs text-gray-300">
            <a href=""><img src="./images/social/instagram.png" className="h-6 w-6" alt="" /></a>
             
            </div>
            <div className="mx-auto text-xs text-gray-300">
            <a href=""><img src="./images/social/facebook.png" className="h-6 w-6" alt="" /></a>
             
            </div>
            <div className="mx-auto text-xs text-gray-300">
            <a href=""><img src="./images/social/twitter.png" className="h-6 w-6" alt="" /></a>
             
            </div>
            
          </div>
        </div>

        <div className="grid w-full gap-8 p-4 pb-2 py-8 lg:px-8 lg:grid-cols-4 md:px-6 md:grid-cols-4">
          <div >
            <h2 className="font-semibold">Dental Care</h2>
            <p className="text-sm mt-4">
            Your trusted partner in oral health.
             Offering expert dental services with personalized care in a comfortable, welcoming environment.
            </p>
          </div>
          <div className="text-stone-950 ">
            <h2 className="font-semibold">Contact Us</h2>
            <p className="text-sm mt-4">
            25G/1,Nazareth road near new 
            bus stand, <br />
            Thuthukodi district,<br />
            sathankulam-628704. <br />
            Phone No:9443750377 
            </p>
            <p className="text-sm mt-2">
            230C, Kanagasabapathy Complex ,<br />
            Opp to manaraja Kovil near new bus stand,<br />
            Udangudi Road,  <br />
            Thirunalveli District,<br />
            Tisayanvilai-627657. <br />
            Phone No:9443750377
            </p>
          </div>
          <div >
            <h2 className="font-semibold">Office Hours</h2>
            <p className="text-sm mt-4">
            Mon-Fri: 9.00 AM - 6.00 PM <br />
            Sat: 10.00 AM - 4.00 PM <br />
            Sun: Closed
            </p>
          </div>
          <div className="text-stone-950 ">
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
            <div className="text-stone-950 text-center">
           &copy; Subhadentalcare {year.getFullYear()}. All rights reserved
            </div>
          
        </div>
      </div>
    </footer>
  );
}
