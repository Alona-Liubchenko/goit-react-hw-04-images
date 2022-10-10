import React from 'react';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li>
      <img src={image.webformatURL} alt="" />
    </li>
  );
};
