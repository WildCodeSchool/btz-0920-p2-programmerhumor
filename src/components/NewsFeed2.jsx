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

const NewsFeed2 = ({ title, selftext }) => {
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);

  return (
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://via.placeholder.com/318x180"
          alt="Card image cap"
        />
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
};

export default NewsFeed2;
