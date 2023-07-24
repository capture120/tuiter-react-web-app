import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";
// implies ./labs/index.js, ./labs/a3/hello-world.js, ./tuiter/index.js
import Labs from './labs';
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter';


function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
            <Route path="/"         element={<Navigate to="/labs"/>}/>
            <Route path="/labs/*"   element={<Labs/>}/>
            <Route path="/hello"    element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
