// import { useState } from "react";

// function MobImageGallery() {
//   const [activeImage, setActiveImage] = useState<number>(1);

//   const handleImageChange = (id: number) => {
//     setActiveImage(id);
//   };

//   return (
//     <>
//     <div>
     

//       {/* Mobile view images (Grid Layout) */}
//       <div className=" mt-24 mb-12  sm:block md:hidden ">
//         {/* Image 1 */}
//         <div
//            className={`relative rel group ${activeImage === 1 ? "mob  pe-64 sm:pe-72 max-[490]:pe-60 justify-items-start" : " justify-items-center"}`}
//           onClick={() => handleImageChange(1)}
//         >
//           <img
//             src="./images/PatientExperience/p2.png"
//             id="1"
//             alt="Image 1"
//             className={`  mt-16  ${activeImage === 1 ? "w-56 sm:w-60 max-[490px]:w-32 " : "w-56 sm:w-96 max-[490px]:w-56"}`}
//           />
//           <img
//             src="./images/PatientExperience/p3.png"
//             alt="Image 2"
//             className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}
//           />
//         </div>

//         {/* Image 2 */}
//         <div
//            className={`relative mt-12 group ${activeImage === 2 ? "mob pe-60 justify-items-start" : " justify-items-center"} ${activeImage === 1 ? " mtalign mt-72 sm:mt-80 justify-items-center" : " "}`}
//           onClick={() => handleImageChange(2)}
//         >
//           <img
//             src="./images/PatientExperience/p4.png"
//             id="2"
//             alt="Image 3"
//             className={`mt-16  ${activeImage === 2 ? "w-56 sm:w-60 max-[490px]:w-32 widthmob" : "w-56 sm:w-96 max-[490px]:w-56"}`}
//           />
//           <img
//             src="./images/PatientExperience/p3.png"
//             alt="New Image 3"
//             className={`absolute max-[490px]:top-10 top-44 leftalign left-28 max-[550px]:w-[75%]  w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 2 ? "opacity-100" : "opacity-0"}`}
//           />
//         </div>

//         {/* Image 3 */}
//         <div
//            className={`relative rel group ${activeImage === 3 ? "mob  pe-64 sm:pe-72 max-[490]:pe-60 justify-items-start" : " justify-items-center"} ${activeImage === 2 ? " mtalign mt-56 sm:mt-80 justify-items-center" : " "}`}
//           onClick={() => handleImageChange(3)}
//         >
//           <img
//             src="./images/PatientExperience/p5.png"
//             id="1"
//             alt="Image 1"
//             className={`  mt-16  ${activeImage === 3 ? "w-56 sm:w-60 max-[490px]:w-32 " : "w-56 sm:w-96 max-[490px]:w-56"}`}
//           />
//           <img
//             src="./images/PatientExperience/p3.png"
//             alt="Image 2"
//             className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 3 ? "opacity-100" : "opacity-0"}`}
//           />
//         </div>

//         {/* Image 4 */}
//         <div
//            className={`relative rel group ${activeImage === 4 ? "mob  pe-64 sm:pe-72 max-[490]:pe-60 justify-items-start" : " justify-items-center"} ${activeImage === 3 ? " mtalign mt-72 sm:mt-80 justify-items-center" : " "}`}
//           onClick={() => handleImageChange(4)}
//         >
//           <img
//             src="./images/PatientExperience/p6.png"
//             id="1"
//             alt="Image 1"
//             className={`  mt-16  ${activeImage === 4 ? "w-56 sm:w-60 max-[490px]:w-32 " : "w-56 sm:w-96 max-[490px]:w-56"}`}
//           />
//           <img
//             src="./images/PatientExperience/p3.png"
//             alt="Image 2"
//             className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 4 ? "opacity-100" : "opacity-0"}`}
//           />
//         </div>

//         {/* Image 5 */}
//         <div
//            className={`relative rel group ${activeImage === 5 ? "mob  pe-64 sm:pe-72 max-[490]:pe-60 justify-items-start" : " justify-items-center"} ${activeImage === 4 ? " mtalign mt-72 sm:mt-80 justify-items-center" : " "}`}
//           onClick={() => handleImageChange(5)}
//         >
//           <img
//             src="./images/PatientExperience/p7.png"
//             id="1"
//             alt="Image 1"
//             className={`  mt-16  ${activeImage === 5 ? "w-56 sm:w-60 max-[490px]:w-32 " : "w-56 sm:w-96 max-[490px]:w-56"}`}
//           />
//           <img
//             src="./images/PatientExperience/p3.png"
//             alt="Image 2"
//             className={`absolute max-[490px]:top-10 top-28 leftalign left-28 max-[550px]:w-[75%] w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 5 ? "opacity-100" : "opacity-0"}`}
//           />
//         </div>

//         {/* Image 6 */}
//         <div
//            className={`relative mt-12 group ${activeImage === 6 ? "mob pe-60 justify-items-start" : " justify-items-center"} ${activeImage === 5 ? " mtalign mt-72 sm:mt-80 justify-items-center" : " "}`}
//           onClick={() => handleImageChange(6)}
//         >
//           <img
//             src="./images/PatientExperience/p8.png"
//             id="2"
//             alt="Image 3"
//             className={`mt-16  ${activeImage === 6 ? "w-56 sm:w-60 max-[490px]:w-32 widthmob" : "w-56 sm:w-96 max-[490px]:w-56"}`}
//           />
//           <img
//             src="./images/PatientExperience/p3.png"
//             alt="New Image 3"
//             className={`absolute max-[490px]:top-10 top-44 leftalign left-28 max-[550px]:w-[75%]  w-[80%] sm:w-[25rem]  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10  ${activeImage === 6 ? "opacity-100" : "opacity-0"}`}
//           />
//         </div>
//       </div>
     

//     </div>
     
// </>
//   );
// }

// export default MobImageGallery;
