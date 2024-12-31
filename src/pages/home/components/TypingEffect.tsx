import { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed }: { text: string; speed: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId); // Clear interval when done
      }
    }, speed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [text, speed]);

  return (
    <div className=" w-[650px] text-left " >
    <p className="  absolute bottom-[-25px] lg:bottom-[-50px] text-[12px] lg:text-[17px] xl:text-[26px] 2xl:text-3xl font-bold right-0 text-[rgba(55,83,188,1)] flex">
      {displayedText}
    </p>
    </div>
  );
};

export default TypingEffect;
