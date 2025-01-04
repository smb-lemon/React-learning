import Product from "./Product.jsx";

function ProductTab({title, idx}){
    
    
    return (
        <>
        <Product title="Logitech Mouse" idx={0}/>
        <Product title="Wireless Keyboard" idx={1}/>
        <Product title="Asus Laptop" idx={2}/>
        <Product title="Ipad 12 inch 9 th gen" idx={3}/>
        </>
    )
}

export default ProductTab;