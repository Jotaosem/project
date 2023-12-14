
import './App.css';
import Component from './Component';
import Navbar from './navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header"       >
       
       <Navbar/>
       <nav className='navbar'>
        <a href="/" className="logo"><h1>Administracion</h1></a>
        <ul className='nav ul'> 
            <li className='Menu link'><a href="/">Inicio </a></li>
            <li className='Menu link'><a href="/Empresas">Empresas </a></li>
            <li className='Menu link'><a href="/Empleados">Empleados </a></li>
        </ul>
    </nav>
       <Component/>
      </header>
      

    </div>
  );
}

export default App;
