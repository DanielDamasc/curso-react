// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import ReuseComponent from './components/ReuseComponent';
import Events from './components/Events';

// css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <ReuseComponent />
      <Events />
    </div>
  );
}

export default App;
