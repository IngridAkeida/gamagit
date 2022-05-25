import React, { useEffect } from "react";
import * as S from './styled';

export default function Repositories(){

    useEffect(()=> {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName)
        console.log(repositoriesName);
    },[]);
    return(
        <S.Container>
            <S.Title> Repositorios</S.Title>
            <S.List>
                <S.ListItem> Repositorio: Nome do Repositorio</S.ListItem>
                <S.ListItem> Repositorio: Nome do Repositorio</S.ListItem>
                <S.ListItem> Repositorio: Nome do Repositorio</S.ListItem>
            </S.List>
        </S.Container>
    )
}

//export default Repositories;