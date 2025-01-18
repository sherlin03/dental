import React from 'react';

const VerticalText: React.FC = () => {
  const text = "ecivreS";

  return (
    <div className="flex flex-col  items-center justify-center ">
      {text.split("").map((letter, index) => (
        <span 
          key={index} 
          className="text-3xl  font-extrabold mb-[-16px] -rotate-90"
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default VerticalText;
