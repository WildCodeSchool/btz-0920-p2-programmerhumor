/* eslint-disable no-plusplus */
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

  // useEffect(() => {
  //   Axios.get('https://www.reddit.com/r/programmerhumor.json').then((res) => {
  //     setPosts(
  //       res.data.data.children
  //         .sort((a, b) => a.score - b.score)
  //         .map((child) => {
  //           return child.data;
  //         })
  //     );
  //   });
  // }, []);
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
