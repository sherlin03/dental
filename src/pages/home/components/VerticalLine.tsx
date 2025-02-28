import { useState, useRef, useEffect } from "react";

export default function VerticalLineWithExpertise() {
  const buttonPositions = [0,50,130,200,280]; // Predefined positions for the mini line
  const [position, setPosition] = useState(0); // Initial position of the mini line

  const content = [
    {
      id:1,
      title: "Expertise",
      description:
        "Benefit from our dentist's extensive knowledge and skill in dental procedures, ensuring precise and effective treatment outcomes.",
      image: "./images/home/s6.png",
    },
    {
      id:2,
      title: "Advanced Technology",
      description:
        "We utilize Latest equipment and techniques to deliver top-tier dental care, prioritizing your comfort and safety throughout.",
      image: "./images/home/advanced technology.jpg",
    },
    {
      id:3,
      title: "Personalized Approach",
      description:
        "Every patient receives individualized attention, with treatment plans meticulously tailored to meet their specific dental needs and aesthetic goals.",
      image: "./images/home/personalized approach.jpg",
    },
    {
      id:4,
      title: "Comprehensive Services",
      description:
        "From routine check-ups to complex implant surgeries, we provide a full spectrum of dental services to restore and enhance your smile.",
      image: "./images/home/Comprehensive Services.jpg",
    },
    {
      id:5,
      title: "Patient-Centered Care",
      description:
        "Our warm and compassionate team ensures you feel welcome and supported at every visit, striving to make your dental experience as pleasant and stress-free as possible.",
      image: "./images/home/Patient-Centered Care.jpg",
    },
  ];

  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollTop = scrollContainerRef.current.scrollTop;
      const contentHeight = scrollContainerRef.current.scrollHeight;
      const containerHeight = scrollContainerRef.current.clientHeight;
      const scrollPercentage = (scrollTop / (contentHeight - containerHeight)) * 100;

      // Update position based on scroll percentage
      const newIndex = Math.floor((scrollPercentage / 100) * content.length);
      setPosition(newIndex);
    }
  };

  useEffect(() => {
    // Ensure the mini line is set correctly when content changes
    if (position >= 0 && position < buttonPositions.length) {
      // Position is being updated, no further action needed here
    }
  }, [position]);

  const scrollToContent = (index: number) => {
    setPosition(index);
    const contentElement = contentRef.current[index];
    if (contentElement) {
      contentElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // Scroll the item to the center of the container
      });
    }
  };

  return (
    <>
      <div className="justify-items-start mt-12 lg:mt-20 !sticky top-0">
        <p className="text-3xl font-bold " >
          Why Us
        </p>
        <p className="text-lg text-justify mt-5 mb-5 " data-aos="fade-up-left" >
          At Subha Dental care, we stand out for our commitment to excellence
          and patient-centered care. Led by Dr. P. Kamalashankar, a
          distinguished expert with over 20 years of dedicated experience, we
          offer:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-8 -mt-12 gap-4 items-center relative" data-aos="fade-up-left">
        {/* left side  */}
        {/* Vertical Line Container */}
        <div
          className="relative h-[310px] col-span-1 mt-24 lg:mt-28"
         
        >
          {/* Main Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[5px] ml-0 sm:ml-7 xl:ml-14 bg-gray-400"></div>

          {/* Movable Mini Line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[50px] ml-0 sm:ml-7 xl:ml-14 bg-[rgba(65,185,129,1)] transition-all duration-300"
            style={{ top: `${buttonPositions[position]}px` }}
          ></div>



          
        </div>

        {/* Expertise Items */}
        <div
          className="flex flex-col w-[18rem] space-y-4 mr-0 sm:mr-36 md:mr-56 lg:-mr-7 xl:mr-0 col-span-1 lg:col-span-2"
         
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 cursor-pointer mt-20"
              onClick={() => scrollToContent(index)}
            >
              <p
                className={` ${
                  position === index
                    ? "text-xl sm:text-2xl text-[rgba(59,79,162,1)] mt-0"
                    : "text-xl sm:text-2xl"
                } mt-6 font-extrabold`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
{/* right side  */}
        {/* Scrollable Content Section */}
        <div
          className="col-span-4  lg:ml-16 xl:ml-0 2xl:ml-0 justify-items-start w-full lg:w-[100%] max-[390px]:h-[480px] h-[425px] sm:h-[390px]  mt-12 lg:mt-20 "
          id="why1"
         
          ref={scrollContainerRef}
          onScroll={handleScroll}
          style={{
           
            overflowY: "auto", // Enable vertical scrolling
            overflowX: "hidden", // Hide horizontal scrollbar
            padding: "20px",
            paddingRight:"50px",
          }}
        >
          {content.map((item, index) => (
            <div
              key={index}
              ref={(el) => (contentRef.current[index] = el)}
              className={`transition-opacity duration-300 ${
                position === index ? "opacity-100" : "opacity-90"
              }`}
              style={{
                width: "100%", // Ensure each item takes the full width
                marginBottom: "10px", // Space between content sections
              }}
            >
              <p  className={`text-2xl font-bold text-[rgba(59,79,162,1)] ${
    index === 0 ? "mt-0" : "mt-16"
  }`}>
                {item.title}
              </p>
              <p className="text-base mt-4">{item.description}</p>
              <img
                src={item.image}
                className="h-48 mt-5 w-[100%] sm:w-[60%] lg:w-[80%] "
                alt={item.title}
              />
            </div>
          ))}
        </div>

        <div className="col-span-1 content-center justify-items-start">
          <div className="content-center hidden lg:block">
            <img
              src="./images/home/s7.png"
              data-aos="fade-left"
              className="ml-20"
              alt=""
            />
          </div>
        </div>
      </div>
      
    </>
  );
}
