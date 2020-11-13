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
import { FaHeart, FaRegComment } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';

import './body.css';

const NewsFeed2 = ({ title, url, author, score }) => {
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);

  return (
    <Col sm="12" md={{ size: 8, offset: 2 }}>
      {url && (
        <Card className="mt-3">
          <CardImg top width="100%" src={url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>by {author}</CardText>
            <CardText>score: {score}</CardText>
            <Button
              className="mr-2 border border-white"
              onClick={() => setIsLike(!isLike)}
              style={{ backgroundColor: 'white' }}
            >
              {isLike ? (
                <FaHeart color="#fe4602 " size="1.5rem" />
              ) : (
                <FiHeart color="#585e68" size="1.5rem" />
              )}
            </Button>
            <Button
              className="mr-2 border border-white button-outline:focus"
              onClick={() => {
                setIsTextArea(!isTextArea);
              }}
              style={{ backgroundColor: 'white' }}
            >
              <FaRegComment size="1.5rem" color="#585e68" />
            </Button>
            <Button
              className="border border-white"
              style={{ backgroundColor: 'white' }}
            >
              <RiShareForwardLine size="1.5rem" color="#585e68" />
            </Button>
            {isTextArea && (
              <div className="interface-comment">
                <textarea id="comment-text" />
              </div>
            )}
          </CardBody>
        </Card>
      )}
    </Col>
  );
};

NewsFeed2.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default NewsFeed2;
