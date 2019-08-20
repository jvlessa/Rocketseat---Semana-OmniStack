import React from 'react';

export default function Main({ match }){
    //Acessando ID do usuário vindo do routes.js
    return <h1>{ match.params.id }</h1>;
}