
import VerticalLineWithExpertise from "./components/VerticalLine";
import  { useEffect } from "react";
import AOS from "aos";
import GenServices from "./components/GenServices";
import TypingEffectHead from "./components/TypingEffectHead";
import DentalTheme from "./components/DentalTheme";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
 
  

    return (
        <>
        
        
    <section className="container w-5/6 md:w-4/5 mx-auto relative">
        {/* <img src="./images/home/s5.png" className="h-60 sm:h-[550px] md:h-[600px] lg:h-[650px] w-28 absolute top-24 hidden md:block md:-right-20 lg:-right-28" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" alt="" /> */}
          <div className="h-60 sm:h-[550px] md:h-[600px] lg:h-[650px] w-28 absolute top-24 hidden md:block md:-right-20 lg:-right-28">
         
          <TypingEffectHead/>
          </div>


            {/* first block start  */}
            <div >
                <div className="grid w-full gap-2 p-4 pb-2 py-8 lg:px-8 grid-cols-3 md:px-6 mb-8">
                    <div className="grid justify-items-end">
                        <img src="./images/home/s1.png" className="h-44 sm:h-56 md:h-80 lg:h-96 transition-transform duration-1000 !hover:scale-[1.1]"
      data-aos="zoom-in-up"  data-aos-duration="3000" alt="" />
                    </div>
                    <div className="justify-items-center">
                        <img src="./images/home/s2.png" className="h-44 sm:h-56 md:h-80 lg:h-96 transition-transform duration-1000 !hover:scale-[1.1]"
      data-aos="zoom-in-up" data-aos-duration="3000" alt="" />
                    </div>
                    <div className="justify-items-start">
                        <img src="./images/home/s12.png" className="h-44 sm:h-56 md:h-80 lg:h-96 transition-transform duration-1000 hover:scale-[1.1]"
      data-aos="zoom-in-up" data-aos-duration="3000" alt="" />
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
           
              <GenServices/>
            {/* Services  end */}

            {/* dental image start */}
            {/* <div className="justify-items-center">
            <img src="./images/home/s4.png" className="w-full h-60 sm:h-64 md:h-80 lg:h-[600px] " data-aos="flip-right" alt="" /> 
            </div> */}
{/* 
            <div className="justify-items-center">
                  <img src="./images/home/s4.png" className="w-full h-60 sm:h-64 md:h-80 lg:h-[600px] "  alt="" /> 
            </div> */}

            <DentalTheme/>

            {/* dental image end */}

            {/* why us start */}
    
                <VerticalLineWithExpertise/>

            {/* why us End */}
            
        </section>

        {/* Happy Customers start */}
        <section className="relative mt-24" >
             <div className="relative">
                <img src="./images/home/s11.png" className=" w-full max-[490px]:h-[300px] h-[500px] realative" alt="" />

                <img src="./images/home/Mask group.png" className=" absolute 
                           max-[490px]:h-[350px] h-[550px] 
                            top-[-3rem] max-[490px]:left-[25%] left-[15%] sm:left-[20%] md:left-1/4 lg:left-[35%] 
                            sm:top-[-3rem] md:top-[-3rem] lg:top-[-3rem] px-6 transition-transform duration-1000 hover:scale-[1]" alt="" />
                <img src="./images/home/Group 104.png" className=" absolute max-[490px]:w-24 w-48 max-[490px]:h-16 h-32 bottom-[30%] max-[490px]:left-[25%] left-[15%] md:left-[17%] lg:left-[30%] xl:left-[32%] transition-transform duration-1000 hover:scale-[1.2]" />
                <img src="./images/home/Group 102.png" className=" absolute max-[490px]:w-28 w-56 max-[490px]:h-16 h-36 bottom-[-5%] max-[490px]:left-[15%] left-[5%] md:left-[10%] lg:left-[24%] xl:left-[26%]  transition-transform duration-1000 hover:scale-[1.2]" />

                <img src="./images/home/Group 106.png" className=" absolute w-40 max-[490px]:w-20 max-[490px]:h-12 h-24  bottom-[28%] max-[490px]:right-[15%] right-[10%] sm:right-[18%] md:right-[22%] lg:right-[25%] xl:right-[31%] 2xl:right-[39%]  transition-transform duration-1000 hover:scale-[1.2]" />

                <img src="./images/home/Group 74.png" className=" absolute max-[490px]:w-20 w-40 max-[490px]:h-8 h-16 bottom-[3%] max-[490px]:right-[12%]  right-[10%] sm:right-[20%] md:right-[23%] lg:right-[24%] xl:right-[32%] 2xl:right-[40%] transition-transform duration-1000 hover:scale-[1.2]" />
                
                <p className="absolute 
                  max-[490px]:text-sm text-base sm:text-lg md:text-2xl lg:text-4xl  text-white font-semibold 
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