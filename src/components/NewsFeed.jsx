import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

const NewsFeed = ({ title, url, author, id, permalink, media }) => {
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);
  const [slugTitle, setSlugTitle] = useState(' ');
  const [msg, setMsg] = useState('');
  const [isVideo, setIsVideo] = useState(false);

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  useEffect(() => {
    const splited = permalink.split('/');
    setSlugTitle(splited[5]);
  }, []);

  useEffect(() => {
    if (media) setIsVideo(media.split('.').pop() === 'mp4');
  }, [media]);

  return (
    <Col sm="12" md={{ size: 8, offset: 2 }}>
      {url !== ' ' && (
        <Card className="mt-3">
          {!isVideo && (
            <Link to={`/Article/${id}/${slugTitle}`}>
              <CardImg top width="100%" src={url} alt="Card image cap" />
            </Link>
          )}
          {isVideo && (
            <video autoPlay="true" loop width="100%" src={media}>
              <track default kind="captions" />
            </video>
          )}
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>by {author}</CardText>
            <CardText>{msg}</CardText>
            <Button
              className="mr-2 border-white btn-outline-light"
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
              className="mr-2 border-white btn-outline-light"
              onClick={() => {
                setIsTextArea(!isTextArea);
              }}
              style={{ backgroundColor: 'white' }}
            >
              <FaRegComment size="1.5rem" color="#585e68" />
            </Button>
            <Button
              className="border-white btn-outline-light"
              style={{ backgroundColor: 'white' }}
            >
              <RiShareForwardLine size="1.5rem" color="#585e68" />
            </Button>
            {isTextArea && (
              <div className="interface-comment">
                <input
                  id="comment-text"
                  type="text"
                  value={msg}
                  onChange={handleChange}
                />
              </div>
            )}
          </CardBody>
        </Card>
      )}
    </Col>
  );
};

NewsFeed.defaultProps = {
  url: ' ',
  media: ' ',
};

NewsFeed.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  author: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired,
  media: PropTypes.string,
};

export default NewsFeed;
