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
import { FaHeart, FaRegComment, FaShare } from 'react-icons/fa';
import './body.css';

const NewsFeed2 = ({ title, url, author }) => {
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);

  return (
    <Col sm="12" md={{ size: 8, offset: 2 }}>
      <Card className="mt-3">
        {url ? (
          <CardImg top width="100%" src={url} alt="Card image cap" />
        ) : null}
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>by {author}</CardText>
          <Button className="mr-2" onClick={() => setIsLike(!isLike)}>
            {isLike ? (
              <FaHeart color="#fe4602 " size="1.5rem" />
            ) : (
              <FaHeart color="white" size="1.5rem" />
            )}
          </Button>
          <Button
            className="mr-2"
            onClick={() => {
              setIsTextArea(!isTextArea);
            }}
          >
            <FaRegComment size="1.5rem" />
          </Button>
          <Button>
            <FaShare size="1.5rem" />
          </Button>
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
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default NewsFeed2;
