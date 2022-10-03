import { useRouter } from 'next/router'

export default function aboutIndex(){
    const router = useRouter()
    const id = Number(router.query.id)

    return (
        <div>
            <h1>pages/sub/[id].js</h1>
            <p>Parameter id : {id}</p>
            <a href='/'>home</a>
        </div>
    )
}