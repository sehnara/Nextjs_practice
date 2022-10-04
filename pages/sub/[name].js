import { useRouter } from 'next/router'

export default function NamePage(){
    const router = useRouter()
    const name = router.query.name

    return (
        <div>
            <h1>{name}</h1>
            <p>let me introduce myself</p>
            <a href='/'>Home</a>
        </div>
    )
}