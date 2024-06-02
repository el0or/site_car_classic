export default function Item({ ...props }) {
    return(
        <div className="item">
              <img src={props.item.img}/>
              <p>{props.item.price}</p>
              <h1>{props.item.title}</h1>
        </div>
    )
}