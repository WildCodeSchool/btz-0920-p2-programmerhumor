import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Article from './Article';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Article" component={Article} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
