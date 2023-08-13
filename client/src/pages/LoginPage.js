import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {UserContext} from "../UserContext.js"
import axios from "axios";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirct] = useState("");
    const {setUser} = useContext(UserContext);

    async function handleLogin(event) {
        event.preventDefault();
       
        console.log(email, password);
        try{
        await axios.post('/login', {
           email,
           password,
          }, {withCredentials: false})
          .then(function (response) {
            console.log(response);
            
            
            if (response.data) {
                setUser(response.data);
                 window.localStorage.setItem('email', email);
                 window.localStorage.setItem('name', response.data.name);
                alert("Login successful!");
            setRedirct("/");
            }
            else{
                alert("User does not exist! Please signup.");
               setRedirct("/signup");
            }
            
          });
          
        } catch (err) {
            alert("Login unsuccessful. Please check the credentials entered and try again later.");
            console.log(err);
        }

        
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return(
        <div className="mt-4">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form className="max-w-lg mx-auto" onSubmit={handleLogin}>
            <input type={'email'} placeholder={'Email'} autoComplete="true"
                className="w-full p-2 border mx-2 my-4 rounded-3xl"
                value={email} onChange={event=>{setEmail(event.target.value)}}/>
            <input type={'password'} placeholder={'Password'} 
                className="w-full p-2 border mx-2 my-4 rounded-3xl"
                value={password} onChange={event=>{setPassword(event.target.value)}}/>
            <button   type="submit" className='bg-pink-600 p-2 w-full text-white font-semibold'>Login</button>
            <div className="p-4 text-center">
                Don't have an account?
                <Link to={"/signup"} className="text-pink-600 font-bold"> Sign Up</Link>
            </div>
            </form>
            
            
        </div>
        
       
    )
}