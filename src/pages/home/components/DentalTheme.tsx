
import { motion } from "framer-motion";

export default function DentalTheme() {

   

    return (
        <>
            <div className="relative my-auto mt-12 mb-5 hidden md:block bg-[rgba(88,215,155,0.12)] h-auto pb-20 lg:pb-40" >
                <div className="grid w-full gap-2 p-4 pb-2 py-8 lg:px-8 grid-cols-1 md:px-6  relative">
                    <div className="">
                        <div className="">
                            <img src="./images/home/d1.png" alt="" className="h-[17rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] w-[17rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem] " />
                            <img
                                src="./images/home/d3.png"
                                alt=""
                                className="h-[230px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] w-[130px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] absolute top-[45%] left-[35%] lg:left-[30%] z-10"

                            />
                        

                            <motion.img
                                src="./images/home/d4.png"
                                alt=""
                                className="h-8 lg:h-10 xl:h-12 2xl:h-20 w-[75px] lg:w-[130px] xl:w-[200px] 2xl:w-[250px] absolute top-[35%] lg:top-[32%] xl:top-[32%] 2xl:top-[27%] left-[39%] lg:left-[34%] xl:left-[32%] 2xl:left-[32%] z-10"
                                animate={{
                                    x: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 2, // Duration of one wave cycle
                                    repeat: Infinity, // Infinite animation
                                    ease: "easeInOut", // Smooth easing
                                }}
                            />


                            {/* 
                            <img src="./images/home/d5.png" alt="" className="h-4 lg:h-6 xl:h-8 2xl:h-12 w-[65px] lg:w-[100px] xl:w-[150px] 2xl:w-[200px] absolute top-3 lg:top-4 xl:top-4  2xl:top-0 left-[35%] lg:left-[35%] xl:left-[35%]  2xl:left-[35%] z-10" /> 
                            */}

                            <img src="./images/home/d5.png" alt="" className="h-4 lg:h-6 xl:h-8 2xl:h-12 w-[65px] lg:w-[100px] xl:w-[150px] 2xl:w-[200px] absolute top-[30%] lg:top-[27%] xl:top-[27%]  2xl:top-[20%] left-[39%] lg:left-[35%] xl:left-[34%]  2xl:left-[34%] z-10" />


                            <img src="./images/home/d6.png" alt="" className="h-[240px] lg:h-[280px] xl:h-[350px] 2xl:h-[450px] w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] absolute top-[18%] lg:top-[18%] xl:top-[17%] 2xl:top-[10%] right-[5%] lg:right-[5%] xl:right-[5%] 2xl:right-[5%] z-10" />


                            {/* <img src="./images/home/d7.png" alt="" className="h-[155px] lg:h-[175px] 2xl:h-[190px] w-[135px] lg:w-[185px] 2xl:w-[205px] absolute top-[-75px] left-[45%] lg:left-[50%] 2xl:left-[50%] z-10" /> */}

                            <motion.img
                                src="./images/home/d7.svg"
                                alt=""
                                className="h-[165px] lg:h-[175px] xl:h-[290px] 2xl:h-[320px] w-[175px] lg:w-[185px] xl:-[320px] 2xl:w-[350px] absolute top-[0px] 2xl:top-[-75px] left-[47%] lg:left-[45%] xl:left-[45%] 2xl:left-[45%] z-10"
                                animate={{
                                    y: [0, -20, 0], // Wave motion: up, then down
                                }}
                                transition={{
                                    duration: 2.5, // Total time for one wave cycle
                                    repeat: Infinity, // Infinite animation
                                    ease: "easeInOut", // Smooth easing
                                }}
                            />

                            <img src="./images/home/s9.png" alt="" className="h-4 lg:h-6 w-12 xl:w-16 2xl:w-20  absolute bottom-[-50px] lg:bottom-[-75px] xl:bottom-[-85px] right-[9%] lg:right-[10%] xl:right-[8%] 2xl:right-[7%] z-10" />

                            
                            {/* <img src="./images/home/d8.gif" className="w-[68%]  lg:w-[68%] xl:w-[68%] 2xl:w-[70%] h-[130px] lg:h-[170px] xl:h-[250px] 2xl:h-[300px] absolute bottom-[-23%] lg:bottom-[-26%] xl:bottom-[-30%] 2xl:bottom-[-30%] right-[3%] lg:right-[7%] xl:right-[6%] 2xl:right-[6%] " alt="" /> 
                             */
                             }
                        
                         <motion.p
                                className="text-[#3753BC] font-semibold text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3.1rem] absolute bottom-[-10%] lg:bottom-[-15%] xl:bottom-[-15%] 2xl:bottom-[-12%] right-[3%] lg:right-[7%] xl:right-[8%] 2xl:right-[6%]"
                                animate={{
                                y: [0, -15, 0], // Wave motion: up, then down
                                }}
                                transition={{
                                duration: 2.0, // Total time for one wave cycle
                                repeat: Infinity, // Infinite animation
                                ease: "easeInOut", // Smooth easing
                                }}
                            >
                                WELCOME TO SUBHA DENTEL CARE
                        </motion.p>
                        

                        {/* <p className=" text-[#3753BC] font-semibold text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3.1rem] absolute bottom-[-10%] lg:bottom-[-15%] xl:bottom-[-15%] 2xl:bottom-[-10%] right-[3%] lg:right-[7%] xl:right-[8%] 2xl:right-[6%]">            
                            WELCOME TO SUBHA DENTEL CARE
                        </p>   */}

                        </div>
                        <img src="./images/home/d2.png" alt="" className="absolute bottom-4 left-0 w-full " />
                    </div>
                </div>
            </div>
        </>
    )
}