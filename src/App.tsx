import './App.css';

import { GlobalStyle } from './global.styles';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Diet from './routes/diet/diet.component';
import Exercise from './routes/exercise/exercise.component';
import Recovery from './routes/recovery/recovery.component';
import Tools from './routes/tools/tools.component';
import Shop from './routes/shop/shop.component';
import Footer from './components/footer/footer.component';
import TDEECalculator from './routes/tdee-calculator/tdee-calculator.component';
import CalorieGoal from './routes/calorie-goal/calorie-goal.component';
import MacroSplit from './routes/macro-split/macro-split.component';
import PlateCombos from './routes/plate-combos/plate-combos.component';
import SleepCalculator from './routes/sleep-calculator/sleep-calculator.component';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Footer />}>
          <Route index element={<Home />} />
          <Route path='diet' element={<Diet />} />
          <Route path='exercise' element={<Exercise />} />
          <Route path='recovery' element={<Recovery />} />
          <Route path='tools' element={<Tools />} />
          <Route path='tools/tdee-calculator' element={<TDEECalculator />} />
          <Route path='tools/calorie-goal' element={<CalorieGoal />} />
          <Route path='tools/macro-split' element={<MacroSplit />} />
          <Route path='tools/plate-combos' element={<PlateCombos />} />
          <Route path='tools/sleep-calculator' element={<SleepCalculator />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;