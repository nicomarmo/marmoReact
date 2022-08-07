import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
const styles = {marginLeft: "200px", color: "red"};
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting='Hola!' style={styles} />   
    </div>
  );
}

export default App;
