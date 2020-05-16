import React from 'react'
import propTypes from 'prop-types';
import {Mensaje, TextoCotizacion} from '../styles/Resultado';

const Resultado = ({ cotizacion }) => {


     return (
          (cotizacion === 0)
               ?
               <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
               :
               <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
     );
}

Resultado.propTypes = {
     cotizacion: propTypes.number.isRequired
}
export default Resultado;