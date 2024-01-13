import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter >
   <Header className="md:sticky md:top-0" />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
