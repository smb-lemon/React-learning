
import { useState } from "react";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let [count, setCount] = useState(0);
    let toggleClicked = () =>{
        setIsLiked(!isLiked);
        setCount((currCount)=>{
            return currCount+0.5;
        });
        setCount((currCount)=>{
           return currCount+0.5;
        });
        
        console.log("button was clicked");
    };
    let style = {color : "red"}
    return (
        <div>
            <p>Like Button Examples</p>
            <p>Click Count = {count}</p>
            <p onClick={toggleClicked} >
            {isLiked ? (
                <i className="fa-regular fa-comment"> </i>
            ):(
                <i className="fa-solid fa-comment" style={style}></i>
            )}
                
            </p>
        </div>
    );
}