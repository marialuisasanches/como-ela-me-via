import { useState } from "react";
import { Landing } from "./pages/Landing/Landing";
import { Perguntas } from "./pages/Perguntas/Perguntas";

type Tela = "landing" | "perguntas" | "processando" | "carta";

function App() {
  const [tela, setTela] = useState<Tela>("landing");
  const [respostas, setRespostas] = useState<string[]>([]);

  function handleConcluir(r: string[]) {
    setRespostas(r);
    setTela("processando");
  }

  return (
    <>
      {tela === "landing" && <Landing onStart={() => setTela("perguntas")} />}
      {tela === "perguntas" && <Perguntas onConcluir={handleConcluir} />}
      {tela === "processando" && (
        <p style={{ padding: "2rem" }}>Processando — em breve</p>
      )}
      {tela === "carta" && <p style={{ padding: "2rem" }}>Carta — em breve</p>}
    </>
  );
}

export default App;
