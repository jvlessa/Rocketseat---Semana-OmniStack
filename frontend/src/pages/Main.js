import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

import api from '../services/api';

export default function Main({ match }){
    //Valor do estado e uma função para atualizar ele dentro do array
    const [users, setUsers] = useState([]);

    //Se passar a array vazia, essa função só será executada 1 vez dentro do componente
    //Desse modo, eu digo que toda vez que o ID da url for alterado, eu chamarei essa função novamente
    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: { 
                    user: match.params.id,
                }
            })

            setUsers(response.data);
        }

        loadUsers();
    }, [ match.params.id ])

    async function handleLike(id){
        await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id
            },
        })

        //Fazendo usuario nao aparecer mais logo apos o evento (temos que usar o setUsers, sobscrevendo a variavel)
        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id){
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: match.params.id
            },
        })

        //Fazendo usuario nao aparecer mais logo apos o evento (temos que usar o setUsers, sobscrevendo a variavel)
        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={ logo } alt="Tindev" className="logoImage" />       
            </Link>     
                { users.length > 0 ? (
                    <ul>
                        {users.map(user => (
                                <li key={user._id}>
                                    <img src={user.avatar} alt={user.name} />
                                    <footer>
                                        <strong>{user.name}</strong>
                                        <p>{user.bio}</p>
                                    </footer>
            
                                    <div className="buttons">
                                        {/*listener para disparar apenas quando o usuario clicar: "() =>" - caso contrário, ele irá executar no momento da renderização*/}
                                        <button type="button" onClick={() => handleDislike(user._id)}>
                                            <img src={dislike} alt="Dislike"/>  
                                        </button>
                                        <button type="button" onClick={() => handleLike(user._id)}>
                                            <img src={like} alt="Like"/>
                                        </button>
                                    </div>
                                </li>   
                        ))}
                    </ul>
                ) : (
                    <div className="empty">Acabou</div>
                ) }
        </div>
        //<h1>{ match.params.id }</h1>
    )
}