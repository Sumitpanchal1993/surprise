import { useState } from "react";
import "./App.css";
import Envolope from "./Components/Envolope";

function App() {
  const [lang, setLang] = useState("eng");

  return (
    <>
      <div className="myAppBase">
        <div>
          
          <Envolope lang={lang} />
        </div>
      </div>
    </>
  );
}

export default App;
