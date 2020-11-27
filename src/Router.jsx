import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Article from './components/Article';
import Layout from './Layout';
import UserContext from './UserContext';

const Router = () => {
  const [user, setUser] = useState({
    U: '',
    e: '',
    p: '',
  });
  const [isConnected, setIsConnected] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const darkModeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          user,
          setUser,
          isConnected,
          setIsConnected,
          darkMode,
          setDarkMode,
          darkModeClick,
        }}
      >
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Article/:id/:title" component={Article} />
          </Switch>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
