import './App.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import { Grid } from './components/Grid/Grid';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Grid Dashboard</h1>
      </header>

      <main className="app__main">
        <Toolbar />
        <Grid />
      </main>
    </div>
  );
}

export default App;