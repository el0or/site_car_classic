import Item from "./Item";

export default function Items({ itemsList }) {
    return(
        <main>
            {itemsList.map( el => (
                <Item item={el} key={el.id} itemsList={itemsList}/>
            ))}
        </main>
    )
}