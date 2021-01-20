import Header from './components/Header/Header';
import NewsFeed from './components/NewsFeed';
import Filter from './components/Filter';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
