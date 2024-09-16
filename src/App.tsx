import './App.css';

import { GlobalStyle } from './global.styles';

import { Routes, Route } from 'react-router-dom';

import PageTitle from './components/page-title/page-title.component';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Diet from './routes/diet/diet.component';
import Exercise from './routes/exercise/exercise.component';
import StrengthTraining from './routes/strength-training/strength-training.component';
import Cardio from './routes/cardio/cardio.component';
import Recovery from './routes/recovery/recovery.component';
import Tools from './routes/tools/tools.component';
import TDEECalculator from './routes/tdee-calculator/tdee-calculator.component';
import CalorieGoal from './routes/calorie-goal/calorie-goal.component';
import MacroSplit from './routes/macro-split/macro-split.component';
import PlateCombos from './routes/plate-combos/plate-combos.component';
import SleepCalculator from './routes/sleep-calculator/sleep-calculator.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          {/* Home Page Route */}
          <Route index element={
              <>
                <PageTitle title='Pneumatic - Fitness Information & Tools' />
                <Home />
              </>
            } 
          />
          {/* Diet Route */}
          <Route path='diet' element={
              <>
                <PageTitle title='Diet - Pneumatic' />
                <Diet />
              </>
            } 
          />
          {/* Exercise Route */}
          <Route path='exercise'>
            <Route index element={
                <>
                  <PageTitle title='Exercise - Pneumatic' />
                  <Exercise />
                </>
              } 
            />
            <Route path='strength-training' element={
                <>
                  <PageTitle title='Strength Training - Pneumatic' />
                  <StrengthTraining />
                </>
              } 
            />
            <Route path='cardio' element={
                <>
                  <PageTitle title='Cardio - Pneumatic' />
                  <Cardio />
                </>
              } 
            />
          </Route>
          {/* Recovery Route */}
          <Route path='recovery' element={
              <>
                <PageTitle title='Recovery - Pneumatic' />
                <Recovery />
              </>
            } 
          />
          {/* Tools Route */}
          <Route path='tools'>
            <Route index element={
                <>
                  <PageTitle title='Tools - Pneumatic' />
                  <Tools />
                </>
              } 
            />
            <Route path='tdee-calculator' element={
                <>
                  <PageTitle title='TDEE Calculator - Pneumatic' />
                  <TDEECalculator />
                </>
              } 
            />
            <Route path='calorie-goal' element={
                <>
                  <PageTitle title='Calorie Goal - Pneumatic' />
                  <CalorieGoal />
                </>
              } 
            />
            <Route path='macro-split' element={
                <>
                  <PageTitle title='Macro Split - Pneumatic' />
                  <MacroSplit />
                </>
              } 
            />
            <Route path='plate-combos' element={
                <>
                  <PageTitle title='Plate Combos - Pneumatic' />
                  <PlateCombos />
                </>
              } 
            />
            <Route path='sleep-calculator' element={
                <>
                  <PageTitle title='Sleep Calculator - Pneumatic' />
                  <SleepCalculator />
                </>
              } 
            />
          </Route>
          {/* Shop Route */}
          <Route path='shop' element={
              <>
                <PageTitle title='Shop - Pneumatic' />
                <Shop />
              </>
            } 
          />
          {/* Sign In Route */}
          <Route path='sign-in' element={
              <>
                <PageTitle title='Sign In - Pneumatic' />
                <SignIn />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;