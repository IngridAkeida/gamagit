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
            <S.List>
                {repositories.map((repository) => {
                        return(
                            <S.ListItem key={repository.id}>
                                <S.ListItemParts>{repository.name}</S.ListItemParts>
                                <S.ListItemParts>{repository.description}</S.ListItemParts>
                                <S.ListItemParts>{repository.language}</S.ListItemParts>
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