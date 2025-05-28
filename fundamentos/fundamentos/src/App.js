// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import ReuseComponent from './components/ReuseComponent';
import Events from './components/Events';
import RenderFora from './components/RenderFora';

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
      <RenderFora />
    </div>
  );
}

export default App;
