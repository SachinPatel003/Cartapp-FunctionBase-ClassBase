export default function Product(props) {
    
    return (
        <div className="card container my-1" style={{ width: "18rem" }}>
            <div className="list-group list-group-flush">
                <li className="list-group-item">{props.product.name}</li>
                <li className="list-group-item">$ {props.product.price} / Piece</li>
                <li className="list-group-item" id="amount">$ {props.product.price * props.product.quantity}</li>
                <div className="row my-2">
                <button type="button" className="col-2 btn btn-primary mx-1" onClick={() => {props.incrementQunatity(props.index)}}>+</button>
                <button type="button" id="qty" className="col-2 btn btn-success mx-2">{props.product.quantity}</button>
                <button type="button" className="col-2 btn btn-primary mx-1" onClick={() =>{props.decrememtnQunantity(props.index)}}>-</button>
                <button type="button" className="col-4 btn btn-primary mx-1" onClick={() =>{props.remove(props.index)}}>Remove</button>
                </div>
            </div>
        </div>
    )
}
