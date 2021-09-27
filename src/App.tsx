import './App.css';
import { MainComponentHooks } from './components/MainComponentHooks';
import MainComponetConnect from './components/MainComponetConnect';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PostDetail } from './components/PostDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        {/* <Route path="/" exact component={MainComponetConnect} /> */}
        <Route path="/" exact component={MainComponentHooks} />
        <Route path="/post/:id"  component={PostDetail}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
