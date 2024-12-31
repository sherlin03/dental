
import { motion } from "framer-motion";

export default function DentalTheme() {

   

    return (
        <>
            <div className="relative h-[35vh] lg:h-[50vh] xl:h-[70vh] 2xl:h-[70vh]  mt-24 mb-5 xl:mb-24 hidden md:block" >
                <div className="grid w-full gap-2 p-4 pb-2 py-8 lg:px-8 grid-cols-1 md:px-6  relative">
                    <div className="">
                        <div className="">
                            <img src="./images/home/d1.png" alt="" className="h-40 lg:h-60 xl:h-72 2xl:h-80 w-40 lg:w-60 xl:w-72 2xl:w-80 " />
                            <img
                                src="./images/home/d3.png"
                                alt=""
                                className="h-[230px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] w-[130px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] absolute top-1/4 left-[30%] z-10"

                            />
                        

                            <motion.img
                                src="./images/home/d4.png"
                                alt=""
                                className="h-8 lg:h-10 xl:h-12 2xl:h-20 w-[75px] lg:w-[130px] xl:w-[200px] 2xl:w-[250px] absolute top-6 lg:top-10 xl:top-10 2xl:top-8 left-[34%] xl:left-[32%] 2xl:left-[32%] z-10"
                                animate={{
                                    x: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 2, // Duration of one wave cycle
                                    repeat: Infinity, // Infinite animation
                                    ease: "easeInOut", // Smooth easing
                                }}
                            />


                            {/* <img src="./images/home/d5.png" alt="" className="h-4 lg:h-6 xl:h-8 2xl:h-12 w-[65px] lg:w-[100px] xl:w-[150px] 2xl:w-[200px] absolute top-3 lg:top-4 xl:top-4  2xl:top-0 left-[35%] lg:left-[35%] xl:left-[35%]  2xl:left-[35%] z-10" /> */}

                            <img src="./images/home/d5.png" alt="" className="h-4 lg:h-6 xl:h-8 2xl:h-12 w-[65px] lg:w-[100px] xl:w-[150px] 2xl:w-[200px] absolute top-3 lg:top-4 xl:top-4  2xl:top-0 left-[35%] lg:left-[35%] xl:left-[35%]  2xl:left-[35%] z-10" />


                            <img src="./images/home/d6.png" alt="" className="h-[185px] lg:h-[265px] xl:h-[315px] 2xl:h-[345px] w-[220px] lg:w-[280px] xl:w-[415px] 2xl:w-[450px] absolute top-0 right-0 z-10" />


                            {/* <img src="./images/home/d7.png" alt="" className="h-[155px] lg:h-[175px] 2xl:h-[190px] w-[135px] lg:w-[185px] 2xl:w-[205px] absolute top-[-75px] left-[45%] lg:left-[50%] 2xl:left-[50%] z-10" /> */}

                            <motion.img
                                src="./images/home/d7.png"
                                alt=""
                                className="h-[155px] lg:h-[175px] 2xl:h-[190px] w-[135px] lg:w-[185px] 2xl:w-[205px] absolute top-[-75px] left-[45%] lg:left-[50%] 2xl:left-[50%] z-10"
                                animate={{
                                    y: [0, -20, 0], // Wave motion: up, then down
                                }}
                                transition={{
                                    duration: 2.5, // Total time for one wave cycle
                                    repeat: Infinity, // Infinite animation
                                    ease: "easeInOut", // Smooth easing
                                }}
                            />

                            <img src="./images/home/s9.png" alt="" className="h-4 lg:h-6 w-10 lg:w-20 absolute bottom-[-50px] lg:bottom-[-85px] right-0 z-10" />

                            
                            <img src="./images/home/d8.gif" className="w-[65%]  lg:w-[68%] xl:w-[68%] 2xl:w-[70%] h-[90px] xl:h-[150px] 2xl:h-[200px] absolute bottom-[-50px] lg:bottom-[-55px] xl:bottom-[-90px] 2xl:bottom-[-120px] right-[0] " alt="" />

                        </div>
                        <img src="./images/home/d2.png" alt="" className="absolute bottom-4 left-0 w-full " />
                    </div>
                </div>
            </div>
        </>
    )
}