/* eslint-disable react/button-has-type */
import './NewsFeed.css';

function NewsFeed() {
  return (
    <div className="content-main">
      <div className="box-1">
        <div className="box-one-button">
          <button className="like">like</button>
          <button className="comment">comment</button>
          <button className="share">share</button>
        </div>
      </div>
    </div>
  );
}
export default NewsFeed;
