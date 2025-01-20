import Modal from "react-modal";
import s from "./ImageModal.module.css";
const ImageModal = ({ isOpen, onRequestClose, imageSrc, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={s.modal}
      ariaHideApp={false}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        content: {
          maxWidth: "600px",
          height: "600px",
          margin: "auto",
          borderRadius: "10px",
          padding: "0",
          overflow: "hidden",
        },
      }}
    >
      <img src={imageSrc} alt={alt} className={s.modalImage} />
    </Modal>
  );
};

export default ImageModal;
