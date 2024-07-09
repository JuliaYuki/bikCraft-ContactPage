import Contato from "./components/Contato/Contato.jsx";
import TituloContato from "./components/Contato/TituloContato/TituloContato.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Header logo="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" />
      <TituloContato />
      <Contato />
      <Footer />
    </div>
  );
}
