import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Sample data with 5 images and content
const reviews = [
  {
    id: 1,
    image: "/images/home/s13.png",
    content: "Professionals in their craft! All products were super amazing.",
    title: "General Dentistry",
    description:
      "Safeguarding oral health through proactive prevention, early diagnosis, and effective treatment, guiding patients toward a healthy and attractive smile.",
    listItems: [
      "Routine dental check-ups and examinations",
      "Professional teeth cleaning and oral hygiene instructions",
      "Dental X-rays and diagnostic imaging",
      "Fillings (composite, amalgam)",
    ],
  },
  {
    id: 2,
    image: "/images/home/s14.png",
    content: "Outstanding service and attention to detail!",
    title: "Cosmetic Dentistry",
    description:
      "Enhancing the appearance of your smile with advanced cosmetic procedures like teeth whitening, veneers, and more.",
    listItems: ["Teeth whitening", "Veneers", "Bonding", "Smile makeovers"],
  },
  {
    id: 3,
    image: "/images/home/s15.png",
    content: "Exceptional quality and a team that truly cares.",
    title: "Orthodontics",
    description:
      "Straightening your teeth and improving your bite with options like traditional braces or clear aligners.",
    listItems: [
      "Traditional braces",
      "Clear aligners",
      "Retainers",
      "Orthognathic surgery",
    ],
  },
  {
    id: 4,
    image: "/images/home/s16.png",
    content: "A wonderful experience from start to finish.",
    title: "Pediatric Dentistry",
    description:
      "Providing comprehensive dental care for children, from infancy through adolescence, with a focus on prevention and education.",
    listItems: [
      "First dental visit",
      "Preventive care",
      "Sealants and fluoride treatments",
      "Orthodontic evaluation",
    ],
  },
  {
    id: 5,
    image: "/images/home/s17.png",
    content: "Highly recommend for any project, big or small!",
    title: "Periodontics",
    description:
      "Specializing in the treatment of gum diseases and other conditions affecting the soft tissues of the mouth.",
    listItems: [
      "Gum disease treatment",
      "Root planing and scaling",
      "Gum grafting",
      "Dental implants",
    ],
  },
];

const App: React.FC = () => {
  const [orderedImages, setOrderedImages] = useState(reviews);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should run only once
    });
  }, []);

  // Handle image click: Rearrange images
  const handleImageClick = (index: number) => {
    // If the clicked image is already the 5th, do nothing.
    if (index === orderedImages.length - 1) return;

    const clickedImage = orderedImages[index]; // Selected image
    const nextImages = orderedImages.slice(index + 1); // Images after the selected one
    const previousImages = orderedImages.slice(0, index); // Images before the selected one

    // Rearrange the order: next images -> previous images -> clicked image
    const reorderedImages = [...nextImages, ...previousImages, clickedImage];

    setOrderedImages(reorderedImages);
  };

  return (
    <div className="relative mt-24 w-5/6 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6">
        {/* Images Container */}
        <div className="flex flex-nowrap col-span-7 2xl:col-span-6 gap-1 mb-6 items-end relative">
          {/* Background Image */}
          

          {/* Review Images */}
          {orderedImages.map((review, index) => (
            <img
              key={review.id}
              src={review.image}
              alt={`User ${review.id}`}
              className={`cursor-pointer rounded-lg object-cover transition-all duration-1000 ease-in-out ${
                index === orderedImages.length - 1
                  ? "w-28 h-[490px] sm:w-28 sm:h-80 md:w-28 md:h-[490px] lg:w-32 lg:h-[500px]"
                  : "w-24 h-48 sm:w-24 sm:h-48 md:w-24 md:h-48 lg:w-24 lg:h-[60%] opacity-70"
              }`}
              onClick={() => handleImageClick(index)}
              data-aos={index === orderedImages.length - 1 ? "zoom-in" : "zoom-in"}
            />
          ))}
        </div>

        {/* Content Section */}
        <div className="p-6 text-center md:text-left ps-6 col-span-5 2xl:col-span-6">
          <p className="text-xl sm:text-3xl font-semibold mt-6 md:mt-12">
            {orderedImages[orderedImages.length - 1].title}
          </p>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base">
            {orderedImages[orderedImages.length - 1].description}
          </p>
          <ul className="mt-4 space-y-2 sm:space-y-3 list-disc list-inside text-sm sm:text-base">
            {orderedImages[orderedImages.length - 1].listItems.map(
              (item, idx) => (
                <li key={idx} data-aos="fade-up">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
