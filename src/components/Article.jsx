import { useEffect, useState } from 'react';
import Axios from 'axios';
import { CardImg, CardText, CardBody, Button, Col, Spinner } from 'reactstrap';
import { FaHeart, FaRegComment } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

const Article = () => {
  const [posts, setPosts] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);
  const { id, title } = useParams();
  const [loading, setLoading] = useState(true);

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
    <jumbotron>
      <h1 className="display-3">{posts.title}</h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        deleniti accusamus quibusdam.
      </p>
      <CardImg top width="100%" src={posts.url} alt="Card image cap" />
      <CardBody>
        <CardText>{posts.author}</CardText>
        <Button
          className="mr-2 border border-white"
          onClick={() => setIsLike(!isLike)}
          style={{ backgroundColor: 'white' }}
        >
          {isLike ? (
            <FaHeart color="#FE4602" size="1.5rem" />
          ) : (
            <FiHeart color="#585E68" size="1.5rem" />
          )}
        </Button>
        <Button
          className="mr-2 border border-white button-outline:focus"
          onClick={() => {
            setIsTextArea(!isTextArea);
          }}
          style={{ backgroundColor: 'white' }}
        >
          <FaRegComment size="1.5rem" color="#585E68" />
        </Button>
        <Button
          className="border border-white"
          style={{ backgroundColor: 'white' }}
        >
          <RiShareForwardLine size="1.5rem" color="#585E68" />
        </Button>
        {isTextArea && (
          <div className="interface-comment">
            <textarea id="comment-text" />
          </div>
        )}
      </CardBody>
    </jumbotron>
  );
};

export default Article;
