import { useNavigate } from "react-router-dom"

export default function Item({ ...props }) {
    const navigate = useNavigate();

    return(
        <div className="item" style={{ background: props.item.id === 6 ? '#3A3B35' : 'inherit' }}>
            <img onClick={() => navigate('/AboutCar')} src={props.item.img}/>
            <p>{props.item.price}</p>
            <h1>{props.item.title}</h1>
            <button className="rent">Rent</button>
            <button>{props.item.button}</button>
        </div>
    )
}