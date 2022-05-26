import React, { useState } from "react";
import axios from "axios";
import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import GitHub from "../../image/github.png"



export default function Home(props) {

  const navigate = useNavigate();
  const [usuario, setUsuario ]= useState("");
  const [erro, setErro ]= useState(false);


  function handleSearch(){

    axios.get(`https://api.github.com/users/${usuario}`)
      .then(profileResponse => {
        const profile = profileResponse.data;
        

        localStorage.setItem('profile', JSON.stringify(profile));
        setErro(false);
        navigate('/repositories');

      }).catch(err => {
          setErro(true);
    });

    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;

        localStorage.setItem('repositories', JSON.stringify(repositories));
        setErro(false);
        navigate('/repositories');

      }).catch(err => {
          setErro(true);
    });   
  }
  
  return (
    <S.HomeContainer>
      <S.Logo src={GitHub}/>
      <S.Title>Buscador de Perfil</S.Title>
      <S.Content>
    
        {/*<p>{usuario}</p>
        <h1>{props.title}</h1>*/}
        
        <S.Input 
          className='usuarioInput' 
          placeholder='Usuário'
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />

        <S.Button type="button" onClick={handleSearch}>Pesquisar
        </S.Button>
      </S.Content>

      {erro ? <S.ErrorMsg> Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}

 
      
    </S.HomeContainer>
    
  );
};
