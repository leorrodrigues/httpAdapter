import React, { useEffect, useMemo, useState } from 'react'
import { apiAdapter } from '../../httpFetch'

interface UserProps {
    name: string
    surname: string
}

const Users: React.FC = () => {
    const api = useMemo(() => apiAdapter({driver: 'axios'}), [])
    const [users, setUsers] = useState<UserProps[]>([])
    const [apiStatus, setApiStatus] = useState<number | null>()
    const [apiStatusText, setApiStatusText] = useState('')

    useEffect(() => {
        const getUsers = async () => {
            const {data, status, statusText} = await api.get<UserProps[]>({
                url: 'http://localhost:3000/users',
                params: {nome: 'leo',idade:'2'}
            })
            setUsers(data)
            setApiStatus(status)
            setApiStatusText(statusText)
        }
        getUsers()
    }, [api])

    return (
        <>
            <p>Chamada para API Users</p>
            <p>Resultado: {apiStatus} - {apiStatusText}</p>
            
            <ul>
                {users.map(({name}) => (
                    <li key={name}>Nome do usuário: {name}</li>
                ))}
            </ul>
        </>
    )
}

export default Users