import  { useEffect } from "react";
import AOS from "aos";



export default function Service() {

    useEffect(() => {
        AOS.init({
          duration: 3000,
        });
      }, []);
     


    return (
        <>
            {/* Services page  */}
            <section>

                <div className="mt-12 mb-12 container mx-auto">

                     {/* block 1 start */}
                     <p className="justify-items-start text-[rgba(59,79,162,1)] text-lg">
                                <span className="bg-[rgba(249,247,247,1)] px-5 py-2">Services</span>
                     </p>
                     <div className=" mb-12 justify-items-center">
                     

                     <p className=" text-base 2xl:text-lg text-center my-8 "  data-aos="zoom-out-up" data-aos-duration="3000" data-aos-easing="ease-in-out-cubic">
                     Comprehensive Dental Care at <span className="text-[rgba(55,83,188,1)] font-bold" >“SHUBHA’s DENTAL CARE”</span> at Shuba Dental Care, we offer a comprehensive range of dental treatments and procedures to ensure the optimal health and beauty of your smile. Our experienced team of dentists is dedicated to providing personalized care in a serene environment.
                    </p>
                    <button className="bg-blue-800 text-center text-white font-semibold py-3 mt-2 px-4 rounded-lg hover:bg-blue-700"  data-aos="zoom-out-up" data-aos-duration="3000" data-aos-easing="ease-in-out-cubic">
                    Book Now
                    </button>
                    </div>
                    {/* block 1 end */}

                        {/* desktopview  */}

                    <div className="hidden lg:block">

                    {/* block 2 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
                        <div className="relative mt-0 2xl:mt-8" data-aos="fade-right" data-aos-duration="3000" data-aos-mirror="true">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
                            General Dentistry
                            </p>
                            <p className="text-base 2xl:text-lg mt-6 justify-items-start">
                            Safeguarding oral health through proactive prevention, early diagnosis, and effective treatment, guiding patients toward a healthy and attractive smile, and serving as the first line of defense with seamless specialist referrals when required.
                            </p>
                            
                          <ul className="list-disc list-inside ml-4 mt-4">
                            <li>Routine dental check-ups and examinations</li>
                            <li>Professional teeth cleaning and oral hygiene instructions</li>
                            <li>Dental X-rays and diagnostic imaging</li>
                            <li>Fillings (composite, amalgam)</li>
                            <li>Root canal therapy for infected teeth</li>
                            <li>Tooth extractions (including wisdom teeth)</li>
                            <li>Oral cancer screenings</li>
                          </ul>

                          

                        </div>

                        <div className="mt-10 lg:mt-0 " data-aos="fade-left" data-aos-duration="3000" data-aos-mirror="true"  >
                            <div className="relative">
                            <img src="./images/services/s3.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
                            <img src="./images/services/s13.png" alt="" className="hidden lg:block absolute top-[-30px] right-36" />
                            <div >
                                <img src="./images/services/s1.png" alt=" " className="w-full h-64 sm:h-96" />
                                <img src="./images/services/s2.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] left-0" />
                            </div>
                            </div>
                            

                        </div>

                    </div>
                    {/* block 2 end  */}
                    {/* block 3 start  */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 sm
                    mb-5 lg:mb-24"  data-aos="zoom-in-right" data-aos-duration="3000" data-aos-mirror="true">
                        <div>
                            <div className="relative">
                                <img src="./images/services/s6.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] left-0" />
                                <div >
                                    <img src="./images/services/s4.png" alt=" " className="w-full h-64 sm:h-96" />
                                    <img src="./images/services/s5.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] right-0" />
                                </div>
                            </div>

                        </div>


                        <div className="py-1 relative mt-16 sm:mt-16 lg:mt-0 2xl:mt-8" data-aos="zoom-in-left" data-aos-duration="3000" data-aos-anchor-placement="top-center">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
                                Cosmetic Dentistry
                            </p>
                            <p className="text-base 2xl:text-lg mt-6 justify-items-start">
                            Enhancing the aesthetic appearance of your smile and overall oral health, cosmetic dentistry goes beyond aesthetics to strengthen teeth, making them more resistant to damage, and improve oral hygiene by aligning teeth for easier cleaning. Each treatment is meticulously tailored to individual needs, ensuring personalized solutions that yield enduring results and comprehensive smile makeovers.

                            </p>
                            
                            <ul className="list-disc list-inside ml-4 mt-4">
                                <li>Teeth whitening (in-office and take-home options)</li>
                                <li>Dental veneers (porcelain or composite)</li>
                                <li>Dental bonding for minor cosmetic corrections</li>
                                <li>Tooth-colored fillings and restorations</li>
                                <li>Clear aligner therapy (e.g., Invisalign)</li>
                                <li>Porcelain crowns and bridges for aesthetic improvements</li>
                            </ul>
                            
                        </div>
                    </div>

                    {/* block 3 end */}


                    {/* block 4 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
                        <div className="relative mt-0 2xl:mt-8" data-aos="fade-right" data-aos-duration="3000" data-aos-mirror="true">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-0 lg:mt-8 text-3xl font-bold">
                                Restorative Dentistry:
                            </p>
                            <p className="text-base 2xl:text-lg mt-6 justify-items-start">
                                Restorative dentistry involves the comprehensive process of repairing damaged or missing teeth, encompassing all modern dental disciplines. By integrating an interdisciplinary approach, we achieve optimal dental function and aesthetics for our patients. This includes restoring the function, integrity, and morphology of tooth structures affected by caries or external trauma, as well as replacing missing teeth with dental implants.
                            </p>
                            
                          <ul className="list-disc list-inside ml-4 mt-4">
                            <li>Dental crowns (porcelain, ceramic, metal)</li>
                            <li>Dental bridges to replace missing teeth</li>
                            <li>Dental implants (placement and restoration)</li>
                            <li>Dentures (full and partial)</li>
                            <li>Inlays and onlays for larger cavities or damaged teeth</li>
                            
                          </ul>

                        </div>

                        <div className="mt-10 lg:mt-0 " data-aos="fade-left" data-aos-duration="3000" data-aos-mirror="true"  >
                            <div className="relative">

                            <img src="./images/services/s9.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
                            <div >
                                <img src="./images/services/s7.png" alt=" " className="w-full h-64 sm:h-96" />
                                <img src="./images/services/s8.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] left-0" />
                                <img src="./images/services/s10.png" alt=" " className="absolute hidden lg:block bottom-36 -left-7" />

                            </div>
                            </div>
                            

                        </div>

                    </div>
                    {/* block 4 end  */}
                    {/* block 5 start  */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 sm
                    mb-5 lg:mb-24" data-aos="zoom-in-right" data-aos-duration="3000" data-aos-anchor-placement="top-center">
                        <div>
                            <div className="relative">
                                <img src="./images/services/s6.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] left-0" />
                                <div >
                                    <img src="./images/services/s4.png" alt=" " className="w-full h-64 sm:h-96" />
                                    <img src="./images/services/s11.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] right-0" />
                                </div>
                            </div>

                        </div>


                        <div className="py-1 relative mt-16 sm:mt-16 lg:mt-0 2xl:mt-8" data-aos="zoom-in-left" data-aos-duration="3000" data-aos-anchor-placement="top-center">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
                            Orthodontics
                            </p>
                            <p className="text-base 2xl:text-lg mt-6 justify-items-start">
                            Orthodontics addresses the diagnosis, prevention, management, and correction of mal-positioned teeth and jaws, as well as misaligned bite patterns, to improve the appearance of your smile. In addition to cosmetic benefits, orthodontics enhances chewing function and promotes better oral health. Proper alignment can also alleviate issues such as jaw pain, speech difficulties, and excessive wear on teeth.

                            </p>
                            
                            <ul className="list-disc list-inside ml-4 mt-4">
                                <li>Traditional metal braces</li>
                                <li>Clear aligners (e.g., Invisalign)</li>
                                <li>Retainers and orthodontic appliances</li>
                                <li>Treatment for malocclusions (overbites, underbites)</li>
                                <li>Jaw alignment and bite correction</li>
                            </ul>
                            
                        </div>
                    </div>

                    {/* block 5 end */}

                     {/* block 6 start  */}
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
                        <div className="relative mt-0 2xl:mt-8" data-aos="fade-right" data-aos-duration="3000"              data-aos-mirror="true">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-0 lg:mt-8 text-3xl font-bold">
                              Oral Surgery
                            </p>
                            <p className="text-base 2xl:text-lg mt-6 justify-items-start">
                            Oral surgery tackles a variety of complex dental issues, such as impacted teeth, jaw misalignment, and facial trauma. From simple tooth extractions to complex reconstructive surgeries, our experienced oral surgeons utilize the latest techniques and equipment to ensure precise and effective treatment. Whether you require wisdom teeth removal, dental implants, or corrective jaw surgery, trust our team to deliver exceptional results and help you achieve optimal oral health and function.

                            </p>
                            
                          <ul className="list-disc list-inside ml-4 mt-4">
                            <li>Wisdom teeth extraction</li>
                            <li>Dental implant surgery (placement and restoration)</li>
                            <li>Treatment of facial trauma and oral injuries</li>
                            <li>Biopsy and surgical treatment of oral lesions</li>
                            <li>Bone grafting and sinus lifts for dental implants</li>
                          </ul>
                        </div>

                        <div className="mt-10 lg:mt-0 " data-aos="fade-left" data-aos-duration="3000" data-aos-mirror="true"  >
                            <div className="relative">
                            <img src="./images/services/s3.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
                            <div >
                                <img src="./images/services/s1.png" alt=" " className="w-full h-64 sm:h-96" />
                                <img src="./images/services/s12.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] left-0" />
                            </div>
                            </div>
                        </div>

                    </div>
                    {/* block 6 end  */}
                    </div>

                    {/* mob view  */}

                    <div className="block lg:hidden">

{/* block 2 start  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
    <div className="relative mt-0 2xl:mt-8" data-aos="fade-right" data-aos-duration="3000" data-aos-mirror="true">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
        General Dentistry
        </p>
        <p className="text-base 2xl:text-lg mt-6 justify-items-start">
        Safeguarding oral health through proactive prevention, early diagnosis, and effective treatment, guiding patients toward a healthy and attractive smile, and serving as the first line of defense with seamless specialist referrals when required.
        </p>
        
      <ul className="list-disc list-inside ml-4 mt-4">
        <li>Routine dental check-ups and examinations</li>
        <li>Professional teeth cleaning and oral hygiene instructions</li>
        <li>Dental X-rays and diagnostic imaging</li>
        <li>Fillings (composite, amalgam)</li>
        <li>Root canal therapy for infected teeth</li>
        <li>Tooth extractions (including wisdom teeth)</li>
        <li>Oral cancer screenings</li>
      </ul>

      

    </div>

    <div className="mt-10 lg:mt-0 " data-aos="fade-left" data-aos-duration="3000" data-aos-mirror="true"  >
        <div className="relative">
        <img src="./images/services/s3.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
        <img src="./images/services/s13.png" alt="" className="hidden lg:block absolute top-[-30px] right-36" />
        <div >
            <img src="./images/services/s1.png" alt=" " className="w-full h-64 sm:h-96" />
            <img src="./images/services/s2.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] left-0" />
        </div>
        </div>
        

    </div>

</div>
{/* block 2 end  */}
{/* block 3 start  */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 sm
mb-5 lg:mb-24"  data-aos="zoom-in-right" data-aos-duration="3000" data-aos-mirror="true">
 
    <div className="py-1 relative mt-16 sm:mt-16 lg:mt-0 2xl:mt-8" data-aos="zoom-in-left" data-aos-duration="3000" data-aos-anchor-placement="top-center">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
            Cosmetic Dentistry
        </p>
        <p className="text-base 2xl:text-lg mt-6 justify-items-start">
        Enhancing the aesthetic appearance of your smile and overall oral health, cosmetic dentistry goes beyond aesthetics to strengthen teeth, making them more resistant to damage, and improve oral hygiene by aligning teeth for easier cleaning. Each treatment is meticulously tailored to individual needs, ensuring personalized solutions that yield enduring results and comprehensive smile makeovers.

        </p>
        
        <ul className="list-disc list-inside ml-4 mt-4">
            <li>Teeth whitening (in-office and take-home options)</li>
            <li>Dental veneers (porcelain or composite)</li>
            <li>Dental bonding for minor cosmetic corrections</li>
            <li>Tooth-colored fillings and restorations</li>
            <li>Clear aligner therapy (e.g., Invisalign)</li>
            <li>Porcelain crowns and bridges for aesthetic improvements</li>
        </ul>
        
    </div>

    <div className="mt-24">
        <div className="relative">
            <img src="./images/services/s6.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] left-0" />
            <div >
                <img src="./images/services/s4.png" alt=" " className="w-full h-64 sm:h-96" />
                <img src="./images/services/s5.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] right-0" />
            </div>
        </div>

    </div>
</div>

{/* block 3 end */}


{/* block 4 start  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-40 mb-24">
    <div className="relative mt-0 2xl:mt-8" data-aos="fade-right" data-aos-duration="3000" data-aos-mirror="true">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-0 lg:mt-8 text-3xl font-bold">
            Restorative Dentistry:
        </p>
        <p className="text-base 2xl:text-lg mt-6 justify-items-start">
            Restorative dentistry involves the comprehensive process of repairing damaged or missing teeth, encompassing all modern dental disciplines. By integrating an interdisciplinary approach, we achieve optimal dental function and aesthetics for our patients. This includes restoring the function, integrity, and morphology of tooth structures affected by caries or external trauma, as well as replacing missing teeth with dental implants.
        </p>
        
      <ul className="list-disc list-inside ml-4 mt-4">
        <li>Dental crowns (porcelain, ceramic, metal)</li>
        <li>Dental bridges to replace missing teeth</li>
        <li>Dental implants (placement and restoration)</li>
        <li>Dentures (full and partial)</li>
        <li>Inlays and onlays for larger cavities or damaged teeth</li>
        
      </ul>

    </div>

    <div className="mt-10 lg:mt-0 " data-aos="fade-left" data-aos-duration="3000" data-aos-mirror="true"  >
        <div className="relative">

        <img src="./images/services/s9.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
        <div >
            <img src="./images/services/s7.png" alt=" " className="w-full h-64 sm:h-96" />
            <img src="./images/services/s8.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] left-0" />
            <img src="./images/services/s10.png" alt=" " className="absolute hidden lg:block bottom-36 -left-7" />

        </div>
        </div>
        

    </div>

</div>
{/* block 4 end  */}
{/* block 5 start  */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 sm
mb-5 lg:mb-24" data-aos="zoom-in-right" data-aos-duration="3000" data-aos-anchor-placement="top-center">
    

    <div className="py-1 relative mt-12 sm:mt-16 lg:mt-0 2xl:mt-8" data-aos="zoom-in-left" data-aos-duration="3000" data-aos-anchor-placement="top-center">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
        Orthodontics
        </p>
        <p className="text-base 2xl:text-lg mt-6 justify-items-start">
        Orthodontics addresses the diagnosis, prevention, management, and correction of mal-positioned teeth and jaws, as well as misaligned bite patterns, to improve the appearance of your smile. In addition to cosmetic benefits, orthodontics enhances chewing function and promotes better oral health. Proper alignment can also alleviate issues such as jaw pain, speech difficulties, and excessive wear on teeth.

        </p>
        
        <ul className="list-disc list-inside ml-4 mt-4">
            <li>Traditional metal braces</li>
            <li>Clear aligners (e.g., Invisalign)</li>
            <li>Retainers and orthodontic appliances</li>
            <li>Treatment for malocclusions (overbites, underbites)</li>
            <li>Jaw alignment and bite correction</li>
        </ul>
        
    </div>

    <div className="mt-24">
        <div className="relative">
            <img src="./images/services/s6.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] left-0" />
            <div >
                <img src="./images/services/s4.png" alt=" " className="w-full h-64 sm:h-96" />
                <img src="./images/services/s11.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] right-0" />
            </div>
        </div>

    </div>

</div>

{/* block 5 end */}

 {/* block 6 start  */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-40 mt-40">
    <div className="relative mt-0 2xl:mt-8" data-aos="fade-right" data-aos-duration="3000"              data-aos-mirror="true">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-0 lg:mt-8 text-3xl font-bold">
          Oral Surgery
        </p>
        <p className="text-base 2xl:text-lg mt-6 justify-items-start">
        Oral surgery tackles a variety of complex dental issues, such as impacted teeth, jaw misalignment, and facial trauma. From simple tooth extractions to complex reconstructive surgeries, our experienced oral surgeons utilize the latest techniques and equipment to ensure precise and effective treatment. Whether you require wisdom teeth removal, dental implants, or corrective jaw surgery, trust our team to deliver exceptional results and help you achieve optimal oral health and function.

        </p>
        
      <ul className="list-disc list-inside ml-4 mt-4">
        <li>Wisdom teeth extraction</li>
        <li>Dental implant surgery (placement and restoration)</li>
        <li>Treatment of facial trauma and oral injuries</li>
        <li>Biopsy and surgical treatment of oral lesions</li>
        <li>Bone grafting and sinus lifts for dental implants</li>
      </ul>
    </div>

    <div className="mt-10 lg:mt-0 " data-aos="fade-left" data-aos-duration="3000" data-aos-mirror="true"  >
        <div className="relative">
        <img src="./images/services/s3.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
        <div >
            <img src="./images/services/s1.png" alt=" " className="w-full h-64 sm:h-96" />
            <img src="./images/services/s12.png" alt=" " className="w-[83%] h-64 sm:h-96 absolute bottom-[-32px] left-0" />
        </div>
        </div>
    </div>

</div>
{/* block 6 end  */}
</div>

                </div>

            </section>

        </>
    )
}