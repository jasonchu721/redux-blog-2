import React, {Fragment} from 'react';
import { Route, Switch, } from 'react-router-dom';
import FetchBlog from './components/FetchBlog';
import Home from './components/Home';
import Navbar from './components/NavBar';
import NoMatch from './components/NoMatch';
import { Container, } from 'semantic-ui-react';



const App = () => (
  <Fragment>
    <Container>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blogs' component={FetchBlog} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)
export default App;
