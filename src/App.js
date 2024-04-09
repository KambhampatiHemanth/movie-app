import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import MovieProvider from './components/customHooks/movieContext';
import TypeProvider from './components/customHooks/typeContext';
function App() {
  return (
    <div className="App">
        <Router>
          <TypeProvider>
            <MovieProvider>
            <Header />
              <Routes>
                  <Route index element={<Home />}></Route>
                  <Route path="movie/:id" element={<Movie />}></Route>
                  <Route path="movies/:movietype" element={<MovieList />}></Route>
                  <Route path="/*" element={<h1>Error Page</h1>}></Route>
              </Routes>
            </MovieProvider>
          </TypeProvider>
        </Router>
    </div>
  );
}


export default App;
