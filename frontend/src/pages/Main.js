import React from 'react';

import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }){
    return (
        <div className="main-container">
            <img src={ logo } alt="Tindev" className="logoImage" />
            <ul>
                
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/21973502?s=460&v=4" alt="" />
                    <footer>
                        <strong>João Vitor</strong>
                        <p>Testando tudo, 21</p>
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

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/21973502?s=460&v=4" alt="" />
                    <footer>
                        <strong>João Vitor</strong>
                        <p>Testando tudo, 21</p>
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

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/21973502?s=460&v=4" alt="" />
                    <footer>
                        <strong>João Vitor</strong>
                        <p>Testando tudo, 21</p>
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

            </ul>
        </div>
        //<h1>{ match.params.id }</h1>
    )
}