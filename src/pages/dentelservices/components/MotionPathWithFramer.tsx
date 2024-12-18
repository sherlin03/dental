import { motion } from 'framer-motion';

const MotionPathWithFramer = () => {
  return (
    <motion.svg
      width="166"
      height="188"
      viewBox="0 0 166 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity, // Infinite repeat
        repeatType: "loop",
      }}
    >
      <motion.path
        d="M10.0466 187.432L11.2367 175.946L0.694906 180.658L10.0466 187.432ZM55.4896 95.9638L55.8173 96.9086L55.4896 95.9638ZM159.5 23.4318L158.576 23.8144L159.5 23.4318..." // Initial path data
        fill="rgba(59, 79, 162, 1)"
        animate={{
          d: [
            "M10.0466 187.432L11.2367 175.946L0.694906 180.658L10.0466 187.432ZM55.4896 95.9638L55.8173 96.9086L55.4896 95.9638ZM159.5 23.4318L158.576 23.8144L159.5 23.4318...", // Initial path
            "M10 10 C 20 20, 40 20, 50 10 S 80 0, 100 10", // Final path (your desired end shape)
          ],
        }}
      />
    </motion.svg>
  );
};

export default MotionPathWithFramer;
