
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Layout from './components/split/Layout';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Layout/>
      </Route>
      <Route path="/user/login" exact>
        <Login/>
      </Route>
      <Route path="/user/register" exact>
        <Signup/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
