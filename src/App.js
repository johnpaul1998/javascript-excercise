import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fibonacci from './pages/Fibonacci';
import Strings from './pages/Strings';
import PrimeNumbers from './pages/PrimeNumbers';
import MultiplicationTable from './pages/MultiplicationTable';
import SumOfNatural from './pages/SumOfNatural';
import GetTheLargest from './pages/GetTheLargest';
import CheckWithin100To500 from './pages/CheckWithin100To500';
import NumberRightTriangle from './pages/NumberRightTriangle';
import NumberTriangle from './pages/NumberTriangle';
import RightTriangle from './pages/RightTriangle';
import TotalOfDigits from './pages/TotalOfDigits';
import Triangle from './pages/Triangle';
import Vowels from './pages/Vowels';


function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/fibonacci' element={<Fibonacci />} />
        <Route path='/strings' element={<Strings />} />
        <Route path='/prime-numbers' element={<PrimeNumbers />} />
        <Route path='/multiplication-table' element={<MultiplicationTable />} />
        <Route path='/sum-of-natural' element={<SumOfNatural />} />
        <Route path='/get-the-largest' element={<GetTheLargest />} />
        <Route path='/check-within' element={<CheckWithin100To500 />} />
        <Route path='/number-right-triangle' element={<NumberRightTriangle />} />
        <Route path='/number-triangle' element={<NumberTriangle />} />
        <Route path='/right-triangle' element={<RightTriangle />} />
        <Route path='/triangle' element={<Triangle />} />
        <Route path='/total-digits' element={<TotalOfDigits />} />
        <Route path='/vowels' element={<Vowels />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
