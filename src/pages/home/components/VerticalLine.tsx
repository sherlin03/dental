import { useState } from "react";

export default function VerticalLineWithExpertise() {
  const buttonPositions = [0, 40,80,120 ,170]; // Predefined positions for the mini line
  const [position, setPosition] = useState(0); // Initial position of the mini line

  const content = [
    {
      title: "Expertise",
      description:
        "Benefit from our dentist's extensive knowledge and skill in dental procedures, ensuring precise and effective treatment outcomes.",
      image: "./images/home/s6.png",
    },
    {
      title: "Advanced Technology",
      description:
        "We utilize Latest equipment and techniques to deliver top-tier dental care, prioritizing your comfort and safety throughout",
      image: "./images/home/s6.png",
    },
    {
      title: "Personalized Approach",
      description:
        "Every patient receives individualized attention, with treatment plans meticulously tailored to meet their specific dental needs and aesthetic goals.",
      image: "./images/home/s6.png",
    },
    {
      title: "Comprehensive Services",
      description:
        "From routine check-ups to complex implant surgeries, we provide a full spectrum of dental services to restore and enhance your smile.",
      image: "./images/home/s6.png",
    },
    {
      title: "Patient-Centered Care",
      description:
        "Our warm and compassionate team ensures you feel welcome and supported at every visit, striving to make your dental experience as pleasant and stress-free as possible.",
      image: "./images/home/s6.png",
    },
  ];

  return (
    <>
    <div className="justify-items-start">
                <p className="text-3xl font-bold ml-0 sm:ml-20" data-aos="fade-right">Why Us</p>
                <p className="text-lg mt-5 mb-5 sm:ml-20" data-aos="fade-down">
                At Subha Dental care, we stand out for our commitment to excellence and patient-centered care. Led by Dr. P. Kamalashankar, a distinguished expert with over 20 years of dedicated experience, we offer:
                </p>
            </div>
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-4  items-center">
      {/* Vertical Line Container */}
      <div className="relative h-[200px] col-span-1 mt-5 lg:mt-0" data-aos="fade-up-right">
        {/* Main Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[5px] bg-gray-400"></div>

        {/* Movable Mini Line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[35px] bg-[rgba(65,185,129,1)] transition-all duration-300"
          style={{ top: `${buttonPositions[position]}px` }}
        ></div>
      </div>

      {/* Expertise Items */}
      <div className="flex flex-col space-y-4 col-span-2" data-aos="fade-up-right">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setPosition(index)}
          >
            <p
              className={`${
                position === index
                  ? "text-xl text-[rgba(59,79,162,1)]"
                  : "text-xl  "
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <div className="col-span-4 justify-items-start" id="why1" data-aos="fade-up-left">
        <p className="text-3xl font-bold text-[rgba(59,79,162,1)]">
          {content[position].title}
        </p>
        <p className="text-base mt-4">{content[position].description}</p>
        <img
          src={content[position].image}
          className="h-48 mt-5"
          alt={content[position].title}
        />
      </div>
      <div className="col-span-1 content-center justify-items-start" >
      <div className="content-center hidden lg:block">
                <img src="./images/home/s7.png" data-aos="flip-down" className="ml-20 " alt="" /> 
            </div>
      </div>
    </div>
    </>
  );
}
