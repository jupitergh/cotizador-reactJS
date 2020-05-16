import React from 'react'
import propTypes from 'prop-types';
import {ContenedorHeader, TextoHeader} from '../styles/Header';


const Header = ({ titulo }) => {
     return (
          <ContenedorHeader>
               <TextoHeader>{titulo}</TextoHeader>
          </ContenedorHeader>

     );
}

Header.propTypes = {
     titulo: propTypes.string.isRequired
}

export default Header;