import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from './components/ItemCount/ItemCount';

function App() {
const styles = {marginLeft: "200px", color: "red"};
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/contador' element={<ItemCount/>} />
            <Route path='/' element={<NavBar/>} />
            <Route path='/' element={<ItemListContainer greeting='Hola!' style={styles}/>} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
