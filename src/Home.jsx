import { useState } from "react";
import axios from "axios";


function Home(props) {

  const [usuario, setUsuario ]= useState("")

  function handleSearch(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response=> console.log(response));
  }
  
  return (
    <>
    
      {/*<p>{usuario}</p>
      <h1>{props.title}</h1>*/}
      
      <input 
        className='usuarioInput' 
        placeholder='Usuário'
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
      />

      <button type="button" onClick={handleSearch}>Pesquisar</button>
   
    </>
    
  );
}

export default Home;
