 import React from "react";
import Logo from '../assets/logo.png'; 
 import image1 from '../assets/image1.png'; 
 import { Link, Outlet } from "react-router-dom";

 function Navbar() {
    return (
        <div>
            
            <nav className="flex justify-between items-center w-full px-6 py-4 bg-gray-50">
                <div>
                    <a href="#">
                        <img src={Logo} alt="Logo" className="w-20" />
                    </a>
                </div>
                <div>
                    <ul className="flex items-center space-x-6">
                        <li>
                            <Link to="/">Accueil</Link></li>
                        <li>
                            <Link to="/RendezVous">Rendez-Vous</Link></li>
                        <li>
                            <Link to="/MonCompte">Mon Compte</Link></li>
                    </ul>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-sky-600 p-4 rounded-xl text-white mt-2">
                        Se connecter
                    </button>
                    <button className="bg-black p-4 rounded-xl text-white mt-2">
                        Déconnexion
                    </button>
                </div>
            </nav>
            <Outlet />

            {/* Section Contenu principal */}
            <div className="flex items-center px-10 py-20">
                <div className="w-1/2">
                    <h1 className="text-6xl  mb-8">Rendez-Vous</h1>
                    <p className="text-xl text-gray-700 mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil voluptatibus explicabo inventore magni
                        deserunt.
                    </p>
                    <Link to="/connexion">
                        <button className="bg-sky-600 text-white py-3 px-6 rounded-lg text-xl font-bold">
                            Commencer
                        </button>
                    </Link>
                </div>
                <div className="w-1/2 ml-10 relative">
                    <img src={image1} className="max-w-full rounded-xl shadow-xl" alt="Illustration" />
                    <div className="absolute top-0 right-0 bg-sky-500 w-32 h-32 rounded-xl transform rotate-45 translate-x-8 -translate-y-8"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
