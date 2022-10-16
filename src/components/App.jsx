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

  const hendleFormSubmit = value => {
    setValue(value);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (value.trim() !== '') {
      async function fetchImages() {
        try {
          setIsLoading(true);
          const items = await API.fetchGallery(value, page);
          setImages(prev => [...prev, ...items.hits]);
          setTotal(items.total);
          setError('');
        } catch {
          setError('Error. Try again later');
        } finally {
          setIsLoading(false);
        }
      }
      fetchImages();
    }
  }, [page, value]);

  const loadMore = async () => {
    setPage(prevPage => prevPage + 1);
  };

  const callLargeImageUrl = largeImageUrl => {
    setLargeImageUrl(largeImageUrl);
  };

  const onCloseModal = () => {
    setLargeImageUrl(null);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={hendleFormSubmit} />
      <ImageGallery images={images} onClick={callLargeImageUrl} />
      {error && <div>{error}</div>}
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
