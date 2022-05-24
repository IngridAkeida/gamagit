import { useState } from "react";


function App(props) {

  const [usuario, setUsuario ]= useState("")
  return (
    <>
      {/*<p>{usuario}</p>
      <h1>{props.title}</h1>*/}
      <input 
        className='usuarioInput' 
        placeholder='Usuário' 
        onChange={ e => setUsuario(e.target.value)}
      />

      <button type="button">Pesquisar</button>
   
    </>
    
  );
}

export default App;
