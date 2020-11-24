import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Col, Spinner } from 'reactstrap';
import Filter from './components/Filter';
import NewsFeed from './components/NewsFeed';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originPost, setOriginPost] = useState([]);

  useEffect(() => {
    Axios.get('https://www.reddit.com/r/programmerhumor.json').then((res) => {
      setPosts(
        res.data.data.children.map((child) => {
          return child.data;
        })
      );
      setOriginPost(
        res.data.data.children.map((child) => {
          return child.data;
        })
      );
      setLoading(false);
    });
  }, []);

  const liking = () => {
    setPosts([...posts.sort((a, b) => b.score - a.score)]);
  };

  const commenting = () => {
    setPosts([...posts.sort((a, b) => b.num_comments - a.num_comments)]);
  };

  const dating = () => {
    setPosts([...originPost]);
  };

  return (
    <div className="App">
      <Filter liking={liking} commenting={commenting} dating={dating} />
      <Row>
        {loading ? (
          <Col className="text-center">
            <Spinner className="spinner" size="xl" />
          </Col>
        ) : (
          posts.map((post) => {
            return (
              <NewsFeed
                id={post.id}
                title={post.title}
                selftext={post.selftext}
                author={post.author}
                url={post.url_overridden_by_dest}
                permalink={post.permalink}
                media={post.media?.reddit_video?.fallback_url}
                score={post.score}
                numComments={post.num_comments}
                key={post.id}
              />
            );
          })
        )}
      </Row>
    </div>
  );
};

export default Home;
