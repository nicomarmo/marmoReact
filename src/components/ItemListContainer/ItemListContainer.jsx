import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer(props) {
    const styles = {color: "red"};
    return (
        <h1 style={styles}>{props.greeting}</h1>,
        <ItemCount stock = {9}/>
    )
}


export default ItemListContainer;