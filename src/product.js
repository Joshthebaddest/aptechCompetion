
const Product = (Products) => {
    const currency = '$';

    return ( 
        <div className="product-container">
            {Products.Products.map((item)=> (
                <div className="item" key={item.id}>
                    <div className="prd">
                        <img src={item.img} alt=""/><br/>
                        <span>{item.commonName}</span><br/>
                        <span><strong>{currency + item.price}</strong></span><br/>
                        <button className="myBtn">Add To Cart</button> 
                    </div>
                </div>
            ))}
        </div>
        
    );
}
 
export default Product;