import { ToastContainer } from 'react-toastify';
import * as API from './services/api';

import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [largeImageUrl, setLargeImageUrl] = useState(null);
  const [total, setTotal] = useState(null);
  // state = {
  //   images: [],
  //   value: '',
  //   page: 1,
  //   isLoading: false,
  //   error: '',
  //   largeImageUrl: null,
  // };

  const hendleFormSubmit = value => {
    setValue(value);
    setPage(1);
    setImages([]);
    // useState({
    //   value,
    //   page: 1,
    //   images: [],
    // });
  };
  useEffect(() => {
    async function fetchImages() {
      setIsLoading(true);
      try {
        const items = await API.fetchGallery(value, page);
        setImages(prev => [...prev, ...items.hits]);
        setTotal(items.total);
        setError('');
        // this.setState(prev => ({
        //   total: items.total,
        //   images: [...prev.images, ...items.hits],
        //   error: '',
        // }));
      } catch {
        setError('Error. Try again later');
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, value]);
  // async componentDidUpdate(_, prevState) {
  //   // if (
  //   //   prevState.page !== this.state.page ||
  //   //   prevState.value !== this.state.value
  //   // ) {
  //     this.setState({ isLoading: true });
  //     try {
  //       const items = await API.fetchGallery(this.state.value, this.state.page);
  //       this.setState(prev => ({
  //         total: items.total,
  //         images: [...prev.images, ...items.hits],
  //         error: '',
  //       }));
  //     } catch {
  //       this.setState({ error: 'Error. Try again later' });
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //   }
  // }
  const loadMore = async () => {
    setPage(prevPage => prevPage + 1);
  };
  const callLargeImageUrl = images => {
    setLargeImageUrl(images);
  };
  const onCloseModal = () => {
    setLargeImageUrl(null);
  };

  // const { images } = this.state;
  return (
    <div className={css.App}>
      <Searchbar onSubmit={hendleFormSubmit} />
      <ImageGallery images={images} onClick={callLargeImageUrl} />
      {isLoading ? (
        <Loader />
      ) : (
        <Button items={images} total={total} onClick={loadMore} />
      )}
      {largeImageUrl && (
        <Modal largeImageUrl={largeImageUrl} onClose={onCloseModal} />
      )}
      <ToastContainer autoClose={2000} />
    </div>
  );
};
