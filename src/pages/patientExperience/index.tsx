import ImageGallery from "./components/ImageHoverComponent";
import { useEffect, useState } from "react";
// import MobImageGallery from "./components/MobImageGallery";

export default function PatientExperience() {
 const [activeImage, setActiveImage] = useState<number>(1);

  const handleImageChange = (id: number) => {
    setActiveImage(id);
  };
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


    return (
        <>
            {/* Patient Experience page  */}
            <section>

                <div className=" mt-0 lg:mt-12  mb-12 container mx-auto">
                    {/* block 1 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="relative" data-aos="fade-right">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] text-lg mt-16">
                                <span className="bg-[rgba(249,247,247,1)] px-5 py-2">Patience Experience</span>
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
                            Ph.No:+91 9487325401
                            </p>
                       
                            <button className="bg-blue-800 text-white font-semibold py-3 mt-4 px-4 rounded-lg hover:bg-blue-700">
                            Shedule Now
                            </button>
                            
                        </div>
                        <div className="mt-10 lg:mt-0"  data-aos="fade-left">
                            <img src="./images/PatientExperience/p1.png" alt=" " className="w-full h-auto " />
                        </div>

                    </div>
                    {/* block 1 end  */}
                    {/* block 2 start  */}

                    {/* desktopview  */}
<div>
            <div className="mt-20 mb-5 hidden md:block relative h-[365px] lg:h-[450px] " data-aos="fade-left">
 
            <ImageGallery/>
            </div>
                    {/* block 2 end */}
                    {/* block 2 mob start */}
                     
                <div className="  justify-items-center sm:block md:hidden relative gap-8"> 
                <div>
     

     {/* Mobile view images (Grid Layout) */}
     <div className=" mt-24 mb-12  sm:block md:hidden ">
       {/* Image 1 */}
       <div
          className={`relative rel group justify-items-center ${activeImage === 1 ? "mob  pe-64 sm:pe-72  justify-items-start" : " "}`}
         onClick={() => handleImageChange(1)}
       >
         <img
           src="./images/PatientExperience/p2.png"
           id="1"
           alt="Image 1"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 1 ? "w-56 sm:w-60 max-[490px]:w-32" : ""}`}
         />
         <img
           src="./images/PatientExperience/p3.png"
           alt="Image 2"
           className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}
         />
       </div>

       {/* Image 2 */}
       <div
          className={`relative mt-12 group justify-items-center ${activeImage === 2 ? "mob  pe-64 sm:pe-72   justify-items-start" : " "} ${activeImage === 1 ? " mtalign mt-72 sm:mt-80 " : " "}`}
         onClick={() => handleImageChange(2)}
       >
         <img
           src="./images/PatientExperience/p4.png"
           id="2"
           alt="Image 3"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 2 ? "w-56 sm:w-60 max-[490px]:w-32" : ""}`}
         />
         <img
           src="./images/PatientExperience/p3.png"
           alt="New Image 3"
           className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 2 ? "opacity-100" : "opacity-0"}`}
         />
       </div>

       {/* Image 3 */}
       <div
          className={`relative rel group justify-items-center ${activeImage === 3 ? "mob  pe-64 sm:pe-72  justify-items-start" : " "} ${activeImage === 2 ? " mtalign2 mt-56 sm:mt-80" : " "}`}
         onClick={() => handleImageChange(3)}
       >
         <img
           src="./images/PatientExperience/p5.png"
           id="1"
           alt="Image 1"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 3 ? "w-56 sm:w-60 max-[490px]:w-32 " : ""}`}
         />
         <img
           src="./images/PatientExperience/p3.png"
           alt="Image 2"
           className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 3 ? "opacity-100" : "opacity-0"}`}
         />
       </div>

       {/* Image 4 */}
       <div
          className={`relative rel group justify-items-center ${activeImage === 4 ? "mob  pe-64 sm:pe-72  justify-items-start" : " "} ${activeImage === 3 ? " mtalign mt-72 sm:mt-80 " : " "}`}
         onClick={() => handleImageChange(4)}
       >
         <img
           src="./images/PatientExperience/p6.png"
           id="1"
           alt="Image 1"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 4 ? "w-56 sm:w-60 max-[490px]:w-32 " : ""}`}
         />
         <img
           src="./images/PatientExperience/p3.png"
           alt="Image 2"
           className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 4 ? "opacity-100" : "opacity-0"}`}
         />
       </div>

       {/* Image 5 */}
       <div
          className={`relative rel group justify-items-center ${activeImage === 5 ? "mob  pe-64 sm:pe-72  justify-items-start" : " "} ${activeImage === 4 ? " mtalign mt-72 sm:mt-80 " : " "}`}
         onClick={() => handleImageChange(5)}
       >
         <img
           src="./images/PatientExperience/p7.png"
           id="1"
           alt="Image 1"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 5 ? "w-56 sm:w-60 max-[490px]:w-32 " : ""}`}
         />
         <img
           src="./images/PatientExperience/p3.png"
           alt="Image 2"
           className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 5 ? "opacity-100" : "opacity-0"}`}
         />
       </div>

       {/* Image 6 */}
       <div
          className={`relative mt-12 group justify-items-center ${activeImage === 6 ? "mob  pe-64 sm:pe-72   justify-items-start" : " "} ${activeImage === 5 ? " mtalign mt-72 sm:mt-80 " : " "}`}
         onClick={() => handleImageChange(6)}
       >
         <img
           src="./images/PatientExperience/p8.png"
           id="2"
           alt="Image 3"
           className={`  mt-16 w-56 sm:w-96 max-[490px]:w-56  ${activeImage === 6 ? "w-56 sm:w-60 max-[490px]:w-32" : ""}`}
         />
         <img
           src="./images/PatientExperience/p3.png"
           alt="New Image 3"
           className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 6 ? "opacity-100" : "opacity-0"}`}
         />
       </div>
     </div>
    

   </div>
                     </div> 
                    {/* block 2 mob end */}
                </div>
                </div>

                <div>
                        <img src="./images/PatientExperience/p10.png" className="w-full mt-0 2xl:mt-32 hidden lg:block" alt="" />
                        <img src="./images/PatientExperience/p10.png" className={` w-full block sm:block md:block lg:hidden ${activeImage === 6 ? " mtalign2 mt-56 sm:mt-80" : ""}`} alt="" />
                </div>

            </section>
            

        </>
    )
}