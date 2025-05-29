import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <div>
        <img src="/girassol.jpg" alt="Girassol" />
      </div>
      <div>
        <ManageData />
      </div>
      <div>
        <ListRender />
      </div>
    </div>
  );
}

export default App;
