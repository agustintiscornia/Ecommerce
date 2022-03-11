import './App.css';
import AppNavbar from './components/AppNavbar';
import ItemListContainer from './components/componentecontenedor/ItemListContainer';
import ItemCount from './components/ComponenteItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/componentecontenedor/ItemDetailContainer/ItemDetailContainer';



function App() {

  const titulo = 'Productos'
  return (
    <div>
      <AppNavbar/>

      <ItemCount/>

      <ItemListContainer titulo={titulo}/>
      
      <ItemDetailContainer/>

    </div>
  );
}

export default App;
