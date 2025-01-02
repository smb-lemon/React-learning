export default function Price({oldPrice, newPrice}){
    return (
        <div>
            <span>{oldPrice}</span>
            &nbsp;
            <span>{newPrice}</span>
        </div>
    );
}