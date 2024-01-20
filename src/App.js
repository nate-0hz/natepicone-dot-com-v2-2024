import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
   <BrowserRouter >
    <Header className="sticky top-0" />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
