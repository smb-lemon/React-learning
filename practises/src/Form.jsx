function handleSubmit(event){
    event.preventDefault();
    console.log("form submitted");
}

export default function Form(){
    return (
        <form onClick={handleSubmit}>
            <input placeholder="write something" />
            <button >Submit</button>
        </form>
    )
}