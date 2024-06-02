export default function Item({ itemsList }) {
    return(
        <div className="item">
            {itemsList.map(item => (
                <img key={item.id} src={item.img}/>
            ))}
            {itemsList.map(item => (
                <p key={item.id}>{item.price}</p>
            ))}
            {itemsList.map(item => (
                <h4 key={item.id}>{item.title}</h4>
            ))}
        </div>
    )
}