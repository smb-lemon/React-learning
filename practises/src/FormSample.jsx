import { useState } from "react"

export default function FormSample(){
    let [formData, setFormData] = useState({
        fullName:"",
        userName:"",
        password:""
    })

    let handleInputChange= (event) => {
        
        setFormData  ((currData) => {
            return {...currData, [event.target.name]: event.target.value
            };
        })
        //console.log(event.target)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            userName:"",
            password:""
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            &nbsp;
            <input placeholder="enter full name" type="text" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
            <br />
            <br />
            <label htmlFor="userName">Username</label>
            &nbsp;
            <input placeholder="enter user name" type="text" 
            value={formData.userName} 
            onChange={handleInputChange}
            id="userName"
            name="userName"
            />

            <br />
            <br />
            <label htmlFor="password">Password</label>
            &nbsp;
            <input placeholder="enter password" type="password" 
            value={formData.password} 
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <button>Submit</button>
        </form>
    )
}