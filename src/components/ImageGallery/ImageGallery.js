import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem images={this.props.images} />
      </ul>
    );
  }
}
