import Header from './components/Header/Header';
import NewsFeed from './components/NewsFeed';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
    </div>
  );
}

export default App;
