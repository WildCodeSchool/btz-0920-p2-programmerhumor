import './NewsFeed.css';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { useState } from 'react';

function NewsFeed() {
  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const [isLikeClick, setIsLikeClick] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="content-main">
      <div className="box-1">
        <div className="box-one-button">
          <button
            type="button"
            className={isLikeClick ? 'like' : 'notLike'}
            onClick={() => {
              setIsLikeClick(!isLikeClick);
              setCount(!isLikeClick ? count + 1 : count - 1);
            }}
          >
            <FiHeart />
          </button>
          <button
            type="button"
            className="comment"
            onClick={() => {
              setIsTextareaOpen(!isTextareaOpen);
            }}
          >
            <FiMessageCircle />
          </button>
          <button type="button" className="share">
            <RiShareForwardLine />
          </button>
          {/*
          <div>
            <p>{count} Like</p>
          </div>
          */}
          {isTextareaOpen && (
            <div className="interface-comment">
              <textarea name="" id="comment-text" cols="30" rows="10" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default NewsFeed;
