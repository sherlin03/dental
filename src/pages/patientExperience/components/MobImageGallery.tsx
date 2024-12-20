import { useState } from "react";

function MobImageGallery() {
  const [activeImage, setActiveImage] = useState<number>(1);

  const handleImageChange = (id: number) => {
    setActiveImage(id);
  };

  return (
    <div>
     

      {/* Mobile view images (Grid Layout) */}
      <div className="grid grid-cols-1 mt-24 mb-12 justify-items-center sm:block md:hidden relative gap-8">
        {/* Image 1 */}
        <div
          className="relative group"
          onMouseEnter={() => handleImageChange(1)}
        >
          <img
            src="./images/PatientExperience/p2.png"
            id="1"
            alt="Image 1"
            className="w-72 lg:w-48 xl:w-56 mt-16"
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="Image 2"
            className={`absolute top-36 left-36 w-56 lg:w-48 xl:w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10  ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 2 */}
        <div
          className="relative group"
          onMouseEnter={() => handleImageChange(2)}
        >
          <img
            src="./images/PatientExperience/p4.png"
            id="2"
            alt="Image 3"
            className="w-72 lg:w-48 xl:w-56 mt-16"
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 3"
            className={`absolute top-60 left-36 w-56 lg:w-48 xl:w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 2 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 3 */}
        <div
          className="relative group"
          onMouseEnter={() => handleImageChange(3)}
        >
          <img
            src="./images/PatientExperience/p5.png"
            id="3"
            alt="Image 4"
            className="w-72 lg:w-48 xl:w-56 mt-16"
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 4"
            className={`absolute top-36 left-36 w-56 lg:w-48 xl:w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 3 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 4 */}
        <div
          className="relative group"
          onMouseEnter={() => handleImageChange(4)}
        >
          <img
            src="./images/PatientExperience/p6.png"
            id="4"
            alt="Image 5"
            className="w-72 lg:w-48 xl:w-56 mt-16"
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 5"
            className={`absolute top-36 left-36 w-56 lg:w-48 xl:w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 4 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 5 */}
        <div
          className="relative group"
          onMouseEnter={() => handleImageChange(5)}
        >
          <img
            src="./images/PatientExperience/p7.png"
            id="5"
            alt="Image 6"
            className="w-72 lg:w-48 xl:w-56 mt-16"
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 6"
            className={`absolute top-36 left-36 w-56 lg:w-48 xl:w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 5 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 6 */}
        <div
          className="relative group"
          onMouseEnter={() => handleImageChange(6)}
        >
          <img
            src="./images/PatientExperience/p8.png"
            id="6"
            alt="Image 7"
            className="w-72 lg:w-48 xl:w-56 mt-16"
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 7"
            className={`absolute top-60 left-36 w-56 lg:w-48 xl:w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default MobImageGallery;
