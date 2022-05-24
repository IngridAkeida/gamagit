import { useState } from "react";


function App(props) {

  //const [usuario, setUsuario ]= useState("Guilherme")
  return (
    <>
      {/*<p>{usuario}</p>
      <h1>{props.title}</h1>*/}
      <input name='usuario' id='usuario' className='usuarioInput' placeholder='Usuário'/>
      
    </>
    
  );
}

export default App;


