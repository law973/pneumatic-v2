import './App.css';

import { GlobalStyle } from './global.styles';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Diet from './routes/diet/diet.component';
import Exercise from './routes/exercise/exercise.component';
import Recovery from './routes/recovery/recovery.component';
import Tools from './routes/tools/tools.component';
import Shop from './routes/shop/shop.component';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='diet' element={<Diet />} />
          <Route path='exercise' element={<Exercise />} />
          <Route path='recovery' element={<Recovery />} />
          <Route path='tools' element={<Tools />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;