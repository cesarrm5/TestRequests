import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu';
import FuncionGet from './componentes/FuncionGet';
import FuncionPost from './componentes/FuncionPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  
  return (
    <div className="App">'

    <Router>
      <Switch>
         <Route exact path="/">
         <Menu/>  
        </Route>
        <Route path="/get">
          <FuncionGet/>
        </Route>
        <Route path="/post">
          <FuncionPost/>
        </Route>
        <Route path="/del">
          <FuncionPost/>
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
