import React, { useState } from "react";  
  
function ListaTarefas() {  
  const [tarefa, setTarefa] = useState("");  
  const [tarefas, setTarefas] = useState([]);  
  
  const adicionarTarefa = () => {  
    if (tarefa.trim() !== "") {  
      setTarefas([...tarefas, tarefa]);  
      setTarefa("");  
    }  
  };  
  
  return (  
    <div style={{  
      minHeight: "100vh",  
      display: "flex",  
      flexDirection: "column",  
      alignItems: "center",  
      justifyContent: "center"  
    }}>  
      <h1 style={{ textAlign: "center" }}>Listar Tarefas</h1>  
      <input  
        type="text"  
        value={tarefa}  
        onChange={e => setTarefa(e.target.value)}  
        placeholder="Digite uma tarefa"  
        style={{ marginBottom: "30px" }}  
      />  
      <button onClick={adicionarTarefa}>Adicionar</button>  
      <ul style={{  
        marginTop: "30px",  
        textAlign: "center",  
        padding: 0,  
        listStyle: "none"  
      }}>  
        {tarefas.map((t, i) => (  
          <li key={i}>{t}</li>  
        ))}  
      </ul>  
    </div>  
  );  
}  
  
export default ListaTarefas;  