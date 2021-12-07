import './App.css';
import react, {useState} from 'react';
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
import Chatbot from 'react-chatbot-kit';
import './css/Santa.css';
import config from './components/chatbot/config';
import MessageParser from './components/chatbot/MessageParser';
import ActionProvider from './components/chatbot/ActionProvider';





function App() {

  const [santaToggle, setSantaToggle] = useState(false)

  const showSanta = () => {
    console.log("hello")
    if (!santaToggle) {
      setSantaToggle(true)
    } else {
      setSantaToggle(false)
    }
  }


  return (
    <Router>

      <Header showSanta = {showSanta}/>

        {santaToggle ? <Chatbot config = {config} messageParser = {MessageParser} actionProvider = {ActionProvider} placeholderText="Message here"/> : null}

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
