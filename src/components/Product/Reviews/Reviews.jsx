import React, { useState } from "react";
import styles from "./Reviews.module.css";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addReview, getReview } from "../../../features/reviewsSlice";

const Reviews = () => {
  const [input, setInput] = useState("");
  const token = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviewReducer.reviews);
  const product = useSelector((state) => state.productsReducer.product);

  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  function handleSubmit() {
    dispatch(addReview({ input, product }));
  }
  function hadleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className={styles.reviews_container}>
      <div className={styles.reviews_title_text}>
        Отзывы ({reviews.length}){" "}
      </div>
      <div className={styles.input}>
        {token ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className={styles.blockInptBtn}
            action=""
          >
            <input
              value={input}
              onChange={hadleChange}
              type="text"
              className={styles.inputComment}
              placeholder="Напишите здесь Ваш отзыв"
            />
            <LoadingButton
              type="submit"
              className={styles.sendBtn}
              size="small"
              disabled={!input}
              endIcon={<SendIcon />}
              // loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              <span>Отправить</span>
            </LoadingButton>
          </form>
        ) : (
          <div className={styles.pleaseSignin}>
            Пожалуйста войдите в свою учетную запись, чтобы можно было оставлять
            комментарии!
          </div>
        )}
      </div>
      <div>
        {reviews.map((review) => {
          return (
            <div className={styles.review_box}>
              <div className={styles.reviewer_name}>{review.userId.name}</div>
              <div className={styles.review_text}>{review.textReview}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
