import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    image: "./images/home/st13.png",
    content: "Professionals in their craft! All products were super amazing.",
    title: "General Dentistry",
    description:
      "Ensuring oral health with preventive care, early detection, and effective treatment for a healthier, more confident smile.",
    listItems: [
      "Routine dental check-ups and exams",
      "Teeth cleaning and oral hygiene education",
      "Dental X-rays and imaging",
      "Tooth-colored and amalgam fillings",
    ],
    
  },
  {
    id: 2,
    image: "./images/home/st14.png",
    content: "Outstanding service and attention to detail!",
    title: "Cosmetic Dentistry",
    description:
      "Transforming smiles through advanced cosmetic treatments, tailored to enhance your appearance and boost confidence.",
    listItems: [
      "Teeth whitening services",
      "Porcelain veneers",
      "Cosmetic bonding",
      "Complete smile makeovers",
    ],
   
  },
  {
    id: 3,
    image: "./images/home/st15.png",
    content: "Exceptional quality and a team that truly cares.",
    title: "Orthodontics",
    description:
      "Improving bite and alignment with state-of-the-art orthodontic solutions, including braces and aligners.",
    listItems: [
      "Metal and ceramic braces",
      "Clear aligners (Invisalign)",
      "Post-treatment retainers",
      "Surgical orthodontics",
    ],
   
  },
  {
    id: 4,
    image: "./images/home/st16.png",
    content: "A wonderful experience from start to finish.",
    title: "Pediatric Dentistry",
    description:
      "Creating a positive dental experience for children, focusing on prevention and education for long-term oral health.",
    listItems: [
      "First dental visits",
      "Sealants and fluoride applications",
      "Orthodontic screenings",
      "Child-friendly preventive care",
    ],
   
  },
  {
    id: 5,
    image: "./images/home/st17.png",
    content: "Highly recommend for any project, big or small!",
    title: "Periodontics",
    description:
      "Specialized care for gum health, addressing periodontal diseases and offering advanced treatment options.",
    listItems: [
      "Treatment for gum disease",
      "Scaling and root planing",
      "Soft tissue grafts",
      "Dental implant placement",
    ],
    
  },
];

const TestimonialSlider: React.FC = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
    };
  
    return (
      //home page service mobile view  
      <div className="mx-auto block lg:hidden w-full max-w-5xl mb-24 " >
        <div className="relative ">
        <h2 className="text-4xl font-bold text-start mb-10 ml-10">Services</h2>
            <img src="./images/home/s9.png" alt="" className="absolute -bottom-5 left-10" />
        </div>
        <Slider {...settings}>
  {reviews.map((review) => (
    <div
      key={review.id}
      className="relative flex flex-col items-center text-center"
    >
      <div className="relative z-10 wh">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${review.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-start opacity-100 pt-5 ps-10 text-[#3B4FA2] ">{review.title}</h3>
          <p className="text-sm text-justify ml-10 mr-10 mt-5 opacity-100">
            {review.description}
          </p>
          <ul className="text-sm mt-4 space-y-1 pl-10 sm:pl-16  justify-items-start opacity-100 pb-10">
            {review.listItems.map((item, index) => (
              <li key={index} className="list-disc list-inside">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    );
  };
  
  export default TestimonialSlider;