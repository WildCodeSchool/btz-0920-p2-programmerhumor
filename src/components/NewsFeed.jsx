import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
  UncontrolledPopover,
  PopoverHeader,
} from 'reactstrap';
import { FaHeart, FaRegComment, FaFacebook } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import {
  RiShareForwardLine,
  RiMessengerLine,
  RiTwitterLine,
  RiInstagramLine,
} from 'react-icons/ri';

const NewsFeed = ({ title, url, author, id, permalink, media, score }) => {
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);
  const [slugTitle, setSlugTitle] = useState(' ');
  const [msg, setMsg] = useState('');
  const [isVideo, setIsVideo] = useState(false);
  const [numberScore, setNumberScore] = useState(score + 1);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const counterLike = () => {
    setIsLike(!isLike);

    // eslint-disable-next-line no-unused-expressions
    isLike ? setNumberScore(numberScore - 1) : setNumberScore(numberScore + 1);
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
        <Card className="mt-3 mb-3 border border-dark">
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
            <CardTitle className="font-weight-bold">{title}</CardTitle>
            <CardText>by {author}</CardText>
            <CardText>Likes : {numberScore}</CardText>
            <CardText>{msg}</CardText>
            <Button
              className="border-white btn-outline-light"
              onClick={counterLike}
              style={{ backgroundColor: 'white' }}
            >
              {isLike ? (
                <FaHeart color="#fe4602 " size="1.5rem" />
              ) : (
                <FiHeart color="#585e68" size="1.5rem" />
              )}
            </Button>
            <Button
              className="border-white btn-outline-light mr-2"
              onClick={() => {
                setIsTextArea(!isTextArea);
              }}
              style={{ backgroundColor: 'white' }}
            >
              <FaRegComment size="1.5rem" color="#585e68" />
            </Button>
            <CopyToClipboard
              text={`https://www.reddit.com/r/programmerhumor/comments/${id}/${slugTitle}`}
              onCopy={() => setCopied(!copied)}
            >
              <Button
                id="PopoverLegacy"
                type="button"
                className="border-white btn-outline-light px-0 py-1"
                style={{ backgroundColor: 'white' }}
              >
                <RiShareForwardLine size="1.5rem" color="#585e68" />
              </Button>
            </CopyToClipboard>
            <UncontrolledPopover
              trigger="legacy"
              placement="bottom"
              target="PopoverLegacy"
            >
              <PopoverHeader>
                <a href="https://www.instagram.com" target="blank">
                  <RiInstagramLine size="2rem" className="iconShare mr-1" />
                </a>
                <a href="https://www.facebook.com" target="blank">
                  <FaFacebook size="1.8rem" className="iconShare mr-1" />
                </a>
                <a href="https://twitter.com/" target="blank">
                  <RiTwitterLine size="2rem" className="iconShare" />
                </a>
                <a href="https://www.messenger.com/login.php" target="blank">
                  <RiMessengerLine size="2rem" className="iconShare" />
                </a>
              </PopoverHeader>
            </UncontrolledPopover>

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
  score: PropTypes.number.isRequired,
};

export default NewsFeed;
