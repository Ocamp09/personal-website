import './App.css';
import useLocalStorage from 'use-local-storage';
import Home from './pages/home';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark);
  const themes = ['light', 'dark', 'orchid', 'lemon-lime'];

  const switchTheme = () => {
    let currInd = 0;

    for (let i = 0; i < themes.length; i++) {
      if (themes[i] === theme) {
        currInd = i;
        break;
      }
    }

    if (currInd === themes.length - 1) {
      currInd = 0;
    } else {
      currInd++;
    }
    const newTheme = themes[currInd];
    setTheme(newTheme);
  }

  return (
    <div className="App deleted" data-theme={theme}>
      <button onClick={switchTheme}>
        Try a new theme
      </button>
      <Home/>
    </div>
  );
}

export default App;
