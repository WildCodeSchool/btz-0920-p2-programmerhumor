import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from 'reactstrap';
import './body.css';

const NewsFeed2 = ({ title, selftext, url, author }) => {
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);

  return (
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Card>
        {url ? (
          <CardImg top width="100%" src={url} alt="Card image cap" />
        ) : null}
        <CardText>by {author}</CardText>

        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{selftext}</CardText>
          <Button
            color={isLike ? 'warning' : 'secondary'}
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
    </Col>
  );
};

NewsFeed2.propTypes = {
  title: PropTypes.string.isRequired,
  selftext: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default NewsFeed2;
