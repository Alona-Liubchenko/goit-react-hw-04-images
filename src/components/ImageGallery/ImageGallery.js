import React, { Component } from 'react';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    image: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      console.log('Змінився запит пошуку');
      // console.log('prevProps.imageName:', prevProps.imageName);
      // console.log('this.proops.imageName:', this.props.imageName);
      fetch(
        `https://pixabay.com/api/?key=29510449-399a931f33aaf543423460729&q=${this.props.imageName}&image_type=photo`
      )
        .then(res => res.json())
        .then(image => this.setState({ image }));
    }
  }
  render() {
    return (
      <div> {this.state.image && <div>{this.state.image.tags}</div>}</div>

      // <ul className="gallery" images={this.props.imageName}>

      //   <ImageGalleryItem />
      // </ul>
    );
  }
}
