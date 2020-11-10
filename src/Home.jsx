import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, Row } from 'reactstrap';
import Header2 from './components/Header2';
import Filter2 from './components/Filter2';
import NewsFeed2 from './components/NewsFeed2';
import Footer from './components/Footer2';
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
      <Header2 />
      <Filter2 />
      <Container>
        <Row>
          {posts.map((post) => {
            return (
              <NewsFeed2
                title={post.title}
                selftext={post.selftext}
                author={post.author}
                url={post.url_overridden_by_dest}
              />
            );
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
