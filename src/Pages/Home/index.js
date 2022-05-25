import React, { useState } from "react";
import axios from "axios";
import * as S from './styled';
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const navigate = useNavigate();
  const [usuario, setUsuario ]= useState("");


  function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));

      navigate('/repositories')
    });
  }
  
  return (
    <S.HomeContainer>
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
    </S.HomeContainer>
    
  );
};
