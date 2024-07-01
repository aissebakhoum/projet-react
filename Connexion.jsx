import React from 'react'
// import { SlSocialGoogle } from "react-icons/sl";
import { Link } from 'react-router-dom';


function Connexion () {
  return (
    <div className='flex items-center justify-center'>
      <div></div>
      <div className='flex flex-col items-center justify-center w-96'>
        <h2 className='font-bold'>Se connecter</h2>
        <input className='w-full p-5 mx-5 bg-gray-200 border-sky-100 rounded-lg' type="email" placeholder='Adresse-mail' />
        <input className='w-full p-5 mx-5 mt-4 bg-gray-200 border-sky-100 rounded-lg' type="password" placeholder='Mot de passe' />
        <Link to="/Dashboard">
            <button className="text-white font-bold bg-sky-600 p-4 w-96 rounded-lg mt-2">
                Se connecter
            </button>
            </Link>
            <Link to="/Connexion">
            <button className="text-white font-bold bg-black flex items-center justify-center p-4 w-96 rounded-lg mt-2">
                Continuer avec google
                {/* <SlSocialGoogle className='mx-6' /> */}
            </button>
            </Link>
            <div className='flex mt-10'>
              <Link><h6 className='mr-5'>Mot de passe oublié ?</h6></Link>
              <Link><h6 className='text-sky-700'>S'inscrire</h6></Link>
            </div>
      </div>
      <div></div>
    </div>
  )
}
export default Connexion;