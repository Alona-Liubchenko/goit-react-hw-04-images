import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => {
  const fullImage = () => onClick(image.largeImageURL);
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={fullImage}
        className={css.ImageGalleryItem_image}
      />
    </li>
  );
};
