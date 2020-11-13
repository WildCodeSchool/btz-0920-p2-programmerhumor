import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Col, Spinner } from 'reactstrap';
import Filter2 from './components/Filter2';
import NewsFeed2 from './components/NewsFeed2';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get('https://www.reddit.com/r/programmerhumor.json').then((res) => {
      setPosts(
        res.data.data.children.map((child) => {
          return child.data;
        })
      );
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Filter2 />
      <Row>
        {loading ? (
          <Col className="text-center">
            <Spinner className="spinner" size="xl" />
          </Col>
        ) : (
          posts.map((post) => {
            return (
              <NewsFeed2
                id={post.id}
                title={post.title}
                selftext={post.selftext}
                author={post.author}
                url={post.url_overridden_by_dest}
                permalink={post.permalink}
                media={post.media?.reddit_video?.fallback_url}
              />
            );
          })
        )}
      </Row>
    </div>
  );
};

export default Home;
