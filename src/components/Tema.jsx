import React, { useState, useEffect } from "react";  
  
function Tema() {  
  const [claro, setClaro] = useState(true);  
  
  useEffect(() => {  
    document.body.style.backgroundColor = claro ? "#fff" : "#222";  
    document.body.style.color = claro ? "#222" : "#fff";  
    // Limpa ao desmontar  
    return () => {  
      document.body.style.backgroundColor = "";  
      document.body.style.color = "";  
    };  
  }, [claro]);  
  
  return (  
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>  
      <button onClick={() => setClaro(!claro)}>  
        {claro ? "Tema Escuro" : "Tema Claro"}  
      </button>  
    </div>  
  );  
}  
  
export default Tema;  