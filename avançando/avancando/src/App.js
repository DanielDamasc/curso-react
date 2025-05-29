import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <div>
        <img src="/girassol.jpg" alt="Girassol" />
      </div>
      <div>
        <ManageData />
      </div>
    </div>
  );
}

export default App;
