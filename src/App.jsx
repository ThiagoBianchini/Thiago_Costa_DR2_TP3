import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import your exercise components here
import Ex1 from './Exercicios/ex1.jsx';
import Ex2 from './Exercicios/ex2.jsx';
import Ex3 from './Exercicios/ex3.jsx';
import Ex4 from './Exercicios/ex4.jsx';
import Ex5 from './Exercicios/ex5.jsx';
import Ex6 from './Exercicios/ex6.jsx';
import Ex7 from './Exercicios/ex7.jsx';
import Ex8 from './Exercicios/ex8.jsx';
import Ex9 from './Exercicios/ex9.jsx';
import Ex10 from './Exercicios/ex10.jsx';
import Ex11 from './Exercicios/ex11.jsx';
import Ex13 from './Exercicios/ex13.jsx';

function App() {
  return (
    <Router>
      <main>
        <div className="container">
          <nav>
            <ul>
              <li><Link to="/ex1">Exercício 1</Link></li>
              <li><Link to="/ex2">Exercício 2</Link></li>
              <li><Link to="/ex3">Exercício 3</Link></li>
              <li><Link to="/ex4">Exercício 4</Link></li>
              <li><Link to="/ex5">Exercício 5</Link></li>
              <li><Link to="/ex6">Exercício 6</Link></li>
              <li><Link to="/ex7">Exercício 7</Link></li>
              <li><Link to="/ex8">Exercício 8</Link></li>
              <li><Link to="/ex9">Exercício 9</Link></li>
              <li><Link to="/ex10">Exercício 10</Link></li>
              <li><Link to="/ex11">Exercício 11</Link></li>
              <li><Link to="/ex13">Exercício 13</Link></li>
            </ul>
          </nav>
          <div className='exercicio'>
            <Routes>
              <Route path="/ex1" element={<Ex1 />} />
              <Route path="/ex2" element={<Ex2 />} />
              <Route path="/ex3" element={<Ex3 />} />
              <Route path="/ex4" element={<Ex4 />} />
              <Route path="/ex5" element={<Ex5 />} />
              <Route path="/ex6" element={<Ex6 />} />
              <Route path="/ex7" element={<Ex7 />} />
              <Route path="/ex8" element={<Ex8 />} />
              <Route path="/ex9" element={<Ex9 />} />
              <Route path="/ex10" element={<Ex10 />} />
              <Route path="/ex11" element={<Ex11 />} />
              <Route path="/ex13" element={<Ex13 />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
