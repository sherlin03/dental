import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedImages = () => {
  // Static image paths in the public folder
  const images = Array.from({ length: 11 }, (_, i) =>
    `images/home/right/image${i+1}.png`
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Ensure animations run only once
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          data-aos-easing="linear"
          data-aos="zoom-out-up" // Animation type
          data-aos-delay={index * 200} // Staggered delay for animations
          className={`w-16 h-16 my-1 ${index === 4 ? "mb-10" : ""}`} // Add extra gap after 5th image
        />
      ))}
    </div>
  );
};

export default AnimatedImages;
