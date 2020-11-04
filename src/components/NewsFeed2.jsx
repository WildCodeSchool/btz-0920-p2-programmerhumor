import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import './body.css';

const NewsFeed2 = ({ title, body }) => {
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);

  return (
    <div className="w-50 h-50 p-3 mx-auto">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://via.placeholder.com/318x180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{body}</CardText>
          <Button
            className={isLike ? 'like' : 'not-like'}
            onClick={() => setIsLike(!isLike)}
          >
            Like
          </Button>
          <Button
            onClick={() => {
              setIsTextArea(!isTextArea);
            }}
          >
            Comment
          </Button>
          <Button>Share</Button>
          {isTextArea && (
            <div className="interface-comment">
              <textarea id="comment-text" />
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

NewsFeed2.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NewsFeed2;
