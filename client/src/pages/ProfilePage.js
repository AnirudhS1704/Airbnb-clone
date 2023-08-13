import {useContext, useState} from "react";
import {UserContext} from "../UserContext";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {

    const [redirect,setRedirect] = useState(null);
    const {ready,user,setUser} = useContext(UserContext);
    let {subpage} = useParams();
    const name = window.localStorage.getItem('name');
    const email = window.localStorage.getItem('email');
    if (subpage === undefined) {
      subpage = 'profile';
    }
  
    async function logout() {
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('name');
      await axios.post('/logout');
      setRedirect('/');
      setUser(null);
    }
    if (!name) {
      return <Navigate to={'/login'} />
    }

    return(
        <>
            <AccountNav/>
            <div>
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto mt-16">
          <h1 className="text-xl">Logged in as <i className="text-pink-500 font-bold text-2xl">{name} </i>({email})</h1>
          <button onClick={logout} className="w-full border rounded-3xl bg-pink-500 mt-2 text-white font-bold text-xl px-4 py-2">Logout</button>
        </div>
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
    </div>
        </>
    )
}