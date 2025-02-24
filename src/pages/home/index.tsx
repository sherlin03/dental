
import AOS from "aos";
import { useEffect } from "react";
import DentalTheme from "./components/DentalTheme";
import GenServices from "./components/GenServices";
import TestimonialSlider from "./components/TestimonialSlider";
import TypingEffectHead from "./components/TypingEffectHead";
import VerticalLineWithExpertise from "./components/VerticalLine";
import { Link} from "react-router-dom";

export default function Home() {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 3000,
  //   });
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 3000, 
    });

    AOS.refresh();
  }, []);
 
  

    return (
        <>
        <div className="block lg:hidden relative">
                {/* <div className="grid w-full gap-10 p-4 pb-2 py-8 lg:px-8 grid-cols-2 md:px-6 mb-8">
                    <div className="grid justify-items-end  ">
                        <img src="./images/home/s1.png" className="w-full h-[100%]  !sm:h-auto !md:h-auto transition-transform duration-1000 hover:scale-[1.1]"
      data-aos="zoom-in-up"  data-aos-duration="2000" alt="" />
                    </div>
                    <div className="justify-items-start">
                        <img src="./images/home/s2.png" className="w-full h-[100%]  sm:h-auto md:h-auto transition-transform duration-1000 hover:scale-[1.1]"
      data-aos="zoom-in-up" data-aos-duration="2000" alt="" />
                    </div>
                  
                </div> */}

                {/* <div>
                  <p className="text-3xl mt-20 font-bold mb-10 !leading-10 px-8 text-center" >
                  Experience world-class Dental Treatment at it's finest.
                  </p>
                </div> */}



<div className="relative hidden md:block">
                <img src="./images/home/banner/banner.png" className="w-full h-[81%] lg:h-[90%] "
                 data-aos-duration="1000" alt="" />
                <img src="./images/home/banner/banner2.png" className="w-[60%] h-[100%] absolute top-0 right-0"
                 data-aos-duration="1000" alt="" />
                {/* <img src="./images/home/banner/banner3.png" className="w-12 lg:w-16  absolute top-5 lg:top-8 left-[30%]"
                 data-aos-duration="1000" alt="" /> */}

                <p className="text-white  font-bold text-2xl lg:text-4xl xl:text-6xl absolute !leading-[2rem] lg:!leading-[3rem] xl:!leading-[3.5rem] top-[20%] left-10 lg:left-20 " >
                   <span className="" style={{ textShadow: "0 4px 7px rgba(0, 0, 0, 0.9)" }}>Experience</span>  
                   <span className="text-[rgba(22,50,156,1)] text-2xl lg:text-3xl xl:text-5xl ml-3 " 
                     style={{ textShadow: "0 4px 7px rgba(255,255,255,0.8)" }}
                     >world-class </span> <br />
                   <span className="" style={{ textShadow: "0 4px 7px rgba(0, 0, 0, 0.9)" }}>dental treatment at its </span> <br />
                    <span className="" style={{ textShadow: "0 4px 7px rgba(0, 0, 0, 0.9)" }} >finest.</span> <br />
                    
                    
                </p>
                <p className="mt-5   absolute top-[45%] lg:top-[50%] 2xl:top-[45%] left-10 lg:left-20 ">
                <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-5 font-medium text-white" style={{ textShadow: "0 4px 7px rgba(0, 0, 0, 0.9)" }}>From routine check-ups to advanced smile<br /> makeovers, we ensure healthy, beautiful smiles <br /> for you and your family.</span>
                    </p>

              <Link to="/contact">
                    <button className="absolute bottom-10 lg:bottom-16 xl:bottom-20 2xl:bottom-28 shadow-[0px_4px_5px_rgba(255,255,255,0.8)] left-10 lg:left-20 text-white bg-[rgba(59,79,162,1)] rounded-lg py-2 lg:py-3 xl:py-4 px-4 lg:px-6 xl:px-8">
                        Contact Us
                    </button>
                    </Link>

                </div>


            </div>
        
    <section className=" w-full mx-auto relative ">
        {/* <img src="./images/home/s5.png" className="h-60 sm:h-[550px] md:h-[600px] lg:h-[650px] w-28 absolute top-24 hidden md:block md:-right-20 lg:-right-28" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" alt="" /> */}
          
          


            {/* first block start  */}
           
            <div className="hidden lg:block">
                {/* <div className="grid w-full gap-10 p-4 pb-2 py-8 lg:px-8 grid-cols-2 md:px-6 mb-8">
                    <div className="grid justify-items-end lg:justify-items-end ">
                        <img src="./images/home/s1.png" className="h-52 sm:h-56 md:h-80 lg:h-96 transition-transform duration-1000 hover:scale-[1.1]"
      data-aos="zoom-in-up"  data-aos-duration="1000" alt="" />
                    </div>
                    <div className="justify-items-start">
                        <img src="./images/home/s2.png" className="h-52 sm:h-56 md:h-80 lg:h-96 transition-transform duration-1000 hover:scale-[1.1]"
      data-aos="zoom-in-up" data-aos-duration="1000" alt="" />
                    </div>
                   
                </div> */}

                <div className="relative">
                <img src="./images/home/banner/banner.png" className="w-full h-[81%] lg:h-[90%] "
                 data-aos-duration="1000" alt="" />
                <img src="./images/home/banner/banner2.png" className="w-[60%] h-[100%] absolute top-0 right-0"
                 data-aos-duration="1000" alt="" />
                {/* <img src="./images/home/banner/banner3.png" className="w-16  absolute top-8 left-[30%]"
                 data-aos-duration="1000" alt="" /> */}

                <p className="text-white  font-bold text-3xl xl:text-5xl absolute leading-[3rem] xl:!leading-[3.5rem] top-[20%] left-20 " >
                   <span className="" style={{ textShadow: "0 4px 7px rgba(0, 0, 0, 0.9)" }}>Experience</span>  
                   <span className="text-[rgba(22,50,156,1)] text-3xl xl:text-5xl ml-3  mb-2 px-3 rounded-lg " 
                     style={{ textShadow: "0 4px 7px rgba(255,255,255,0.8)" }}
                     >world-class </span> <br />
                   <span className="" style={{ textShadow: "0 4px 7px rgba(0, 0, 0, 0.9)" }}>dental treatment at its </span> <br />
                    <span className="" style={{ textShadow: "0 4px 7px rgba(0, 0, 0, 0.9)" }}>finest.</span> <br />
                    
                    
                </p>
                <p className="mt-5   absolute top-[45%] 2xl:top-[43%] left-20 ">
                <span className="text-lg xl:text-xl 2xl:text-2xl mt-5 font-medium text-white" style={{ textShadow: "0 4px 7px rgba(0, 0, 0, 0.9)" }}>From routine check-ups to advanced smile<br /> makeovers, we ensure healthy, beautiful smiles <br /> for you and your family.</span>
                    </p>


                   <Link to="/contact">
                    <button className="absolute bottom-10 lg:bottom-24 xl:bottom-32 2xl:bottom-40 shadow-[0px_4px_5px_rgba(255,255,255,0.8)] left-10 lg:left-20 text-white bg-[rgba(59,79,162,1)] rounded-lg py-2 lg:py-3 xl:py-4 px-4 lg:px-6 xl:px-8">
                        Contact Us
                    </button>
                    </Link>


                </div>


            </div>
          
            {/* first block End  */}
            
            </section>
            {/* intro words start */}
            <div className="container w-full justify-items-center mb-8 mt-10 ml-5" >

            <p className="text-2xl font-bold  text-justify md:text-center ">
            <span className="bg-[rgba(88,215,155,1)] text-white rounded pl-1 pr-0 shadow shadow-[#333635] tracking-tight ">Subha Multispeciality Dental Clinic &amp; Implant Centre </span> &nbsp;,  Where Your Smile Matters Most!</p>
            <p className= "text-justify lg:text-center text-lg mt-4 w-full lg:w-[80%] ">
            We are dedicated to providing exceptional dental care in a comfortable and welcoming environment. We utilize the latest technology and techniques to ensure the highest quality care and optimal results. <span className="font-semibold banspace text-start lg:text-center text-lg text-[rgba(59,79,162,1)] "> One of the leading implantologists in the entire state of Tamil Nadu.</span>
               </p>
            </div>

            <div className="container w-full">
                <div className="h-[100%] z-[99]  w-20 lg:w-24 xl:w-28 2xl:w-32  absolute top-40 lg:top-48 xl:top-56 2xl:top-80 hidden lg:block right-5">
         
                  <TypingEffectHead/>
                </div>
          </div>



            {/* intro words end */}
            {/* Services  start */}
            <section className="container w-[95%] lg:w-[90%] relative mx-auto">
              <GenServices/>
              
            </section>
            <section className="w-full">
            <TestimonialSlider/>
            </section>
            {/* Services  end */}

            {/* dental image start */}
       
           <section className=" hidden md:block ">
            <DentalTheme/>
            </section>
            {/* dental image end */}

            {/* why us start */}
            <section className="container w-[95%] lg:w-[90%] mx-auto my-auto  ">
              <div >
                <VerticalLineWithExpertise/>
              </div>
            </section>
            {/* why us End */}
            
      

        {/* Happy Customers start */}
     
        <section className="relative mt-20 sm:mt-28  lg:mt-32" >
             <div className="relative">
                <img src="./images/home/s11.png" className=" w-full imgheight h-[500px] realative" alt="" />

                <img src="./images/home/Mask group.png" className="  absolute 
                          girlheight h-[650px] 
                            top-[-9rem]  left-[7%] sm:left-[20%] md:left-1/4 lg:left-[35%] 
                            sm:top-[-9rem] md:top-[-9rem] lg:top-[-9rem] px-6" alt="" />
                {/* <img src="./images/home/Group 104.png" className=" absolute max-[490px]:w-24 w-48 max-[490px]:h-16 h-32 bottom-[30%] max-[490px]:left-[25%] left-[15%] md:left-[17%] lg:left-[30%] xl:left-[32%] transition-transform duration-1000 hover:scale-[1.2] hidden " /> */}

                <div className="bg-white shadow-[0px_5px_5px_rgba(0,0,0,1),0px_-2px_6px_rgba(0,0,0,0.3),0px_0px_1px_1px_rgba(255,255,255,1)] rounded-2xl p-4  absolute hbox1 w-48 h-32 bottom-[30%]  left-[15%] md:left-[17%] lg:left-[30%] xl:left-[32%] transition-transform duration-1000 hover:scale-[1.2] hidden sm:block ">
                  <img src="./images/home/twitter.svg" alt="" className="w-8 p-1 twimg" />
                 <p className="text-black text-justify text-[9px] sm:text-[10px] para3">
                 The implants look and feel like real teeth. My confidence is back, thank Kamalashankar
                   <br />
                   — David P.
                 </p>

               </div>


                <div className="bg-white shadow-[0px_5px_5px_rgba(0,0,0,1),0px_-2px_6px_rgba(0,0,0,0.3),0px_0px_1px_1px_rgba(255,255,255,1)] rounded-2xl p-4 absolute  w-56  h-36 bottom-10 sm:bottom-[-5%]  left-[5%] md:left-[10%] lg:left-[24%] xl:left-[30%]  transition-transform duration-1000 hover:scale-[1.2] hbox2 hidden sm:block">
                  <div className="relative">
                    <img src="./images/home/h1.svg" alt="" className="absolute top-0 -left-2 w-4"/>
                <p className="text-black text-justify text-[9px] ps-5 sm:text-[9px] para ">
                Great with Kids!"<br />
                “My 7-year-old daughter was terrified of the dentist until we found SUBHA DENTAL CLINIC Dr.Vijayabharathi, 
                  was patient, kind, and made the entire visit fun for her. Now she looks forward to her checkups!” <br />

                —  Sara M. 
                </p>
                <img src="./images/home/h2.svg" className="w-auto h-auto absolute bottom-0 right-1" alt="" />
                </div>

                </div>


                <div className="bg-white shadow-[0px_5px_5px_rgba(0,0,0,1),0px_-2px_6px_rgba(0,0,0,0.3),0px_0px_1px_1px_rgba(255,255,255,1)] rounded-2xl p-4 absolute w-40 max-[490px]:w-20 max-[490px]:h-12 h-24  bottom-[28%] max-[490px]:right-[15%] right-[10%] sm:right-[18%] md:right-[22%] lg:right-[25%] xl:right-[31%] 2xl:right-[39%]  transition-transform duration-1000 hover:scale-[1.2] hbox3 hidden sm:block">
                <div className="relative">
                    <img src="./images/home/h3.svg" alt="" className="absolute top-4 -left-2 w-4 insta"/>

                <p className="text-black text-justify text-[9px] ps-5 sm:text-[9px] para ">
                I loved the invisibility of my clear aligners. Results came faster than expected! <br />
                — Michael R.
                </p>
                </div>
                </div>

                <div className="bg-white shadow-[0px_5px_5px_rgba(0,0,0,1),0px_-2px_6px_rgba(0,0,0,0.3),0px_0px_1px_1px_rgba(255,255,255,1)] rounded-2xl w-40  h-24 p-4 absolute   bottom-10 sm:bottom-[-5%]  left-[5%] md:left-[10%] lg:left-[24%] xl:left-[30%]  transition-transform duration-1000 hover:scale-[1.2] hbox5 block sm:hidden">
                <div className="relative">
                    <img src="./images/home/h3.svg" alt="" className="absolute top-4 -left-2 w-4 insta"/>

                <p className="text-black text-justify text-[9px] ps-5 sm:text-[9px] para ">
                I loved the invisibility of my clear aligners. Results came faster than expected! <br />
                — Michael R.
                </p>
                </div>
                </div>


                <div  className="bg-white shadow-[0px_5px_5px_rgba(0,0,0,1),0px_-2px_6px_rgba(0,0,0,0.3),0px_0px_1px_1px_rgba(255,255,255,1)]  rounded-2xl p-4  absolute  w-44  h-16 bottom-[3%]   right-[10%] sm:right-[10%] md:right-[20%] lg:right-[23%] xl:right-[30%] 2xl:right-[38%] transition-transform duration-1000 hover:scale-[1.2] hbox4">

                <p className="text-black text-[9px] ps-5 sm:text-[9px] para ">
                Customer Happiness Rating <br />
                <div className="flex">
                 <img src="./images/home/h4.svg" alt="" className="w-4"/> 
                 <p className="ps-1 mt-[3px]">98%</p>
                  <img src="./images/home/h5.svg" alt="" className="w-16 h-1 ps-2 mt-[5px]"/>
                  
                  </div>
                </p>

                </div>
                <p className="absolute 
                  text-base sm:text-lg md:text-2xl lg:text-4xl  text-white font-semibold 
                   top-8 sm:top-12 left-[5%] md:left-[8%] lg:left-[10%] para2 
                   "
                >
                    Happy Customers
                </p>
                <img src="./images/home/s9.png" className="absolute  
                   top-[64px] sm:top-[80px] md:top-[90px] left-[5%] md:left-[8%] lg:left-[10%] mobw" alt="" />

             </div>

         

        </section>
         {/* Happy Customers end */}

        </>  
    )
}