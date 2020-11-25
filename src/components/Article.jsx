import { useEffect, useState } from 'react';
import Axios from 'axios';
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Button,
  Col,
  Spinner,
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
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Article.css';

const Article = () => {
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);
  const { id, title } = useParams();
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const counterLike = () => {
    setIsLike(!isLike);

    // eslint-disable-next-line no-unused-expressions
    isLike ? setScore(score - 1) : setScore(score + 1);
  };

  useEffect(() => {
    Axios.get(
      `https://www.reddit.com/r/programmerhumor/comments/${id}/${title}.json`
    ).then((res) => {
      setPosts(res.data[0].data.children[0].data);
      setScore(res.data[0].data.children[0].data.score);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <Col className="text-center">
        <Spinner className="spinner" size="xl" />
      </Col>
    );

  return (
    <Col sm="12" md={{ size: 10, offset: 1 }} className="article">
      <Card className="mt-3">
        <CardImg top width="100%" src={posts.url} alt="Card image cap" />
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold">{posts.title}</CardTitle>
          <CardText className="font-weight-bold">by {posts.author}</CardText>
          <CardText>{msg}</CardText>
          <CardText>Likes : {score}</CardText>
          <Button
            className="mr-2 border-white btn-outline-light"
            onClick={counterLike}
            style={{ backgroundColor: 'white' }}
          >
            {isLike ? (
              <FaHeart color="#FE4602" size="1.5rem" />
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
            <FaRegComment size="1.5rem" color="#585E68" />
          </Button>
          <CopyToClipboard
            text={`https://www.reddit.com/r/programmerhumor/comments/${id}/${title}`}
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
    </Col>
  );
};

export default Article;
