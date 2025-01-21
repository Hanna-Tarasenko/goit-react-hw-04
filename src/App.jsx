import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import { useEffect } from "react";
import { fetchImages } from "./services/Unsplash";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

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
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && images.length === 0 && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && images.length > 0 && (
        <>
          <ImageGallery images={images} openModal={openModal} />
          <LoadMoreBtn
            onLoadMore={loadMore}
            show={images.length > 0 && !loading}
          />
        </>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageSrc={selectedImage.src}
        alt={selectedImage.alt}
      />
    </div>
  );
};

export default App;
