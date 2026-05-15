import { useState } from "react";
import { Landing } from "./pages/Landing/Landing";
import { Perguntas } from "./pages/Perguntas/Perguntas";
import { Processando } from "./pages/Processando/Processando";

type Tela = "landing" | "perguntas" | "processando" | "carta";

function App() {
  const [tela, setTela] = useState<Tela>("landing");
  const [respostas, setRespostas] = useState<string[]>([]);
  const [carta, setCarta] = useState("");

  function handleConcluir(r: string[]) {
    setRespostas(r);
    setTela("processando");
  }

  function handleCarta(c: string) {
    setCarta(c);
    setTela("carta");
  }

  return (
    <>
      {tela === "landing" && <Landing onStart={() => setTela("perguntas")} />}
      {tela === "perguntas" && <Perguntas onConcluir={handleConcluir} />}
      {tela === "processando" && (
        <Processando respostas={respostas} onConcluir={handleCarta} />
      )}
      {tela === "carta" && <p style={{ padding: "2rem" }}>Carta — em breve</p>}
    </>
  );
}

export default App;
