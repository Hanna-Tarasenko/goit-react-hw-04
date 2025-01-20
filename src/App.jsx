import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import { useEffect } from "react";
import { fetchImages } from "./services/Unsplash";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedImages = await fetchImages(searchQuery, page);
        setImages((prevImages) => [...prevImages, ...fetchedImages]);
      } catch (err) {
        console.error("Error:", err);
        setError("Failed to fetch images.");
        toast.error("Failed to fetch images.");
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      setImages([]);
      setPage(1);
      getImages();
    }
  }, [searchQuery, page]);

  const loadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1></h1>
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && images.length === 0 ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ImageGallery
          images={images}
          loading={loading}
          loadMore={loadMore}
          openModal={openModal}
        />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageSrc={selectedImage.src}
        alt={selectedImage.alt}
      />
      <Toaster />
    </div>
  );
};

export default App;
