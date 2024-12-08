
export default function PatientExperience() {




    return (
        <>
            {/* Patient Experience page  */}
            <section>

                <div className="mt-12 mb-12 container mx-auto">
                    {/* block 1 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="relative"  data-aos="fade-up-right" data-aos-duration="3000" data-aos-mirror="true" >
                            <p className="justify-items-start text-[rgba(59,79,162,1)] text-lg mt-16">
                                <span className="bg-[rgba(249,247,247,1)] px-5 py-2">Patience Experience</span>
                            </p>
                            <p className="text-2xl mt-6 text-[rgba(59,79,162,1)]">
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
                            <img src="./images/PatientExperience/p1.png" alt=" " className="w-full" />
                        </div>

                    </div>
                    {/* block 1 end  */}
                    {/* block 2 start  */}

                    <div className=" mt-20 mb-12 hidden md:block relative h-[365px] lg:h-[580px]">
                        
                            <img src="./images/PatientExperience/p2.png" alt="" className="absolute top-2 left-0 w-36 lg:w-48 xl:w-56  2xl:w-64 2xl:left-0 " />
                            <img src="./images/PatientExperience/p3.png" alt="" className="absolute top-20 left-20 lg:left-28 2xl:left-28 w-36 lg:w-48 xl:w-52 2xl:w-56 z-10" />
                            <img src="./images/PatientExperience/p4.png" alt="" className="absolute top-20 left-44 lg:left-64 2xl:left-80 w-36 lg:w-48 xl:w-56 2xl:w-64" />
                            <img src="./images/PatientExperience/p5.png" alt="" className="absolute top-44 lg:top-52 right-[200px] lg:right-[300px] xl:right-[450px] w-36 lg:w-48 xl:w-56 2xl:w-64" />
                            <img src="./images/PatientExperience/p6.png" alt="" className="absolute top-0 right-48 lg:right-56 xl:right-64 2xl:right-72 w-36 lg:w-48 xl:w-56 2xl:w-64 " />
                            <img src="./images/PatientExperience/p7.png" alt="" className="absolute bottom-12 lg:bottom-40 xl:bottom-28 right-8 lg:right-16 xl:right-32 w-36 lg:w-48 xl:w-56 2xl:w-64" />
                            <img src="./images/PatientExperience/p8.png" alt="" className="absolute top-0 right-0 w-36 lg:w-48 xl:w-56 2xl:w-64" />
                            <img src="./images/PatientExperience/p9.png" alt="" className="absolute top-0 right-1/2" />
                    </div>

                    {/* block 2 end */}
                    {/* block 2 mob start */}
                    <div className="grid grid-cols-1 mt-12 mb-12 justify-items-center sm:block md:hidden">
                        <div className="mt-12 w-48">
                        <img src="./images/PatientExperience/p2.png" alt="" /> 
                        </div>
                        <div className="mt-12 w-48">
                        <img src="./images/PatientExperience/p3.png" alt="" /> 
                        </div>
                        <div className="mt-12 w-48">
                        <img src="./images/PatientExperience/p4.png" alt="" /> 
                        </div>
                        <div className="mt-12 w-48">
                        <img src="./images/PatientExperience/p5.png" alt="" /> 
                        </div>
                        <div className="mt-12 w-48">
                        <img src="./images/PatientExperience/p6.png" alt="" /> 
                        </div>
                        <div className="mt-12 w-48">
                        <img src="./images/PatientExperience/p7.png" alt="" /> 
                        </div>
                        <div className="mt-12 w-48">
                        <img src="./images/PatientExperience/p8.png" alt="" /> 
                        </div>
                        

                    </div>
                    {/* block 2 mob end */}
                   

                </div>

                <div data-aos="flip-down" data-aos-duration="3000" data-aos-mirror="true"  >
                        <img src="./images/PatientExperience/p10.png" className="w-full" alt="" />
                </div>

            </section>
            

        </>
    )
}