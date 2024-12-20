import { useState } from "react";

function ImageGallery() {
  const [activeImage, setActiveImage] = useState<number>(1);

  const handleMouseEnter = (id: number) => {
    setActiveImage(id);
  };

  return (
    <>
    // <div className="mt-20 mb-12 hidden md:block relative h-[365px] lg:h-[580px]">
      {/* Image 1 */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter(1)}
      >
        <img
          src="./images/PatientExperience/p2.png"
          id="1"
          alt="Image 1"
          className="absolute top-2 left-0 w-36 lg:w-48 xl:w-56 2xl:w-64 2xl:left-0 "
        />
        <img
          src="./images/PatientExperience/p3.png"
          alt="Image 2"
          className={`absolute top-20 left-20 lg:left-28 2xl:left-28 w-36 lg:w-48 xl:w-52 2xl:w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Image 2 */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter(2)}
      >
        <img
          src="./images/PatientExperience/p4.png"
          id="2"
          alt="Image 3"
          className="absolute top-20 left-44 lg:left-64 2xl:left-80 w-36 lg:w-48 xl:w-56 2xl:w-64"
        />
        <img
          src="./images/PatientExperience/p3.png"
          alt="New Image 3"
          className={`absolute top-40 lg:top-48 2xl:top-36 left-60 lg:left-96 2xl:left-[480px] w-36 lg:w-48 xl:w-56 2xl:w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 2 ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Image 3 */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter(3)}
      >
        <img
          src="./images/PatientExperience/p5.png"
          id="3"
          alt="Image 4"
          className="absolute top-44 lg:top-52 right-[200px] lg:right-[300px] xl:right-[450px] w-36 lg:w-48 xl:w-56 2xl:w-64 "
        />
        <img
          src="./images/PatientExperience/p3.png"
          alt="New Image 4"
          className={`absolute top-60 lg:top-72 xl:top-72 2xl:top-80 right-[150px] lg:right-[230px] xl:right-[350px] w-36 lg:w-48 xl:w-56 2xl:w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 3 ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Image 4 */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter(4)}
      >
        <img
          src="./images/PatientExperience/p6.png"
          id="4"
          alt="Image 5"
          className="absolute top-0 right-48 lg:right-56 xl:right-64 2xl:right-72 w-36 lg:w-48 xl:w-56 2xl:w-64 "
        />
        <img
          src="./images/PatientExperience/p3.png"
          alt="New Image 5"
          className={`absolute top-16 lg:top-16 xl:top-12 right-72 lg:right-[320px] xl:right-[400px] 2xl:right-[450px] w-36 lg:w-48 xl:w-56 2xl:w-56 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${activeImage === 4 ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Image 5 */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter(5)}
      >
        <img
          src="./images/PatientExperience/p7.png"
          id="5"
          alt="Image 6"
          className="absolute top-48 lg:top-64 xl:top-64 2xl:top-80 right-8 lg:right-16 xl:right-32 w-36 lg:w-48 xl:w-56 2xl:w-64"
        />
        <img
          src="./images/PatientExperience/p3.png"
          alt="New Image 6"
          className={`absolute top-60 lg:top-80 xl:top-[350px] 2xl:top-[400px] -right-8 lg:right-0 xl:right-10 2xl:right-8 w-36 lg:w-48 xl:w-56 2xl:w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeImage === 5 ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Image 6 */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter(6)}
      >
        <img
          src="./images/PatientExperience/p8.png"
          id="6"
          alt="Image 7"
          className="absolute top-0 right-0 w-36 lg:w-48 xl:w-56 2xl:w-64 "
        />
        <img
          src="./images/PatientExperience/p3.png"
          alt="New Image 7"
          className={`absolute top-24 right-28 w-36 lg:w-48 xl:w-56 2xl:w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeImage === 6 ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Image 7 */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter(7)}
      >
        <img
          src="./images/PatientExperience/p9.png"
          id="7"
          alt="Image 8"
          className="absolute top-0 right-1/2 "
        />
      </div>
    // </div>
    </>
  );
}

export default ImageGallery;
