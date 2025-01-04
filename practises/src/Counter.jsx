import { useState,useEffect } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);
    
    let doCount = () =>{
        setCount(count+1);
    }

    useEffect(function printSomething(){
        console.log("this is a side-effect");
        
    },[]);
    return (
        <div>
            <h1>State Examples</h1>
            <h3>Count = {count}</h3>
            <button onClick={doCount}>Increase Count</button>
        </div>
    )
}