import './App.css';

import { GlobalStyle } from './global.styles';

import Home from './routes/home/home.component';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;