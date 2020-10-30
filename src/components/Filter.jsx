//  import React from 'react';
import { useState } from 'react';
import './Filter.css';

function Filter() {
  const [likeclicked, setLikeClicked] = useState(false);
  const [commentclicked, setCommentClicked] = useState(false);
  const [dateclicked, setDateClicked] = useState(false);
  return (
    <div className="filter">
      <button
        onClick={() => setLikeClicked(!likeclicked)}
        type="button"
        className={likeclicked ? 'most' : 'like'}
      >
        Like
      </button>
      <button
        onClick={() => setCommentClicked(!commentclicked)}
        type="button"
        className={commentclicked ? 'most' : 'comment'}
      >
        Comment
      </button>
      <button
        onClick={() => setDateClicked(!dateclicked)}
        type="button"
        className={dateclicked ? 'most' : 'date'}
      >
        Recent
      </button>
    </div>
  );
}

export default Filter;
