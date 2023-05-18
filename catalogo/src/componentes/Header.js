import React from 'react'
import '../estilos/header.css';
import logo from '../assets/bitmap.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


export const Header = () => {
  return (
    <header className='header'>
        <div>
            <img id='logo' src={logo}></img>
            <h1 className='title'>ShopMo</h1>
        </div>
        <div>
            <h3>Categorias <FontAwesomeIcon icon={faCaretDown} /></h3>      
            <input placeholder='Buscar'></input>
        </div>
    </header>
  )
}
