
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CountryPage from './components/countryPage/CountryPage';
import Home from './components/home/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:country" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
