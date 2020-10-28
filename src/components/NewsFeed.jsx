import './NewsFeed.css';
import { Component } from 'react';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextAreaOpen: false,
    };
  }

  render() {
    const { isTextAreaOpen } = this.state;
    return (
      <div className="content-main">
        <div className="box-1">
          <div className="box-one-button">
            <button type="button" className="like">
              like
            </button>
            <button
              type="button"
              className="comment"
              onClick={() => {
                const newisTextAreaOpen = !isTextAreaOpen;
                this.setState({ isTextAreaOpen: newisTextAreaOpen });
              }}
            >
              comment
            </button>
            <button type="button" className="share">
              share
            </button>
            {isTextAreaOpen && (
              <div className="interface-comment">
                <textarea name="" id="comment-text" cols="30" rows="10" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default NewsFeed;
