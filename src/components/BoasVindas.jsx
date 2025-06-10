import React, { useState } from "react";  
  
function BoasVindas() {  
  const [mensagem, setMensagem] = useState("Bem-vindo(a) ao sistema!");  
  
    return (  
    <div  
      style={{  
        minHeight: "100vh", // ocupa a altura total da tela  
        display: "flex", // ativa o flexbox  
        flexDirection: "column", // organiza em coluna  
        alignItems: "center", // centraliza horizontalmente  
        justifyContent: "center" // centraliza verticalmente  
      }}  
    >  
      <h2 style={{ textAlign: "center" }}>{mensagem}</h2>  
      <button onClick={() => setMensagem("Você alterou a mensagem!")}>  
        Alterar Mensagem  
      </button>  
    </div>  
  );  
}  
  
export default BoasVindas;  