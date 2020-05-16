import React, { useState } from 'react';
import propTypes from 'prop-types';
import *  as styles from '../styles/Formulario';
import { getYearDifference, calcularMarca, calcularPlan } from '../utils/helpers';

// import styles
const { Campo, Label, Select, InputRadio, Boton, Error } = styles;


const Formulario = ({ setResumen, setCargando }) => {

     // set states
     const [datos, setDatos] = useState({
          marca: '',
          año: '',
          plan: ''
     });
     const [error, setError] = useState(false);

     // destructure datos 
     const { marca, año, plan } = datos;

     // leer datos del formulario y guardarlos en el state
     const obtenerDatosForm = (e) => {
          setDatos({ ...datos, [e.target.name]: e.target.value });
     }

     // form submit
     const cotizarSeguro = e => {
          e.preventDefault();

          if (marca.trim() === '' || año.trim() === '' || plan.trim() === '') {
               return setError(true);
          }
          setError(false);

          let resultado = 2000; //base de precio
          // obtener diferencia de años
          const diferenciaAnios = getYearDifference(año);

          // cada año se reta el 3%
          resultado -= resultado * 0.03 * diferenciaAnios;

          // Americano 15
          // Asiatico 5
          // Europeo 30

          resultado *= calcularMarca(marca);

          // calcular plan

          resultado = parseFloat(calcularPlan(plan) * resultado).toFixed(2);

          setCargando(true);

          setTimeout(() => {
               setCargando(false);
               setResumen({
                    cotizacion: Number(resultado),
                    datos
               });
          }, 2000);

     }

     return (
          <form
               onSubmit={cotizarSeguro}
          >
               {error ? <Error>Todos los campos son obligatorios</Error> : null}
               <Campo>
                    <Label>Marca</Label>
                    <Select
                         name="marca"
                         value={marca}
                         onChange={obtenerDatosForm}
                    >
                         <option value="">-- Seleccione --</option>
                         <option value="americano">Americano</option>
                         <option value="europeo">Europeo</option>
                         <option value="asiatico">Asiático</option>
                    </Select>
               </Campo>

               <Campo>
                    <Label>Año</Label>
                    <Select
                         name="año"
                         value={año}
                         onChange={obtenerDatosForm}
                    >
                         <option value="">-- Seleccione --</option>
                         <option value="2021">2021</option>
                         <option value="2020">2020</option>
                         <option value="2019">2019</option>
                         <option value="2018">2018</option>
                         <option value="2017">2017</option>
                         <option value="2016">2016</option>
                         <option value="2015">2015</option>
                         <option value="2014">2014</option>
                         <option value="2013">2013</option>
                         <option value="2012">2012</option>
                    </Select>
               </Campo>
               <Campo>
                    <Label>Plan</Label>
                    <InputRadio
                         type="radio"
                         name="plan"
                         value="basico"
                         checked={plan === "basico"}
                         onChange={obtenerDatosForm}
                    />Básico
                    <InputRadio
                         type="radio"
                         name="plan"
                         value="completo"
                         checked={plan === "completo"}
                         onChange={obtenerDatosForm}

                    />Completo

               </Campo>
               <Boton type="submit">Cotizar</Boton>
          </form>
     );
}

Formulario.propTypes = {
     setResumen: propTypes.func.isRequired,
     setCargando: propTypes.func.isRequired
}

export default Formulario;