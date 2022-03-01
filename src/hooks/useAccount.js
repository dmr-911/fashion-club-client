import { useState } from "react"

const useAccount = () =>{
    const [user, setUser] = useState({});

    const login = (email, password) =>{
        fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: email,
                password: password
            })
        })
            .then(res=>res.json())
            .then(json=>setUser(json))
    }

    return {login, user};
}

export default useAccount;