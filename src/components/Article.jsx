import { useEffect, useState } from 'react';
import Axios from 'axios';
// import PropTypes from 'prop-types';
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
import { useParams } from 'react-router-dom';

const Article = () => {
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);
  const { id, title } = useParams();

  useEffect(() => {
    Axios.get(
      `https://www.reddit.com/r/programmerhumor/comments/${id}/${title}.json`
    ).then((res) => {
      setPosts(res.data[0].data.children[0].data);
    });
  }, []);

  return (
    <Col>
      <Card>
        <CardImg top width="100%" src={posts.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{posts.title}</CardTitle>
          <CardText>{posts.author}</CardText>
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
/* Article.propTypes = {
  id: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
}; */

export default Article;
