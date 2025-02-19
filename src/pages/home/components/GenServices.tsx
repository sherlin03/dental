import { useState } from "react";
import VerticalText from "./VerticalText";
// import "./App.css"; // Import custom styles

// Sample data with 5 images and content
const reviews = [
  {
    id: 1,
    image: "./images/home/s13.svg",
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
    image: "./images/home/s14.svg",
    content: "Outstanding service and attention to detail!",
    title: "Cosmetic Dentistry",
    description:
      "Enhancing the appearance of your smile with advanced cosmetic procedures like teeth whitening, veneers, and more.",
    listItems: ["Teeth whitening", "Veneers", "Bonding", "Smile makeovers"],
  },
  {
    id: 3,
    image: "./images/home/s15.svg",
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
    image: "./images/home/s16.svg",
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
    image: "./images/home/s17.svg",
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
  const [transitioning, setTransitioning] = useState(false);

  // Handle image click: Rearrange images
  const handleImageClick = (index: number) => {
    if (index === orderedImages.length - 1) return;

    const clickedImage = orderedImages[index];
    const nextImages = orderedImages.slice(index + 1);
    const previousImages = orderedImages.slice(0, index);

    const reorderedImages = [...nextImages, ...previousImages, clickedImage];

    // Trigger transition
    setTransitioning(false);

    setTimeout(() => {
      // Update the order after the transition
      setOrderedImages(reorderedImages);
      setTransitioning(false);
    }, 1000); // Match the CSS transition duration
  };

  return (
    <div className="relative mt-24 hidden lg:block">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-0 sm:p-6">
        <div className="flex flex-wrap w-full justify-evenly col-span-7 2xl:col-span-6 gap-1 mb-6 items-end relative">
        <div className="absolute top-8 right-44 xl:right-48 2xl:right-52  ">
            <div className="relative">
              <VerticalText/>
            <img src="./images/home/s19.png" alt="" className="absolute  -bottom-3 -right-6 " />
            </div>
          </div>

          {/* Review Images */}
          {orderedImages.map((review, index) => (
            <img
              key={review.id}
              src={review.image}
              alt={`User ${review.id}`}
              className={`cursor-pointer rounded-lg object-cover ${
                transitioning ? "" : ""
              } ${
                index === orderedImages.length - 1
                  ? "w-16 sm:w-28 md:w-28 lg:w-32 h-[490px] sm:h-80 md:h-[490px] lg:h-[500px]"
                  : "w-16 sm:w-24 md:w-24 lg:w-20 h-48 sm:h-48 md:h-48 lg:h-[60%] opacity-70"
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>

        <div className="text-left md:text-left ps-0 lg:ps-6 col-span-5 2xl:col-span-6 content-center">
          <p className="text-3xl sm:text-3xl font-semibold ">
            {orderedImages[orderedImages.length - 1].title}
          </p>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base">
            {orderedImages[orderedImages.length - 1].description}
          </p>
          <ul className="mt-4 space-y-2 sm:space-y-3 list-disc list-inside text-sm sm:text-base">
            {orderedImages[orderedImages.length - 1].listItems.map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;