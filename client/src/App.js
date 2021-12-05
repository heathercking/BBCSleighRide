import './App.css';
import BBCSleighRide from './containers/BBCSleighRide';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import JokeContainer from './containers/JokeContainer';
import QuizContainer from './containers/QuizContainer';
import ErrorPage from './components/ErrorPage';

function App() {
  return (

    <Router>

      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<BBCSleighRide />} />
        <Route path="/joke" element={<JokeContainer />} />
        <Route path="/quiz" element={<QuizContainer />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>


    </Router>
  );
}

export default App;
