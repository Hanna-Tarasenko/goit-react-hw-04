import s from "./ImageCard.module.css";
const ImageCard = ({ src, alt }) => {
  return (
    <div>
      <img className={s.galleryImg} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
