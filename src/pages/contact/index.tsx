import { useEffect, useState } from "react";

export default function Contact() {

 useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    reasons: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      reasons: checked
        ? [...prevState.reasons, value]
        : prevState.reasons.filter((reason) => reason !== value),
    }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const response = await fetch("http://localhost/dental_email/send_mail.php", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   });

  //   const result = await response.json();
  //   alert(result.message);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const response = await fetch("http://localhost/dental_email/send_mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    const result = await response.json();
  
    if (result.success) {
      alert("Mail sent successfully!");
      
      // Clear the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        reasons: [],
      });
    } else {
      alert("Error: " + result.error);
    }
  };



  return (

    <>
      {/* contact us  */}
      <section>
        {/* block 1 start  */}
        <div className="">
          <div className="
                w-full 
                bg-[rgba(88,215,155,0.12)] 
                max-h-fit
                mt-0
                mb-12
                pb-12
                justify-items-center
              "
            style={{ boxShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}

          >
            <div className="grid pt-5 justify-items-center ">
              <img src="./images/contact/c1.png" className="bg-[rgba(59,79,162,1)] px-2 py-2  " alt="" />
            </div>
            <div className="grid justify-items-center pt-5  text-center">
              <p className="font-[Risque] text-center text-3xl text-[rgba(59,79,162,1)] px-10">
                “Perfect Your Smile with Dr. P. Kamalashankar's Advanced Dental Implants.”
              </p>
              <p className="pt-4 text-center px-10">
                20 years of experience in dental implants
              </p>
            </div>
            <div
              className="
    flex 
    flex-col 
    md:flex-row 
    justify-center 
    items-center 
    pt-4 
    sm:pt-20 
    md:pt-28 
    lg:pt-16 
    mx-10 
    min-[453px]:pt-10
  "
            >
              <p
                className="
                outline outline-offset-2 outline-[rgba(229,225,225,1)] rounded
      px-3 
      py-3 
      text-sm 
      lg:text-base 
      text-center 
      md:mx-2 
      mt-5 
      md:mt-0
    "
              >
                <span>
                  <img src="./images/contact/c2.png" className="inline-block pr-3" alt="" />
                </span>
                24*7 assistance
              </p>
              <p
                className="
      outline outline-offset-2 outline-[rgba(229,225,225,1)] rounded
      px-3 
      py-3 
      text-sm 
      lg:text-base 
      text-center 
      md:mx-2 
      mt-5 
      md:mt-0
    "
              >
                <span>
                  <img src="./images/contact/c2.png" className="inline-block pr-3" alt="" />
                </span>
                24*7 assistance
              </p>
              <p
                className="
      outline outline-offset-2 outline-[rgba(229,225,225,1)] rounded
      px-3 
      py-3 
      text-sm 
      lg:text-base 
      text-center 
      md:mx-2 
      mt-5 
      md:mt-0
    "
              >
                <span>
                  <img src="./images/contact/c2.png" className="inline-block pr-3" alt="" />
                </span>
                24*7 assistance
              </p>
            </div>


          </div>

        </div>
        {/* block 1 End  */}
        {/* block 2 start  */}
        <div className="container mx-auto relative mt-10  mb-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
            <div className="mt-5 ">
              <p className="justify-items-start text-[rgba(59,79,162,1)] text-lg mt-0 lg:mt-10">
                <span className="bg-[rgba(249,247,247,1)] px-4 py-2"># Contact Us</span>
              </p>
              {/* <p className="text-4xl font-bold mt-8 justify-items-start">
                Get in Touch
              </p> */}
              <p className="text-justify lg:text-left w-full mt-4 ">
                Contact us today to schedule your consultation and discover
                how we can help you achieve a radiant, confident smile.
              </p>
              <p className="text-3xl font-bold mt-4">
                Visit Us During These Hours:
              </p>
              <p className="text-justify lg:text-left w-full mt-4 flex flex-row">
                <span>
                  <img src="./images/contact/c2.png" className="inline-block pr-3" alt="" />
                </span>
                Monday to Saturday: 9:00 AM - 5:00 PM | Sunday: 9:00 AM - 3:00  PM 
                
              </p>
              <p className="  mt-5 text-3xl font-bold">
                <span>
                  <img src="./images/contact/c3.png" className="inline-block pr-3" alt="" />
                </span>
                Our Clinic
              </p>
              <p className="mt-4 relative">
                +91 94873 25401 <br />
                Mail us : drkamalimplant79@gmail.com <br />
                Sathankulam.
                <img src="./images/contact/c4.png" className="absolute top-0 right-20 hidden lg:block" alt="" />
              </p>

              <p className="  mt-4  text-3xl font-bold">
                <span>
                  <img src="./images/contact/c5.png" className="inline-block pr-3 -mt-3" alt="" />
                </span>
                Clinics
              </p>
              <p className=" hidden xl:block  justify-items-center lg:justify-items-start  mt-4 mb-5">
                25G/1,Nazareth road near new bus stand | <br />Sathankulam-628704 
                Tuticorin District |<br /> Ph.no : +91 63698 12048, +91 94437 50377
                
              </p>
              <p className=" hidden sm:block lg:hidden  justify-items-center lg:justify-items-start  mt-4 mb-5">
                25G/1,Nazareth road near new bus stand | Sathankulam-628704 
                Tuticorin District |<br /> Ph.no : +91 63698 12048, +91 94437 50377
                
              </p>
              <p className=" hidden lg:block xl:hidden  justify-items-center lg:justify-items-start  mt-4 mb-5">
                25G/1,Nazareth road near new bus stand | Sathankulam-628704 
                Tuticorin District |<br /> Ph.no : +91 63698 12048, +91 94437 50377
                
              </p>
              <p className=" block sm:hidden  justify-items-center lg:justify-items-start mt-4 mb-5">
                25G/1,Nazareth road near new bus stand |<br /> Sathankulam-628704 <br />
                Tuticorin District |<br /> Ph.no : +91 63698 12048,<br /> +91 94437 50377
                
              </p>

              
            </div>

            <div className="flex  justify-center   "  >
              <div className="bg-white shadow-2xl h-fit rounded-[20px] p-6  mb-16 w-full max-w-lg">
                {/* Header Section */}
                <div className=" mb-6 justify-items-center">
                  <img src="./images/contact/c6.png" alt="" />
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName} 
                        onChange={handleChange}
                        className="mt-1 block w-full border-none  bg-[rgba(246,244,244,1)]  shadow-sm placeholder:text-sm sm:placeholder:text-base placeholder-[rgba(59,79,162,1)]"
                        required
                      />
                    </div>

                    {/* Last Name */}
                    <div>

                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName} 
                        onChange={handleChange}
                        className="mt-1 block w-full border-none  bg-[rgba(246,244,244,1)] shadow-sm placeholder-[rgba(59,79,162,1)] placeholder:text-sm sm:placeholder:text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email} 
                        onChange={handleChange}
                        className="mt-1 block w-full border-none  bg-[rgba(246,244,244,1)]  shadow-sm placeholder-[rgba(59,79,162,1)] placeholder:text-sm sm:placeholder:text-base"
                        required
                      />
                    </div>
                    <div>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="mt-1 block w-full border-none  bg-[rgba(246,244,244,1)]  shadow-sm placeholder-[rgba(59,79,162,1)] placeholder:text-sm sm:placeholder:text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Checkbox Options */}
                  <div className="mt-4 text-indigo-600 border-gray-300 bg-[rgba(246,244,244,1)]   px-5 py-5">
                    <label className="block text-[rgba(59,79,162,1)] font-medium">Why are you Contacting us</label>
                    <div className="mt-4  gap-4">
                    <div className="grid grid-cols-3 gap-4 mt-2">
          {["Implant", "Braces", "Oral Surgery", "Root Canal", "Oral hygiene", "Other"].map((reason) => (
            <label key={reason} className="flex items-center text-sm sm:text-base space-x-2 text-[#504d4d]">
              <input type="checkbox" value={reason} onChange={handleCheckboxChange} className="h-4 w-4 text-indigo-600 bg-[rgba(246,244,244,1)]  bg-gray-400  focus:ring-gray-300 " />
              <span>{reason}</span>
            </label>
          ))}
        </div>
                    

                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-4">

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Message"
                      value={formData.message} 
                      onChange={handleChange}
                      className="mt-1 block w-full  border-none bg-[rgba(246,244,244,1)] shadow-sm placeholder-[rgba(59,79,162,1)]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6 relative">
                    <button
                      type="submit"

                      className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                    <img src="./images/contact/c7.png" alt="" className="hidden lg:block xl:hidden absolute bottom-5 -right-32 w-56" />
                    <img src="./images/contact/c8.png" alt="" className="hidden sm:block lg:hidden xl:block absolute  bottom-5 -right-48 xl:-right-36 w-60 h-64 " />
                  </div>
                </form>

              </div>
            </div>
            {/* <div>

            </div> */}
          </div>



        </div>
        {/* block 2 End  */}
        {/* block 3 Start  */}
        <div className="w-full  pt-5 " >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.6635874444887!2d77.86449257366554!3d8.336185399451606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b047ff2ae30e983%3A0xd2ddb4e57965b313!2sSubha%20Dental%20Clinic%20Thisaiyanvilai!5e0!3m2!1sen!2sin!4v1732184675639!5m2!1sen!2sin"
            className="w-full h-[450px] "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Subha Dental Clinic Map"
          ></iframe>

        </div>
        {/* block 3 End  */}

      </section>

    </>
  )
}