import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageHoverComponent";
import { motion } from "framer-motion";
import { Link} from "react-router-dom";

export default function PatientExperience() {
 const [activeImage, setActiveImage] = useState<number>(1);

  const handleImageChange = (id: number) => {
    setActiveImage(id);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);



    return (
        <>
            {/* Patient Experience page  */}
            <section>

                <div className="    mb-12 container mx-auto">
                    {/* block 1 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="relative" >
                            <p className="justify-items-start text-[rgba(59,79,162,1)] text-lg mt-16">
                                <span className="bg-[rgba(249,247,247,1)] px-5 py-2"># Patience Experience</span>
                            </p>
                        
                            <p className="text-2xl font-bold mt-6 text-[rgba(59,79,162,1)]">
                                Schedule Your Consultation Today!
                            </p>
                            <p className="text-base mt-3 justify-items-start">
                            Don’t let missing teeth diminish your quality of life. Contact <span className="text-xl">Dr.P. KAMALASHANKAR </span>today to schedule your consultation.
                            </p>
                            <p className="text-base mt-2 justify-items-start">
                            Take the first step towards a healthier, more confident smile with dental implants.
                            </p>
                            <p className="text-base mt-2 justify-items-start">
                            Ph.No:+91 94873 25401
                            </p>
                       
                            <Link to="/contact">
                            <button className="bg-blue-800 text-white font-semibold py-3 mt-4 px-4 rounded-lg hover:bg-blue-700">
                            Shedule Now
                            </button>
                            </Link>
                            
                        </div>
                     
                        <img src="./images/PatientExperience/p1-old.png" alt="" className="block lg:hidden w-full h-auto" />
                       
                        <div className="hidden lg:block pt-20 mt-5 2xl:mt-32 relative"  >
                            <img src="./images/PatientExperience/arrowimg.gif" alt=" " className="absolute top-16 xl:top-4  2xl:-top-40 left-5 xl:left-32 2xl:left-40 w-[28%] xl:w-[23%] 2xl:w-[23%] h-auto  " />
                            <img src="./images/PatientExperience/p1.png" alt=" " className="absolute bottom-0 right-0 w-[75%] xl:w-[60%] h-auto  " />
                          

                            <motion.p
                                className="absolute bottom-8 xl:bottom-5 2xl:bottom-10 left-0 xl:left-24   text-white p-5  2xl:p-5 bg-[#00559A] text-left text-base xl:text-xl 2xl:text-2xl   w-[160%]   lg:w-[150px] xl:w-[180px] 2xl:w-[210px] h-[28%] lg:h-[120px] xl:h-[135px] 2xl:h-[150px]  rounded-tl-[20px] rounded-tr-[43px] xl:rounded-tr-[53px] rounded-br-[20px] rounded-bl-[20px] "
                                animate={{
                                y: [0, -15, 0], // Wave motion: up, then down
                                }}
                                transition={{
                                duration: 2.0, // Total time for one wave cycle
                                repeat: Infinity, // Infinite animation
                                ease: "easeInOut", // Smooth easing
                                }}
                            >
                               100+ satisfied <br /> Customers
                               <img src="./images/PatientExperience/star.png" className="mt-3 xl:mt-5" alt="" />
                        </motion.p>


                        </div>

                    </div>

                </div>

               

            </section>
                  
{/* mob view  */}
                  <div className="bg-[rgba(88,215,155,0.12)] pb-20 pt-10 sm:block md:hidden">
                  <div className="  justify-items-center sm:block md:hidden relative gap-8  container mx-auto"> 
                <div >
     

     {/* Mobile view images (Grid Layout) */}
     <div className="    sm:block md:hidden ">
       {/* Image 1 */}
       <div
          className={`relative rel group justify-items-center ${activeImage === 1 ? "mob  pe-64 sm:pe-72  justify-items-start" : " "}`}
         onClick={() => handleImageChange(1)}
       >
         <img
           src="./images/PatientExperience/p2.png"
           id="1"
           alt="Image 1"
           className={`  mt-8 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 1 ? "w-56 sm:w-60 max-[490px]:w-32" : ""}`}
         />
         <p
          
           className={`absolute  bg-[rgba(65,185,129,1)] text-justify text-base sm:text-xl text-white px-4 py-2 rounded-b-3xl max-[490px]:top-10 top-36 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}
         >
            Root Canal – Painless and smooth! My tooth feels as good as new.

<br />
<img src="./images/PatientExperience/star.png" className="mt-3 xl:mt-5" alt="" />

          </p>
       </div>

       {/* Image 2 */}
       <div
          className={`relative mt-12 group justify-items-center ${activeImage === 2 ? "mob  pe-64 sm:pe-72   justify-items-start" : " "} ${activeImage === 1 ? " mtalign mt-20 sm:mt-36 " : " "}`}
         onClick={() => handleImageChange(2)}
       >
         <img
           src="./images/PatientExperience/p4.png"
           id="2"
           alt="Image 3"
           className={`   w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 2 ? "mt-20 sm:mt-36 max-[490px]:w-32" : ""}`}
         />
         <p
           className={`absolute  bg-[rgba(65,185,129,1)] text-justify text-white px-4 py-2 rounded-b-3xl max-[490px]:top-10 top-44 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 2 ? "opacity-100" : "opacity-0"}`}
         >
          Dental Implants – Exceptional care and precision! My implants feel just like natural teeth—couldn’t be happier.
<br />
<img src="./images/PatientExperience/star.png" className="mt-3 xl:mt-5" alt="" />



          </p>
       </div>

       {/* Image 3 */}
       <div
          className={`relative rel group justify-items-center ${activeImage === 3 ? "mob  pe-64 sm:pe-72  justify-items-start" : " "} ${activeImage === 2 ? " mtalign2 mt-20 sm:mt-36" : " "}`}
         onClick={() => handleImageChange(3)}
       >
         <img
           src="./images/PatientExperience/p5.png"
           id="1"
           alt="Image 1"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 3 ? "w-56 sm:w-60 max-[490px]:w-32 " : ""}`}
         />
         <p
          
           className={`absolute bg-[rgba(65,185,129,1)] text-justify text-white px-4 py-2 rounded-b-3xl max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 3 ? "opacity-100" : "opacity-0"}`}
         >
             Teeth Whitening – Instant confidence boost! My teeth are shades brighter, and the results look completely natural.
           <br />
<img src="./images/PatientExperience/star.png" className="mt-3 xl:mt-5" alt="" />
           </p>
       </div>

       {/* Image 4 */}
       <div
          className={`relative rel group justify-items-center ${activeImage === 4 ? "mob  pe-64 sm:pe-72  justify-items-start" : " "} ${activeImage === 3 ? " mtalign mt-20 sm:mt-36 " : " "}`}
         onClick={() => handleImageChange(4)}
       >
         <img
           src="./images/PatientExperience/p6.png"
           id="1"
           alt="Image 1"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 4 ? "w-56 sm:w-60 max-[490px]:w-32 " : ""}`}
         />
         <p
           className={`absolute bg-[rgba(65,185,129,1)] text-justify text-white px-4 py-2 rounded-b-3xl max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 4 ? "opacity-100" : "opacity-0"}`}
         >
          Braces treatment – Perfect alignment with expert guidance!
           <br />
<img src="./images/PatientExperience/star.png" className="mt-3 xl:mt-5" alt="" />
           </p>
       </div>

       {/* Image 5 */}
       <div
          className={`relative rel group justify-items-center ${activeImage === 5 ? "mob  pe-64 sm:pe-72  justify-items-start" : " "} ${activeImage === 4 ? " mtalign2  mt-10 sm:mt-36 " : " "}`}
         onClick={() => handleImageChange(5)}
       >
         <img
           src="./images/PatientExperience/p7.png"
           id="1"
           alt="Image 1"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 5 ? "w-56 sm:w-60  max-[490px]:w-32 " : ""}`}
         />
         <p
          
           className={`absolute bg-[rgba(65,185,129,1)] text-justify text-white px-4 py-2 rounded-b-3xl max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 5 ? "opacity-100" : "opacity-0"}`}
         >
           Dental Implant Full Arch – Life-changing! I can eat and smile with confidence—truly worth it
           <br />
<img src="./images/PatientExperience/star.png" className="mt-3 xl:mt-5" alt="" />
           </p>
       </div>

       {/* Image 6 */}
       <div
          className={`relative mt-12 group justify-items-center ${activeImage === 6 ? "mob  pe-64 sm:pe-72   justify-items-start" : " "} ${activeImage === 5 ? " mtalign  mt-20 sm:mt-36 " : " "}`}
         onClick={() => handleImageChange(6)}
       >
         <img
           src="./images/PatientExperience/p8.png"
           id="2"
           alt="Image 3"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 6 ? "w-56 sm:w-60 max-[490px]:w-32" : ""}`}
         />
         <p
          
           className={`absolute bg-[rgba(65,185,129,1)] text-justify text-white px-4 py-2 rounded-b-3xl max-[490px]:top-10 top-40 sm:top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 6 ? "opacity-100" : "opacity-0"}`}
         >
          Child’s Dental Filling – Quick, comfortable, and stress-free for both of us!
           <br />
<img src="./images/PatientExperience/star.png" className="mt-3 xl:mt-5" alt="" />
           </p>
       </div>
     </div>
    

   </div>
                     </div> 
                  </div>




            <div className="h-[365px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] mt-20   hidden md:block relative  bg-[rgba(88,215,155,0.12)] " >
 
                <ImageGallery/>
          </div>

        </>
    )
}