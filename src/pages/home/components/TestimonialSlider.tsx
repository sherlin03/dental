import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
     
         	"Traditional metal braces",
	"Clear aligners (e.g., Invisalign)",
	"Retainers and orthodontic appliances",
	"Treatment for malocclusions (overbites, underbites)",
	"Jaw alignment and bite correction",

    ],
  },
  {
    id: 3,
    image: "./images/home/s15.svg",
    content: "Exceptional quality and a team that truly cares.",
    title: "Restorative Dentistry",
    description:
      "Restorative dentistry involves the comprehensive process of repairing damaged or missing teeth, encompassing all modern dental disciplines. By integrating an interdisciplinary approach, we achieve optimal dental function and aesthetics for our patients. This includes restoring the function, integrity, and morphology of tooth structures affected by caries or external trauma, as well as replacing missing teeth with dental implants.",
    listItems: [
      	"Dental crowns (porcelain, ceramic, metal)",
      	"Dental bridges to replace missing teeth",
      	"Dental implants (placement and restoration)",
      	"Dentures (full and partial)",
      	"Inlays and onlays for larger cavities or damaged teeth",
      
    ],
  },
  {
    id: 4,
    image: "./images/home/s16.svg",
    content: "A wonderful experience from start to finish.",
    title: "Cosmetic Dentistry",
    description:
      "Enhancing the aesthetic appearance of your smile and overall oral health, cosmetic dentistry goes beyond aesthetics to strengthen teeth, making them more resistant to damage, and improve oral hygiene by aligning teeth for easier cleaning. Each treatment is meticulously tailored to individual needs, ensuring personalized solutions that yield enduring results and comprehensive smile makeovers.",
    listItems: [
      	"Teeth whitening (in-office and take-home options)",
	"Dental veneers (porcelain or composite)",
	"Dental bonding for minor cosmetic corrections",
	"Tooth-colored fillings and restorations",
	"Clear aligner therapy (e.g., Invisalign)",
	"Porcelain crowns and bridges for aesthetic improvements",

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
      	"Professional teeth cleaning and oral hygiene instructions",
      	"Dental X-rays and diagnostic imaging",
      	"Fillings (composite, amalgam)",
      	"Root canal therapy for infected teeth",
      	"Tooth extractions (including wisdom teeth)",
      	"Oral cancer screenings",
      
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