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
import {
  FaHeart,
  FaRegComment,
  FaFacebook,
  FaFacebookMessenger,
} from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import './body.css';

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
            <CardText>Likes : {numberScore}</CardText>
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
              text={`https://www.reddit.com/r/programmerhumor/comments/${id}/${slugTitle}.json`}
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
              <PopoverHeader className="popUpShare">
                <a href="https://www.instagram.com" target="blank">
                  <AiFillInstagram size="2.5rem" className="iconShare" />
                </a>
                <a href="https://www.facebook.com" target="blank">
                  <FaFacebook size="2rem" className="iconShare" />
                </a>
                <a href="https://twitter.com/" target="blank">
                  <AiOutlineTwitter size="2.5rem" className="iconShare" />
                </a>
                <a href="https://www.messenger.com/login.php" target="blank">
                  <FaFacebookMessenger size="2rem" className="iconShare" />
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
