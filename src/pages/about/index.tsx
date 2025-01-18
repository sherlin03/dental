import { useEffect } from "react";

export default function About() {


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
      }, []);

    return (
        <>
            {/* about us page  */}
            <section>

                <div className="mt-12 mb-12 container mx-auto">
                    {/* block 1 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 " >
                        <div className="relative mt-0 2xl:mt-8" data-aos="fade-right" >
                            <p className="justify-items-start text-[rgba(59,79,162,1)] text-lg">
                                <span className="bg-[rgba(249,247,247,1)] px-5 py-2">About</span>
                            </p>
                            <p className="text-base 2xl:text-lg mt-6 text-justify justify-items-start">
                                At Subha Dental Clinic, we are dedicated to offering comprehensive dental services that surpass the ordinary. From routine check-ups to cosmetic enhancements and advanced restorative treatments, we are focused on enhancing your dental health and overall well-being. Join us
                                today on the journey to a brighter, healthier smile.We utilize advanced dental technology such as digital X-rays, intraoral cameras, and laser dentistry for precise diagnoses and comfortable treatments.
                            </p>
                            <button className="bg-blue-800 text-white font-semibold py-3 mt-4 px-4 rounded-lg hover:bg-blue-700">
                                Urgent Booking
                            </button>
                            <img src="./images/about/a3.png" className="absolute bottom-0 right-24 hidden lg:block" alt="" />
                        </div>

                        <div className="mt-12 lg:mt-0 relative"  data-aos="fade-left" >
                            <img src="./images/about/a7.png" alt=" " className="w-full hidden sm:block" />
                            <img src="./images/about/a9.png" alt=" " className="hidden sm:block absolute w-52 sm:w-64 md:w-80 lg:w-60 xl:w-72 2xl:w-80 h-[265px] sm:h-[310px] md:h-[380px] lg:h-[250px] xl:h-[320px] 2xl:h-[370px] bottom-[10%] xl:bottom-[10%] 2xl:bottom-[14%] right-[5%] xl:right-[5%] z-10 transition-transform duration-1000 hover:scale-[1.1]" />
                            {/* <img src="./images/about/a8.png" alt=" " className="hidden sm:block absolute w-48 sm:w-56 md:w-72 lg:w-52 xl:w-64 2xl:w-80 h-[210px] sm:h-[240px] md:h-[320px] lg:h-[220px] xl:h-[280px] 2xl:h-[330px] bottom-[28%] xl:bottom-[28%] left-[15%] md:left-[10%] lg:left-[5%] xl:left-[5%] 2xl:left-[10%] transition-transform duration-1000 hover:scale-[1.1] " /> */}

                            <div className="absolute hidden sm:block bottom-[20%] xl:bottom-[28%] left-[15%] md:left-[10%] lg:left-[5%] xl:left-[8%] 2xl:left-[10%] overflow-hidden  rounded-t-[50px]">
                                <img
                                    src="./images/about/a8.png"
                                    alt="Zoom Effect"
                                    className="w-48 sm:w-56 md:w-80 lg:w-52 xl:w-60 2xl:w-80 h-[210px] sm:h-[240px] md:h-[320px] lg:h-[220px] xl:h-[250px] 2xl:h-[330px] object-cover transition-transform duration-1000 hover:scale-[1.2]"
                                />
                            </div>
                            <div className="hidden sm:block absolute bottom-[9%] md:bottom-[8%] lg:bottom-[8%] xl:bottom-[10%] 2xl:bottom-[14%] left-[18%] md:left-[15%] lg:left-[8%] xl:left-[10%] 2xl:left-[13%] overflow-hidden z-20  ">
                                <img src="./images/about/a10.svg" alt=" " className=" w-48  sm:w-60 md:w-72 lg:w-52 xl:w-64 2xl:w-80 h-[140px] md:h-[170px] lg:h-[125px] xl:h-[140px] 2xl:h-[160px]   object-cover transition-transform duration-1000 hover:scale-[1.1] " />


                                {/* <p className="font-[Risque] bg-[rgba(65,185,129,1)] px-5 py-2 text-white w-48  sm:w-56 md:w-72 lg:w-52 xl:w-64 2xl:w-80 h-[100px] md:h-[130px] lg:h-[130px] xl:h-[130px] 2xl:h-[150px]   object-cover transition-transform duration-1000 hover:scale-[1.1] text-center font-thin text-lg xl:text-xl shadow-2xl">
                                Inhouse <span className="text-2xl xl:text-3xl">3D</span> <br />
                                    imaging <br />
                                    first of its kind in <br />
                                south tamilnadu 
                                </p> */}
                            
                            </div>

                        </div>
                        <img src="./images/about/a2.svg" className="w-full h-auto block sm:hidden" alt="" />
                    </div>
                    {/* block 1 end  */}
                    {/* block 2 start  */}

                    <div className="hidden lg:block ">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 mb-12 ">
                            <div className="relative" data-aos="fade-right">
                            <img src="./images/about/a12.png" alt="" className="hidden sm:block  w-full lg:w-5/6 2xl:w-5/6 h-auto lg:h-[85%] transition-transform duration-1000 hover:scale-[1.1] " />
                        <img src="./images/about/a11.png" alt="" className="hidden sm:block absolute right-[0%]  lg:right-[16%] 2xl:right-[16%] top-0 2xl:top-0 w-[35%] lg:w-[29%] xl:w-[180px] 2xl:w-[215px] h-[30%] lg:h-[24%] xl:h-[100px] 2xl:h-[120px] transition-transform duration-1000 hover:scale-[1.1] " />
                        <img src="./images/about/a13.png" alt="" className="hidden sm:block absolute left-[0%] bottom-0 lg:bottom-[12%]   w-[37%]   lg:w-[30%] xl:w-[185px] 2xl:w-[225px] h-[28%] lg:h-[27%] xl:h-[110px] 2xl:h-[135px]  transition-transform duration-1000 hover:scale-[1.1]" />


                                <img src="./images/about/a1.png" alt="" className="block sm:hidden w-full  lg:w-5/6 h-auto lg:h-[85%] " />

                            </div>
                            <div className="py-1 relative mt-10 lg:mt-0 2xl:mt-8" data-aos="fade-left">
                                <p className="text-xl 2xl:text-2xl text-justify font-semibold text-[rgba(55,83,188,1)]">
                                    Dr. Vijayabharathi, Clinical Director, Subha Multi-Speciality Dental Clinic & Implant Center
                                </p>
                                <p className="text-lg 2xl:text-xl text-justify font-semibold mt-4">
                                    Certified in Aesthetic Dentistry, Root Canal Therapy, and Orthodontic Correction.
                                </p>
                                <p className="mt-4 text-base text-justify 2xl:text-lg">
                                    Dr. P. Vijayabharathi is a distinguished dental professional with a passion for providing exceptional care. She graduated from the prestigious Government Dental College & Hospital, MMC Campus, Chennai, and has been practicing as a general and and specialist dentist since 2007.
                                </p>
                                <p className="mt-4 text-base text-justify 2xl:text-lg">
                                    She collaborates closely with her husband, Dr. P. Kamalashankar, MDS, Chief Implant Surgeon, to provide exemplary care aligned with international standards. Together, they lead a skilled clinical team committed to patient satisfaction.
                                </p>
                                <img src="./images/about/a4.png" className="absolute bottom-[-40px] right-24 hidden lg:block" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* mob view  */}

                    <div className="block lg:hidden ">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mb-12 ">

                            <div className="py-1 relative mt-10 lg:mt-0 2xl:mt-8" data-aos="fade-right">
                                <p className="text-xl 2xl:text-2xl text-justify font-semibold text-[rgba(55,83,188,1)]">
                                    Dr. Vijayabharathi, Clinical Director, Subha Multi-Speciality Dental Clinic & Implant Center
                                </p>
                                <p className="text-lg 2xl:text-xl text-justify font-semibold mt-4">
                                    Certified in Aesthetic Dentistry, Root Canal Therapy, and Orthodontic Correction.
                                </p>
                                <p className="mt-4 text-base text-justify 2xl:text-lg">
                                    Dr. P. Vijayabharathi is a distinguished dental professional with a passion for providing exceptional care. She graduated from the prestigious Government Dental College & Hospital, MMC Campus, Chennai, and has been practicing as a general and and specialist dentist since 2007.
                                </p>
                                <p className="mt-4 text-base text-justify 2xl:text-lg">
                                    She collaborates closely with her husband, Dr. P. Kamalashankar, MDS, Chief Implant Surgeon, to provide exemplary care aligned with international standards. Together, they lead a skilled clinical team committed to patient satisfaction.
                                </p>
                                <img src="./images/about/a4.png" className="absolute bottom-[-40px] right-24 hidden lg:block" alt="" />
                            </div>

                            <div className="relative mt-12" data-aos="fade-left">

                                <img src="./images/about/a12.png" alt="" className="hidden sm:block  w-full lg:w-5/6 2xl:w-5/6 h-auto lg:h-[85%] transition-transform duration-1000 hover:scale-[1.1] " />

                                <img src="./images/about/a11.png" alt="" className="hidden sm:block absolute right-[0%]  lg:right-[16%] 2xl:right-[16%] top-0 2xl:top-0 w-[35%] lg:w-[29%] xl:w-[180px] 2xl:w-[215px] h-[30%] lg:h-[24%] xl:h-[100px] 2xl:h-[120px] transition-transform duration-1000 hover:scale-[1.1] " />
                                <img src="./images/about/a13.png" alt="" className="hidden sm:block absolute left-[0%] bottom-0 lg:bottom-[12%]   w-[37%]   lg:w-[30%] xl:w-[185px] 2xl:w-[225px] h-[28%] lg:h-[27%] xl:h-[110px] 2xl:h-[135px]  transition-transform duration-1000 hover:scale-[1.1]" />



                                <img src="./images/about/a1.png" alt="" className="block sm:hidden w-full  lg:w-5/6 h-auto lg:h-[85%] " />

                            </div>
                        </div>
                    </div>


                    {/* block 2 end */}
                    {/* block 3 start */}
                    <p className="text-justify lg:text-center text-base 2xl:text-lg  my-12 lg:indent-12 "  >
                        <span className="text-3xl 2xl:text-5xl text-[rgba(55,83,188,1)]">Journey</span> For over 15 years, Dr. Vijayabharathi has actively participated in dental awareness initiatives, conducting camps in schools, colleges, and urban centers to educate rural communities about oral health. Dr. Vijayabharathi is committed to lifelong learning and professional development. She has recently participated in the CDE Programme on the Art of Anterior Veneers hosted by the IDA Thoothukudi Branch and held at Kovilpatti. Additionally, she attended the Myofunctional Orthodontics Seminar, which included 8 hours of training with hands-on practical activities, presented by i3 International Academy for Advanced Dentistry.
                    </p>
                    {/* block 3 end */}
                    {/* block 4 start */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 mb-12 ">
                        <div data-aos="fade-right">
                            <div className="overflow-hidden  rounded-2xl">
                            <img src="./images/about/a5.png" alt="" className="h-auto lg:h-72 w-full xl:h-80 2xl:h-80 object-cover transition-transform duration-1000 hover:scale-[1.1]" />
                            </div>
                            <div className="bg-[rgba(65,185,129,1)] rounded-2xl p-5 mt-4">
                                <p className="text-white text-justify text-sm 2xl:textr-base">
                                    <span className="text-base 2xl:text-lg font-semibold">Dr.Kamalashankar’s</span> credentials extend beyond basic expertise. He holds certifications and diplomas from renowned institutions worldwide, including
                                </p>
                                <ul className="mt-4 space-y-2 text-white text-sm 2xl:text-base sm:space-y-3 list-disc list-inside ">
                                    <li>Master ship in digital dentistry from DDS, Switzerland</li>
                                    <li>certification as a diplomat of the International Congress of Oral Implantologists (ICOI, USA).</li>
                                    <li>Member of international Team of Oral Implantologist (ITI,SWITZERLAND).</li>
                                    <li>Member, Indian society oral implantologists (ISOI INDIA ).</li>
                                    <li>Certified user of straumann ,Nobel and Zygomatic System.</li>
                                </ul>
                            </div>

                        </div>

                        <div data-aos="fade-left" >
                            <div className="bg-[rgba(55,83,188,1)] rounded-2xl p-5 w-full lg:w-1/2">
                                <p className="text-white text-center text-lg 2xl:text-xl  ">
                                    <span className="font-[Risque]">Dr. Kamalashankar’s trained cmc vellore, and he is former senior house officer.</span>  <br />
                                  
                                </p>

                            </div>
                            <div className="mt-4 overflow-hidden  rounded-2xl">
                                <img src="./images/about/a6.png" className=" h-auto lg:h-72 xl:h-80 2xl:h-[355px] w-full object-cover transition-transform duration-1000 hover:scale-[1.1]  " alt="" />
                            </div>
                            <div className="bg-[rgba(55,83,188,1)] rounded-2xl p-5 mt-4">
                                <p className="text-white text-justify text-sm 2xl:text-base">
                                    As a director in <span className="text-lg 2xl:text-xl font-semibold">15 Dental and Implant Xperts</span> (Hosur, Tirunelveli ,and Chennai) and Xperts Dento Facial Imaging Pvt Ltd (Tirunelveli, Namakal,Chennai,Tangore), Dr. Kamalashankar leads with a commitment to innovation and patient-centered care.
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* block 4 end */}

                    {/* last block  */}

                        <div className=" ">
                            <p className="text-justify sm:text-center px-8 sm:px-20 xl:px-40">
                            Gots operates in all over the state and also internationally for implants most for consultation. 
                            Advance digital imaging with 3d technology and introvoral scanning with digital smile designing
                            </p>
                       </div>                                            


                </div>

            </section>

        </>
    )
}