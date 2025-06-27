import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <Image 
          src="/images/generator-img/debros.png" 
          alt="DeBros Logo" 
          width={100} 
          height={100}
          priority
        />
        <div className="loading-spinner"></div>
        <p>Loading the Brotherhood...</p>
      </div>
    </div>
  );
};

export default Loading;