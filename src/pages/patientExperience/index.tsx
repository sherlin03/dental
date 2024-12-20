import ImageGallery from "./components/ImageHoverComponent";
import MobImageGallery from "./components/MobImageGallery";

export default function PatientExperience() {




    return (
        <>
            {/* Patient Experience page  */}
            <section>

                <div className=" mt-0 lg:mt-12  mb-12 container mx-auto">
                    {/* block 1 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="relative"  data-aos="fade-up-right" data-aos-duration="3000" data-aos-mirror="true" >
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
                        <div className="mt-10 lg:mt-0"  data-aos="fade-down-left" data-aos-duration="3000" data-aos-mirror="true">
                            <img src="./images/PatientExperience/p1.png" alt=" " className="w-full h-96" />
                        </div>

                    </div>
                    {/* block 1 end  */}
                    {/* block 2 start  */}

                    {/* desktopview  */}
<div>
            <div className="mt-20 mb-12 hidden md:block relative h-[365px] lg:h-[580px]">
 
            <ImageGallery/>
            </div>
                    {/* block 2 end */}
                    {/* block 2 mob start */}
                     
                <div className="grid grid-cols-1 mt-24 mb-12 justify-items-center sm:block md:hidden relative gap-8"> 
                <MobImageGallery/>
                     </div> 
                    {/* block 2 mob end */}
                </div>
                </div>

                <div data-aos="flip-down" data-aos-duration="3000" data-aos-mirror="true"  >
                        <img src="./images/PatientExperience/p10.png" className="w-full" alt="" />
                </div>

            </section>
            

        </>
    )
}