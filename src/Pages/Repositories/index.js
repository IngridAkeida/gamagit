import React, { useEffect, useState } from "react";
import * as S from './styled';
import { Link } from "react-router-dom";

export default function Repositories(){

    const [ repositories, SetRepositories ] = useState([]);

    useEffect(()=> {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName)
        SetRepositories(repositoriesName);
        //localStorage.clear();
    },[]);
    return(
        <S.Container>
            <S.Title> Repositorios</S.Title>
            <S.List>
                {repositories.map(repository => {
                        return(
                            <S.ListItem>{repository}</S.ListItem>
                        )
                    })
                }
            </S.List>
            <S.LinkHome to='/'> Voltar </S.LinkHome>
        </S.Container>
    )
}

//export default Repositories;