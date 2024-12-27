import { useState } from "react";

function MobImageGallery() {
  const [activeImage, setActiveImage] = useState<number>(1);

  const handleImageChange = (id: number) => {
    setActiveImage(id);
  };

  return (
    <div>
     

      {/* Mobile view images (Grid Layout) */}
      <div className="grid grid-cols-1 mt-24 mb-12 justify-items-center sm:block md:hidden relative gap-8   ">
        {/* Image 1 */}
        <div
           className={`relative group ${activeImage === 1 ? "mr-20" : ""}`}
          onMouseEnter={() => handleImageChange(1)}
        >
          <img
            src="./images/PatientExperience/p2.png"
            id="1"
            alt="Image 1"
            className={`w-72 max-[490px]:w-52  mt-16  ${activeImage === 1 ? "max-[490px]:w-32" : "max-[490px]:w-52"}`}
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="Image 2"
            className={`absolute max-[490px]:top-28 top-36 max-[490px]:left-20 left-32 max-[490px]:w-56 w-56  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10  ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 2 */}
        <div
           className={`relative group ${activeImage === 2 ? "mr-20" : ""}`}
          onMouseEnter={() => handleImageChange(2)}
        >
          <img
            src="./images/PatientExperience/p4.png"
            id="2"
            alt="Image 3"
            className={`w-72 max-[490px]:w-52  mt-16  ${activeImage === 2 ? "max-[490px]:w-32" : "max-[490px]:w-52"}`}
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 3"
            className={`absolute max-[490px]:top-36 top-60 max-[490px]:left-20 left-36 max-[490px]:w-44 w-56  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 2 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 3 */}
        <div
           className={`relative group ${activeImage === 3 ? "mr-20" : ""}`}
          onMouseEnter={() => handleImageChange(3)}
        >
          <img
            src="./images/PatientExperience/p5.png"
            id="3"
            alt="Image 4"
            className={`w-72 max-[490px]:w-52  mt-16  ${activeImage === 3 ? "max-[490px]:w-32" : "max-[490px]:w-52"}`}
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 4"
            className={`absolute max-[490px]:top-28 top-36 max-[490px]:left-20 left-36 max-[490px]:w-44 w-56  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 3 ? "opacity-100 " : "opacity-0"}`}
          />
        </div>

        {/* Image 4 */}
        <div
           className={`relative group ${activeImage === 4 ? "mr-20" : ""}`}
          onMouseEnter={() => handleImageChange(4)}
        >
          <img
            src="./images/PatientExperience/p6.png"
            id="4"
            alt="Image 5"
            className={`w-72 max-[490px]:w-52  mt-16  ${activeImage === 4 ? "max-[490px]:w-32" : "max-[490px]:w-52"}`}
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 5"
            className={`absolute max-[490px]:top-28 top-36 max-[490px]:left-20 left-36 max-[490px]:w-44 w-56  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 4 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 5 */}
        <div
           className={`relative group ${activeImage === 5 ? "mr-20" : ""}`}
          onMouseEnter={() => handleImageChange(5)}
        >
          <img
            src="./images/PatientExperience/p7.png"
            id="5"
            alt="Image 6"
            className={`w-72 max-[490px]:w-52  mt-16  ${activeImage === 5 ? "max-[490px]:w-32" : "max-[490px]:w-52"}`}
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 6"
            className={`absolute max-[490px]:top-28 top-36 max-[490px]:left-20 left-36 max-[490px]:w-44 w-56  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 5 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Image 6 */}
        <div
           className={`relative group ${activeImage === 6 ? "mr-20" : ""}`}
          onMouseEnter={() => handleImageChange(6)}
        >
          <img
            src="./images/PatientExperience/p8.png"
            id="6"
            alt="Image 7"
            className={`w-72 max-[490px]:w-52  mt-16  ${activeImage === 6 ? "max-[490px]:w-32" : "max-[490px]:w-52"}`}
          />
          <img
            src="./images/PatientExperience/p3.png"
            alt="New Image 7"
            className={`absolute max-[490px]:top-36 top-60 max-[490px]:left-20  left-36 max-[490px]:w-44 w-56  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default MobImageGallery;
