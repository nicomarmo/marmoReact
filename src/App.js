import NavBar from './components/NavBar';

function App() {
const styles = {marginLeft: "200px", color: "red"};
  return (
    <div>
        <NavBar />
        <h1 className='title'>Hola Amigo</h1>
        <br/>
        <p style={styles}>Aguante Chaca</p>
        <button onClick={()=> alert("me cliqueaste!")}>Cliqueame</button>
    </div>
  );
}

export default App;
