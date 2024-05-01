

function Card(){
    
    return(<>
        <div className="card">
            <img src="https://images.unsplash.com/photo-1711994872181-1e112e5e18e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="itemImage" srcset="" />
            <div className="title"><h2>First Item</h2></div>
            <div className="price">30$</div>
            <div className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quod exercitationem! Libero unde nemo reprehenderit.</div>
            <button className="add-to-cart">Add to Cart</button>
            </div>

    </>);
}

export default Card;