
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OverReview from './components/OverReview/OverReview';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
    
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/OverReview' element={<OverReview></OverReview>}></Route>
     </Routes>
    </div>
  );
}

export default App;
