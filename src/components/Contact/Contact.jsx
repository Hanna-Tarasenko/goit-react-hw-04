import s from "./Contact.module.css";
const Contact = ({ name, number, onDelete }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button className={s.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
