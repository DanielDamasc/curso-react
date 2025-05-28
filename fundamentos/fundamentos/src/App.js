// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import ReuseComponent from './components/ReuseComponent';

// css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <ReuseComponent />
    </div>
  );
}

export default App;
