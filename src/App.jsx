import './App.css';
import Filter from './components/Filter';

const filtertabl = {
  like: 'Top Like',
  comment: 'Top Comment',
  recent: 'Plus Récent',
};

function App() {
  return (
    <div className="App">
      <h1>Projet Reddit Programmer Humor</h1>
      <Filter {...filtertabl} />
    </div>
  );
}

export default App;
