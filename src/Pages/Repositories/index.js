import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

export default function Repositories(){

    const navigate = useNavigate();
    const [ repositories, setRepositories ] = useState([]);


    useEffect(()=> {
        let repositories = localStorage.getItem('repositories');

        if(repositories != null){

            repositories = JSON.parse(repositories)
            setRepositories(repositories);
            localStorage.clear();
        }else{
            navigate('/');
        }
        
    },[]);
    return(
        <S.Container>
            <S.Title>Repositorios</S.Title>
            <S.SubTitle>Aqui ficará o nickName</S.SubTitle>

            <S.List>
                {repositories.map((repository) => {
                    let description = repository.description;
                    let language = repository.language;
                        return(
                            <S.ListItem key={repository.id}>
                                <S.ListItemCol>
                                    <S.ListItemParts>
                                        {repository.name}
                                    </S.ListItemParts>
                                    <S.ListItemParts>
                                        {language ? language :'Sem linguagem definida'}
                                    </S.ListItemParts>
                                </S.ListItemCol>
                                <S.ListItemCol>
                                    <S.ListItemParts>
                                        {description ? description :'Sem descrição'}
                                    </S.ListItemParts>
                                </S.ListItemCol>
                            </S.ListItem>
                        )
                    })
                }
            </S.List>
            <S.LinkHome to='/'> Voltar </S.LinkHome>
        </S.Container>
    )
}

//export default Repositories;