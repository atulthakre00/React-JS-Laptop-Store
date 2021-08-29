import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Navbar from './components/Navbar/Navbar';

// rgb(79, 58, 183)
// rgb(245, 245, 245)

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardContainer/>
    </div>
  );
}

export default App;