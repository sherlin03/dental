import { useEffect } from "react";

export default function Service() {

     
 useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

    return (
        <>
            {/* Services page  */}
            <section>

                <div className="mt-10 mb-0 lg:mb-12 container mx-auto">

                     {/* block 1 start */}
                     <p className="justify-items-start text-[rgba(59,79,162,1)] text-lg">
                                <span className="bg-[rgba(249,247,247,1)] px-5 py-2"># Services</span>
                     </p>
                     <div className=" mb-5 justify-items-center">
                     

                     <p className=" text-base 2xl:text-lg text-justify lg:text-center my-8 "  >
                     Comprehensive Dental Care at <span className="text-[rgba(55,83,188,1)] font-bold" >“SUBHA MULTISPECIALITY DENTAL CLINIC”</span> at Shuba Dental Care, we offer a comprehensive range of dental treatments and procedures to ensure the optimal health and beauty of your smile. Our experienced team of dentists is dedicated to providing personalized care in a serene environment.
                    </p>
                    {/* <button className="bg-blue-800 text-center text-white font-semibold py-3 mt-2 px-4 rounded-lg hover:bg-blue-700"  >
                    Book Now
                    </button> */}
                    </div>
                    {/* block 1 end */}
                    </div>
                        {/* desktopview  */}

                    <div className="hidden lg:block">

                    {/* block 2 start  */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 container mx-auto">
                        <div className="relative mt-0 2xl:mt-8"   data-aos="fade-down-right" data-aos-duration="1000">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
                                General Dentistry
                            </p>
                            <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
                            Safeguarding oral health through proactive prevention, early diagnosis, and effective treatment, guiding patients toward a healthy and attractive smile, and serving as the first line of defense with seamless specialist referrals when required.
                            </p>
                            
                          <ul className="list-disc list-inside mt-4">
                            <li>Routine dental check-ups and examinations</li>
                            <li>Professional teeth cleaning and oral hygiene instructions</li>
                            <li>Dental X-rays and diagnostic imaging</li>
                            <li>Fillings (composite, amalgam)</li>
                            <li>Root canal therapy for infected teeth</li>
                            <li>Tooth extractions (including wisdom teeth)</li>
                            <li>Oral cancer screenings</li>
                          </ul>

                        </div>

                        <div className="mt-10 lg:mt-0 "  data-aos="fade-down-left" data-aos-duration="1000">
                            <div className="relative">
                            <img src="./images/services/s3.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
                            <img src="./images/services/s13.png" alt="" className="hidden lg:block absolute top-[-30px] right-36" />
                            <div >
                                <img src="./images/services/s1.png" alt=" " className="w-full h-64 sm:h-96" />

                                <div className="overflow-hidden rounded-2xl absolute bottom-[-32px] left-0 w-[83%] h-64 sm:h-96">
                                <img src="./images/services/sn1.png" alt=" " className="w-full rounded-2xl object-cover transition-transform duration-1000 hover:scale-[1.1] " />
                                </div>
                                
                            </div>
                            </div>
                            

                        </div>

                    </div>
                    {/* block 2 end  */}
                    {/* block 3 start  */}
                <div className="bg-[rgba(88,215,155,0.12)] mt-40  mx-auto my-auto pb-10 pt-10 mb-10 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 sm
                    mb-5 lg:mb-24 container mx-auto" data-aos="zoom-in-right" data-aos-duration="1000" >
                        <div >
                            <div className="relative">
                                <img src="./images/services/s6.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] left-0" />
                                <div >
                                    <img src="./images/services/s4.png" alt=" " className="w-full h-64 sm:h-96" />
                                    <div className="overflow-hidden rounded-2xl w-[83%] h-64 sm:h-96 absolute bottom-[-32px] right-0">
                                    <img src="./images/services/sn2.png" alt=" " className=" w-full object-cover transition-transform duration-1000 hover:scale-[1.1]" />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="py-1 relative mt-16 sm:mt-16 lg:mt-0 2xl:mt-8" data-aos="zoom-in-left" data-aos-duration="1000">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
                            Implant Dentistry
                            </p>
                            <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
                            Implant dentistry offers a permanent and natural-looking solution for missing teeth, restoring both function and aesthetics. Dental implants provide stability, durability, and comfort, mimicking the structure of natural teeth while preserving jawbone health. This advanced treatment improves chewing ability, speech, and overall confidence with a long-lasting solution.

                            </p>
                            
                            <ul className="list-disc list-inside  mt-4">
                                <li>Single and multiple dental implants for permanent tooth replacement</li>
                                <li>Implant-supported crowns and bridges for enhanced stability</li>
                                <li>Full-arch restorations with implant-supported dentures</li>
                                <li>Bone grafting and sinus lifts to improve implant success</li>
                                <li>Advanced digital planning for precise implant placement</li>
                            </ul>
                            
                        </div>
                    </div>
                    </div>
                    {/* block 3 end */}


                    {/* block 4 start  */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 container mx-auto">
                        <div className="relative mt-0 2xl:mt-8" data-aos="zoom-out-right" data-aos-duration="1000">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-0 lg:mt-8 text-3xl font-bold">
                            Restorative & Cosmetic
                            </p>
                            <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
                            Restorative and cosmetic dentistry combine to improve both the function and aesthetics of your smile. By utilizing advanced techniques, we restore damaged or missing teeth while enhancing their appearance, ensuring long-lasting and natural results. Our comprehensive treatments not only strengthen teeth but also promote better oral health and confidence.
                            </p>
                            
                          <ul className="list-disc list-inside  mt-4">
                          <li>Dental crowns and bridges to restore damaged or missing teeth</li>
        <li>Dental implants for permanent tooth replacement</li>
        <li>Dental implants (placement and restoration)</li>
        <li>Teeth whitening and veneers for a brighter, more uniform smile</li>
        <li>Clear aligners and bonding to correct alignment and minor imperfections</li>
                            
                          </ul>

                        </div>

                        <div className="mt-10 lg:mt-0 " data-aos="zoom-out-left" data-aos-duration="1000">
                            <div className="relative">

                            <img src="./images/services/s9.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
                            <div >
                                <img src="./images/services/s7.png" alt=" " className="w-full h-64 sm:h-96" />
                                <div className="overflow-hidden rounded-2xl w-[83%] h-64 sm:h-96 absolute bottom-[-32px] left-0 ">
                                <img src="./images/services/sn3.png" alt=" " className="w-full object-cover transition-transform duration-1000 hover:scale-[1.1] " />
                                </div>
                                <img src="./images/services/s10.png" alt=" " className="absolute hidden lg:block bottom-36 -left-7" />

                            </div>
                            </div>
                            

                        </div>

                    </div>
                    {/* block 4 end  */}
                    {/* block 5 start  */}
                    <div className="bg-[rgba(88,215,155,0.12)] mt-20  mx-auto my-auto pb-10 pt-10 mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 
                    mb-5 lg:mb-24 container mx-auto" >
                        <div > 
                            <div className="relative" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                                <img src="./images/services/s6.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] left-0" />
                                <div >
                                    <img src="./images/services/s4.png" alt=" " className="w-full h-64 sm:h-96" />
                                    <div className="overflow-hidden rounded-2xl w-[83%] h-64 sm:h-96 absolute bottom-[-32px] right-0">
                                    <img src="./images/services/sn4.png" alt=" " className="w-full object-cover transition-transform duration-1000 hover:scale-[1.1]" />
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="py-1 relative mt-16 sm:mt-16 lg:mt-0 2xl:mt-8" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
                            Orthodontics
                            </p>
                            <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
                            Orthodontics addresses the diagnosis, prevention, management, and correction of mal-positioned teeth and jaws, as well as misaligned bite patterns, to improve the appearance of your smile. In addition to cosmetic benefits, orthodontics enhances chewing function and promotes better oral health. Proper alignment can also alleviate issues such as jaw pain, speech difficulties, and excessive wear on teeth.

                            </p>
                            
                            <ul className="list-disc list-inside  mt-4">
                                <li>Traditional metal braces</li>
                                <li>Clear aligners (e.g., Invisalign)</li>
                                <li>Retainers and orthodontic appliances</li>
                                <li>Treatment for malocclusions (overbites, underbites)</li>
                                <li>Jaw alignment and bite correction</li>
                            </ul>
                            
                        </div>
                    </div>
                    </div>
                    {/* block 5 end */}

                     {/* block 6 start  */}
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 container mx-auto">
                        <div className="relative mt-0 2xl:mt-8"  data-aos="zoom-in-right" data-aos-duration="1000">
                            <p className="justify-items-start text-[rgba(59,79,162,1)] mt-0 lg:mt-8 text-3xl font-bold">
                              Oral Surgery
                            </p>
                            <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
                            Oral surgery tackles a variety of complex dental issues, such as impacted teeth, jaw misalignment, and facial trauma. From simple tooth extractions to complex reconstructive surgeries, our experienced oral surgeons utilize the latest techniques and equipment to ensure precise and effective treatment. Whether you require wisdom teeth removal, dental implants, or corrective jaw surgery, trust our team to deliver exceptional results and help you achieve optimal oral health and function.

                            </p>
                            
                          <ul className="list-disc list-inside  mt-4">
                            <li>Wisdom teeth extraction</li>
                            <li>Dental implant surgery (placement and restoration)</li>
                            <li>Treatment of facial trauma and oral injuries</li>
                            <li>Biopsy and surgical treatment of oral lesions</li>
                            <li>Bone grafting and sinus lifts for dental implants</li>
                          </ul>
                        </div>

                        <div className="mt-10 lg:mt-0 "  data-aos="zoom-in-left" data-aos-duration="1000">
                            <div className="relative">
                            <img src="./images/services/s3.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
                            <div >
                                <img src="./images/services/s1.png" alt=" " className="w-full h-64 sm:h-96" />
                                <div className="overflow-hidden rounded-2xl w-[83%] h-64 sm:h-96 absolute bottom-[-32px] left-0">
                                <img src="./images/services/s12.png" alt=" " className="w-full object-cover transition-transform duration-1000 hover:scale-[1.1]" />
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                    {/* block 6 end  */}
                    </div>





                    {/* mob view  */}
{/* <div className="container mx-auto"> */}
                    <div className="block lg:hidden">

{/* block 2 start  */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 container mx-auto">
    <div className="relative mt-0" data-aos="fade-up-right" >
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
        General Dentistry
        </p>
        <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
        Safeguarding oral health through proactive prevention, early diagnosis, and effective treatment, guiding patients toward a healthy and attractive smile, and serving as the first line of defense with seamless specialist referrals when required.
        </p>
        
      <ul className="list-disc list-inside  mt-4">
        <li>Routine dental check-ups and examinations</li>
        <li>Professional teeth cleaning and oral hygiene instructions</li>
        <li>Dental X-rays and diagnostic imaging</li>
        <li>Fillings (composite, amalgam)</li>
        <li>Root canal therapy for infected teeth</li>
        <li>Tooth extractions (including wisdom teeth)</li>
        <li>Oral cancer screenings</li>
      </ul>

      

    </div>

    <div  data-aos="fade-up-left">
        <div className="relative">
        <img src="./images/services/s3.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
        <img src="./images/services/s13.png" alt="" className="hidden lg:block absolute top-[-30px] right-36" />
        <div >
            <img src="./images/services/s1.png" alt=" " className="w-full h-64 sm:h-96" />
           
            <img src="./images/services/sn1.png" alt=" " className="w-[83%] rounded-2xl h-64 sm:h-96 absolute bottom-[-32px] left-0 " />
            
        </div>
        </div>
        

    </div>

</div>
{/* block 2 end  */}
{/* block 3 start  */}

<div className="bg-[rgba(88,215,155,0.12)] mt-40  mx-auto my-auto pb-40 pt-10 mb-10 ">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto" >
 
    <div className="py-1 relative " data-aos="fade-up-right">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
        Implant Dentistry
        </p>
        <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
        Implant dentistry offers a permanent and natural-looking solution for missing teeth, restoring both function and aesthetics. Dental implants provide stability, durability, and comfort, mimicking the structure of natural teeth while preserving jawbone health. This advanced treatment improves chewing ability, speech, and overall confidence with a long-lasting solution.

        </p>
        
        <ul className="list-disc list-inside  mt-4">
                                <li>Single and multiple dental implants for permanent tooth replacement</li>
                                <li>Implant-supported crowns and bridges for enhanced stability</li>
                                <li>Full-arch restorations with implant-supported dentures</li>
                                <li>Bone grafting and sinus lifts to improve implant success</li>
                                <li>Advanced digital planning for precise implant placement</li>
        </ul>
        
    </div>

    <div className="mt-2" data-aos="fade-up-left">
        <div className="relative">
            <img src="./images/services/s6.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] left-0" />
            <div >
                <img src="./images/services/s4.png" alt=" " className="w-full h-64 sm:h-96" />
                <img src="./images/services/sn2.png" alt=" " className="w-[83%]  rounded-2xl h-64 sm:h-96 absolute bottom-[-32px] right-0" />
            </div>
        </div>

    </div>
</div>
</div>
{/* block 3 end */}


{/* block 4 start  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 sm:mt-40 container mx-auto ">
    <div className="relative mt-0 2xl:mt-8" data-aos="fade-up-right">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-0 lg:mt-8 text-3xl font-bold">
            Restorative Cosmetic
        </p>
        <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
        Restorative and cosmetic dentistry combine to improve both the function and aesthetics of your smile. By utilizing advanced techniques, we restore damaged or missing teeth while enhancing their appearance, ensuring long-lasting and natural results. Our comprehensive treatments not only strengthen teeth but also promote better oral health and confidence.
        </p>
        
      <ul className="list-disc list-inside  mt-4">
        <li>Dental crowns and bridges to restore damaged or missing teeth</li>
        <li>Dental implants for permanent tooth replacement</li>
        <li>Dental implants (placement and restoration)</li>
        <li>Teeth whitening and veneers for a brighter, more uniform smile</li>
        <li>Clear aligners and bonding to correct alignment and minor imperfections</li>
        
      </ul>

    </div>

    <div data-aos="fade-up-left" >
        <div className="relative">

        <img src="./images/services/s9.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
        <div >
            <img src="./images/services/s7.png" alt=" " className="w-full h-64 sm:h-96" />
            <img src="./images/services/sn3.png" alt=" " className="w-[83%]  rounded-2xl h-64 sm:h-96 absolute bottom-[-32px] left-0" />
            <img src="./images/services/s10.png" alt=" " className="absolute hidden lg:block bottom-36 -left-7" />

        </div>
        </div>
        

    </div>

</div>
{/* block 4 end  */}
{/* block 5 start  */}
<div className="bg-[rgba(88,215,155,0.12)] mt-40  mx-auto my-auto pb-40 pt-10 mb-10 ">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 
mb-5  container mx-auto">
    

    <div className="py-1 relative " data-aos="fade-up-right">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-8 text-3xl font-bold">
        Orthodontics
        </p>
        <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
        Orthodontics addresses the diagnosis, prevention, management, and correction of mal-positioned teeth and jaws, as well as misaligned bite patterns, to improve the appearance of your smile. In addition to cosmetic benefits, orthodontics enhances chewing function and promotes better oral health. Proper alignment can also alleviate issues such as jaw pain, speech difficulties, and excessive wear on teeth.

        </p>
        
        <ul className="list-disc list-inside  mt-4">
            <li>Traditional metal braces</li>
            <li>Clear aligners (e.g., Invisalign)</li>
            <li>Retainers and orthodontic appliances</li>
            <li>Treatment for malocclusions (overbites, underbites)</li>
            <li>Jaw alignment and bite correction</li>
        </ul>
        
    </div>

    <div data-aos="fade-up-left">
        <div className="relative">
            <img src="./images/services/s6.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] left-0" />
            <div >
                <img src="./images/services/s4.png" alt=" " className="w-full h-64 sm:h-96" />
                <img src="./images/services/sn4.png" alt=" " className="w-[83%] rounded-2xl h-64 sm:h-96 absolute bottom-[-32px] right-0" />
            </div>
        </div>

    </div>

</div>
</div>

{/* block 5 end */}

 {/* block 6 start  */}
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40 mt-20 container mx-auto">
    <div className="relative mt-0 2xl:mt-8" data-aos="fade-up-right">
        <p className="justify-items-start text-[rgba(59,79,162,1)] mt-0 lg:mt-8 text-3xl font-bold">
          Oral Surgery
        </p>
        <p className="text-base text-justify 2xl:text-lg mt-6 justify-items-start">
        Oral surgery tackles a variety of complex dental issues, such as impacted teeth, jaw misalignment, and facial trauma. From simple tooth extractions to complex reconstructive surgeries, our experienced oral surgeons utilize the latest techniques and equipment to ensure precise and effective treatment. Whether you require wisdom teeth removal, dental implants, or corrective jaw surgery, trust our team to deliver exceptional results and help you achieve optimal oral health and function.

        </p>
        
      <ul className="list-disc list-inside  mt-4">
        <li>Wisdom teeth extraction</li>
        <li>Dental implant surgery (placement and restoration)</li>
        <li>Treatment of facial trauma and oral injuries</li>
        <li>Biopsy and surgical treatment of oral lesions</li>
        <li>Bone grafting and sinus lifts for dental implants</li>
      </ul>
    </div>

    <div data-aos="fade-up-left">
        <div className="relative" >
        <img src="./images/services/s3.png" alt=" " className="w-[60%] h-40 absolute bottom-[-80px] right-0" />
        <div >
            <img src="./images/services/s1.png" alt=" " className="w-full h-64 sm:h-96" />
            <img src="./images/services/s12.png" alt=" " className="w-[83%] rounded-2xl h-64 sm:h-96 absolute bottom-[-32px] left-0 transition-transform duration-1000 hover:scale-[1.1]" />
        </div>
        </div>
    </div>

</div>
{/* block 6 end  */}
</div>
{/* </div> */}
                
</section>

        </>
    )
}