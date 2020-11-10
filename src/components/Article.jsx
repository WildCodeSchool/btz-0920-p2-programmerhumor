import { useEffect, useState } from 'react';
import Axios from 'axios';
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

const Article = () => {
  const [post, setPosts] = useState({});
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);

  useEffect(() => {
    Axios.get('https://www.reddit.com/r/programmerhumor.json').then((res) => {
      setPosts(
        res.data.data.children.map((child) => {
          return child.data;
        })
      );
    });
  }, []);

  return (
    <Col>
      <Card>
        <CardImg top width="100%" src={post.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardText>{post.author}</CardText>
          <Button
            className="mr-2 border border-white"
            onClick={() => setIsLike(!isLike)}
            style={{ backgroundColor: 'white' }}
          >
            {isLike ? (
              <FaHeart
                color="#FE4602
"
                size="1.5rem"
              />
            ) : (
              <FiHeart
                color="#585E68
"
                size="1.5rem"
              />
            )}
          </Button>
          <Button
            className="mr-2 border border-white button-outline:focus"
            onClick={() => {
              setIsTextArea(!isTextArea);
            }}
            style={{ backgroundColor: 'white' }}
          >
            <FaRegComment
              size="1.5rem"
              color="#585E68
"
            />
          </Button>
          <Button
            className="border border-white"
            style={{ backgroundColor: 'white' }}
          >
            <RiShareForwardLine
              size="1.5rem"
              color="#585E68
"
            />
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

export default Article;
