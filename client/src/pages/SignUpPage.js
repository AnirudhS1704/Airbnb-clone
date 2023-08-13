import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function SignUpPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function SignUpUser(event) {
        event.preventDefault();
        
       if (name && email && password) {
        try {
            await axios.post('http://localhost:4000/signup', {
           name,
           email,
           password
          })
          .then(function (response) {
            console.log(response);
          });

          alert("Signed up succesfully! Please login now.");
        } catch (err) {
            console.log(err);
            alert("Sign up unsuccessful. Please check the credentials entered and try again later.");
        }
       }
       else{
        alert("Please do not leave any field empty!")
       }
    };

    return(
        <div className="mt-4">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>

            <form className="max-w-lg mx-auto" onSubmit={SignUpUser}>

            <input type={'text'} placeholder={'Your name'} 
            className="w-full p-2 border mx-2 my-4 rounded-3xl" 
                value={name} onChange={(event)=>setName(event.target.value)}/>

            <input type={'email'} placeholder={'Email'} 
                className="w-full p-2 border mx-2 my-4 rounded-3xl"
                value={email} onChange={(event)=>setEmail(event.target.value)}/>

            <input type={'password'} placeholder={'Password'} 
                className="w-full p-2 border mx-2 my-4 rounded-3xl"
                value={password} onChange={(event)=>setPassword(event.target.value)}/>

            <button type="submit" className='bg-pink-600 p-2 w-full text-white font-semibold'>Sign Up</button>

            <div className="p-4 text-center">
            Have an account?
                <Link to={"/login"} className="text-pink-600 font-bold"> Login</Link>
            </div>
            </form>
            
            
        </div>
        
       
    )
}