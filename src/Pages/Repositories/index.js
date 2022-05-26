import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useNavigate } from "react-router-dom";

export default function Repositories(){

    const navigate = useNavigate();
    const [ repositories, setRepositories ] = useState([]);
    const [ profile, setProfile ] = useState({});
    
    useEffect(()=> {
        let repositories = localStorage.getItem('repositories');
        let profile = localStorage.getItem('profile');     

        if(repositories != null){

            repositories = JSON.parse(repositories)
            setRepositories(repositories);

            profile = JSON.parse(profile)
            setProfile(profile);

            //localStorage.clear();
        }else{
            navigate('/');
        }
        
    },[]);

    let profileImage = (`https://avatars.githubusercontent.com/u/${profile.id}?v=4`);

    return(
        <S.Container>
            <S.Title>Perfil</S.Title>
            <S.SubTitle>{profile.login}</S.SubTitle>
            <S.List>
                <S.ListItem>
                    <S.ListItemCol>
                        <S.ListItemParts>
                            <S.Img src={profileImage} alt={`${profile.name} profile`}/>
                        </S.ListItemParts>
                        <S.ListItemParts>
                            {profile.name}
                        </S.ListItemParts>
                        <S.ListItemParts>
                            Bio: {profile.bio}.
                        </S.ListItemParts>
                    </S.ListItemCol>
                    <S.ListItemCol>
                        <S.ListItemParts>
                            Repositórios Públicos: {profile.public_repos} repositórios.
                        </S.ListItemParts>
                        <S.ListItemParts>
                            Seguidores:{profile.followers}.
                        </S.ListItemParts>
                        <S.ListItemParts>
                            Seguindo: {profile.following}.
                        </S.ListItemParts>
                    </S.ListItemCol>
                </S.ListItem>                   
            </S.List>

            <S.Title>{profile.public_repos >= 1 ? 'Repositórios':'Repositório'}</S.Title>
            
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