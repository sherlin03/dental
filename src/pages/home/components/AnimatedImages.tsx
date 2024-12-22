// import  { useEffect } from "react";
// import AOS from 'aos';
// import "aos/dist/aos.css";

// const AnimatedImages = () => {
//   const images = [
//     "image1.jpg",
//     "image2.jpg",
//     "image3.jpg",
//     "image4.jpg",
//     "image5.jpg",
//     "image6.jpg",
//     "image7.jpg",
//     "image8.jpg",
//     "image9.jpg",
//     "image10.jpg",
//     "image11.jpg",
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 500 }); // Initialize AOS with desired duration
//   }, []);

//   return (
//     <div className="flex flex-col items-center">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Image ${index + 1}`}
//           data-aos="fade-up"
//           data-aos-delay={index * 200} // Stagger animations
//           className={`w-32 h-32 my-2 ${index === 4 ? "mb-5" : ""}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default AnimatedImages;
