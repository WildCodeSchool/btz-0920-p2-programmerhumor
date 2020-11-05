import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import Header2 from './components/Header2';
import Filter2 from './components/Filter2';
import NewsFeed2 from './components/NewsFeed2';
import Footer2 from './components/Footer2';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://www.reddit.com/r/programmerhumor.json').then((res) => {
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
                author={post.author_fullname}
              />
            );
          })}
        </Row>
      </Container>
      <Footer2 />
    </div>
  );
};

export default App;
