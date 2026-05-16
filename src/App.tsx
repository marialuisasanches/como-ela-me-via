import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Landing } from "./pages/Landing/Landing";
import { Perguntas } from "./pages/Perguntas/Perguntas";
import { Processando } from "./pages/Processando/Processando";
import { Carta } from "./pages/Carta/Carta";

type Tela = "landing" | "perguntas" | "processando" | "carta";

type CartaGerada = {
  carta: string;
  fraseFinal: string;
};

function App() {
  const [tela, setTela] = useState<Tela>("landing");
  const [respostas, setRespostas] = useState<string[]>([]);
  const [carta, setCarta] = useState("");
  const [fraseFinal, setFraseFinal] = useState("");

  function handleConcluir(r: string[]) {
    setRespostas(r);
    setTela("processando");
  }

  function handleCarta(resultado: CartaGerada) {
    setCarta(resultado.carta);
    setFraseFinal(resultado.fraseFinal);
    setTela("carta");
  }

  function handleReiniciar() {
    setRespostas([]);
    setCarta("");
    setFraseFinal("");
    setTela("landing");
  }

  return (
    <AnimatePresence mode="wait">
      {tela === "landing" && (
        <Landing key="landing" onStart={() => setTela("perguntas")} />
      )}
      {tela === "perguntas" && (
        <Perguntas key="perguntas" onConcluir={handleConcluir} />
      )}
      {tela === "processando" && (
        <Processando
          key="processando"
          respostas={respostas}
          onConcluir={handleCarta}
        />
      )}
      {tela === "carta" && (
        <Carta
          key="carta"
          carta={carta}
          fraseFinal={fraseFinal}
          nome={respostas[0]}
          onReiniciar={handleReiniciar}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
