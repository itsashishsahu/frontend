import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Routes>
      <Header />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
