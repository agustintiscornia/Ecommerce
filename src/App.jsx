import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ItemListContainer from './components/componentecontenedor/ItemListContainer';
import ItemCount from './components/ComponenteItemCount/ItemCount';


function App() {

  const titulo = 'Productos'
  return (
    <div>
      <AppNavbar/>

      <ItemCount/>

      <ItemListContainer titulo={titulo}/>
    </div>
  );
}

export default App;
