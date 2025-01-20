import s from "./ImageCard.module.css";
const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div>
      <img className={s.galleryImg} src={src} alt={alt} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
