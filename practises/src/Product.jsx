import Price from "./Price.jsx";

function Product({ title, idx}) {
    let oldPrices = ["1990","2980", "20000","12000"];
    let newPrices = ["1500", "2500","15000", "10000"];
    return (
        <div className="Product" >
            <h4>{title}</h4>
            <p>Details</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            
        </div>
    );
}

export default Product;