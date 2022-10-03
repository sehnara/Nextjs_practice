import { useEffect, useState } from 'react'

export default function Fetch(){
    const [user, setUser] = useState({name: null})
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL+"api/hello")
        .then(type => type.json())
        .then(res => {
            setUser(res.name)
        })
    },[])

    return (
        <div>
            <h1>pages/sub/fetch.js</h1>
            <p>name : {user}</p>
            <a href='/'>home</a>
        </div>
    )
}