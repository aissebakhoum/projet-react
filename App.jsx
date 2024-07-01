import React from "react"

 import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';

 import Navbar from "./components/Navbar"
import Connexion from "./pages/Connexion"
 import Accueil from "./pages/Acceuil";
 import MonCompte from "./pages/MonCompte";
 import RendezVous from "./pages/RendezVous"

 
 import Inscription from "./pages/Inscription" 
 import Deconnexion from "./pages/Deconnexion" 




function App() {
  

  return (
    <>
    


 <Navbar/>
<Connexion />
<Router>
<Routes>
 
  <Route path="/" element={<Accueil />} />
  <Route path="/RendezVous" element={<RendezVous />} />
  <Route path="/MonCompte" element={<MonCompte />} />
  <Route path="/Connexion" element={<Connexion />} />
  <Route path="/Inscription" element={<Inscription />} />
  <Route path="/Deconnexion" element={<Deconnexion />} />



  
</Routes>
</Router>
    
    
    </>
  )
}

export default App;
