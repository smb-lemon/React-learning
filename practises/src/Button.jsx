function printSomething(){
    console.log("Hello")
}

export default function Button(){
    return (
        <div>
            <button onKeyDown={printSomething}>Follow me</button>
        </div>
    )
}