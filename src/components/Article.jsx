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
} from 'reactstrap';
import { FaHeart, FaRegComment } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import './Article.css';

const Article = (score) => {
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);
  const { id, title } = useParams();
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState('');
  const [numberScore, setNumberScore] = useState(score + 1);

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const counterLike = () => {
    setIsLike(!isLike);

    // eslint-disable-next-line no-unused-expressions
    isLike ? setNumberScore(numberScore - 1) : setNumberScore(numberScore + 1);
  };

  useEffect(() => {
    Axios.get(
      `https://www.reddit.com/r/programmerhumor/comments/${id}/${title}.json`
    ).then((res) => {
      setPosts(res.data[0].data.children[0].data);
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
          <CardTitle className="font-weight-bold text-uppercase">
            {posts.title}
          </CardTitle>
          <CardText className="font-weight-bold">by {posts.author}</CardText>
          <CardText>{msg}</CardText>
          <CardText>Likes : {numberScore}</CardText>
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
          <Button
            className="border-white btn-outline-light"
            style={{ backgroundColor: 'white' }}
          >
            <RiShareForwardLine size="1.5rem" color="#585E68" />
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
    </Col>
  );
};

export default Article;
