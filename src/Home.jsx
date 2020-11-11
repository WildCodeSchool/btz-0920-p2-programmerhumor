import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row } from 'reactstrap';
import Filter2 from './components/Filter2';
import NewsFeed2 from './components/NewsFeed2';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

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
    <div className="App">
      <Filter2 />
      <Row>
        {posts.map((post) => {
          return (
            <NewsFeed2
              id={post.id}
              title={post.title}
              selftext={post.selftext}
              author={post.author}
              url={post.url_overridden_by_dest}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
