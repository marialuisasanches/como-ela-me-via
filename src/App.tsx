import { useState } from "react";
import { Landing } from "./pages/Landing/Landing";
import { Perguntas } from "./pages/Perguntas/Perguntas";
import { Processando } from "./pages/Processando/Processando";
import { Envelope } from "./pages/Envelope/Envelope";
import { Carta } from "./pages/Carta/Carta";

type Tela = "landing" | "perguntas" | "processando" | "envelope" | "carta";

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
    setTela("envelope"); // vai pro envelope antes da carta
  }

  function handleReiniciar() {
    setRespostas([]);
    setCarta("");
    setTela("landing");
  }

  return (
    <>
      {tela === "landing" && <Landing onStart={() => setTela("perguntas")} />}
      {tela === "perguntas" && <Perguntas onConcluir={handleConcluir} />}
      {tela === "processando" && (
        <Processando respostas={respostas} onConcluir={handleCarta} />
      )}
      {tela === "envelope" && <Envelope onAbrir={() => setTela("carta")} />}
      {tela === "carta" && (
        <Carta
          carta={carta}
          nome={respostas[0]}
          onReiniciar={handleReiniciar}
        />
      )}
    </>
  );
}

export default App;
