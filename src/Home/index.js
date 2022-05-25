import React, { useState } from "react";
import axios from "axios";
import * as S from './styled';


export default function Home() {

  const [usuario, setUsuario ]= useState("")

  function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response=> console.log(response));
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
