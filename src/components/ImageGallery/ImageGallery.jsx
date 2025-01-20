import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, loading, loadMore, openModal }) => {
  return (
    <div>
      <ul className={s.gallerycontainer}>
        {images.map((image) => (
          <li className={s.galleryItem} key={image.id}>
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() =>
                openModal({
                  src: image.urls.regular,
                  alt: image.alt_description,
                })
              }
            />
          </li>
        ))}
      </ul>
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onLoadMore={loadMore} />}
    </div>
  );
};

export default ImageGallery;
