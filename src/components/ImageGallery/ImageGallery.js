import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onChange }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onClick={onChange} />
    ))}
  </ul>
);
