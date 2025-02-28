import { useState } from "react";
import VerticalText from "./VerticalText";
// import "./App.css"; // Import custom styles

// Sample data with 5 images and content
const reviews = [
  {
    id: 1,
    image: "./images/home/s13.svg",
    content: "Professionals in their craft! All products were super amazing.",
    title: "Oral Surgery",
    description:
      "Oral surgery tackles a variety of complex dental issues, such as impacted teeth, jaw misalignment, and facial trauma. From simple tooth extractions to complex reconstructive surgeries, our experienced oral surgeons utilize the latest techniques and equipment to ensure precise and effective treatment. Whether you require wisdom teeth removal, dental implants, or corrective jaw surgery, trust our team to deliver exceptional results and help you achieve optimal oral health and function.",
    listItems: [
      
  "Wisdom teeth extraction",
	"Dental implant surgery (placement and restoration)",
	"Treatment of facial trauma and oral injuries",
	"Biopsy and surgical treatment of oral lesions",
	"Bone grafting and sinus lifts for dental implants",





    ],
  },
  {
    id: 2,
    image: "./images/home/s14.svg",
    content: "Outstanding service and attention to detail!",
    title: "Orthodontics",
    description:
      "Orthodontics addresses the diagnosis, prevention, management, and correction of mal-positioned teeth and jaws, as well as misaligned bite patterns, to improve the appearance of your smile. In addition to cosmetic benefits, orthodontics enhances chewing function and promotes better oral health. Proper alignment can also alleviate issues such as jaw pain, speech difficulties, and excessive wear on teeth. ",
    listItems: [
     
  "Traditional metal, self-ligating, and tooth-colored braces",
	"Clear aligners (e.g., Invisalign)",
	"Retainers and orthodontic appliances",
	"Treatment for malocclusions (overbites, openbites)",
	"Jaw alignment and bite correction",
  "Myo braces for pediatric patients",

    ],
  },
  {
    id: 3,
    image: "./images/home/s15.svg",
    content: "Exceptional quality and a team that truly cares.",
    title: "Implant Dentistry",
    description:
      "Restoring smiles with advanced dental implant solutions, ensuring long-term functionality, aesthetics, and confidence. Offering full-mouth rehabilitation, immediate teeth replacement, and specialized implants for complex cases, providing patients with a seamless and lasting solution.",
    listItems: [
      "Full mouth rehabilitation with immediate temporization",
      "Pterygoid & zygoma implant placement for severe bone loss",
      "Single-day implants with immediate teeth replacement",
      "Minimally invasive techniques for faster recovery",
      "Digital workflow and guided implant surgery for precision",
      "Custom prosthetics for natural aesthetics and durability",
      
    ],
  },
  {
    id: 4,
    image: "./images/home/s16.svg",
    content: "A wonderful experience from start to finish.",
    title: " Restorative & Cosmetic",
    description:
    "Restoring dental function while enhancing aesthetics through advanced treatments, ensuring long-term durability, confidence, and a beautiful smile. By integrating modern techniques, we repair damaged or missing teeth and provide personalized cosmetic enhancements for a natural, healthy look.",

    listItems: [
      "Dental crowns (porcelain, ceramic, metal) for strength and protection",
      "Dental bridges to replace missing teeth and restore function",
      "Teeth whitening (in-office and take-home) for a brighter smile",
      "Dental veneers (porcelain or composite) for a flawless appearance",
      "Tooth-colored fillings for seamless cavity restoration",
      "Clear aligner therapy (e.g., Invisalign) for discreet teeth straightening",

    ],
  },
  {
    id: 5,
    image: "./images/home/s17.svg",
    content: "Highly recommend for any project, big or small!",
    title: "General Dentistry",
    description:
      "Safeguarding oral health through proactive prevention, early diagnosis, and effective treatment, guiding patients toward a healthy and attractive smile, and serving as the first line of defense with seamless specialist referrals when required.",
    listItems: [
      	"Routine dental check-ups and examinations",
      	"Teeth cleaning and oral hygiene instructions",
      	"Dental X-rays and diagnostic imaging Such us digital imaging such as CBCT (cone beam computed tomography), OPG(ORTHOPANTOMOGRAM), LATERAL CEPHALOGRAM",
      	"Composite filling (tooth-colored)",
      	"Root canal therapy for infected teeth",
      	"Tooth extractions (including wisdom teeth)",
      	"Oral cancer screenings",
      
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
        <div className="absolute top-16 xl:top-8 right-44 xl:right-48 2xl:right-52  ">
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
              className={`cursor-pointer  object-cover ${
                transitioning ? "" : ""
              } ${
                index === orderedImages.length - 1
                  ? "w-16 sm:w-28 md:w-28 xl:w-32 h-[490px] sm:h-80 md:h-[490px] lg:h-[550px]"
                  : "w-16 sm:w-24 md:w-24 lg:w-20 h-48 sm:h-48 md:h-48 lg:h-[60%] "
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>

        <div className="text-left md:text-left ps-0 lg:ps-6 col-span-5 2xl:col-span-6 content-center">
          <p className="text-3xl sm:text-3xl font-semibold ">
            {orderedImages[orderedImages.length - 1].title}
          </p>
          <p className="mt-3 sm:mt-5 text-justify text-sm sm:text-base">
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