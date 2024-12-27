import { useEffect, useState } from 'react';

const TypingEffectHead = () => {
  const images = [
    { src: 'images/home/right/image1.png' },
    { src: 'images/home/right/image2.png' },
    { src: 'images/home/right/image3.png' },
    { src: 'images/home/right/image4.png' },
    { src: 'images/home/right/image5.png' },
    { src: 'images/home/right/image6.png' },
    { src: 'images/home/right/image7.png' },
    { src: 'images/home/right/image8.png' },
    { src: 'images/home/right/image9.png' },
    { src: 'images/home/right/image10.png' },
    { src: 'images/home/right/image11.png' },
  ];

  const [currentImages, setCurrentImages] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < images.length) {
        setCurrentImages((prev) => [...prev, images[index].src]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500); // Change 500 to adjust typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* First 5 Images */}
      <div className="mb-5">
        {currentImages.slice(0, 5).map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={src} alt={`Image ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>

      {/* Remaining Images */}
      <div className="pt-8">
        {currentImages.slice(5).map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={src} alt={`Image ${index + 6}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypingEffectHead;
