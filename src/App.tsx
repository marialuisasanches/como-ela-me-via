import { useState } from "react";
import { Landing } from "./pages/Landing/Landing";

type Tela = "landing" | "perguntas" | "processando" | "carta";

function App() {
  const [tela, setTela] = useState<Tela>("landing");

  return (
    <>
      {tela === "landing" && <Landing onStart={() => setTela("perguntas")} />}
      {tela === "perguntas" && (
        <p style={{ padding: "2rem" }}>Perguntas — em breve</p>
      )}
      {tela === "processando" && (
        <p style={{ padding: "2rem" }}>Processando — em breve</p>
      )}
      {tela === "carta" && <p style={{ padding: "2rem" }}>Carta — em breve</p>}
    </>
  );
}

export default App;
