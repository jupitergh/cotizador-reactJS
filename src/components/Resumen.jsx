import React from 'react'
import propTypes from 'prop-types';
import { capitalizeString } from '../utils/helpers';
import {ContenedorResumen} from '../styles/Resumen';


const Resumen = ({ datos }) => {

     const { marca, año, plan } = datos;

     if (marca === '' || año === '' || plan === '')
          return null;

     return (
          <ContenedorResumen>
               <h2>Resumen de Cotización</h2>
               <ul>
                    <li>Marca: {capitalizeString(marca)}</li>
                    <li>Año: {año}</li>
                    <li>Plan: {capitalizeString(plan)}</li>
               </ul>

          </ContenedorResumen>

     );
}

Resumen.propTypes = {
     datos: propTypes.object.isRequired
}

export default Resumen;