import React, { useEffect, useState } from 'react';

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

    return (
        <div className="main-container">
            <img src={ logo } alt="Tindev" className="logoImage" />
            <ul>
                {users.map(user => (
                    <li>
                        <img src={user.avatar} alt={user.name} />
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>

                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike"/>  
                            </button>
                            <button type="button">
                                <img src={like} alt="Like"/>
                            </button>
                        </div>
                    </li>    
                ))}
            </ul>
        </div>
        //<h1>{ match.params.id }</h1>
    )
}