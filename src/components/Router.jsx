import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Article from './Article';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Article/:id/:title" component={Article} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
