/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import Header2 from './components/Header2';
import Filter2 from './components/Filter2';
import NewsFeed2 from './components/NewsFeed2';
import Footer from './components/Footer2';
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

  useEffect(() => {
    axios.get('https://www.reddit.com/r/programmerhumor.json').then((res) => {
      setPosts(
        res.data.data.children
          .sort((a, b) => a.score - b.score)
          .map((child) => {
            return child.data;
          })
      );
    });
  }, []);
  // const tablscore = posts.map((post) => {
  //   return post.score;
  // });
  // function sortArray(array) {
  //   const tabl = [];
  //   const inc = [];
  //   for (let k = 0; k < array.length; k++) {
  //     inc.push(array[k]);
  //   }
  //   for (let j = 0; j < inc.length; j++) {
  //     let index = 0;
  //     let max = 0;
  //     for (let i = 0; i < array.length; i++) {
  //       if (array[i] > max) {
  //         max = array[i];
  //         index = i;
  //       }
  //     }
  //     tabl.push(max);
  //     array.splice(index, 1);
  //   }
  //   return tabl;
  // }
  // const sortedArray = sortArray(tablscore);
  // const totalTabl = posts.map((post) => {
  //   return [
  //     post.score,
  //     {
  //       title: post.title,
  //       author: post.author,
  //       url: post.url_overridden_by_dest,
  //       selftext: post.selftext,
  //       score: post.score,
  //     },
  //   ];
  // });
  // function sortPost(newArray, doubleTab) {
  //   const fintab = [];
  //   for (let i = 0; i < newArray.length; i++) {
  //     for (let j = 0; j < doubleTab.length; j++) {
  //       if (newArray[i] === doubleTab[j][0]) {
  //         fintab.push(doubleTab[j][1]);
  //       }
  //     }
  //   }
  //   return fintab;
  // }
  // const fintab = sortPost(sortedArray, totalTabl);
  // console.log(fintab);
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

export default App;
