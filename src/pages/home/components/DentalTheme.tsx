import { useEffect, useRef, useState } from "react";
import TypingEffect from "./TypingEffect";

export default function DentalTheme() {

    const [isVisible, setIsVisible] = useState(false);
    const typingRef = useRef<HTMLDivElement>(null);
   
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
          }
        },
        { threshold: 0.1 } 
      );
  
      if (typingRef.current) {
        observer.observe(typingRef.current);
      }
  
      return () => {
        if (typingRef.current) {
          observer.unobserve(typingRef.current);
        }
      };
    }, []);

    return(
        <>
        <div className="relative h-[60vh]  mt-24 mb-24">
            <div className="grid w-full gap-2 p-4 pb-2 py-8 lg:px-8 grid-cols-1 md:px-6  relative">
                <div className="">
                <div className="">
                    <img src="./images/home/d1.png" alt="" className="h-72 2xl:h-80 w-72 2xl:w-80 " />
                    <img src="./images/home/d3.png" alt="" className="h-[350px] 2xl:h-[400px]  w-[250px] 2xl:w-[300px] absolute top-1/4 left-[30%] z-10" />
                    <img src="./images/home/d4.png" alt="" className="h-12 2xl:h-20 w-[200px] 2xl:w-[250px] absolute top-10 2xl:top-6 left-[32%]  2xl:left-[32%] z-10" />
                    <img src="./images/home/d5.png" alt="" className="h-8 2xl:h-12  w-[150px] 2xl:w-[200px] absolute top-4  2xl:top-0 left-[35%]  2xl:left-[35%] z-10" />
                    <img src="./images/home/d6.png" alt="" className="h-[345px] w-[450px] absolute top-0 right-0 z-10" />
                    <img src="./images/home/d7.png" alt="" className="h-[190px] w-[205px] absolute top-[-75px] right-[29%] z-10" />
                    <img src="./images/home/s9.png" alt="" className="h-6 w-20 absolute bottom-[-115px] right-0 z-10" />

                <div >
                    <div ref={typingRef} className=" absolute bottom-[0px]  right-[8%] font-bold text-[rgba(55,83,188,1)] "  >
                        {isVisible && (
                            <TypingEffect
                            text="WELCOME TO SUBHA DENTAL CARE"
                            speed={100} // Adjust speed as needed
                        />
                         )}
                    </div>
                </div>


                  
                </div>
                <img src="./images/home/d2.png" alt="" className="absolute bottom-4 left-0 w-full " />
                </div>
            </div>
        </div>
        </>
    )
}