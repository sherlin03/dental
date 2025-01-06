import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    
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
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mx-auto block lg:hidden w-full max-w-5xl px-4 py-8  ">
      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col items-center text-center  p-6"
          >
          
            <h3 className="text-3xl font-semibold text-gray-800">
              {review.title}
            </h3>
            <p className="text-gray-600 text-sm text-justify mt-2">{review.description}</p>
            <ul className="text-sm text-gray-500 mt-4 space-y-1">
              {review.listItems.map((item, index) => (
                <li key={index} className="list-disc list-inside">
                  {item}
                </li>
              ))}
            </ul>
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
