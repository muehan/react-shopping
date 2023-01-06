import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a demo react web shop
        </p>
      </header>
    </div>
  );
}

export default App;
