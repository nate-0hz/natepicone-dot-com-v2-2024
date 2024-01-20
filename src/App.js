import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter >
   <Header className="sticky top-0" />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
