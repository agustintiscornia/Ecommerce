import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ItemListContainer from './components/componentecontenedor/ItemListContainer';

function App() {

  const titulo = 'Productos'
  return (
    <div>
      <AppNavbar/>

      <ItemListContainer titulo={titulo}/>
    </div>
  );
}

export default App;
