import logo from './logo.svg';
import './App.css';
import Category from './Category';
import About from './About';
import Home from './Home';
import CategoryDescription from './CategoryDescription';
import Error from './Error';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <h1>SPA</h1>
        <nav>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О сайте</Link></li>
          <li><Link to="/cat">Категории</Link></li>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cat" component={Category} />
          <Route path="/cat/:catName" component={CategoryDescription} />
          <Route component={Error} />
        </Switch>
      </Router> 
   </>
  );
}

export default App;
