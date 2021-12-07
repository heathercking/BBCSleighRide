import './App.css';
import BBCSleighRide from './containers/BBCSleighRide';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import JokeContainer from './containers/JokeContainer';
import QuizContainer from './containers/QuizContainer';
import MapContainer from './containers/MapContainer';
import ErrorPage from './components/ErrorPage';

function App() {
  return (

    <Router>

      <Header />

          <Routes>
            <Route path="/" element={<BBCSleighRide />} />
            <Route path="/map" element={<MapContainer />} />
            <Route path="/quiz" element={<QuizContainer />} />
            <Route path="/joke" element={<JokeContainer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

      <Footer />


    </Router>
  );
}

export default App;
