import { useEffect } from 'react';

const ImagePreloader = ({ images }) => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, [images]);

  return null;
};

export default ImagePreloader;
