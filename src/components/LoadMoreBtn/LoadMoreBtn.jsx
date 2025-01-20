import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoadMore }) => (
  <div>
    <button className={s.loadBtn} onClick={onLoadMore}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;
