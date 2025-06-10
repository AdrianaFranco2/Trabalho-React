import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";  
import Tema from "./components/Tema";
import BoasVindas from "./components/boasVindas";
import ListaTarefas from "./components/ListaTarefas";  
import minhaImagem from "./assets/minhaImagem.png";
  
function Home() {  
  return (  
    <div style={{ textAlign: "center", marginTop: "40px" }}>  
    <img src={minhaImagem} alt="Flores" style={{ width: "400px" }} /> 
      <h1>Trabalho Individual React - Adriana Franco Marins</h1>  
      <nav>  
        <ul style={{ listStyle: "none", padding: 0 }}>  
          <li>  
            <Link to="/tema">Ir para Questão 1 - Tema Claro/Escuro</Link>  
          </li>  
          <li>  
            <Link to="/boasvindas">Ir para Questão 2 - Mensagem de Boas-Vindas</Link>  
          </li>  
          <li>  
            <Link to="/listatarefas">Ir para Questão 3 - Lista de Tarefas</Link>  
          </li>  
        </ul>  
      </nav>  
    </div>  
  );  
}  
  
function App() {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/tema" element={<Tema />} />  
        <Route path="/boasvindas" element={<BoasVindas />} />  
        <Route path="/listatarefas" element={<ListaTarefas />} />  
      </Routes>  
    </Router>  
  );  
}  
  
export default App;  