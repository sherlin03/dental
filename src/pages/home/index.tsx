
import VerticalLineWithExpertise from "./components/VerticalLine";
import  { useEffect } from "react";
import AOS from "aos";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
 
  

    return (
        <>
        
        
    <section className="container w-5/6 md:w-4/5 mx-auto relative">
        <img src="./images/home/s5.png" className="h-60 sm:h-[550px] md:h-[600px] lg:h-[650px] w-28 absolute top-24 hidden md:block md:-right-20 lg:-right-28" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" alt="" />

            {/* first block start  */}
            <div >
                <div className="grid w-full gap-8 p-4 pb-2 py-8 lg:px-8 grid-cols-2 md:px-6 mb-8">
                    <div className="grid justify-items-end">
                        <img src="./images/home/s1.png" className="h-52 sm:h-64 md:h-80 lg:h-96 " data-aos="fade-right" data-aos-duration="3000" alt="" />
                    </div>
                    <div className="justify-items-start">
                        <img src="./images/home/s2.png" className="h-52 sm:h-64 md:h-80 lg:h-96 " data-aos="fade-left" data-aos-duration="3000" alt="" />
                    </div>
                </div>
            </div>
            {/* first block End  */}
            {/* intro words start */}
            <div className="justify-items-center mb-8 " data-aos="zoom-in-down" data-aos-duration="1500">

            <p className="text-2xl font-bold text-center"><span className="bg-[rgba(88,215,155,1)] rounded pl-1 pr-0 shadow shadow-[#333635]">Subha Dent</span>al care, Where Your Smile Matters Most!</p>
            <p className="text-center text-sm mt-4">
            We are dedicated to providing exceptional dental care in a comfortable and welcoming environment. We utilize the latest technology and techniques to ensure the highest quality care and optimal results. Whether you're here for a routine check-up or a complete smile makeover, we are committed to helping you achieve and maintain a healthy, beautiful smile.
               </p>
            </div>
            {/* intro words end */}
            {/* Services  start */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ml-5 mb-12 mt-12">
  {/* Left Image Section */}
  <div className="md:col-span-6 flex justify-center">
    <img
      src="./images/home/s3.png"
      className="h-48 sm:h-72 md:h-80 lg:h-96  "
      alt="General Dentistry"
      data-aos="zoom-out-right"
      
    />
  </div>

  {/* Right Text Section */}
  <div className="md:col-span-6" data-aos="zoom-out-left" >
    <p className="text-xl sm:text-3xl font-semibold mt-6 md:mt-12 text-center md:text-left ">
      General Dentistry
    </p>
    <p className="mt-3 sm:mt-5 text-sm sm:text-base">
      Safeguarding oral health through proactive prevention, early diagnosis, and effective
      treatment, guiding patients toward a healthy and attractive smile, and serving as the first
      line of defense with seamless specialist referrals when required.
    </p>
    <ul className="mt-4 space-y-2 sm:space-y-3 list-disc list-inside text-sm sm:text-base">
      <li>Routine dental check-ups and examinations</li>
      <li>Professional teeth cleaning and oral hygiene instructions</li>
      <li>Dental X-rays and diagnostic imaging</li>
      <li>Fillings (composite, amalgam)</li>
    </ul>
  </div>
</div>

            {/* Services  end */}
            {/* dental image start */}
            <div className="justify-items-center">
            <img src="./images/home/s4.png" className="w-full h-60 sm:h-64 md:h-80 lg:h-[600px] " data-aos="flip-right" alt="" /> 
            </div>
            {/* dental image end */}
            {/* why us start */}
            

                <VerticalLineWithExpertise/>


            {/* why us End */}
            
        </section>

        {/* Happy Customers start */}
        <section className="relative mt-24" data-aos="flip-down">
             <div className="relative">
                <img src="./images/home/s11.png" className=" w-full h-[500px] realative" alt="" />

                <img src="./images/home/s10.png" className=" absolute 
                            h-[550px] 
                            top-[-3rem] left-2 sm:left-[10%] md:left-1/4 lg:left-[35%] 
                            sm:top-[-3rem] md:top-[-3rem] lg:top-[-3rem] px-6" alt="" />
                <p className="absolute 
                   text-base sm:text-lg md:text-2xl lg:text-4xl  text-white font-semibold 
                   top-8 sm:top-12 left-[5%] md:left-[8%] lg:left-[10%]  
                   "
                >
                    Happy Customers
                </p>
                <img src="./images/home/s9.png" className="absolute  
                   top-16 sm:top-[80px] md:top-[90px] left-[5%] md:left-[8%] lg:left-[10%] " alt="" />
                    
                    
                    

             </div>

           

        </section>
         {/* Happy Customers end */}

       
            
        
       
        
        </>  
    )
}