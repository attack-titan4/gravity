// ImageAverageColor.js

// ImageAverageColor.js

import React, { useRef, useEffect, useState } from 'react';

function getAverageColor(imageUrl, callback) {
  const image = new Image();
  image.crossOrigin = 'Anonymous';
  image.src = imageUrl;

  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);

    const imageData = ctx.getImageData(0, 0, image.width, image.height).data;

    let totalRed = 0;
    let totalGreen = 0;
    let totalBlue = 0;

    for (let i = 0; i < imageData.length; i += 4) {
      totalRed += imageData[i];
      totalGreen += imageData[i + 1];
      totalBlue += imageData[i + 2];
    }

    const numPixels = imageData.length / 4;
    const avgRed = Math.round(totalRed / numPixels);
    const avgGreen = Math.round(totalGreen / numPixels);
    const avgBlue = Math.round(totalBlue / numPixels);

    const avgColor = `rgb(${avgRed}, ${avgGreen}, ${avgBlue})`;
    callback(avgColor);
  };
}

const ImageAverageColor = ({ imageUrl }) => {
  const [averageColor, setAverageColor] = useState('#ffffff');

  useEffect(() => {
    getAverageColor(imageUrl, (avgColor) => {
      setAverageColor(avgColor);
    });
  }, [imageUrl]);

  const containerStyle = {
    backgroundColor: averageColor,
    backgroundImage: `linear-gradient(to left bottom, ${averageColor} 50%)`,
    height:'200px',
    marginRight: '200px'
  };

  return (
    <div className="image-container" style={containerStyle}>
      <img src={imageUrl} alt="Sample" />
    </div>
  );
};

export default ImageAverageColor;
