import { useState } from "react";


function App(props) {

  const [usuario, setUsuario ]= useState("")
  return (

    function handleSearch(){
      console.log()

    }


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

export default App;
