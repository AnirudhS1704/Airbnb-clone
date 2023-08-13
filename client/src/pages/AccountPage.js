import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function AccountPage(){
    const user = window.localStorage.getItem('name');
    let {subpage} = useParams();
    const [redirect, setRedirect] = useState(false);
    if(!user && !redirect){
        return <Navigate to={"/login"}/>
    }

    function logout() {
        axios.post("/logout");
        setRedirect(true);
        setUser(null);
    }

    if (redirect) {
        return <Navigate to={'/'}/>
    }
   
    return(
        <div>
                <AccountNav/>
                {subpage === "profile" && 
                <div className="text-center max-w-lg mx-auto py-8 text-lg">
                    <h2>Logged in as 
                        <i className="text-pink-500 font-bold text-xl"> {user.name} </i>
                        
                         ({user.email})</h2>
                    <br/>
                    <button className="text-white bg-pink-500 font-bold w-full p-2 border rounded-3xl" onClick={logout
                    }>Logout</button>
                </div>
            }

            {subpage === "places" &&
                <div>
                   <PlacesPage/> 
                </div>
            }
            </div>
        
        
    )
}