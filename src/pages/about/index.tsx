
export default function About() {




    return (
        <>
            {/* about us page  */}
            <section>

                <div className="mt-12 mb-12 container mx-auto">
                    {/* block 1 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="relative">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] text-lg">
                                <span className="bg-[rgba(249,247,247,1)] px-5 py-2">About</span>
                            </p>
                            <p className="text-base mt-6 justify-items-start">
                                At Subha Dental Clinic, we are dedicated to offering comprehensive dental services that surpass the ordinary. From routine check-ups to cosmetic enhancements and advanced restorative treatments, we are focused on enhancing your dental health and overall well-being. Join us
                                today on the journey to a brighter, healthier smile.We utilize advanced dental technology such as digital X-rays, intraoral cameras, and laser dentistry for precise diagnoses and comfortable treatments.
                            </p>


                            <button className="bg-blue-800 text-white font-semibold py-3 mt-4 px-4 rounded-lg hover:bg-blue-700">
                                Urgent Booking
                            </button>
                            <img src="./images/about/a3.png" className="absolute bottom-0 right-24 hidden lg:block" alt="" />
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <img src="./images/about/a2.png" alt=" " className="w-full" />
                        </div>

                    </div>
                    {/* block 1 end  */}
                    {/* block 2 start  */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 mb-12">
                        <div>
                            <img src="./images/about/a1.png" alt="" className="w-5/6  " />

                        </div>
                        <div className="py-1 relative mt-10 lg:mt-0">
                            <p className="text-xl  font-semibold text-[rgba(55,83,188,1)]">
                                Dr. Vijayabharathi, Clinical Director, Subha Multi-Speciality Dental Clinic & Implant Center
                            </p>
                            <p className="text-lg  font-semibold mt-4">
                                Certified in Aesthetic Dentistry, Root Canal Therapy, and Orthodontic Correction.
                            </p>
                            <p className="mt-4 text-base">
                                Dr. P. Vijayabharathi is a distinguished dental professional with a passion for providing exceptional care. She graduated from the prestigious Government Dental College & Hospital, MMC Campus, Chennai, and has been practicing as a general and and specialist dentist since 2007.
                            </p>
                            <p className="mt-4 text-base">
                                She collaborates closely with her husband, Dr. P. Kamalashankar, MDS, Chief Implant Surgeon, to provide exemplary care aligned with international standards. Together, they lead a skilled clinical team committed to patient satisfaction.
                            </p>
                            <img src="./images/about/a4.png" className="absolute bottom-[-25px] right-24 hidden lg:block" alt="" />
                        </div>
                    </div>

                    {/* block 2 end */}
                    {/* block 3 start */}
                    <p className="text-start lg:text-center text-base  my-12 indent-12 ">
                        <span className="text-3xl text-[rgba(55,83,188,1)]">Journey</span> For over 15 years, Dr. Vijayabharathi has actively participated in dental awareness initiatives, conducting camps in schools, colleges, and urban centers to educate rural communities about oral health. Dr. Vijayabharathi is committed to lifelong learning and professional development. She has recently participated in the CDE Programme on the Art of Anterior Veneers hosted by the IDA Thoothukudi Branch and held at Kovilpatti. Additionally, she attended the Myofunctional Orthodontics Seminar, which included 8 hours of training with hands-on practical activities, presented by i3 International Academy for Advanced Dentistry.
                    </p>
                    {/* block 3 end */}
                    {/* block 4 start */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 mb-12 ">
                                <div>
                                    <img src="./images/about/a5.png"  alt=""  className="h-72 w-full"/>
                                    <div className="bg-[rgba(65,185,129,1)] rounded-2xl p-5 mt-4">
                                        <p className="text-white text-sm">
                                        <span className="text-base font-semibold">Dr.Kamalashankar’s</span> credentials extend beyond basic expertise. He holds certifications and diplomas from renowned institutions worldwide, including
                                        </p>
                                        <ul className="mt-4 space-y-2 text-white text-sm sm:space-y-3 list-disc list-inside ">
                                            <li>Master ship in digital dentistry from DDS, Switzerland</li>
                                            <li>certification as a diplomat of the International Congress of Oral Implantologists (ICOI, USA).</li>
                                            <li>Member of international Team of Oral Implantologist (ITI,SWITZERLAND).</li>
                                            <li>Member, Indian society oral implantologists (ISOI INDIA ).</li>
                                            <li>Certified user of straumann ,Nobel and Zygomatic System.</li>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                <div className="bg-[rgba(55,83,188,1)] rounded-2xl p-5 w-1/2">
                                        <p className="text-white text-lg ">
                                        <span className="font-[Risque]">Dental Implants with</span>  <br />
                                        <span className="font-bold">Dr. P. Kamalashankar MDS,</span><br />
                                        <span className="font-[Risque]">DICOI(USA)</span>
                                        </p>

                                </div>
                                <div className="mt-4">
                                    <img src="./images/about/a6.png" className="h-72 w-full " alt="" />
                                </div>
                                <div className="bg-[rgba(55,83,188,1)] rounded-2xl p-5 mt-4">
                                    <p className="text-white text-sm">
                                    As a director in <span className="text-lg font-semibold">15 Dental and Implant Xperts</span> (Hosur, Tirunelveli ,and Chennai) and Xperts Dento Facial Imaging Pvt Ltd (Tirunelveli, Namakal,Chennai,Tangore), Dr. Kamalashankar leads with a commitment to innovation and patient-centered care.
                                    </p>
                                </div>

                                </div>
                        </div>


                    {/* block 4 end */}





                </div>

            </section>

        </>
    )
}