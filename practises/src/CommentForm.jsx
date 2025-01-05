import { useState } from "react"

export default function CommentForm(){
    let [commentForm, setCommentForm] = useState({
        username:"",
        remark: "",
        rating: 5  
    })

    let handleInputChange = (event) => {
        setCommentForm((currData)=>{
            return {
                ...currData, [event.target.name]: event.target.value
            }
        })
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(commentForm);
        
        setCommentForm({
        username:"",
        remark: "",
        rating: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input placeholder="username" 
            type="text" 
            id="username"
            onChange={handleInputChange}
            value={commentForm.username}
            name="username"
            />
            <br />
            <br />
            <label htmlFor="remark">Remark</label>
            <textarea 
             placeholder="add remarks" 
            type="text" 
            id="remark"
            onChange={handleInputChange}
            value={commentForm.remark}
            name="remark"
            ></textarea>
            <br />
            <br />
            <label htmlFor="rating">Rating</label>
            <input placeholder="rating" 
            type="number" min={1} max={5}
            id="rating"
            onChange={handleInputChange}
            value={commentForm.rating}
            name="rating"
            />
            <br />
            <br />
            <button>Add Comment</button>
        </form>
    )
}