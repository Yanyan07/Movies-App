import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import MovieRouter from './router/MovieRouter';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MovieRouter />
      <Footer />
    </BrowserRouter>
  );
}
export default App;
